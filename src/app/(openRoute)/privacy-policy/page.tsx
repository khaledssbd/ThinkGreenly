import Link from 'next/link';

const PrivacyPolicyPage = () => {
  return (
    <div>
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-12">
        Privacy Policy
      </h1>
      <p className="text-lg dark:text-white text-justify py-4">
        Welcome to{' '}
        <Link href="/" className="font-semibold text-green-500 hover:underline">
          ThinkGreenly
        </Link>
        . We are committed to protecting your personal information while
        fostering a community for sustainable innovation. This Privacy Policy
        explains how we collect, use, and safeguard your data when you use our
        sustainability idea hub.
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="text-xl md:text-2xl font-semibold py-4">
            1. Information We Collect
          </h2>
          <p className="dark:text-white text-justify">
            We collect information to provide and improve our services:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2 dark:text-white">
            <li>
              <strong>Account Information:</strong> Name, email, profile details
              when you register
            </li>
            <li>
              <strong>Content:</strong> Sustainability ideas, comments, and
              messages you submit
            </li>
            <li>
              <strong>Payment Data:</strong> For premium content transactions
              (processed securely via our payment partners)
            </li>
            <li>
              <strong>Usage Data:</strong> How you interact with ideas and
              features
            </li>
            <li>
              <strong>Cookies:</strong> To enhance your experience and analyze
              site traffic
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold py-4">
            2. How We Use Your Information
          </h2>
          <p className="dark:text-white text-justify">
            Your data helps us operate and improve ThinkGreenly:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2 dark:text-white">
            <li>Facilitate idea sharing and community discussions</li>
            <li>Process transactions for premium content</li>
            <li>Moderate content to maintain quality standards</li>
            <li>Personalize your experience and recommendations</li>
            <li>Analyze platform usage to improve our services</li>
            <li>Communicate important updates and opportunities</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold py-4">
            3. Data Sharing and Disclosure
          </h2>
          <p className="dark:text-white text-justify">
            We respect your privacy and only share data when necessary:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2 dark:text-white">
            <li>
              <strong>Public Content:</strong> Your sustainability ideas and
              comments are visible to the community as intended
            </li>
            <li>
              <strong>Service Providers:</strong> Trusted partners who help
              operate our platform (under strict confidentiality)
            </li>
            <li>
              <strong>Legal Compliance:</strong> When required by law or to
              protect rights and safety
            </li>
            <li>
              <strong>Business Transfers:</strong> In case of merger,
              acquisition, or asset sale
            </li>
          </ul>
          <p className="dark:text-white text-justify mt-4">
            We never sell your personal information to third-party advertisers.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold py-4">
            4. Data Security
          </h2>
          <p className="dark:text-white text-justify">
            We implement robust security measures to protect your information:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2 dark:text-white">
            <li>Encryption of sensitive data in transit and at rest</li>
            <li>Regular security audits and vulnerability testing</li>
            <li>Access controls and authentication protocols</li>
            <li>Secure payment processing</li>
          </ul>
          <p className="dark:text-white text-justify mt-4">
            While we strive to protect your data, no system is 100% secure. We
            encourage you to use strong passwords and keep your login
            credentials confidential.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold py-4">
            5. Your Privacy Rights
          </h2>
          <p className="dark:text-white text-justify">
            You have control over your personal information:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2 dark:text-white">
            <li>
              <strong>Access & Correction:</strong> View and update your account
              information
            </li>
            <li>
              <strong>Deletion:</strong> Request removal of personal data
              (subject to legal requirements)
            </li>
            <li>
              <strong>Opt-Out:</strong> Unsubscribe from non-essential
              communications
            </li>
            <li>
              <strong>Data Portability:</strong> Request a copy of your data in
              machine-readable format
            </li>
            <li>
              <strong>Cookie Preferences:</strong> Manage tracking technologies
              through browser settings
            </li>
          </ul>
          <p className="dark:text-white text-justify mt-4">
            To exercise these rights, please{' '}
            <Link
              href="/contact"
              className="text-blue-500 font-semibold hover:underline"
            >
              contact us
            </Link>
            . We may need to verify your identity before processing requests.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold py-4">
            6. Children&apos;s Privacy
          </h2>
          <p className="dark:text-white text-justify">
            ThinkGreenly is not intended for children under 13. We do not
            knowingly collect personal information from children under this age.
            If we become aware of such collection, we will take steps to delete
            the information.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold py-4">
            7. International Data Transfers
          </h2>
          <p className="dark:text-white text-justify">
            As a global platform, your information may be processed outside your
            country of residence. We ensure appropriate safeguards are in place
            to protect your data in accordance with this policy and applicable
            laws.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold py-4">
            8. Policy Updates
          </h2>
          <p className="dark:text-white text-justify">
            We may update this policy to reflect changes in our practices or
            legal requirements. Significant changes will be notified through our
            platform or via email. Your continued use after updates constitutes
            acceptance of the revised policy.
          </p>
          <p className="dark:text-white text-justify mt-4">
            <strong>Last Updated:</strong> June 15, 2023
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold py-4">
            9. Contact Us
          </h2>
          <p className="dark:text-white text-justify">
            For privacy-related questions or concerns:
          </p>
          <p className="dark:text-white mt-2">
            ThinkGreenly LLC
            <br />
            Attn: Privacy Officer
            <br />
            123 Sustainability Way
            <br />
            Wilmington, DE 19801
            <br />
            support@thinkgreenly.com
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
