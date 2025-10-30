'use client'

import { Linkedin, Mail } from "lucide-react"

export default function LeadershipTeam() {
  const team = [
    {
      name: "Mohammad",
      role: "General Partner",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      linkedin: "#",
      email: "mailto:mohammad@sovfund.com"
    },
    {
      name: "Syed Waji Bakhari",
      role: "General Partner",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      linkedin: "#",
      email: "mailto:syed@sovfund.com"
    },
    {
      name: "Paul Dabe",
      role: "General Partner",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      linkedin: "#",
      email: "mailto:paul@sovfund.com"
    },
    {
      name: "Devid Mancuso",
      role: "General Partner",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
      linkedin: "#",
      email: "mailto:devid@sovfund.com"
    },
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 sm:mb-16 text-center">
          Our <span className="text-accent">Leadership</span> Team
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {team.map((member, i) => (
            <div key={i} className="text-center group">
              <div className="relative mb-6">
                <div className="border-4 border-accent rounded-2xl overflow-hidden aspect-square mx-auto max-w-[200px] bg-gradient-to-br from-accent/20 to-accent/5">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = 'none'
                    }}
                  />
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-accent mb-1">{member.name}</h3>
              <p className="text-foreground/70 text-sm sm:text-base mb-4">{member.role}</p>

              <div className="flex items-center justify-center gap-3">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-foreground rounded-full flex items-center justify-center hover:bg-accent transition-colors group"
                  aria-label={`${member.name} LinkedIn`}
                >
                  <Linkedin className="w-4 h-4 text-background" />
                </a>
                <a
                  href={member.email}
                  className="w-8 h-8 bg-foreground rounded-full flex items-center justify-center hover:bg-accent transition-colors group"
                  aria-label={`Email ${member.name}`}
                >
                  <Mail className="w-4 h-4 text-background" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
