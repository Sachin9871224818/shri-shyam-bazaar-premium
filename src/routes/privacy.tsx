import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Shri Shyam Bachat Bazaar" },
      {
        name: "description",
        content:
          "How Shri Shyam Bachat Bazaar collects, uses, and protects your personal information.",
      },
      { property: "og:title", content: "Privacy Policy — Shri Shyam Bachat Bazaar" },
      {
        property: "og:description",
        content: "Read our privacy practices, cookies policy and your data rights.",
      },
    ],
  }),
  component: () => (
    <LegalPage title="Privacy Policy" updated="January 2025">
      <p>
        At {SITE.short}, your privacy is important to us. This Privacy Policy explains how we
        collect, use, disclose, and safeguard your information when you visit our website or our
        physical stores. Please read this policy carefully.
      </p>

      <h2>1. Information We Collect</h2>
      <p>We may collect the following types of information:</p>
      <ul>
        <li>
          <strong>Personal information</strong> — name, phone number, email address, and store
          location preferences when you contact us or fill out a form.
        </li>
        <li>
          <strong>Transactional information</strong> — purchase history at our stores when you opt
          in to loyalty programs.
        </li>
        <li>
          <strong>Technical information</strong> — IP address, browser type, device information,
          and pages visited on our website.
        </li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <ul>
        <li>To respond to your enquiries via phone, email, or WhatsApp.</li>
        <li>To process and fulfil retail and wholesale orders.</li>
        <li>To send updates about offers, new arrivals, and store events (only with your consent).</li>
        <li>To improve our website, products, and customer service.</li>
        <li>To comply with applicable laws and regulations.</li>
      </ul>

      <h2>3. Cookies Policy</h2>
      <p>
        Our website may use cookies and similar tracking technologies to enhance your browsing
        experience, analyse traffic, and remember your preferences. You can control cookies through
        your browser settings. Disabling cookies may affect some features of the site.
      </p>

      <h2>4. Data Protection</h2>
      <p>
        We implement reasonable physical, technical, and administrative safeguards to protect your
        personal information from unauthorised access, alteration, disclosure, or destruction.
        However, no method of transmission over the internet is 100% secure.
      </p>

      <h2>5. Third-Party Services</h2>
      <p>
        We may share information with trusted third-party service providers (such as payment
        processors, delivery partners, or analytics providers) only to the extent necessary to
        operate our business. These parties are contractually bound to handle your data
        confidentially.
      </p>
      <p>
        Our website may also contain links to third-party websites. We are not responsible for the
        privacy practices of those websites.
      </p>

      <h2>6. Your Rights</h2>
      <ul>
        <li>You may request access to the personal information we hold about you.</li>
        <li>You may request correction or deletion of your information.</li>
        <li>You may opt out of marketing communications at any time.</li>
      </ul>

      <h2>7. Children's Privacy</h2>
      <p>
        Our services are not directed to individuals under the age of 18. We do not knowingly
        collect personal information from children.
      </p>

      <h2>8. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. The latest version will always be
        posted on this page with an updated "Last updated" date.
      </p>

      <h2>9. Contact for Privacy Concerns</h2>
      <p>
        For any privacy-related questions or requests, contact us at{" "}
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or call {SITE.phones[0]}.
      </p>
    </LegalPage>
  ),
});
