export default function PrecisionInvestments() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-center">Precision Investments</h2>
        <p className="text-center text-foreground/70 mb-12 sm:mb-16 max-w-2xl mx-auto text-sm sm:text-base">
          In High-Conviction Sectors
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-start">
          <div className="bg-secondary border border-accent/20 rounded-2xl p-6 sm:p-8 h-64 sm:h-96 flex items-center justify-center order-2 md:order-1">
            <img
              src="/placeholder.svg?key=jco0g"
              alt="Market Analysis"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <div className="space-y-4 sm:space-y-6 order-1 md:order-2">
            <div className="p-6 sm:p-8 bg-secondary border border-accent/20 rounded-xl">
              <h3 className="font-bold text-lg sm:text-xl mb-2">Early-Stage Ventures</h3>
              <p className="text-foreground/70 text-sm sm:text-base">
                Access to pre-Series A and Series A opportunities
              </p>
            </div>
            <div className="p-6 sm:p-8 bg-secondary border border-accent/20 rounded-xl">
              <h3 className="font-bold text-lg sm:text-xl mb-2">Growth stage</h3>
              <p className="text-foreground/70 text-sm sm:text-base">
                Established companies with strong growth trajectories
              </p>
            </div>
            <div className="p-6 sm:p-8 bg-secondary border border-accent/20 rounded-xl">
              <h3 className="font-bold text-lg sm:text-xl mb-2">Pre-IPO</h3>
              <p className="text-foreground/70 text-sm sm:text-base">
                Late-stage companies preparing for public markets
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
