import type { Metadata } from "next";

import LegalHero from "@/components/legal/LegalHero";
import LegalSection from "@/components/legal/LegalSection";

export const metadata: Metadata = {
  title: "Privacy Policy | NoidaCab",
  description:
    "Learn how NoidaCab collects, uses, stores and protects personal information submitted through its taxi booking website.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <LegalHero
        type="privacy"
        title="Privacy Policy"
        description="This Privacy Policy explains how NoidaCab may collect, use and protect information when you use our website and taxi booking services."
      />

      <section className="bg-white/90 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mx-auto max-w-4xl">

          <div className="rounded-xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-slate-700">
            <strong>Last Updated:</strong> August 20, 2026
          </div>

          <LegalSection title="1. Introduction">
            <p>
              NoidaCab respects your privacy and is committed to handling
              personal information responsibly.
            </p>

            <p>
              This Privacy Policy explains what information may be collected
              when you use our website, request a taxi booking, contact us or
              otherwise interact with our services.
            </p>
          </LegalSection>

          <LegalSection title="2. Information We May Collect">
            <p>
              Depending on how you use the website, we may collect
              information such as:
            </p>

            <ul className="list-disc space-y-2 pl-6">
              <li>Name and contact information.</li>
              <li>Phone number and email address.</li>
              <li>Pickup and destination information.</li>
              <li>Travel date and preferred pickup time.</li>
              <li>Vehicle and trip preferences.</li>
              <li>Booking and communication history.</li>
              <li>Information voluntarily provided through contact forms.</li>
            </ul>
          </LegalSection>

          <LegalSection title="3. Information Collected Automatically">
            <p>
              When you visit the website, certain technical information may
              be collected automatically, depending on the technologies used
              by the website.
            </p>

            <p>
              This may include IP address, browser type, device information,
              operating system, referring pages, pages visited and general
              usage information.
            </p>
          </LegalSection>

          <LegalSection title="4. How We Use Your Information">
            <p>
              Personal information may be used for purposes including:
            </p>

            <ul className="list-disc space-y-2 pl-6">
              <li>Processing and managing taxi booking requests.</li>
              <li>Contacting you about a requested booking.</li>
              <li>Providing pickup and destination information to the applicable driver or service provider.</li>
              <li>Responding to customer enquiries.</li>
              <li>Improving website functionality and services.</li>
              <li>Preventing fraud, misuse and security incidents.</li>
              <li>Maintaining business and service records.</li>
              <li>Complying with applicable legal requirements.</li>
            </ul>
          </LegalSection>

          <LegalSection title="5. Location Information">
            <p>
              If you provide a pickup location, destination or other location
              information, it may be processed to arrange or support your
              requested taxi service.
            </p>

            <p>
              We do not intend to collect precise device location merely
              because you visit the website unless the website functionality
              specifically requests and enables such access.
            </p>
          </LegalSection>

          <LegalSection title="6. Sharing Information">
            <p>
              We may share information necessary to fulfil a requested
              service with drivers, fleet operators, transportation partners
              or other service providers involved in your booking.
            </p>

            <p>
              Information may also be disclosed where required by law,
              legal process, governmental authority or to protect the
              security and rights of NoidaCab, customers or other persons.
            </p>
          </LegalSection>

          <LegalSection title="7. Payment Information">
            <p>
              If online payment functionality is provided, payment
              information may be processed by the applicable payment service
              provider.
            </p>

            <p>
              NoidaCab should not require you to share your full card number,
              CVV or banking password through ordinary chat, email or
              customer-support messages.
            </p>
          </LegalSection>

          <LegalSection title="8. Cookies and Similar Technologies">
            <p>
              The website may use cookies or similar technologies to
              remember preferences, understand website usage, maintain
              functionality and improve the user experience.
            </p>

            <p>
              Where required, applicable consent or browser controls may be
              provided for non-essential cookies or similar technologies.
            </p>
          </LegalSection>

          <LegalSection title="9. Analytics and Third-Party Tools">
            <p>
              We may use analytics, hosting, communication, mapping,
              authentication, payment or other technology providers to
              operate and improve the website and services.
            </p>

            <p>
              Such providers may process information according to their own
              terms and privacy practices and the services they provide to
              NoidaCab.
            </p>
          </LegalSection>

          <LegalSection title="10. Data Security">
            <p>
              We take reasonable technical and organisational measures to
              protect personal information against unauthorised access,
              misuse, loss, alteration or disclosure.
            </p>

            <p>
              However, no internet transmission or electronic storage system
              can be guaranteed to be completely secure.
            </p>
          </LegalSection>

          <LegalSection title="11. Data Retention">
            <p>
              Personal information may be retained for as long as reasonably
              necessary to provide requested services, maintain business
              records, resolve disputes, comply with legal obligations,
              prevent fraud and protect legitimate business interests.
            </p>

            <p>
              Information that is no longer required may be deleted or
              anonymised where appropriate and technically feasible.
            </p>
          </LegalSection>

          <LegalSection title="12. Your Privacy Rights">
            <p>
              Depending on applicable law, you may have rights relating to
              your personal information, including rights to access,
              correction, withdrawal of consent, grievance redressal and
              other applicable rights.
            </p>

            <p>
              Requests relating to personal information may be submitted
              through the contact details provided on the website.
            </p>
          </LegalSection>

          <LegalSection title="13. Children's Privacy">
            <p>
              Our services are intended for general users and are not
              specifically directed toward children. We do not knowingly
              seek to collect personal information from children except
              where permitted and necessary for a lawful service.
            </p>
          </LegalSection>

          <LegalSection title="14. External Links">
            <p>
              Our website may contain links to external websites or services.
              We are not responsible for the privacy practices or content of
              third-party websites.
            </p>
          </LegalSection>

          <LegalSection title="15. Changes to This Privacy Policy">
            <p>
              We may update this Privacy Policy when our services,
              technologies or applicable legal requirements change. The
              latest version will be published on this page together with
              its updated date.
            </p>
          </LegalSection>

          <LegalSection title="16. Contact and Grievances">
            <p>
              If you have a question, privacy request or complaint regarding
              the handling of your personal information, please contact
              NoidaCab using the official contact details published on the
              website.
            </p>
          </LegalSection>

        </div>
      </section>
    </main>
  );
}