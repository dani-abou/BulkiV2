import nodemailer from "nodemailer";

export async function mailer(recipients, subject, message) {
  let transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    auth: {
      user: process.env.MAILER_USER,
      pass: process.env.MAILER_PASS
    },
  });

  let email = await transporter.sendMail({
    from: process.env.MAILER_USER, // sender address
    to: recipients, // list of recipients
    subject: subject, // Subject line
    html: `<b>${message}</b>`, // html body
  });
}

export default async function sendMail(req, res) {
  const { message, subject, recipients } = JSON.parse(req.body)
  try {
    await mailer(recipients, subject, message)
    res.status(200).send({ message: 'Successfully sent email' })
  } catch (err) {
    res.status(501).send({ message: err.message })
  }
}