import mailchimp from "@mailchimp/mailchimp_marketing";

mailchimp.setConfig({
  apiKey: process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY,
  server: process.env.NEXT_PUBLIC_MAILCHIMP_SERVER_PREFIX
})

const listId = process.env.NEXT_PUBLIC_MAILCHIMP_AUDIENCE


export default async function addToNewsletter(req, res) {
  const { email, fName, lName } = JSON.parse(req.body)

  if (!email || !email.length) {
    return res.status(400).json({ error: 'Email is required' })
  }
  try {
    const response = await mailchimp.lists.setListMember(listId,
      email,
      {
        email_address: email,
        status_if_new: "subscribed",
        merge_fields: {
          FNAME: fName,
          LNAME: lName
        }
      });

    return res.status(500).json('Success')

  } catch (error) {
    return res.status(500).json({ error })
  }
}
