"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

const CopyButton = ({ value, label }: { value: string; label: string }) => {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  };

  return (
    <button type="button" className="btn btn-ghost btn-icon btn-sm" onClick={copy} aria-label={copied ? "Copied" : label}>
      {copied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
    </button>
  );
};

export default CopyButton;
