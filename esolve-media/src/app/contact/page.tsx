"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/contact/ui/accordion";
import Button from "@/components/contact/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/contact/ui/form";
import { Input } from "@/components/contact/ui/input";
import { Textarea } from "@/components/contact/ui/text-area";
import { Checkbox } from "@/components/contact/ui/checkbox";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/contact/ui/radio-group";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/contact/ui/tabs";
import {
  webDesignServices,
  graphicDesignServices,
  systemsServices,
  shortFormServices,
  managementServices,
} from "@/data/services-data";
import {
  personalBrandingPackages,
  businessMarketingPackages,
  hyperPersonalizedAIPackages,
} from "@/data/packages-data";
import type { PackageData } from "@/types/package-types";
import SectionHeader from "@/components/layouts/SectionHeader";

// Combine all services for easier access
const allServices = [
  ...webDesignServices,
  ...graphicDesignServices,
  ...systemsServices,
  ...shortFormServices,
  ...managementServices,
];

// Form schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().optional(),
  budget: z.enum(["under-1k", "1k-5k", "5k-10k", "10k-plus", "not-sure"]),
  services: z.array(z.string()).optional(),
  packageType: z
    .enum(["personal-branding", "business-marketing", "ai-outreach", "none"])
    .optional(),
  packageId: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactPage() {
  const [selectedPackageType, setSelectedPackageType] =
    useState<string>("personal-branding");
  const [selectedPackageId, setSelectedPackageId] = useState<string | null>(
    null
  );
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  // Initialize form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
      budget: "not-sure",
      services: [],
      packageType: "personal-branding",
      packageId: undefined,
    },
  });

  // Handle form submission
  const onSubmit = (data: FormValues) => {
    console.log("Form submitted:", data);
    // Here you would typically send the data to your backend
    alert("Form submitted successfully! Check console for details.");
  };

  // Handle service selection
  const toggleService = (serviceId: string) => {
    setSelectedServices((prev) => {
      const newSelected = prev.includes(serviceId)
        ? prev.filter((id) => id !== serviceId)
        : [...prev, serviceId];
      form.setValue("services", newSelected, { shouldValidate: true });
      return newSelected;
    });
  };

  // Handle package selection
  const selectPackage = (packageType: string, packageId: string) => {
    setSelectedPackageType(packageType);
    setSelectedPackageId(packageId);

    // Update form values
    form.setValue(
      "packageType",
      packageType as
        | "personal-branding"
        | "business-marketing"
        | "ai-outreach"
        | "none"
    );

    form.setValue("packageId", packageId);
  };

  // Get package data based on type
  const getPackagesByType = (packageType: string): PackageData[] => {
    switch (packageType) {
      case "personal-branding":
        return personalBrandingPackages;
      case "business-marketing":
        return businessMarketingPackages;
      case "ai-outreach":
        return hyperPersonalizedAIPackages;
      default:
        return [];
    }
  };

  return (
    <main className="w-full mb-16 px-4 md:px-8 lg:px-16 bg-black">
      <div className=" max-w-7xl mx-auto md:p-20">
        <SectionHeader
          heading="Contact"
          subheading="Tell us about your project and we will get back to you"
        />

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name*</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your name"
                        {...field}
                        className="bg-neutral-800 border-neutral-700"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email*</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your email"
                        {...field}
                        className="bg-neutral-800 border-neutral-700"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone (optional)</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your phone number"
                        {...field}
                        className="bg-neutral-800 border-neutral-700"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company (optional)</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your company"
                        {...field}
                        className="bg-neutral-800 border-neutral-700"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Budget */}
            <FormField
              control={form.control}
              name="budget"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Budget Range</FormLabel>
                  <FormControl>
                    <RadioGroup
                      value={field.value}
                      onValueChange={field.onChange}
                      className="flex flex-wrap gap-4 mt-5"
                    >
                      <FormItem className="flex items-center space-x-2 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="under-1k" id="under-1k" />
                        </FormControl>
                        <FormLabel
                          htmlFor="under-1k"
                          className="font-normal cursor-pointer"
                        >
                          Under $1,000
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-2 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="1k-5k" id="1k-5k" />
                        </FormControl>
                        <FormLabel
                          htmlFor="1k-5k"
                          className="font-normal cursor-pointer"
                        >
                          $1,000 - $5,000
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-2 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="5k-10k" id="5k-10k" />
                        </FormControl>
                        <FormLabel
                          htmlFor="5k-10k"
                          className="font-normal cursor-pointer"
                        >
                          $5,000 - $10,000
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-2 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="10k-plus" id="10k-plus" />
                        </FormControl>
                        <FormLabel
                          htmlFor="10k-plus"
                          className="font-normal cursor-pointer"
                        >
                          $10,000+
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-2 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="not-sure" id="not-sure" />
                        </FormControl>
                        <FormLabel
                          htmlFor="not-sure"
                          className="font-normal cursor-pointer"
                        >
                          Not sure yet
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Services & Packages Selection */}
            <Accordion type="single" collapsible className="w-full">
              {/* Services Section */}
              <AccordionItem value="services">
                <AccordionTrigger className="text-xl font-medium">
                  Select Services
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
                    {allServices.map((service) => (
                      <div
                        key={service.id}
                        className={`p-3 md:p-4 rounded-lg cursor-pointer transition-all text-sm md:text-base ${
                          selectedServices.includes(service.id)
                            ? "bg-teal-400/20 border border-teal-400/50"
                            : "bg-neutral-800 border border-neutral-700 hover:bg-neutral-700"
                        }`}
                      >
                        <div className="flex items-start gap-2 md:gap-3">
                          <Checkbox
                            id={`service-${service.id}`}
                            checked={selectedServices.includes(service.id)}
                            onCheckedChange={() => toggleService(service.id)}
                            className="mt-0.5 md:mt-1 h-3.5 w-3.5 md:h-4 md:w-4"
                          />
                          <div className="flex-1">
                            <label
                              htmlFor={`service-${service.id}`}
                              className="font-medium cursor-pointer block mb-0.5 md:mb-1 text-xs md:text-sm"
                            >
                              {service.title}
                            </label>
                            <p className="text-xs md:text-sm text-white/70 line-clamp-2">
                              {service.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Packages Section */}
              <AccordionItem value="packages">
                <AccordionTrigger className="text-xl font-medium">
                  Select a Package
                </AccordionTrigger>
                <AccordionContent>
                  <Tabs
                    defaultValue="personal-branding"
                    className="w-full mt-4"
                    onValueChange={setSelectedPackageType}
                  >
                    <TabsList className="grid grid-cols-3 mb-6">
                      <TabsTrigger value="personal-branding">
                        Personal Branding
                      </TabsTrigger>
                      <TabsTrigger value="business-marketing">
                        Business Marketing
                      </TabsTrigger>
                      <TabsTrigger value="ai-outreach">AI Outreach</TabsTrigger>
                    </TabsList>

                    {[
                      "personal-branding",
                      "business-marketing",
                      "ai-outreach",
                    ].map((packageType) => (
                      <TabsContent
                        key={packageType}
                        value={packageType}
                        className="mt-0"
                      >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {getPackagesByType(packageType).map((pkg) => (
                            <div
                              key={pkg.id}
                              className={`p-3 md:p-4 rounded-lg cursor-pointer transition-all text-sm md:text-base ${
                                selectedPackageType === packageType &&
                                selectedPackageId === pkg.id
                                  ? "bg-teal-400/20 border border-teal-400/50"
                                  : "bg-neutral-800 border border-neutral-700 hover:bg-neutral-700"
                              }`}
                              onClick={() => selectPackage(packageType, pkg.id)}
                            >
                              <div className="flex items-start gap-2 md:gap-3">
                                <input
                                  type="radio"
                                  name={`package-${packageType}`}
                                  id={`package-${packageType}-${pkg.id}`}
                                  value={pkg.id}
                                  checked={selectedPackageId === pkg.id}
                                  onChange={() =>
                                    selectPackage(packageType, pkg.id)
                                  }
                                  className="mt-0.5 md:mt-1 h-3.5 w-3.5 md:h-4 md:w-4 accent-teal-400"
                                />
                                <div className="flex-1">
                                  <label
                                    htmlFor={`package-${packageType}-${pkg.id}`}
                                    className="font-medium cursor-pointer block mb-0.5 md:mb-1 text-xs md:text-sm"
                                  >
                                    {pkg.title} {pkg.price && `- $${pkg.price}`}
                                  </label>
                                  <p className="text-xs md:text-sm text-white/70 mb-1 md:mb-2">
                                    {pkg.subtitle}
                                  </p>
                                  <ul className="text-xs md:text-sm text-white/70 space-y-0.5 md:space-y-1">
                                    {pkg.features
                                      .slice(0, 2)
                                      .map((feature, idx) => (
                                        <li
                                          key={idx}
                                          className="flex items-start gap-1 md:gap-2"
                                        >
                                          <span className="text-teal-400 mt-0.5">
                                            ✓
                                          </span>
                                          <span className="line-clamp-1">
                                            {feature.title}
                                          </span>
                                        </li>
                                      ))}
                                    {pkg.features.length > 2 && (
                                      <li className="text-xs text-white/50 pl-3 md:pl-5">
                                        + {pkg.features.length - 2} more
                                        features
                                      </li>
                                    )}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          ))}
                          <div
                            className={`p-3 md:p-4 rounded-lg cursor-pointer transition-all ${
                              selectedPackageType === packageType &&
                              selectedPackageId === "none"
                                ? "bg-teal-400/20 border border-teal-400/50"
                                : "bg-neutral-800 border border-neutral-700 hover:bg-neutral-700"
                            }`}
                            onClick={() => selectPackage(packageType, "none")}
                          >
                            <div className="flex items-start gap-2 md:gap-3">
                              <input
                                type="radio"
                                name={`package-${packageType}`}
                                id={`package-${packageType}-none`}
                                value="none"
                                checked={selectedPackageId === "none"}
                                onChange={() =>
                                  selectPackage(packageType, "none")
                                }
                                className="mt-0.5 md:mt-1 h-3.5 w-3.5 md:h-4 md:w-4 accent-teal-400"
                              />
                              <div>
                                <label
                                  htmlFor={`package-${packageType}-none`}
                                  className="font-medium cursor-pointer block text-xs md:text-sm"
                                >
                                  I am not interested in a package
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </TabsContent>
                    ))}
                  </Tabs>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* Message */}
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Additional Details</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us more about your project, goals, or any specific requirements..."
                      {...field}
                      className="bg-neutral-800 border-neutral-700 min-h-[120px]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full md:w-auto bg-teal-400 hover:bg-teal-500 text-black"
            >
              Send Message
            </Button>
          </form>
        </Form>
      </div>
    </main>
  );
}
