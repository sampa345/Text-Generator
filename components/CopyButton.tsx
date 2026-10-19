"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface CopyButtonProps {
  textToCopy: string;
  label?: string;
  className?: string;
  variant?: "primary" | "secondary" | "subtle";
  onCopySuccess?: () => void;
}

export function CopyButton({
  textToCopy,
  label = "Copy",
  className = "",
  variant = "primary",
  onCopySuccess
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!textToCopy) return;
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      if (onCopySuccess) onCopySuccess();
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers or restricted permissions
      const textarea = document.createElement("textarea");
      textarea.value = textToCopy;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      if (onCopySuccess) onCopySuccess();
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const baseStyles =
    "inline-flex items-center justify-center gap-1.5 font-medium rounded-lg transition-colors min-h-[44px] min-w-[44px] px-3.5 py-2 text-sm select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2";

  const variantStyles = {
    primary: copied
      ? "bg-emerald-600 text-white shadow-xs"
      : "bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs",
    secondary: copied
      ? "bg-emerald-50 text-emerald-700 border border-emerald-300 shadow-xs"
      : "bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 shadow-xs",
    subtle: copied
      ? "bg-emerald-50 text-emerald-700 font-semibold"
      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
  };

  return (
    <motion.button
      type="button"
      whileTap={{ scale: 0.94 }}
      onClick={handleCopy}
      aria-label={copied ? "Copied to clipboard!" : `Copy ${label}`}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        {copied ? (
          <motion.span
            key="copied-state"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{ type: "spring", stiffness: 500, damping: 25 }}
            className="inline-flex items-center gap-1.5 font-semibold"
          >
            <motion.span
              initial={{ rotate: -30, scale: 0.4 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 600, damping: 20 }}
              className="shrink-0"
            >
              <Check className="w-4 h-4 text-current stroke-[2.8]" aria-hidden="true" />
            </motion.span>
            <span className="whitespace-nowrap">Copied!</span>
          </motion.span>
        ) : (
          <motion.span
            key="copy-state"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="inline-flex items-center gap-1.5"
          >
            <Copy className="w-4 h-4 text-current shrink-0" aria-hidden="true" />
            <span className="whitespace-nowrap">{label}</span>
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
