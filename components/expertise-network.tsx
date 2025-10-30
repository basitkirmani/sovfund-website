'use client'

import { ArrowRight } from "lucide-react"

export default function ExpertiseNetwork() {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-accent/30 rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-accent/20 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-center">
          {/* Left Column - Image */}
          <div className="lg:col-span-1">
            <div className="relative rounded-2xl overflow-hidden border-3 border-accent shadow-xl max-w-sm mx-auto lg:mx-0">
              <div className="aspect-[5/4] bg-gradient-to-br from-accent/20 to-accent/5">
                <img
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=480&fit=crop"
                  alt="Business consultation with charts"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                  }}
                />
              </div>
            </div>
          </div>

          {/* Middle Column - Heading and Button */}
          <div className="lg:col-span-1 flex flex-col justify-center gap-5">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-accent leading-tight">
              Expertise. Network.<br />
              Unrivaled Access.
            </h2>

            <button className="px-6 py-2.5 bg-accent text-background rounded-full font-semibold hover:bg-accent/90 transition flex items-center gap-2 group shadow-lg w-fit text-sm">
              Read More
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Column - Description */}
          <div className="lg:col-span-1 flex items-center">
            <p className="text-foreground text-sm sm:text-base leading-relaxed">
              Our distinct advantages position SOVFund for unparalleled deal flow and maximized returns.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
