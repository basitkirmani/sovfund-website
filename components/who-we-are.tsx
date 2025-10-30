import { ArrowRight, Building2, Handshake, Users } from "lucide-react"

export default function WhoWeAre() {
  const items = [
    {
      icon: Building2,
      description: "Anchored in ADGM, Abu Dhabi's world, class financial center.",
    },
    {
      icon: Handshake,
      description: "Regulatory, strategic partnerships, governance frameworks.",
    },
    {
      icon: Users,
      description: "Designed exclusively for professional and institutional investors.",
    },
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 border border-accent/30 rounded-full"></div>
        <div className="absolute top-40 right-20 w-96 h-96 border border-accent/20 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-center text-accent">
          Who We Are
        </h2>
        <p className="text-center text-foreground text-lg sm:text-xl mb-16 sm:mb-20 max-w-3xl mx-auto">
          Not Just a Fund. A Bridge. A Partner . A Legacy
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {items.map((item, i) => {
            const Icon = item.icon
            return (
              <div
                key={i}
                className="flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 border-2 border-accent rounded-full mb-8 flex items-center justify-center">
                  <Icon className="w-12 h-12 text-accent" strokeWidth={1.5} />
                </div>
                <p className="text-foreground text-base sm:text-lg mb-8 min-h-[4rem] flex items-center">
                  {item.description}
                </p>
                <button className="px-8 py-3 bg-accent text-background rounded-full font-semibold hover:bg-accent/90 transition flex items-center gap-2 group">
                  Read More
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
