"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
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
import Button from "@/components/contact/ui/button";
import { ArrowRight, Check, Loader2 } from "lucide-react";

// Form schema with validation
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  company: z.string().optional(),
  projectType: z.string().min(2, {
    message: "Please specify what type of project you're interested in.",
  }),
  message: z.string().optional(),
  // **FIXED THIS LINE:**
  agreeToTerms: z.boolean().refine((val) => val === true, {
    message: "You must agree to our terms to request portfolio access.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

export default function PortfolioRequestPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Initialize form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      projectType: "",
      message: "",
      agreeToTerms: false, // Default to false
    },
  });

  // Handle form submission
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setError(null);
    setIsSuccess(false); // Reset success state on new submission

    try {
      const response = await fetch("/api/portfolio-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || "Failed to submit portfolio request"
        );
      }

      setIsSuccess(true);
      form.reset({ agreeToTerms: false }); // Reset all fields, specifically setting agreeToTerms to false
      // You don't need the separate form.setValue("agreeToTerms", false); line anymore
      // if you use form.reset() with a default value.
      // If you prefer to reset all other fields to their initial default, but specifically set agreeToTerms: false:
      // form.reset({ ...form.formState.defaultValues, agreeToTerms: false });
      // But usually just form.reset() will use the initial defaultValues, so setting default to false is key.
    } catch (err: unknown) {
      // Changed 'any' to 'unknown' for better TypeScript practice
      // Improved error handling type
      if (err instanceof Error) {
        setError(
          err.message || "Something went wrong. Please try again later."
        );
      } else {
        setError("An unknown error occurred. Please try again later.");
      }
      console.error("Error submitting form:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-black text-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-16 md:py-24">
        {!isSuccess ? (
          <>
            <div className="mb-12 md:mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Portfolio Access
              </h1>
              <p className="text-lg text-white/70">
                Our portfolio showcases our best work across various industries
                and project types. Fill out this form to request access to our
                complete portfolio.
              </p>
            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your name"
                            {...field}
                            className="bg-neutral-800/50 border-neutral-700 focus:border-[#4db5ff]"
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
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your email"
                            {...field}
                            className="bg-neutral-800/50 border-neutral-700 focus:border-[#4db5ff]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company (Optional)</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your company"
                          {...field}
                          className="bg-neutral-800/50 border-neutral-700 focus:border-[#4db5ff]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="projectType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        What type of project are you interested in?
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="E.g., Website design, Branding, Marketing campaign"
                          {...field}
                          className="bg-neutral-800/50 border-neutral-700 focus:border-[#4db5ff]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Additional Information (Optional)</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us more about your project or specific examples you'd like to see..."
                          {...field}
                          className="bg-neutral-800/50 border-neutral-700 focus:border-[#4db5ff] min-h-[120px]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="agreeToTerms"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="data-[state=checked]:bg-[#4db5ff] data-[state=checked]:border-[#4db5ff]"
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>
                          I agree that my information will be used to contact me
                          about my request and other relevant services.
                        </FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />

                {error && <p className="text-red-500 text-sm">{error}</p>}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center gap-2 py-3 px-6 bg-[#4db5ff]/80 hover:bg-[#4db5ff] text-black font-medium rounded-full transition-colors"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      Request Access
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </>
        ) : (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-[#4db5ff]/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="h-8 w-8 text-[#4db5ff]" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Request Received</h2>
            <p className="text-lg text-white/70 mb-8 max-w-md mx-auto">
              Thank you for your interest in our portfolio. We will review your
              request and get back to you within 24 hours.
            </p>
            <Button
              onClick={() => (window.location.href = "/services")}
              className="py-3 px-6 bg-neutral-800 hover:bg-neutral-700 text-white font-medium rounded-full transition-colors"
            >
              Back to Services
            </Button>
          </div>
        )}
      </div>
    </main>
  );
}
