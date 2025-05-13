// "use client";

// import type React from "react";

// import { useState } from "react";
// import { Send, Check, ChevronDown, ChevronUp } from "lucide-react";
// import { serviceCategories } from "@/data/services-data";

// type FormStatus = "idle" | "submitting" | "success" | "error";

// interface FormData {
//   name: string;
//   email: string;
//   phone: string;
//   company: string;
//   message: string;
//   services: string[];
//   budget: string;
//   timeline: string;
// }

// export default function ContactForm() {
//   const [formStatus, setFormStatus] = useState<FormStatus>("idle");
//   const [formData, setFormData] = useState<FormData>({
//     name: "",
//     email: "",
//     phone: "",
//     company: "",
//     message: "",
//     services: [],
//     budget: "",
//     timeline: "",
//   });
//   const [expandedSections, setExpandedSections] = useState({
//     services: true,
//     projectDetails: true,
//   });

//   // Organize services by category for better display
//   const organizedServices = serviceCategories.map((category) => ({
//     id: category.id,
//     title: category.title,
//     services: category.services.map((service) => ({
//       id: service.id,
//       title: service.title,
//     })),
//   }));

//   const budgetOptions = [
//     { value: "under-1000", label: "Under $1,000" },
//     { value: "1000-5000", label: "$1,000 - $5,000" },
//     { value: "5000-10000", label: "$5,000 - $10,000" },
//     { value: "over-10000", label: "Over $10,000" },
//   ];

//   const timelineOptions = [
//     { value: "asap", label: "As soon as possible" },
//     { value: "1-month", label: "Within 1 month" },
//     { value: "3-months", label: "Within 3 months" },
//     { value: "flexible", label: "Flexible" },
//   ];

//   const handleInputChange = (
//     e: React.ChangeEvent<
//       HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
//     >
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleServiceToggle = (serviceId: string) => {
//     setFormData((prev) => ({
//       ...prev,
//       services: prev.services.includes(serviceId)
//         ? prev.services.filter((id) => id !== serviceId)
//         : [...prev.services, serviceId],
//     }));
//   };

//   const toggleSection = (section: keyof typeof expandedSections) => {
//     setExpandedSections((prev) => ({
//       ...prev,
//       [section]: !prev[section],
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setFormStatus("submitting");

//     try {
//       // Simulate API call
//       await new Promise((resolve) => setTimeout(resolve, 1500));

//       // In a real app, you would send the form data to your backend
//       // const response = await fetch('/api/contact', {
//       //   method: 'POST',
//       //   headers: { 'Content-Type': 'application/json' },
//       //   body: JSON.stringify(formData)
//       // });

//       // if (!response.ok) throw new Error('Failed to submit form');

//       setFormStatus("success");
//       console.log("Form submitted:", formData);

//       // Reset form after 3 seconds
//       setTimeout(() => {
//         setFormData({
//           name: "",
//           email: "",
//           phone: "",
//           company: "",
//           message: "",
//           services: [],
//           budget: "",
//           timeline: "",
//         });
//         setFormStatus("idle");
//       }, 3000);
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       setFormStatus("error");
//     }
//   };

//   if (formStatus === "success") {
//     return (
//       <div className="flex flex-col items-center justify-center py-12">
//         <div className="w-16 h-16 bg-teal-400/20 rounded-full flex items-center justify-center mb-6">
//           <Check className="h-8 w-8 text-teal-400" />
//         </div>
//         <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
//         <p className="text-white/70 text-center">
//           Thank you for reaching out. We will get back to you as soon as
//           possible.
//         </p>
//       </div>
//     );
//   }

//   return (
//     <form onSubmit={handleSubmit} className="space-y-8">
//       {/* Personal Information */}
//       <div className="space-y-4">
//         <h2 className="text-xl font-bold">Tell us about yourself</h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label
//               htmlFor="name"
//               className="block text-sm font-medium text-white/70 mb-1"
//             >
//               Name *
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleInputChange}
//               required
//               className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-teal-400/50"
//             />
//           </div>

//           <div>
//             <label
//               htmlFor="email"
//               className="block text-sm font-medium text-white/70 mb-1"
//             >
//               Email *
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleInputChange}
//               required
//               className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-teal-400/50"
//             />
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label
//               htmlFor="phone"
//               className="block text-sm font-medium text-white/70 mb-1"
//             >
//               Phone
//             </label>
//             <input
//               type="tel"
//               id="phone"
//               name="phone"
//               value={formData.phone}
//               onChange={handleInputChange}
//               className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-teal-400/50"
//             />
//           </div>

