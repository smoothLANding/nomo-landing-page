"use client";
import React from "react";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalTrigger } from "@/components/ui/animated-modal";

export function AnimatedModalDemo() {
  const images = [
    "https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=3425&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=3540&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1554931670-4ebfabf6e7a9?q=80&w=3387&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=2581&auto=format&fit=crop",
  ];

  return (
    <div className="py-20 flex items-center justify-center">
      <Modal>
        <ModalTrigger className="relative overflow-hidden bg-foreground text-background">
          <span className="transition duration-500">Book your flight</span>
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <h4 className="text-center text-lg font-bold md:text-2xl">Simple Modal</h4>
            <div className="mt-6 flex items-center justify-center gap-3">
              {images.slice(0, 3).map((image, idx) => (
                <div key={idx} className="overflow-hidden rounded-lg border">
                  <img src={image} alt="gallery" className="h-20 w-20 object-cover md:h-32 md:w-32" />
                </div>
              ))}
            </div>
            <ModalFooter className="gap-4">
              <button className="w-28 rounded-md border bg-gray-200 px-2 py-1 text-sm text-black dark:border-black dark:bg-black dark:text-white">Cancel</button>
              <button className="w-28 rounded-md border border-black bg-black px-2 py-1 text-sm text-white dark:border-white dark:bg-white dark:text-black">Confirm</button>
            </ModalFooter>
          </ModalContent>
        </ModalBody>
      </Modal>
    </div>
  );
}


