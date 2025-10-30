"use client"

import { Lightbulb, Telescope, Shield, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"

export default function ReachEfficiency() {

  const features = [
    {
      icon: Lightbulb,
      title: "Innovation & Disruption",
      desc: "Game-changing ideas that transform industries and create new possibilities."
    },
    {
      icon: Telescope,
      title: "Long-Term Vision",
      desc: "Sustainable growth beyond market cycles, building lasting value."
    },
    {
      icon: Shield,
      title: "Integrity & Responsibility",
      desc: "Upholding the highest ethical standards in all our endeavors"
    },
  ]
  return (
    <section className="py-16 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 border border-accent/30 rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 border border-accent/20 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Content */}
          <div>
            <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-4">ABOUT US</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-accent">Boost Efficiency,</span>
              <br />
              <span className="text-foreground">Maximize Profits with Smart AI Solutions.</span>
            </h2>
          </div>

          {/* Right Column - Description */}
          <div className="lg:pt-12">
            <p className="text-foreground text-base sm:text-lg leading-relaxed">
              We are SOVFund, a hybrid VC & Digital Asset fund at the forefront of AI, FinTech, and Web3 innovation. Our mission is to empower the next generation of transformative technologies, driving decentralization and financial inclusion.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <div
                key={i}
                className="p-8 bg-gradient-to-br from-accent/20 to-accent/5 backdrop-blur-sm border border-accent/30 rounded-2xl hover:border-accent/50 transition-all duration-300 group"
              >
                <div className="w-16 h-16 mb-6 flex items-center justify-center">
                  <Icon className="w-12 h-12 text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-foreground group-hover:text-accent transition-colors">
                  {feature.title}
                </h3>
                <p className="text-foreground/80 text-sm sm:text-base leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            )
          })}
        </div>

        {/* Read More Button and Pagination */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="px-8 py-3 bg-accent text-background rounded-full font-semibold hover:bg-accent/90 transition flex items-center gap-2 group">
            Read More
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  )
}