//           <div>
//             <label
//               htmlFor="company"
//               className="block text-sm font-medium text-white/70 mb-1"
//             >
//               Company
//             </label>
//             <input
//               type="text"
//               id="company"
//               name="company"
//               value={formData.company}
//               onChange={handleInputChange}
//               className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-teal-400/50"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Services Section */}
//       <div className="space-y-4 border-t border-neutral-800 pt-6">
//         <button
//           type="button"
//           onClick={() => toggleSection("services")}
//           className="flex items-center justify-between w-full text-left"
//         >
//           <h2 className="text-xl font-bold">
//             What services are you interested in?
//           </h2>
//           {expandedSections.services ? (
//             <ChevronUp className="h-5 w-5 text-teal-400" />
//           ) : (
//             <ChevronDown className="h-5 w-5 text-teal-400" />
//           )}
//         </button>

//         {expandedSections.services && (
//           <div className="mt-4 space-y-6">
//             {organizedServices.map((category) => (
//               <div key={category.id} className="space-y-2">
//                 <h3 className="text-md font-medium text-teal-400/80">
//                   {category.title}
//                 </h3>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                   {category.services.map((service) => (
//                     <div key={service.id} className="flex items-center">
//                       <input
//                         type="checkbox"
//                         id={`service-${service.id}`}
//                         checked={formData.services.includes(service.id)}
//                         onChange={() => handleServiceToggle(service.id)}
//                         className="h-4 w-4 rounded border-gray-600 text-teal-400 focus:ring-teal-400/50"
//                       />
//                       <label
//                         htmlFor={`service-${service.id}`}
//                         className="ml-2 text-sm text-white"
//                       >
//                         {service.title}
//                       </label>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Project Details Section */}
//       <div className="space-y-4 border-t border-neutral-800 pt-6">
//         <button
//           type="button"
//           onClick={() => toggleSection("projectDetails")}
//           className="flex items-center justify-between w-full text-left"
//         >
//           <h2 className="text-xl font-bold">Project Details</h2>
//           {expandedSections.projectDetails ? (
//             <ChevronUp className="h-5 w-5 text-teal-400" />
//           ) : (
//             <ChevronDown className="h-5 w-5 text-teal-400" />
//           )}
//         </button>

//         {expandedSections.projectDetails && (
//           <div className="mt-4 space-y-4">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <label
//                   htmlFor="budget"
//                   className="block text-sm font-medium text-white/70 mb-1"
//                 >
//                   Budget
//                 </label>
//                 <select
//                   id="budget"
//                   name="budget"
//                   value={formData.budget}
//                   onChange={handleInputChange}
//                   className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-teal-400/50"
//                 >
//                   <option value="">Select a budget range</option>
//                   {budgetOptions.map((option) => (
//                     <option key={option.value} value={option.value}>
//                       {option.label}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div>
//                 <label
//                   htmlFor="timeline"
//                   className="block text-sm font-medium text-white/70 mb-1"
//                 >
//                   Timeline
//                 </label>
//                 <select
//                   id="timeline"
//                   name="timeline"
//                   value={formData.timeline}
//                   onChange={handleInputChange}
//                   className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-teal-400/50"
//                 >
//                   <option value="">Select a timeline</option>
//                   {timelineOptions.map((option) => (
//                     <option key={option.value} value={option.value}>
//                       {option.label}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             </div>

//             <div>
//               <label
//                 htmlFor="message"
//                 className="block text-sm font-medium text-white/70 mb-1"
//               >
//                 Message *
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleInputChange}
//                 required
//                 rows={4}
//                 className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-teal-400/50"
//                 placeholder="Tell us about your project or requirements..."
//               ></textarea>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Submit Button */}
//       <button
//         type="submit"
//         disabled={formStatus === "submitting"}
//         className="w-full py-3 px-6 bg-teal-400/80 hover:bg-teal-400 text-black font-medium rounded-full transition-colors flex items-center justify-center"
//       >
//         {formStatus === "submitting" ? (
//           <>
//             <svg
//               className="animate-spin -ml-1 mr-2 h-4 w-4 text-black"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//             >
//               <circle
//                 className="opacity-25"
//                 cx="12"
//                 cy="12"
//                 r="10"
//                 stroke="currentColor"
//                 strokeWidth="4"
//               ></circle>
//               <path
//                 className="opacity-75"
//                 fill="currentColor"
//                 d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//               ></path>
//             </svg>
//             Sending...
//           </>
//         ) : (
//           <>
//             Send Message <Send className="ml-2 h-4 w-4" />
//           </>
//         )}
//       </button>

//       {formStatus === "error" && (
//         <div className="text-red-400 text-sm text-center">
//           There was an error submitting your message. Please try again.
//         </div>
//       )}
//     </form>
//   );
// }
