"use client"

import { Lock, Star, Download, TrendingUp } from "lucide-react"

export default function StructuredGrowth() {
  const features = [
    {
      icon: Lock,
      title: "Initial Lock-in",
      description: "1-24 months to protect fund strategy and ensure optimal execution of investment thesis."
    },
    {
      icon: Star,
      title: "Gradual Vesting",
      description: "Eligible capital becomes accessible in tranches after lock-in, providing balanced liquidity."
    },
    {
      icon: Download,
      title: "Flexible Payouts",
      description: "Options to reinvest gains for compounding growth or receive profit distributions based on investor preferences."
    }
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Structured Growth. <span className="text-accent">Investor Flexibility</span>
          </h2>
          <p className="text-foreground/70 text-sm sm:text-base max-w-2xl mx-auto">
            We balance aggressive growth with robust investor protections and transparent liquidity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Infographic */}
          <div className="relative">
            {/* Chart Card */}
            <div className="bg-foreground/95 p-6 rounded-2xl shadow-xl mb-8 max-w-sm">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-background font-bold text-sm mb-1">50% Pre-TGE & Private Sale</h3>
                  <p className="text-background/70 text-xs">Core allocation for early-stage disruption.</p>
                </div>
              </div>

              {/* Line Chart */}
              <div className="relative h-48">
                <svg className="w-full h-full" viewBox="0 0 300 150" preserveAspectRatio="none">
                  <polyline
                    points="0,120 50,80 100,90 150,60 200,70 250,100 300,95"
                    fill="none"
                    stroke="#d4af37"
                    strokeWidth="3"
                  />
                  <circle cx="300" cy="95" r="5" fill="#d4af37" />
                </svg>
                <div className="absolute bottom-2 right-2 text-background text-xs">
                  <div className="font-bold">18 July 2024</div>
                  <div className="text-accent">$193.01</div>
                </div>
              </div>

              {/* X-axis labels */}
              <div className="flex justify-between text-background/60 text-xs mt-2">
                <span>May 25</span>
                <span>Jun 25</span>
                <span>Jul 25</span>
                <span>Aug 25</span>
                <span>Sep 25</span>
              </div>
            </div>

            {/* Dotted path connecting elements */}
            <svg className="absolute top-64 left-0 w-full h-64 pointer-events-none hidden lg:block" style={{ zIndex: 1 }}>
              <path
                d="M 50 0 Q 150 50, 250 100"
                fill="none"
                stroke="#d4af37"
                strokeWidth="2"
                strokeDasharray="5,5"
                opacity="0.3"
              />
            </svg>

            {/* Token Cards */}
            <div className="space-y-4 mt-8">
              <div className="bg-foreground/95 p-4 rounded-xl shadow-lg flex items-center gap-4 border-2 border-accent/30">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-background" />
                </div>
                <div className="flex-grow">
                  <h4 className="text-background font-bold text-sm">Early-Stage Liquid Tokens</h4>
                  <p className="text-background/70 text-xs">Targeting high-potential public assets.</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-accent font-bold text-sm">▲ 30%</span>
                  <div className="w-12">
                    <svg viewBox="0 0 40 20" className="w-full h-5">
                      {[3, 6, 4, 7, 5, 8, 6, 9, 7].map((h, i) => (
                        <rect key={i} x={i * 4} y={20 - h * 2} width="3" height={h * 2} fill="#d4af37" />
                      ))}
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-foreground/95 p-4 rounded-xl shadow-lg flex items-center gap-4 border-2 border-accent/30">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <Star className="w-5 h-5 text-background" />
                </div>
                <div className="flex-grow">
                  <h4 className="text-background font-bold text-sm">Operational & Reserve</h4>
                  <p className="text-background/70 text-xs">Ensuring stability and strategic agility.</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-accent font-bold text-sm">▲ 20%</span>
                  <div className="w-12">
                    <svg viewBox="0 0 40 20" className="w-full h-5">
                      {[4, 5, 3, 6, 4, 7, 5, 6, 5].map((h, i) => (
                        <rect key={i} x={i * 4} y={20 - h * 2} width="3" height={h * 2} fill="#d4af37" />
                      ))}
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="space-y-6">
            {features.map((feature, i) => {
              const Icon = feature.icon
              return (
                <div
                  key={i}
                  className="p-6 sm:p-8 bg-[#0a1410] rounded-3xl border-2 border-accent/50 hover:border-accent/70 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent" strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold mb-2 text-foreground">
                        {feature.title}
                      </h3>
                      <p className="text-foreground/70 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
