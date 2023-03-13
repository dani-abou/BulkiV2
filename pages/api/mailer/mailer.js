// import nodemailer from "nodemailer";

// export async function mailer(recipients, subject, html) {
//   let transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 587,
//     secure: true, // use SSL
//     auth: {
//       user: process.env.NEXT_PUBLIC_MAILER_USER,
//       pass: process.env.NEXT_PUBLIC_MAILER_PASS
//     },
//   });

//   let email = await transporter.sendMail({
//     from: 'dani@bulki.us', // sender address
//     to: "dabouhamad@gmail.com", // list of recipients
//     subject: "Hello World!", // Subject line
//     html: "<b>My first Nodemailer email!</b>", // html body
//   });

//   return email.messageId
// }
