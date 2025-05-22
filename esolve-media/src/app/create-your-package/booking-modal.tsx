"use client";

import { useState } from "react";

import { Button } from "@/components/create-your-package/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/create-your-package/ui/dialog";
import { Input } from "@/components/create-your-package/ui/input";
import { Label } from "@/components/create-your-package/ui/label";
import { Textarea } from "@/components/create-your-package/ui/text-area";
import { Badge } from "@/components/create-your-package/ui/badge";
import { CheckCircle } from "lucide-react";
import { PackageItem } from "@/data/create-package-data";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPackages: PackageItem[];
}

export default function BookingModal({
  isOpen,
  onClose,
  selectedPackages,
}: BookingModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/save-services", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          message,
          selectedPackages,
          type: "customPackage",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setIsSuccess(true);

      // Reset form after success
      setTimeout(() => {
        setIsSuccess(false);
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        onClose();
      }, 2000);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-10">
            <div className="rounded-full bg-green-100 p-3 mb-4">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Booking Successful!</h2>
            <p className="text-center text-muted-foreground">
              Thank you for your interest. We will contact you shortly to
              discuss your custom package.
            </p>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Book a Discovery Call</DialogTitle>
              <DialogDescription>
                Fill in your details below to schedule a call with our team to
                discuss your custom package.
              </DialogDescription>
            </DialogHeader>

            <div className="mb-6">
              <h3 className="font-medium mb-2">Your Selected Packages:</h3>
              <div className="bg-muted p-3 rounded-md max-h-[150px] overflow-y-auto">
                {selectedPackages.map((pkg) => (
                  <div key={pkg.id} className="mb-2 last:mb-0">
                    <div className="font-medium">{pkg.title}</div>
                    <div className="text-sm text-muted-foreground flex flex-wrap gap-2 items-center">
                      {pkg.quantity && (
                        <Badge variant="outline">Qty: {pkg.quantity}</Badge>
                      )}
                      {pkg.selectedChannels &&
                        pkg.selectedChannels.map((channel) => (
                          <Badge key={channel} variant="outline">
                            {channel}
                          </Badge>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">Additional Information</Label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={3}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="button" variant="outline" onClick={onClose}>
                  Cancel
                </Button>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Book Call"}
                </Button>
              </DialogFooter>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
