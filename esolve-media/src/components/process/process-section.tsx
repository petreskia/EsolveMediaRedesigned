"use client";

import { Check } from "lucide-react";

export default function ProcessSection() {
  return (
    <div className="w-full bg-gradient-to-b from-[#000000] to-[#000000] text-white min-h-screen">
      <div className="max-w-5xl mx-auto px-4 py-16 md:py-24">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 md:mb-24">
          The Process
        </h1>
        {/* Process Steps */}
        <div className="space-y-8 md:space-y-16">
          {/* Step 1 */}
          <div className="bg-[#111a25] rounded-lg p-8 md:p-10 flex flex-col md:flex-row gap-6 md:gap-10 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(77,181,255,0.15)] hover:bg-[#131d29]">
            <div className="flex-shrink-0 flex items-start">
              <div className="w-16 h-16 rounded-full bg-[#1a2c3d] flex items-center justify-center text-[#4db5ff] text-3xl font-bold transition-all duration-300 group-hover:bg-[#1e3249]">
                1
              </div>
            </div>
            <div className="flex-grow">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white">
                Audit
              </h2>
              <p className="text-gray-300 mb-8">
                We analyze your systems and processes to map out bottlenecks,
                inefficiencies and areas where AI & automation can create actual
                value.
              </p>
              <div>
                <h3 className="text-xl font-medium mb-4">What We Do</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="text-[#4db5ff] mt-1 h-5 w-5 flex-shrink-0" />
                    <span>Review and analysis of current processes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-[#4db5ff] mt-1 h-5 w-5 flex-shrink-0" />
                    <span>Identification of automation opportunities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-[#4db5ff] mt-1 h-5 w-5 flex-shrink-0" />
                    <span>Audit of current systems and processes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-[#4db5ff] mt-1 h-5 w-5 flex-shrink-0" />
                    <span>Strategic plan development</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Step 2 */}
          <div className="bg-[#111a25] rounded-lg p-8 md:p-10 flex flex-col md:flex-row gap-6 md:gap-10 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(77,181,255,0.15)] hover:bg-[#131d29]">
            <div className="flex-shrink-0 flex items-start">
              <div className="w-16 h-16 rounded-full bg-[#1a2c3d] flex items-center justify-center text-[#4db5ff] text-3xl font-bold">
                2
              </div>
            </div>
            <div className="flex-grow">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white">
                Build & Deploy
              </h2>
              <p className="text-gray-300 mb-8">
                We build your first automation and deploy fast, so you can start
                seeing value in days, not months.
              </p>

              <div>
                <h3 className="text-xl font-medium mb-4">What We Do</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="text-[#4db5ff] mt-1 h-5 w-5 flex-shrink-0" />
                    <span>Solution architecture development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-[#4db5ff] mt-1 h-5 w-5 flex-shrink-0" />
                    <span>Selection of optimal AI automation technologies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-[#4db5ff] mt-1 h-5 w-5 flex-shrink-0" />
                    <span>Integration planning with existing systems</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-[#111a25] rounded-lg p-8 md:p-10 flex flex-col md:flex-row gap-6 md:gap-10 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(77,181,255,0.15)] hover:bg-[#131d29]">
            <div className="flex-shrink-0 flex items-start">
              <div className="w-16 h-16 rounded-full bg-[#1a2c3d] flex items-center justify-center text-[#4db5ff] text-3xl font-bold">
                3
              </div>
            </div>
            <div className="flex-grow">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white">
                Scale & Optimize
              </h2>
              <p className="text-gray-300 mb-8">
                We continuously monitor, refine and scale your automation
                solutions to maximize ROI and business impact.
              </p>

              <div>
                <h3 className="text-xl font-medium mb-4">What We Do</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="text-[#4db5ff] mt-1 h-5 w-5 flex-shrink-0" />
                    <span>Performance monitoring and optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-[#4db5ff] mt-1 h-5 w-5 flex-shrink-0" />
                    <span>Continuous improvement of AI models</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-[#4db5ff] mt-1 h-5 w-5 flex-shrink-0" />
                    <span>Expansion to additional business processes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-[#4db5ff] mt-1 h-5 w-5 flex-shrink-0" />
                    <span>ROI tracking and reporting</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-[#111a25] rounded-lg p-8 md:p-10 flex flex-col md:flex-row gap-6 md:gap-10 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(77,181,255,0.15)] hover:bg-[#131d29]">
            <div className="flex-shrink-0 flex items-start">
              <div className="w-16 h-16 rounded-full bg-[#1a2c3d] flex items-center justify-center text-[#4db5ff] text-3xl font-bold">
                4
              </div>
            </div>
            <div className="flex-grow">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white">
                Support & Evolve
              </h2>
              <p className="text-gray-300 mb-8">
                We provide ongoing support and help your automation solutions
                evolve with your business needs and emerging technologies.
              </p>

              <div>
                <h3 className="text-xl font-medium mb-4">What We Do</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="text-[#4db5ff] mt-1 h-5 w-5 flex-shrink-0" />
                    <span>24/7 technical support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-[#4db5ff] mt-1 h-5 w-5 flex-shrink-0" />
                    <span>Regular system updates and maintenance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-[#4db5ff] mt-1 h-5 w-5 flex-shrink-0" />
                    <span>Technology roadmap development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-[#4db5ff] mt-1 h-5 w-5 flex-shrink-0" />
                    <span>Strategic business consulting</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
