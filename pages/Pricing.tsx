
import React from 'react';
import { PRICING_PLANS } from '../constants';
import { Check, Info, CreditCard, ShieldCheck } from 'lucide-react';

export default function PricingPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-20">
        <h1 className="text-5xl font-display font-bold text-white mb-6">Invest in Your Career</h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          Choose a plan that fits your professional goals. From focused software skills to the full BIM mastery bundle.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        {PRICING_PLANS.map((plan) => (
          <div key={plan.id} className={`relative flex flex-col p-10 rounded-[3rem] border transition-all hover:scale-[1.02] ${plan.recommended ? 'bg-slate-900 border-blue-500 shadow-2xl shadow-blue-500/10 z-10' : 'bg-slate-950 border-slate-800'}`}>
            {plan.recommended && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
                Best Value
              </div>
            )}
            
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
              <p className="text-slate-400 text-sm">{plan.description}</p>
            </div>

            <div className="mb-10 flex items-baseline gap-2">
              <span className="text-5xl font-display font-bold text-white">${plan.price}</span>
              <span className="text-slate-500 font-medium">{plan.period}</span>
            </div>

            <button className={`w-full py-5 rounded-2xl font-bold text-lg mb-10 transition-all ${plan.recommended ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20' : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'}`}>
              Get Started
            </button>

            <ul className="space-y-4 mb-auto">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                  <div className="mt-1 bg-emerald-500/10 rounded-full p-1">
                    <Check className="w-3 h-3 text-emerald-500" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Payment Security section */}
      <section className="bg-slate-900/50 rounded-[3rem] p-12 border border-slate-800">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-display font-bold text-white mb-6">Secure & Flexible Payments</h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              We accept <span className="text-white font-bold">Mobile Money (Airtel & MTN)</span> via Flutterwave for East African students, and <span className="text-white font-bold">PayPal</span> for international payments. Automated enrollment happens as soon as payment is confirmed.
            </p>
            <div className="flex flex-wrap gap-8 items-center">
              <div className="flex items-center gap-3 text-slate-300">
                <CreditCard className="text-blue-500" />
                <span className="font-bold">Flutterwave</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <ShieldCheck className="text-emerald-500" />
                <span className="font-bold">SSL Secure</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Info className="text-orange-500" />
                <span className="font-bold">24/7 Support</span>
              </div>
            </div>
          </div>
          <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700 text-center">
            <h4 className="text-white font-bold mb-4">Accepting Mobile Money in:</h4>
            <div className="flex justify-center gap-4 flex-wrap">
              {['Uganda', 'Kenya', 'Tanzania', 'Rwanda'].map(country => (
                <div key={country} className="px-4 py-2 bg-slate-900 rounded-xl border border-slate-700 text-sm text-slate-300 font-medium">
                  {country}
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs text-slate-500">Payments powered by Flutterwave. Exchange rates updated daily.</p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="mt-40">
        <h2 className="text-4xl font-display font-bold text-white text-center mb-16">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            { q: "Can I upgrade my plan later?", a: "Yes! You can upgrade from a Single Course to the Full Bundle by just paying the difference within 30 days." },
            { q: "What software versions are used?", a: "We use the latest versions (ArchiCAD 27, Tekla 2024) but the workflows are applicable to older versions too." },
            { q: "Do I get a certificate?", a: "Every module completed generates an automated Alek Design Build Certificate of Completion." },
            { q: "How are the practice files provided?", a: "You'll find a dedicated 'Resources' tab in your student dashboard for every module." }
          ].map((item, i) => (
            <div key={i} className="p-8 bg-slate-900 border border-slate-800 rounded-3xl">
              <h4 className="text-white font-bold mb-4">{item.q}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
