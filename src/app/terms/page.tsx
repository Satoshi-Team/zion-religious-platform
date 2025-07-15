import React from 'react'
import { Heading } from "@/components/ui/heading"
import { Separator } from "@/components/ui/separator"

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-8 prose dark:prose-invert max-w-none">
      <Heading
        title="Terms of Service"
        description="Please read these terms carefully before using Zion.FM"
        className="mb-8"
      />

      <div className="space-y-8">
        <section>
          <h2>1. Agreement to Terms</h2>
          <p>
            These Terms of Service ("Terms") constitute a legally binding agreement between you and Zion.FM LLC
            ("Zion.FM", "we", "us", or "our"), a Wyoming Limited Liability Company. By accessing or using our website,
            mobile applications, or any other services provided by Zion.FM (collectively, the "Services"), you agree
            to be bound by these Terms.
          </p>
        </section>

        <Separator />

        <section>
          <h2>2. Description of Services</h2>
          <p>
            Zion.FM provides a platform for accessing and studying religious and spiritual content, including but not
            limited to sacred texts, educational resources, audio content, and related materials. Our Services may
            include:
          </p>
          <ul>
            <li>Access to religious texts and educational materials</li>
            <li>Audio streaming of religious and spiritual content</li>
            <li>Interactive study tools and resources</li>
            <li>Community features and discussion forums</li>
            <li>Mobile applications and web-based services</li>
          </ul>
        </section>

        <Separator />

        <section>
          <h2>3. User Accounts</h2>
          <p>
            To access certain features of our Services, you may need to create an account. You agree to:
          </p>
          <ul>
            <li>Provide accurate and complete registration information</li>
            <li>Maintain the security of your account credentials</li>
            <li>Promptly notify us of any unauthorized use of your account</li>
            <li>Accept responsibility for all activities that occur under your account</li>
          </ul>
        </section>

        <Separator />

        <section>
          <h2>4. Intellectual Property Rights</h2>
          <p>
            All content, features, and functionality of the Services, including but not limited to text, graphics,
            logos, icons, images, audio clips, digital downloads, and software, are the exclusive property of
            Zion.FM LLC or its licensors and are protected by U.S. and international copyright, trademark, and
            other intellectual property laws.
          </p>
        </section>

        <Separator />

        <section>
          <h2>5. User Content</h2>
          <p>
            By submitting, posting, or displaying content on or through our Services ("User Content"), you grant
            Zion.FM a worldwide, non-exclusive, royalty-free license to use, copy, modify, create derivative works
            from, distribute, and display such content.
          </p>
        </section>

        <Separator />

        <section>
          <h2>6. Prohibited Conduct</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use the Services for any illegal purpose</li>
            <li>Violate any applicable laws or regulations</li>
            <li>Impersonate any person or entity</li>
            <li>Interfere with or disrupt the Services</li>
            <li>Attempt to gain unauthorized access to the Services</li>
            <li>Harass, abuse, or harm others</li>
          </ul>
        </section>

        <Separator />

        <section>
          <h2>7. Disclaimer of Warranties</h2>
          <p>
            THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS
            OR IMPLIED. ZION.FM DOES NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE.
          </p>
        </section>

        <Separator />

        <section>
          <h2>8. Limitation of Liability</h2>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, ZION.FM SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
            SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATING TO YOUR USE OF THE SERVICES.
          </p>
        </section>

        <Separator />

        <section>
          <h2>9. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless Zion.FM LLC, its officers, directors, employees, and agents
            from any claims, damages, losses, liabilities, costs, and expenses arising out of your use of the
            Services or violation of these Terms.
          </p>
        </section>

        <Separator />

        <section>
          <h2>10. Modifications to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. We will notify users of any material changes
            by posting the updated Terms on our website. Your continued use of the Services after such changes
            constitutes acceptance of the modified Terms.
          </p>
        </section>

        <Separator />

        <section>
          <h2>11. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the State of Wyoming,
            without regard to its conflict of law provisions. Any dispute arising from these Terms shall be
            subject to the exclusive jurisdiction of the courts of Wyoming.
          </p>
        </section>

        <Separator />

        <section>
          <h2>12. Contact Information</h2>
          <p>
            For questions about these Terms, please contact us at:
          </p>
          <p>
            Zion.FM LLC<br />
            30 N Gould St<br />
            STE R<br />
            Sheridan, WY 82801<br />
            Email: legal@zion.fm
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