import { Html } from '@react-email/html';
import { mailer } from './mailer';

export async function sendOrderConfirmEmail(recipients) {
  const subject = "Your order is confirmed"
  const html = () => {
    return <Html lang="en">
      Test
    </Html>
  }
  await mailer(recipients, subject, html)
}