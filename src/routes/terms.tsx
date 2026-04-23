import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Shri Shyam Bachat Bazaar" },
      {
        name: "description",
        content:
          "Terms governing the use of the Shri Shyam Bachat Bazaar website and our retail and wholesale services.",
      },
      { property: "og:title", content: "Terms & Conditions — Shri Shyam Bachat Bazaar" },
      {
        property: "og:description",
        content: "Read the terms of use, liability, pricing disclaimers, and governing law.",
      },
    ],
  }),
  component: () => (
    <LegalPage title="Terms & Conditions" updated="January 2025">
      <p>
        Welcome to {SITE.short}. By accessing or using our website and services, you agree to be
        bound by these Terms & Conditions. Please read them carefully.
      </p>

      <h2>1. Website Usage</h2>
      <p>
        You may use this website only for lawful purposes and in accordance with these Terms. You
        agree not to use the site in any way that could damage, disable, overburden, or impair
        the website or interfere with any other party's use.
      </p>

      <h2>2. User Responsibilities</h2>
      <ul>
        <li>Provide accurate information when contacting us or placing enquiries.</li>
        <li>Do not misuse our content, brand name, or imagery without written permission.</li>
        <li>Do not attempt to gain unauthorised access to any part of our systems.</li>
      </ul>

      <h2>3. Limitation of Liability</h2>
      <p>
        {SITE.short} and its founders, employees, and affiliates shall not be liable for any
        direct, indirect, incidental, special, or consequential damages arising out of or in
        connection with the use of our website or the purchase of products from our stores,
        except as required by applicable law.
      </p>

      <h2>4. Intellectual Property</h2>
      <p>
        All content on this website — including text, graphics, logos, images, and the brand name
        "{SITE.short}" — is the property of {SITE.short} or its licensors and is protected by
        applicable copyright and trademark laws. You may not reproduce, distribute, or create
        derivative works without prior written consent.
      </p>

      <h2>5. Pricing and Product Disclaimer</h2>
      <ul>
        <li>
          Prices, offers, and product availability shown on this website are for general
          information and may change without notice.
        </li>
        <li>
          Actual in-store prices may vary based on packaging, weight, brand, and ongoing
          promotions.
        </li>
        <li>
          Wholesale pricing is provided on enquiry and is subject to minimum order quantities and
          stock availability.
        </li>
        <li>
          Product images on the website are for representation purposes only.
        </li>
      </ul>

      <h2>6. Returns and Exchanges</h2>
      <p>
        Returns and exchanges follow our in-store policy. Perishable items, opened packaging, and
        personal-use items may not be eligible for return. Please contact our store staff within
        24 hours of purchase for any concerns.
      </p>

      <h2>7. Third-Party Links</h2>
      <p>
        Our website may contain links to third-party sites. We do not endorse and are not
        responsible for the content or practices of those sites.
      </p>

      <h2>8. Changes to Terms</h2>
      <p>
        We reserve the right to update or modify these Terms at any time without prior notice.
        Continued use of our website after changes constitutes acceptance of the revised Terms.
      </p>

      <h2>9. Governing Law</h2>
      <p>
        These Terms shall be governed by and construed in accordance with the laws of India. Any
        disputes arising shall be subject to the exclusive jurisdiction of the courts of New
        Delhi, India.
      </p>

      <h2>10. Contact</h2>
      <p>
        For any questions regarding these Terms, contact us at{" "}
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or call {SITE.phones[0]}.
      </p>
    </LegalPage>
  ),
});
