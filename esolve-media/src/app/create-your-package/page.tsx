"use client";

import { useState } from "react";

import { Button } from "@/components/create-your-package/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/create-your-package/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/create-your-package/ui/tabs";
import { Badge } from "@/components/create-your-package/ui/badge";
import { CheckCircle2, ChevronRight, PlusCircle } from "lucide-react";
import BookingModal from "./booking-modal";
import { createPackageData, PackageItem } from "@/data/create-package-data";

export default function CreateYourPackage() {
  const [selectedPackages, setSelectedPackages] = useState<PackageItem[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const togglePackageSelection = (pkg: PackageItem) => {
    // For packages with quantity, we need to check if it's already selected
    if (pkg.hasQuantityOption) {
      const existingIndex = selectedPackages.findIndex((p) => p.id === pkg.id);
      if (existingIndex >= 0) {
        // Remove it if already selected
        setSelectedPackages((prev) => prev.filter((p) => p.id !== pkg.id));
      } else {
        // Add it with default quantity
        setSelectedPackages((prev) => [
          ...prev,
          { ...pkg, quantity: pkg.minQuantity || 5 },
        ]);
      }
    } else {
      // For regular packages, just toggle selection
      const isSelected = selectedPackages.some((p) => p.id === pkg.id);
      if (isSelected) {
        setSelectedPackages((prev) => prev.filter((p) => p.id !== pkg.id));
      } else {
        setSelectedPackages((prev) => [...prev, pkg]);
      }
    }
  };

  const updatePackageQuantity = (packageId: string, quantity: number) => {
    setSelectedPackages((prev) =>
      prev.map((pkg) => (pkg.id === packageId ? { ...pkg, quantity } : pkg))
    );
  };

  const updateSelectedChannels = (packageId: string, channel: string) => {
    setSelectedPackages((prev) =>
      prev.map((pkg) => {
        if (pkg.id === packageId) {
          const currentChannels = pkg.selectedChannels || [];
          const updatedChannels = currentChannels.includes(channel)
            ? currentChannels.filter((c) => c !== channel)
            : [...currentChannels, channel];

          return { ...pkg, selectedChannels: updatedChannels };
        }
        return pkg;
      })
    );
  };

  const isPackageSelected = (packageId: string) => {
    return selectedPackages.some((pkg) => pkg.id === packageId);
  };

  return (
    <div className="container mx-auto py-12 px-4 mt-10 xl:mt-25">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Create Your Custom Package</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Select the services that best fit your needs and create a tailored
          package for your business growth.
        </p>
      </div>

      <Tabs defaultValue={createPackageData[0].id} className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-15 lg:mb-8">
          {createPackageData.map((category) => (
            <TabsTrigger
              key={category.id}
              value={category.id}
              className="text-sm md:text-base"
            >
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {createPackageData.map((category) => (
          <TabsContent
            key={category.id}
            value={category.id}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.packages.map((pkg) => (
                <PackageCard
                  key={pkg.id}
                  pkg={pkg}
                  isSelected={isPackageSelected(pkg.id)}
                  onSelect={() => togglePackageSelection(pkg)}
                  onQuantityChange={(quantity) =>
                    updatePackageQuantity(pkg.id, quantity)
                  }
                  onChannelToggle={(channel) =>
                    updateSelectedChannels(pkg.id, channel)
                  }
                  selectedPackage={selectedPackages.find(
                    (p) => p.id === pkg.id
                  )}
                />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      {selectedPackages.length > 0 && (
        <div className="mt-12 bg-muted p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Your Selected Packages</h2>
          <div className="space-y-4">
            {selectedPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="flex justify-between items-center bg-card p-4 rounded-md shadow-sm"
              >
                <div>
                  <h3 className="font-medium">{pkg.title}</h3>
                  {pkg.quantity && (
                    <p className="text-sm text-muted-foreground">
                      Quantity: {pkg.quantity}
                    </p>
                  )}
                  {pkg.selectedChannels && pkg.selectedChannels.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-1">
                      {pkg.selectedChannels.map((channel) => (
                        <Badge
                          key={channel}
                          variant="outline"
                          className="text-xs"
                        >
                          {channel}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => togglePackageSelection(pkg)}
                  className="text-destructive hover:text-destructive"
                >
                  Remove
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-12 text-center bg-muted/50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-2">
          Ready to Transform Your Business?
        </h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Book a discovery call with our experts to discuss your selected
          packages and how we can help you achieve your goals.
        </p>
        <Button
          size="lg"
          onClick={() => setIsModalOpen(true)}
          disabled={selectedPackages.length === 0}
          className="gap-2"
        >
          Book a Discovery Call <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedPackages={selectedPackages}
      />
    </div>
  );
}

interface PackageCardProps {
  pkg: PackageItem;
  isSelected: boolean;
  onSelect: () => void;
  onQuantityChange: (quantity: number) => void;
  onChannelToggle: (channel: string) => void;
  selectedPackage?: PackageItem;
}

function PackageCard({
  pkg,
  isSelected,
  onSelect,
  onQuantityChange,
  onChannelToggle,
  selectedPackage,
}: PackageCardProps) {
  return (
    <Card
      className={`transition-all ${isSelected ? "ring-2 ring-primary" : ""}`}
    >
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">{pkg.title}</CardTitle>
            {pkg.subtitle && <CardDescription>{pkg.subtitle}</CardDescription>}
          </div>
          {isSelected && (
            <Badge className="custom-green font-bold text-primary-foreground">
              Selected
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <ul className="space-y-2">
          {pkg.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {pkg.hasQuantityOption && isSelected && (
          <div className="mt-4">
            <label className="block text-sm font-medium mb-2">
              Choose number of videos per month:
            </label>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  const currentQuantity =
                    selectedPackage?.quantity || pkg.minQuantity || 5;
                  if (currentQuantity > (pkg.minQuantity || 5)) {
                    onQuantityChange(currentQuantity - 1);
                  }
                }}
                disabled={
                  (selectedPackage?.quantity || pkg.minQuantity || 5) <=
                  (pkg.minQuantity || 5)
                }
              >
                -
              </Button>
              <span className="w-8 text-center">
                {selectedPackage?.quantity || pkg.minQuantity || 5}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  const currentQuantity =
                    selectedPackage?.quantity || pkg.minQuantity || 5;
                  if (currentQuantity < (pkg.maxQuantity || 20)) {
                    onQuantityChange(currentQuantity + 1);
                  }
                }}
                disabled={
                  (selectedPackage?.quantity || pkg.minQuantity || 5) >=
                  (pkg.maxQuantity || 20)
                }
              >
                +
              </Button>
            </div>
          </div>
        )}

        {pkg.channels && isSelected && (
          <div className="mt-4">
            <label className="block text-sm font-medium mb-2">
              Choose channels:
            </label>
            <div className="grid grid-cols-2 gap-2">
              {pkg.channels.map((channel) => (
                <div key={channel} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`${pkg.id}-${channel}`}
                    checked={
                      selectedPackage?.selectedChannels?.includes(channel) ||
                      false
                    }
                    onChange={() => onChannelToggle(channel)}
                    className="mr-2"
                  />
                  <label htmlFor={`${pkg.id}-${channel}`} className="text-sm">
                    {channel}
                  </label>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button
          onClick={onSelect}
          variant={isSelected ? "outline" : "default"}
          className="w-full gap-2"
        >
          {isSelected ? (
            <>Remove</>
          ) : (
            <>
              Add to Package <PlusCircle className="h-4 w-4" />
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}
