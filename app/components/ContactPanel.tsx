const ContactPanel = ({ heading = true }: { heading?: boolean }) => {
  return (
    <div className="contact">
      {heading && (
        <h2>
          Let&apos;s work
          <br />
          together
        </h2>
      )}
      <p>
        I&apos;m open to back-end or full-stack roles and freelance projects. I
        usually reply within a day.
      </p>
      <div className="ways">
        <a className="way" href="mailto:saib6064@gmail.com">
          <span>Email</span>
          <b>saib6064@gmail.com</b>
        </a>
        <a className="way" href="tel:+66970184800">
          <span>Phone</span>
          <b>+66 97 018 4800</b>
        </a>
        <a className="way" href="/resume.pdf" download>
          <span>Résumé</span>
          <b>Download PDF ↓</b>
        </a>
      </div>
      <div className="socials">
        <a className="pill" href="https://github.com/PrimeSlade" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a className="pill" href="https://www.linkedin.com/in/saizayarhein" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a className="pill" href="https://leetcode.com/u/Sladeee/" target="_blank" rel="noopener noreferrer">
          LeetCode
        </a>
      </div>
    </div>
  );
};

export default ContactPanel;
