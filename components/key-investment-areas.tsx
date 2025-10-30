'use client'

import { Cpu, DollarSign, Network, Building } from "lucide-react"

export default function KeyInvestmentAreas() {
  const areas = [
    {
      icon: Cpu,
      title: "AI Infrastructure",
      desc: "Powering the next wave of intelligence through cutting-edge AI technologies and infrastructure."
    },
    {
      icon: DollarSign,
      title: "FinTech Enablers",
      desc: "Redefining financial services through innovative technologies that enhance accessibility and efficiency."
    },
    {
      icon: Network,
      title: "Web3 Ecosystems",
      desc: "Building the decentralized internet through blockchain technologies and decentralized applications."
    },
    {
      icon: Building,
      title: "RWA",
      desc: "Building the decentralized internet through blockchain technologies and decentralized applications."
    },
  ]

  const floatingTags = [
    { label: "Fintech", position: "top-8 left-32" },
    { label: "Web 3", position: "top-28 right-40" },
    { label: "AI", position: "top-48 left-16" },
    { label: "RWA", position: "bottom-32 right-24" },
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Logo and Tags */}
          <div className="relative min-h-[500px] flex items-center justify-center">
            {/* Central Logo */}
            <div className="w-64 h-64 bg-gradient-to-br from-accent/20 to-accent/5 rounded-full flex items-center justify-center relative z-10 border-2 border-accent/30">
              <div className="w-32 h-32 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full text-accent" fill="currentColor">
                  <path d="M20 30 L40 15 L40 45 L20 60 Z" />
                  <path d="M45 30 L65 15 L65 45 L45 60 Z" />
                  <path d="M70 30 L90 15 L90 45 L70 60 Z" opacity="0.7" />
                  <path d="M20 50 L40 35 L40 65 L20 80 Z" opacity="0.7" />
                  <path d="M45 50 L65 35 L65 65 L45 80 Z" />
                  <path d="M70 50 L90 35 L90 65 L70 80 Z" opacity="0.7" />
                </svg>
              </div>
            </div>

            {/* Floating Tags */}
            {floatingTags.map((tag, i) => (
              <div
                key={i}
                className={`absolute ${tag.position} px-6 py-3 bg-foreground/95 text-background rounded-full text-sm font-medium flex items-center gap-2 shadow-lg animate-float hidden lg:flex`}
                style={{
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: '3s'
                }}
              >
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-background text-xs">⚡</span>
                </div>
                {tag.label}
              </div>
            ))}

            {/* Bottom Text */}
            <div className="absolute bottom-0 left-0 right-0 text-center">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Precision Investments<br />
                In <span className="text-accent">High-Conviction</span><br />
                Sectors
              </h3>
              <p className="text-foreground/70 text-sm sm:text-base max-w-md mx-auto">
                We strategically capitalize on the cyclical nature of emerging markets, investing inundervalued, high-potential projects poised for exponential growth.
              </p>
            </div>
          </div>

          {/* Right Column - Investment Areas */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-foreground">
              Key Investment Areas
            </h2>

            <div className="space-y-6">
              {areas.map((area, i) => {
                const Icon = area.icon
                return (
                  <div
                    key={i}
                    className="p-6 sm:p-8 bg-gradient-to-br from-accent/10 to-transparent border-2 border-accent/40 rounded-3xl hover:border-accent/60 transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center">
                        <Icon className="w-8 h-8 text-accent" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold mb-2 text-foreground group-hover:text-accent transition-colors">
                          {area.title}
                        </h3>
                        <p className="text-foreground/70 text-sm sm:text-base leading-relaxed">
                          {area.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
