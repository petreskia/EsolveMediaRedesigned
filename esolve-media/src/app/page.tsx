import AboutUs from "../components/homepage/AboutUs";
import Banner from "../components/homepage/Banner";
import MarketingForBusinesses from "../components/homepage/MarketingForBusinesses";
import PersonalBranding from "../components/homepage/PersonalBranding";

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
