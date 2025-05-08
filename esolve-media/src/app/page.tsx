import AboutUs from "@/components/AboutUs";
import Banner from "@/components/Banner";
import MarketingForBusinesses from "@/components/MarketingForBusinesses";
import Navbar from "@/components/Navbar";
import PersonalBranding from "@/components/PersonalBranding";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Banner />
      <AboutUs />
      <PersonalBranding />
      <MarketingForBusinesses />
    </main>
  );
}
