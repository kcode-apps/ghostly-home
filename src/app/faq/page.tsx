import React from "react";
import { Metadata } from "next";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import faqData from "@/lib/faq.json";

export const generateMetadata = (): Metadata => {
  return {
    title: `FAQ | GhostLy Desktop`,
    description: faqData.description,
    openGraph: {
      title: "Frequently Asked Questions | GhostLy",
      description: faqData.description,
    },
    alternates: {
      canonical: "/faq",
    },
  };
};

export default function FAQPage() {
  // Generate JSON-LD for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <main className="min-h-screen bg-background pt-32 pb-20 overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-outfit font-bold tracking-tight text-white mb-6">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-primary via-teal-400 to-blue-500 bg-clip-text text-transparent">
              Questions
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {faqData.description}
          </p>
        </div>

        <FAQAccordion items={faqData.faqs} />

      </div>

      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
