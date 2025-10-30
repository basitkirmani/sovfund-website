'use client'
import { Users, Handshake, Globe2, Brain, ArrowRight } from "lucide-react"

export default function CompetitiveAdvantages() {
  const advantages = [
    {
      icon: Users,
      title: "Veteran Leadership",
      description: "Over 100 years of combined experience across banking, finance, startups & VC in digital assets."
    },
    {
      icon: Handshake,
      title: "Strategic Co-Investment",
      description: "Direct partnership with $10Bn of Capital managing MENA & East Asian GCC Offices, ensuring success."
    },
    {
      icon: Globe2,
      title: "Global Reach, Local Depth",
      description: "Strong presence and HNI in Latin America, enabling portfolio companies w/ digital ventures."
    },
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: "Advanced analytics and AI tools for unrivaled deal diligence and market timing."
    }
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {advantages.map((advantage, i) => {
            const Icon = advantage.icon
            return (
              <div
                key={i}
                className="flex flex-col items-start p-6 bg-gradient-to-br from-accent/10 to-transparent border-2 border-accent/30 rounded-2xl hover:border-accent/50 transition-all duration-300 group"
              >
                {/* Icon */}
                <div className="w-12 h-12 mb-6 flex items-center justify-center">
                  <Icon className="w-10 h-10 text-accent" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 min-h-[3rem] flex items-center">
                  {advantage.title}
                </h3>

                {/* Description */}
                <p className="text-foreground/70 text-sm leading-relaxed mb-6 flex-grow">
                  {advantage.description}
                </p>

                {/* Read More Button */}
                <button className="px-5 py-2 bg-accent text-background rounded-full font-semibold hover:bg-accent/90 transition flex items-center gap-2 group text-sm">
                  Read More
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
