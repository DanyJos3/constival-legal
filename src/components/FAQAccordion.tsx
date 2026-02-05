import { useState } from 'react';
import { ChevronDown, MessageCircleQuestion } from 'lucide-react';
import type { FAQ } from '../data/services';

interface FAQAccordionProps {
  faqs: FAQ[];
}

interface FAQItemProps {
  faq: FAQ;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

function FAQItem({ faq, isOpen, onToggle, index }: FAQItemProps) {
  return (
    <div 
      className={`card-interactive ${isOpen ? 'is-active' : ''}`}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <button
        type="button"
        onClick={onToggle}
        className="focus-ring-dark w-full flex items-start gap-4 p-5 text-left rounded-xl"
        aria-expanded={isOpen}
      >
        {/* Icon */}
        <div className={`icon-container flex-shrink-0 ${isOpen ? 'is-active' : ''}`}>
          <MessageCircleQuestion 
            className={`w-5 h-5 transition-colors ${isOpen ? 'icon-accent' : 'icon-muted'}`} 
          />
        </div>

        {/* Question - Using h3 for SEO/GEO optimization */}
        <div className="flex-1 min-w-0">
          <h3 className="text-base sm:text-lg font-semibold text-white leading-snug pr-8">
            {faq.question}
          </h3>
        </div>

        {/* Chevron */}
        <ChevronDown 
          className={`
            w-5 h-5 flex-shrink-0 transition-transform duration-300
            ${isOpen ? 'rotate-180 icon-accent' : 'icon-muted'}
          `}
        />
      </button>

      {/* Answer */}
      <div 
        className={`
          overflow-hidden transition-all duration-300 ease-out
          ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <div className="px-5 pb-5 pl-[4.5rem]">
          <p className="text-white/70 leading-relaxed text-sm sm:text-base">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id || null);

  const handleToggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <FAQItem
          key={faq.id}
          faq={faq}
          isOpen={openId === faq.id}
          onToggle={() => handleToggle(faq.id)}
          index={index}
        />
      ))}
    </div>
  );
}

// Export FAQ Schema generator for JSON-LD
export function generateFAQSchema(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}
