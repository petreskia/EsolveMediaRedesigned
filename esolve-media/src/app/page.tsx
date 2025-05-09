import AboutUs from "../components/AboutUs";
import Banner from "../components/Banner";
import MarketingForBusinesses from "../components/MarketingForBusinesses";
import PersonalBranding from "../components/PersonalBranding";

export default function Home() {
  return (
    <main>
      <Banner />
      <AboutUs />
      <PersonalBranding />
      <MarketingForBusinesses />
    </main>
  );
}
