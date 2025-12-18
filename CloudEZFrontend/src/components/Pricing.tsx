import React from 'react';
import { Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Pricing: React.FC = () => {
  const navigate = useNavigate();

  const plans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small teams',
      features: [
        'Up to 5 instances',
        'Basic monitoring',
        '2 team members',
        'Email support',
        'Community access'
      ],
      cta: 'Get Started',
      highlighted: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'For growing businesses',
      features: [
        'Up to 25 instances',
        'Advanced monitoring',
        '10 team members',
        'Priority email support',
        'API access',
        'Custom integrations',
        'Scheduled backups'
      ],
      cta: 'Get Started',
      highlighted: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large-scale operations',
      features: [
        'Unlimited instances',
        'Full-featured monitoring',
        'Unlimited team members',
        '24/7 phone support',
        'Advanced API access',
        'Custom integrations',
        'SLA guarantee',
        'Dedicated account manager'
      ],
      cta: 'Contact Sales',
      highlighted: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-sky-900">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-3">Simple, Transparent Pricing</h1>
          <p className="text-slate-300 text-lg">Choose the perfect plan for your EC2 management needs</p>
        </div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-3 mb-12">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-6 flex flex-col ${
                plan.highlighted
                  ? 'bg-white/10 border-2 border-sky-500 scale-105'
                  : 'bg-white/5 border border-white/6'
              }`}
            >
              {plan.highlighted && (
                <div className="text-center mb-4">
                  <span className="bg-sky-500 text-white text-sm px-3 py-1 rounded-full font-medium">Most Popular</span>
                </div>
              )}

              <h3 className="text-2xl font-semibold text-white mb-2">{plan.name}</h3>
              <p className="text-slate-300 text-sm mb-4">{plan.description}</p>

              <div className="mb-6">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                {plan.period && <span className="text-slate-400">{plan.period}</span>}
              </div>

              <button
                onClick={() => navigate('/login')}
                className={`w-full py-2 rounded-lg font-semibold mb-6 ${
                  plan.highlighted
                    ? 'bg-gradient-to-r from-teal-500 to-sky-500 text-white hover:opacity-95'
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }`}
              >
                {plan.cta}
              </button>

              <div className="space-y-3 flex-1">
                {plan.features.map((feature, fidx) => (
                  <div key={fidx} className="flex items-center gap-3">
                    <Check size={18} className="text-emerald-500" />
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white/5 border border-white/6 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-semibold text-white mb-3">Need a custom plan?</h2>
          <p className="text-slate-300 mb-4">Contact our sales team for tailored solutions</p>
          <button
            onClick={() => navigate('/login')}
            className="px-6 py-2 rounded-lg bg-gradient-to-r from-teal-500 to-sky-500 text-white font-semibold hover:opacity-95"
          >
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
