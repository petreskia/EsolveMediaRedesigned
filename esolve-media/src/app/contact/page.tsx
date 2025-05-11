import ContactForm from "@/components/contact-form";
import SectionHeader from "@/components/SectionHeader";

export default function ContactPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 md:px-8 py-16 md:py-20 lg:py-24">
        {/* Header */}
        <SectionHeader
          heading="CONTACT US"
          subheading="Tell us about your project and goals"
        />

        {/* Form Section */}
        <div className="mt-12">
          <div className="bg-neutral-900/50 rounded-3xl p-6 md:p-8 lg:p-10 backdrop-blur-sm">
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}
