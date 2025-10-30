"use client"

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Centered Content with Left Badges */}
        <div className="flex items-center justify-center gap-8 lg:gap-16 mb-12">
          {/* Floating Badges on Left Side */}
          <div className="relative w-40 h-[200px] hidden lg:block flex-shrink-0">
            <div className="absolute top-0 left-0 px-5 py-2.5 bg-background border-2 border-accent/40 rounded-full text-foreground text-sm font-medium shadow-lg animate-float">
              Insight Beyond
            </div>
            <div className="absolute top-12 left-4 px-5 py-2.5 bg-background border-2 border-accent/40 rounded-full text-foreground text-sm font-medium shadow-lg animate-float" style={{ animationDelay: '0.5s', animationDuration: '3s' }}>
              Intelligence
            </div>
            <div className="absolute top-24 left-0 px-5 py-2.5 bg-background border-2 border-accent/40 rounded-full text-foreground text-sm font-medium shadow-lg animate-float" style={{ animationDelay: '1s', animationDuration: '3s' }}>
              Secure AI
            </div>
            <div className="absolute top-36 left-6 px-5 py-2.5 bg-background border-2 border-accent/40 rounded-full text-foreground text-sm font-medium shadow-lg animate-float" style={{ animationDelay: '1.5s', animationDuration: '3s' }}>
              Intelligence
            </div>
          </div>

          {/* Centered Heading */}
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Unlock the Future of<br />
              <span className="text-accent">Digital Finance</span>
            </h1>

            <p className="text-base text-foreground/70 mb-8 max-w-xl mx-auto">
              Invest with Vision. Secure Your Digital Future.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-accent text-background rounded-full font-semibold hover:bg-accent/90 transition text-sm shadow-lg">
                Connect With Us
              </button>
              <button className="px-8 py-3 border-2 border-accent/50 text-foreground rounded-full font-semibold hover:bg-accent/10 transition text-sm">
                Discover Our Vision
              </button>
            </div>
          </div>
        </div>

        {/* Hero Illustration using Section 10.png */}
        <div className="relative mt-16">
          <div className="relative w-full max-w-5xl mx-auto">
            <img
              src="/Section 10.png"
              alt="Digital Finance Illustration"
              className="w-full h-auto"
              onError={(e) => {
                // Fallback to SVG illustration if image doesn't load
                const target = e.target as HTMLImageElement
                target.style.display = 'none'
              }}
            />
          </div>

          {/* Partner Logos */}
          <div className="flex items-center justify-center gap-8 mt-12 pt-8 border-t border-accent/20">
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6 text-accent" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7v6c0 5.5 3.8 10.7 10 12 6.2-1.3 10-6.5 10-12V7l-10-5z"/>
              </svg>
              <span className="text-foreground/70 font-semibold text-sm">SOVERA</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6 text-accent" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="8" cy="12" r="3"/>
                <circle cx="16" cy="12" r="3"/>
                <path d="M8 12h8M12 8v8"/>
              </svg>
              <span className="text-foreground/70 font-semibold text-sm">Troon Lab</span>
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
