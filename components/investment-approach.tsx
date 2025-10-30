'use client'

import { Coins, TrendingUp, ArrowRight } from "lucide-react"

export default function InvestmentApproach() {
  const approaches = [
    {
      icon: Coins,
      title: "Early-Stage Ventures",
      description: "We identify promising startups with disruptive potential and provide capital and mentorship for growth.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      alt: "Business meeting with financial charts"
    },
    {
      icon: TrendingUp,
      title: "Growth & Scaling",
      description: "Supporting mature companies with proven business models to accelerate growth and market expansion.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      alt: "Sales presentation"
    }
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-16 sm:mb-20 text-center text-accent">
          Investment Approach
        </h2>

        <div className="space-y-12 lg:space-y-16">
          {approaches.map((approach, i) => {
            const Icon = approach.icon
            return (
              <div
                key={i}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
              >
                {/* Icon, Title, Description and Button - Left Side */}
                <div className="flex flex-col items-start gap-6">
                  <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center shadow-lg">
                    <Icon className="w-8 h-8 text-background" strokeWidth={2} />
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-2xl sm:text-3xl font-bold text-foreground">{approach.title}</h3>
                    <p className="text-foreground/70 text-base sm:text-lg leading-relaxed">{approach.description}</p>
                  </div>

                  <button className="px-8 py-3 bg-accent text-background rounded-full font-semibold hover:bg-accent/90 transition flex items-center gap-2 group shadow-lg">
                    Read More
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Image - Right Side */}
                <div>
                  <div className="relative rounded-3xl overflow-hidden border-4 border-accent shadow-2xl">
                    <div className="aspect-[4/3] bg-gradient-to-br from-accent/20 to-accent/5">
                      <img
                        src={approach.image}
                        alt={approach.alt}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.style.display = 'none'
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
