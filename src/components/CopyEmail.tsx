"use client";

import { useState } from "react";

export default function CopyEmail({ email }: { email: string }) {
  const [message, setMessage] = useState("");

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setMessage("Email copied.");
    } catch {
      setMessage("Select the email address above and copy it manually.");
    }
  }

  return (
    <div className="mt-4">
      <button
        type="button"
        onClick={copyEmail}
        className="rounded-full border border-black/15 bg-white px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors hover:border-black"
      >
        Copy email
      </button>
      <p role="status" className="mt-2 min-h-5 text-sm text-neutral-600">{message}</p>
    </div>
  );
}
