'use client'

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import React from "react";
import { MissionSection } from "./mission-section";
import { ValuesSection } from "./values-section";
import { VisionSection } from "./vision-section";

export function MissionVisionValuesSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  )

  return (
    <section className="h-screen w-full snap-start">
      <div className="h-screen w-full overflow-hidden">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[plugin.current]}
          className="w-full h-screen"
        >
          <CarouselContent className="h-screen -ml-0">
            <CarouselItem className="pl-0 h-screen">
              <MissionSection />
            </CarouselItem>
            <CarouselItem className="pl-0 h-screen">
              <VisionSection />
            </CarouselItem>
            <CarouselItem className="pl-0 h-screen">
              <ValuesSection />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
