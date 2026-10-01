import type { Metadata } from "next";
import ContactPanel from "../components/ContactPanel";

export const metadata: Metadata = {
  title: "Contact — Sai Zayar Hein",
};

const ContactPage = () => {
  return (
    <main className="page-head">
      <div className="sec-head">
        <h1 className="page-title">Contact</h1>
        <p>Email is the fastest way to reach me. I&apos;m based in Bangkok and work remotely.</p>
      </div>
      <ContactPanel />
    </main>
  );
};

export default ContactPage;
