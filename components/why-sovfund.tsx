import { TrendingUp, Sparkles, Building2, Globe } from "lucide-react"

export default function WhySovfund() {
  const features = [
    {
      icon: TrendingUp,
      title: "Regulated Financial Corridor"
    },
    {
      icon: Sparkles,
      title: "AI,Web3,RWA and Fintech"
    },
    {
      icon: Building2,
      title: "Anchored in AbuDhabi's ADGM"
    },
    {
      icon: Globe,
      title: "Capital bridge from east to west"
    },
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div>
            <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-4">AND WHY NOW!</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 text-accent">
              Why Sovfund
            </h2>
            <p className="text-3xl sm:text-4xl lg:text-5xl font-light text-foreground leading-tight">
              "A day late and a dollar short"
            </p>
          </div>

          {/* Right Column - Feature Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, i) => {
              const Icon = feature.icon
              return (
                <div
                  key={i}
                  className="p-8 bg-gradient-to-br from-accent/10 to-transparent border-2 border-accent/40 rounded-3xl hover:border-accent/60 transition-all duration-300 group min-h-[200px] flex flex-col justify-between"
                >
                  <div className="w-12 h-12 border-2 border-accent rounded-full flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-accent" strokeWidth={2} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-medium text-foreground leading-snug">
                    {feature.title}
                  </h3>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
