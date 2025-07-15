import { Heading } from "@/components/ui/heading"
import { Separator } from "@/components/ui/separator"

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-8 prose dark:prose-invert max-w-none">
      <Heading
        title="Privacy Policy"
        description="How Zion.FM collects, uses, and protects your information"
        className="mb-8"
      />

      <div className="space-y-8">
        <section>
          <h2>1. Introduction</h2>
          <p>
            Zion.FM LLC ("Zion.FM", "we", "us", or "our") is committed to protecting your privacy. This Privacy
            Policy explains how we collect, use, disclose, and safeguard your information when you use our
            website, mobile applications, and services (collectively, the "Services").
          </p>
        </section>

        <Separator />

        <section>
          <h2>2. Information We Collect</h2>
          <h3>2.1 Personal Information</h3>
          <p>We may collect the following types of personal information:</p>
          <ul>
            <li>Name and contact information (email address, phone number)</li>
            <li>Account credentials</li>
            <li>Payment information (processed securely through third-party providers)</li>
            <li>User preferences and settings</li>
            <li>Profile information</li>
          </ul>

          <h3>2.2 Usage Information</h3>
          <p>We automatically collect certain information about your device and usage, including:</p>
          <ul>
            <li>Device information (type, operating system, browser)</li>
            <li>IP address and location data</li>
            <li>Usage patterns and preferences</li>
            <li>Log data and analytics</li>
          </ul>
        </section>

        <Separator />

        <section>
          <h2>3. How We Use Your Information</h2>
          <p>We use the collected information for the following purposes:</p>
          <ul>
            <li>Provide and maintain our Services</li>
            <li>Process your transactions</li>
            <li>Send you service-related communications</li>
            <li>Personalize your experience</li>
            <li>Improve our Services</li>
            <li>Comply with legal obligations</li>
            <li>Detect and prevent fraud</li>
          </ul>
        </section>

        <Separator />

        <section>
          <h2>4. Information Sharing</h2>
          <p>We may share your information with:</p>
          <ul>
            <li>Service providers and business partners</li>
            <li>Legal authorities when required by law</li>
            <li>Third parties with your consent</li>
          </ul>
          <p>
            We do not sell your personal information to third parties.
          </p>
        </section>

        <Separator />

        <section>
          <h2>5. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your information against
            unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over
            the Internet is 100% secure.
          </p>
        </section>

        <Separator />

        <section>
          <h2>6. Your Rights and Choices</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt-out of marketing communications</li>
            <li>Disable cookies and tracking technologies</li>
          </ul>
        </section>

        <Separator />

        <section>
          <h2>7. Children's Privacy</h2>
          <p>
            Our Services are not intended for children under 13 years of age. We do not knowingly collect
            personal information from children under 13. If you become aware that a child has provided us with
            personal information, please contact us.
          </p>
        </section>

        <Separator />

        <section>
          <h2>8. International Data Transfers</h2>
          <p>
            Your information may be transferred to and processed in countries other than your country of
            residence. We ensure appropriate safeguards are in place for such transfers.
          </p>
        </section>

        <Separator />

        <section>
          <h2>9. Cookies and Tracking Technologies</h2>
          <p>
            We use cookies and similar tracking technologies to collect and track information about your usage
            of our Services. You can control cookies through your browser settings.
          </p>
        </section>

        <Separator />

        <section>
          <h2>10. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any material changes by
            posting the updated Privacy Policy on our website and updating the "Last Updated" date.
          </p>
        </section>

        <Separator />

        <section>
          <h2>11. California Privacy Rights</h2>
          <p>
            California residents have additional rights under the California Consumer Privacy Act (CCPA),
            including the right to know what personal information is collected, used, shared, or sold.
          </p>
        </section>

        <Separator />

        <section>
          <h2>12. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy or our privacy practices, please contact us at:
          </p>
          <p>
            Zion.FM LLC<br />
            30 N Gould St<br />
            STE R<br />
            Sheridan, WY 82801<br />
            Email: privacy@zion.fm
          </p>
        </section>

        <Separator />

        <section>
          <p className="text-sm text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </section>
      </div>
    </div>
  )
} 