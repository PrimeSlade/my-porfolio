import PageHead from "../components/PageHead";
import ContactPanel from "../components/ContactPanel";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Contact Sai Zayar Hein about back-end or full-stack roles and freelance projects. Based in Bangkok, open to on-site, hybrid or remote work.",
  path: "/contact",
});

const ContactPage = () => (
  <>
    <PageHead
      title="Contact"
      lede="Email is the fastest way to reach me. I'm based in Bangkok and open to on-site, hybrid or remote work."
    />
    <section>
      <ContactPanel />
    </section>
  </>
);

export default ContactPage;
