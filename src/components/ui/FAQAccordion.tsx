"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  linkText?: string;
  linkHref?: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ items }) => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const renderAnswer = (item: FAQItem) => {
    if (!item.linkText || !item.linkHref || !item.answer.includes(item.linkText)) {
      return item.answer;
    }

    const [before, after] = item.answer.split(item.linkText);

    return (
      <>
        {before}
        <a
          href={item.linkHref}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          {item.linkText}
        </a>
        {after}
      </>
    );
  };

  return (
    <div className="space-y-4 max-w-4xl mx-auto px-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="group border border-border rounded-2xl bg-card/50 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-primary/50 hover:bg-card/80"
        >
          <button
            onClick={() => toggle(item.id)}
            className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
          >
            <span className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
              {item.question}
            </span>
            <motion.div
              animate={{ rotate: openId === item.id ? 180 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="text-muted-foreground group-hover:text-primary"
            >
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </button>

          <AnimatePresence>
            {openId === item.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                  {renderAnswer(item)}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};
