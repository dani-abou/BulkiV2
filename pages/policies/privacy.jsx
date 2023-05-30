import { PrimabullBody1 } from "../../src/common/styles"
import Policy from "../../src/page_components/policies"
import { Break, PolicyHeader } from "../../src/page_components/policies/utils"

export default function PrivacyPolicyPage({ headControls }) {
  return <Policy header='Privacy Policy'>

    <PolicyHeader>
      Privacy Policy for Primabull.co
      Effective Date: 5/26/2023
    </PolicyHeader>
    <PrimabullBody1>
      At Primabull.co, we are committed to protecting the privacy and security of your personal information. This Privacy Policy explains how we collect, use, and disclose the personal information we collect from our customers. By using our website or services, you consent to the practices described in this policy.
    </PrimabullBody1>


    <PolicyHeader>Information We Collect:</PolicyHeader>
    <PrimabullBody1>1.1 Personal Information: When you place an order or create an account on our website, we collect certain personal information from you, such as your name, email address, phone number, billing and shipping addresses.
      <Break />
      1.2 Order Information: We collect information related to your orders, including the items purchased, order history, payment information, and delivery details.
      <Break />
      1.3 Communication: We may collect information when you contact our customer support or participate in surveys, contests, or promotions.
    </PrimabullBody1>


    <PolicyHeader>
      Use of Personal Information:
    </PolicyHeader>
    <PrimabullBody1>
      2.1 Order Processing: We use your personal information to process and fulfill your orders, including communicating with you about the status of your order, delivery updates, and resolving any issues related to your purchase.
      <Break />
      2.2 Marketing Communications: With your consent, we may use your email address to send you promotional materials, such as special offers, discounts, new product launches, and other relevant information about our services. You can unsubscribe from these communications at any time by following the instructions provided in the email or by contacting us directly.
      <Break />
      2.3 Customer Support: We may use your personal information to provide customer support, respond to your inquiries, and address any concerns or complaints you may have.
      <Break />
      2.4 Improve and Personalize Services: We may use your information to analyze and improve our website, products, and services, including customizing your shopping experience based on your preferences and feedback.
    </PrimabullBody1>

    <PolicyHeader>
      Sharing of Personal Information:
    </PolicyHeader>
    <PrimabullBody1>
      3.1 Service Providers: We may share your personal information with trusted third-party service providers who assist us in operating our business, such as payment processors, delivery partners, and email marketing platforms. These service providers are authorized to use your personal information only as necessary to provide services to us.
      <Break />
      3.2 Legal Requirements: We may disclose your personal information if required by law, regulation, or legal process, or in response to a valid subpoena or court order.
    </PrimabullBody1>

    <PolicyHeader>
      Data Security:
    </PolicyHeader>
    <PrimabullBody1>
      We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, loss, misuse, or alteration. However, please note that no method of transmission over the Internet or electronic storage is 100% secure. Therefore, while we strive to protect your personal information, we cannot guarantee its absolute security.
    </PrimabullBody1>

    <PolicyHeader>
      Retention of Personal Information:
    </PolicyHeader>
    <PrimabullBody1>
      We retain your personal information for as long as necessary to fulfill the purposes for which it was collected, including any legal, accounting, or reporting requirements. When your personal information is no longer needed, we will securely delete or anonymize it.
    </PrimabullBody1>

    <PolicyHeader>
      Children{`'`}s Privacy:
    </PolicyHeader>
    <PrimabullBody1>
      Our services are not intended for children under the age of 16. We do not knowingly collect personal information from children. If we become aware that we have collected personal information from a child without parental consent, we will take steps to remove the information and terminate the child{`'`}s account.
    </PrimabullBody1>

    <PolicyHeader>
      Changes to this Privacy Policy:
    </PolicyHeader>
    <PrimabullBody1>
      We may update this Privacy Policy from time to time to reflect changes in our practices or legal obligations. We will notify you of any material changes by posting the updated policy on our website or by email. Your continued use of our services after the effective date of the revised policy constitutes your acceptance of the updated terms.
    </PrimabullBody1>

    <PolicyHeader>
      Contact Us:
    </PolicyHeader>
    <PrimabullBody1>
      If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us at info@primabull.co or 203-907-5559
    </PrimabullBody1>

  </Policy>
}
