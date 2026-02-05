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
      className={`
        border rounded-xl transition-all duration-300
        ${isOpen 
          ? 'bg-[hsl(180_28%_15%)] border-[hsl(175_77%_45%/0.3)] shadow-[0_0_30px_-10px_hsl(175_77%_45%/0.2)]' 
          : 'bg-[hsl(180_28%_12%)] border-[hsl(180_20%_20%)] hover:border-[hsl(180_20%_25%)]'
        }
      `}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-start gap-4 p-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(175_77%_45%)] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(180_30%_8%)] rounded-xl"
        aria-expanded={isOpen}
      >
        {/* Icon */}
        <div className={`
          flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-colors
          ${isOpen ? 'bg-[hsl(175_77%_45%/0.2)]' : 'bg-[hsl(180_25%_18%)]'}
        `}>
          <MessageCircleQuestion 
            className={`w-5 h-5 transition-colors ${isOpen ? 'text-[hsl(175_77%_45%)]' : 'text-[oklch(0.556_0_0)]'}`} 
          />
        </div>

        {/* Question - Using h3 for SEO/GEO optimization */}
        <div className="flex-1 min-w-0">
          <h3 className="text-base sm:text-lg font-semibold text-[hsl(0_0%_98%)] font-['Playfair_Display',Georgia,serif] leading-snug pr-8">
            {faq.question}
          </h3>
        </div>

        {/* Chevron */}
        <ChevronDown 
          className={`
            w-5 h-5 flex-shrink-0 text-[oklch(0.556_0_0)] transition-transform duration-300
            ${isOpen ? 'rotate-180 text-[hsl(175_77%_45%)]' : ''}
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
          <p className="text-[oklch(0.75_0_0)] leading-relaxed text-sm sm:text-base">
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

  // Group FAQs by category for semantic organization
  const categories = {
    dinero: { label: 'Costos e Inversión', icon: '💰' },
    estructura: { label: 'Estructura Societaria', icon: '🏢' },
    impuestos: { label: 'Tributación', icon: '📊' },
    tiempo: { label: 'Tiempos y Procesos', icon: '⏱️' },
    operacion: { label: 'Operación', icon: '⚙️' },
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

      {/* FAQ Schema for SEO - Generated in parent component */}
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
