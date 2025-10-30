'use client'
export default function Locations() {
  const locations = [
    {
      city: "Panama",
      description: "Strategic Gateway to Latin America",
      image: "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?w=400&h=300&fit=crop"
    },
    {
      city: "Abu Dhabi",
      description: "Middle East Financial Hub",
      image: "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?w=400&h=300&fit=crop"
    }
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 sm:mb-16 text-center text-accent">
          Locations
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {locations.map((loc, i) => (
            <div
              key={i}
              className="relative group overflow-hidden rounded-3xl border-2 border-accent/40 hover:border-accent/60 transition-all duration-300"
            >
              <div className="flex items-center gap-6 p-6 sm:p-8 bg-gradient-to-br from-accent/20 to-accent/5">
                {/* Text Content */}
                <div className="flex-grow">
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                    {loc.city}
                  </h3>
                  <p className="text-foreground/70 text-sm sm:text-base">
                    {loc.description}
                  </p>
                </div>

                {/* Image */}
                <div className="flex-shrink-0 w-32 h-24 sm:w-40 sm:h-28 rounded-2xl overflow-hidden border-2 border-accent shadow-lg">
                  <img
                    src={loc.image}
                    alt={loc.city}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = 'none'
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
