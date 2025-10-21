'use client'

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Leadership } from "@/types/strapi";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useCallback, useState } from "react";

interface LeadershipSectionProps {
  leadership: Leadership;
}

export function LeadershipSection({ leadership }: LeadershipSectionProps) {
  const [isPaused, setIsPaused] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setIsPaused(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsPaused(false);
  }, []);

  return (
    <section
      id="diretoria"
      className="pt-[72px] min-h-screen w-full bg-black text-white snap-start"
    >
      <div className="min-h-[calc(100vh-72px)] w-full flex flex-col justify-between px-4 md:px-12 lg:px-16 pb-16">
        <div className="flex-1 flex items-center justify-center">
          <div
            className="w-full max-w-6xl"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Carousel
              opts={{
                align: "start",
                loop: true,
                dragFree: true,
              }}
              plugins={[
                Autoplay({
                  delay: 3000,
                  stopOnInteraction: false,
                  stopOnMouseEnter: true,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {leadership.LeadershipCard.map((member, index) => {
                  const imageUrl = `${process.env.NEXT_PUBLIC_URL}${member.photo.url}`;
                  const alt = member.photo.alternativeText || member.photo.name;

                  return (
                    <CarouselItem key={member.id} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                      <div className="relative group cursor-pointer">
                        <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 rounded-lg overflow-hidden">
                          <Image
                            src={imageUrl}
                            alt={alt}
                            fill
                            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                            quality={90}
                            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                          />

                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent group-hover:from-black/20 transition-all duration-700" />

                          <div className="absolute bottom-0 left-0 right-0 p-4">
                            <div className="bg-black/30 rounded-lg p-3 group-hover:bg-black/40 transition-all duration-700">
                              <h3 className="text-sm sm:text-base font-bold uppercase text-white drop-shadow-lg">
                                {member.name}
                              </h3>
                              <p className="text-xs sm:text-sm text-white/90 uppercase drop-shadow-lg">
                                {member.position}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
            </Carousel>
          </div>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-[#F59F23] lowercase">
          diretoria
        </h2>
      </div>
    </section>
  );
}
