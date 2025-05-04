import Link from 'next/link';

const TermsPage = () => {
  return (
    <div className="md:mx-20">
      <h1 className="text-3xl font-bold text-center mb-8">
        ThinkGreenly Terms of Service
      </h1>
      <p className="text-gray-600 dark:text-gray-400 text-center mb-12">
        Last Updated: May 3, 2025
      </p>

      <div className="prose dark:prose-invert max-w-none">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p>
            Welcome to ThinkGreenly (&quot;we,&quot; &quot;our,&quot; or
            &quot;us&quot;). These Terms of Service (&quot;Terms&quot;) govern
            your access to and use of our sustainability idea hub platform,
            including any content, functionality, and services offered on or
            through thinkgreenly.com (the &quot;Site&quot;).
          </p>
          <p className="mt-4">
            By accessing or using the Site, you agree to be bound by these
            Terms. If you do not agree to these Terms, you may not access or use
            the Site.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">2. User Accounts</h2>
          <div className="pl-5">
            <h3 className="text-xl font-medium mb-2">2.1 Account Creation</h3>
            <p>
              To access certain features, you must register for an account. You
              agree to:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain and promptly update your account information</li>
              <li>Maintain the security of your credentials</li>
              <li>Accept all risks of unauthorized access</li>
            </ul>

            <h3 className="text-xl font-medium mt-6 mb-2">
              2.2 Account Responsibilities
            </h3>
            <p>
              You are responsible for all activities that occur under your
              account. You must notify us immediately of any breach of security
              or unauthorized use of your account.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            3. Content and Conduct
          </h2>
          <div className="pl-5">
            <h3 className="text-xl font-medium mb-2">
              3.1 User-Generated Content
            </h3>
            <p>
              Users may submit sustainability ideas, comments, and other content
              (&quot;User Content&quot;). You retain ownership of your User
              Content but grant ThinkGreenly a worldwide, non-exclusive,
              royalty-free license to use, display, and distribute your User
              Content.
            </p>

            <h3 className="text-xl font-medium mt-6 mb-2">
              3.2 Prohibited Content
            </h3>
            <p>You agree not to post User Content that:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>
                Violates any third-party rights, including intellectual property
                or privacy rights
              </li>
              <li>Contains false or misleading information</li>
              <li>Is unlawful, threatening, abusive, or harassing</li>
              <li>Contains viruses or malicious code</li>
              <li>
                Promotes illegal activities or harmful environmental practices
              </li>
            </ul>

            <h3 className="text-xl font-medium mt-6 mb-2">
              3.3 Content Moderation
            </h3>
            <p>
              We reserve the right to review, edit, or remove any User Content
              at our sole discretion. All sustainability ideas are subject to
              approval by our admin team before publication.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">4. Paid Content</h2>
          <div className="pl-5">
            <h3 className="text-xl font-medium mb-2">4.1 Premium Ideas</h3>
            <p>
              Users may designate certain ideas as premium (&quot;Paid
              Ideas&quot;). Other users must purchase access to view Paid Ideas.
              ThinkGreenly retains a 20% service fee from all purchases.
            </p>
            <h3 className="text-xl font-medium mt-6 mb-2">4.2 Refund Policy</h3>
            <p>
              All purchases of Paid Ideas are final. Refunds may be issued at
              our sole discretion in exceptional circumstances.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            5. Intellectual Property
          </h2>
          <p>
            The Site and its original content, features, and functionality are
            owned by ThinkGreenly and are protected by international copyright,
            trademark, and other intellectual property laws.
          </p>
          <p className="mt-4">
            You may not modify, reproduce, distribute, or create derivative
            works based on our proprietary content without express permission.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">6. Privacy</h2>
          <p>
            Your privacy is important to us. Our{' '}
            <Link href="/privacy" className="text-blue-500 hover:underline">
              Privacy Policy
            </Link>{' '}
            explains how we collect, use, and protect your personal information.
            By using the Site, you consent to our collection and use of personal
            data as outlined in the Privacy Policy.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">7. Disclaimers</h2>
          <p>
            THE SITE IS PROVIDED &quot;AS IS&quot; WITHOUT WARRANTIES OF ANY
            KIND. WE DO NOT GUARANTEE THAT:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>The Site will be uninterrupted or error-free</li>
            <li>User Content will be accurate or reliable</li>
            <li>Ideas posted will achieve their stated environmental impact</li>
            <li>The Site will meet your specific requirements</li>
          </ul>
          <p className="mt-4">
            Users implement sustainability ideas at their own risk. We recommend
            consulting with appropriate professionals before undertaking
            significant projects.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            8. Limitation of Liability
          </h2>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, THINKGREENLY SHALL NOT BE
            LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL
            DAMAGES RESULTING FROM:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Your use or inability to use the Site</li>
            <li>Unauthorized access to or alteration of your transmissions</li>
            <li>Any content posted on the Site</li>
            <li>Implementation of any ideas found on the Site</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">9. Modifications</h2>
          <p>
            We reserve the right to modify these Terms at any time. We will
            provide notice of significant changes through the Site or via email.
            Your continued use of the Site after changes constitutes acceptance
            of the new Terms.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">10. Termination</h2>
          <p>
            We may suspend or terminate your account and access to the Site at
            our sole discretion, without notice, for conduct that we believe
            violates these Terms or is harmful to other users or ThinkGreenly.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">11. Governing Law</h2>
          <p>
            These Terms shall be governed by the laws of the State of Delaware,
            USA, without regard to its conflict of law provisions.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            12. Contact Information
          </h2>
          <p>For questions about these Terms, please contact us at:</p>
          <p className="mt-2">
            ThinkGreenly LLC
            <br />
            123 Sustainability Way
            <br />
            Wilmington, DE 19801
            <br />
            legal@thinkgreenly.com
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsPage;
