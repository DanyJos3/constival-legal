import { useState } from 'react';
import { Check, Sparkles, ArrowRight } from 'lucide-react';
import type { PricingPlan } from '../data/services';

interface PricingTableProps {
  plans: PricingPlan[];
}

export default function PricingTable({ plans }: PricingTableProps) {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(plans.find(p => p.popular)?.id || plans[0]?.id);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {plans.map((plan, index) => (
        <div
          key={plan.id}
          className={`
            relative flex flex-col rounded-2xl border transition-all duration-300 cursor-pointer
            ${selectedPlan === plan.id 
              ? 'bg-[hsl(180_28%_15%)] border-[hsl(175_77%_45%/0.5)] shadow-[0_0_40px_-10px_hsl(175_77%_45%/0.4)] scale-[1.02]' 
              : 'bg-[hsl(180_28%_12%)] border-[hsl(0_0%_100%/0.1)] hover:border-[hsl(0_0%_100%/0.15)]'
            }
            ${plan.popular ? 'xl:-mt-4 xl:mb-4' : ''}
          `}
          onClick={() => setSelectedPlan(plan.id)}
          style={{ animationDelay: `${index * 100}ms` }}
        >
          {/* Popular Badge */}
          {plan.popular && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[hsl(175_77%_45%)] text-[hsl(180_30%_8%)] text-xs font-semibold">
                <Sparkles className="w-3 h-3" />
                Más Popular
              </div>
            </div>
          )}

          <div className="p-6 flex-1 flex flex-col">
            {/* Plan Header */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-1">
                {plan.name}
              </h3>
              <p className="text-sm text-white/60">{plan.accionistas}</p>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-white">
                  ${plan.price}
                </span>
                <span className="text-white/50 text-sm">+ IVA</span>
              </div>
              <p className="text-xs text-white/40 mt-1">Pago único</p>
            </div>

            {/* Features */}
            <ul className="space-y-3 mb-8 flex-1">
              {plan.features.map((feature, featureIndex) => (
                <li 
                  key={featureIndex} 
                  className="flex items-start gap-3 text-sm"
                >
                  <Check 
                    className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                      selectedPlan === plan.id 
                        ? 'text-[hsl(175_77%_45%)]' 
                        : 'text-white/50'
                    }`} 
                  />
                  <span className="text-white/70">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <a
              href={`https://wa.me/593XXXXXXXXX?text=Hola,%20me%20interesa%20el%20plan%20${encodeURIComponent(plan.name)}%20($${plan.price})%20para%20constituir%20mi%20SAS`}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                group inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl font-medium text-sm transition-all duration-200
                ${plan.popular || selectedPlan === plan.id
                  ? 'bg-[hsl(175_77%_45%)] text-[hsl(180_30%_8%)] hover:bg-[hsl(175_84%_55%)] hover:shadow-[0_0_30px_-5px_hsl(175_77%_45%/0.5)] hover:-translate-y-0.5'
                  : 'bg-transparent border border-[hsl(0_0%_100%/0.1)] text-white hover:border-[hsl(175_77%_45%)] hover:text-[hsl(175_84%_55%)]'
                }
              `}
              onClick={(e) => e.stopPropagation()}
            >
              Comenzar Ahora
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
