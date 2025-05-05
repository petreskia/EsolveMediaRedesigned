import Banner from "@/components/banner";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Banner />

      {/* Additional sections would go here */}
      <section className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Our Services</h2>
          {/* Content for the next section */}
          <div className="h-[800px]"></div>
        </div>
      </section>
    </main>
  );
}
