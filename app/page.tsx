import Header from "@/components/header"
import Hero from "@/components/hero"
import WhoWeAre from "@/components/who-we-are"
import ReachEfficiency from "@/components/reach-efficiency"
import WhySovfund from "@/components/why-sovfund"
import KeyInvestmentAreas from "@/components/key-investment-areas"
import PrecisionInvestments from "@/components/precision-investments"
import InvestmentApproach from "@/components/investment-approach"
import ExpertiseNetwork from "@/components/expertise-network"
import LeadershipTeam from "@/components/leadership-team"
import CompetitiveAdvantages from "@/components/competitive-advantages"
import StructuredGrowth from "@/components/structured-growth"
import Locations from "@/components/locations"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <Hero />
      <WhoWeAre />
      <ReachEfficiency />
      <WhySovfund />
      <KeyInvestmentAreas />
      <InvestmentApproach />
      <ExpertiseNetwork />
      <LeadershipTeam />
      <CompetitiveAdvantages />
      <StructuredGrowth />
      <Locations />
      <Footer />
    </main>
  )
}
