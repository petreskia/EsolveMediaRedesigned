import SectionContainer from "../layouts/SectionContainer";
import ProcessFlowDiagram from "./ProcessFlow";

export default function BrandDevelopersSection() {
  return (
    <SectionContainer>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-6 md:mb-10">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-2">
            You build the brand.
            <br />
            We build the backend.
          </h3>
        </div>
        <div className="space-y-4 mb-4">
          <p className="text-lg md:text-xl text-white/90 leading-relaxed">
            You are the visionary — crafting content, guiding clients, and
            building the frame for growth. But when it comes to tech setup,
            systems, funnels and follow-ups... it is not why you started.
          </p>

          <p className="text-lg md:text-xl text-white/90 leading-relaxed">
            We partner with brand developers like you to{" "}
            <span className="text-teal-400 font-medium">
              handle the entire backend:
            </span>{" "}
            funnels, automation, CRMs, booking flows, content systems & more —
            all built around your clients needs.
          </p>
        </div>
        <div className="text-center mb-10">
          <p className="text-lg md:text-xl text-white/90 mb-2">
            You focus on what you do best, we will handle what needs to be done.
          </p>
          <p className="text-lg md:text-xl text-white/90 italic">
            Remember what you are here to do:
          </p>
        </div>
        <div className="text-center mb-20">
          <h4 className="text-xl md:text-2xl lg:text-3xl text-teal-400/90 font-medium">
            Create impact for your clients.
          </h4>
        </div>
        {/* Process Flow Diagram */}
        <ProcessFlowDiagram />
      </div>
    </SectionContainer>
  );
}
