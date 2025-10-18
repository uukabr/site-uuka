'use client'

import { Leadership } from "@/types/strapi";
import Image from "next/image";

interface LeadershipSectionProps {
  leadership: Leadership;
}

export function LeadershipSection({ leadership }: LeadershipSectionProps) {
  return (
    <section
      id="diretoria"
      className="pt-[72px]min-h-screen w-full bg-black text-white snap-start"
    >
      <div className="min-h-[calc(100vh-72px)] w-full flex flex-col justify-between px-4 md:px-12 lg:px-16">
        {/* Cards da diretoria */}
        <div className="flex flex-wrap justify-center items-end gap-[-32px] mt-8">
          {leadership.LeadershipCard.map((member, index) => {
            const imageUrl = `${process.env.NEXT_PUBLIC_URL}${member.photo.url}`;
            const alt = member.photo.alternativeText || member.photo.name;

            return (
              <div
                key={member.id}
                className={`relative flex flex-col items-center text-center mx-2 ${index === 0 ? 'z-10' : 'z-0'
                  }`}
              >
                <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 mb-4 grayscale rounded-lg overflow-hidden border border-gray-700">
                  <Image
                    src={imageUrl}
                    alt={alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-base sm:text-lg font-semibold uppercase">{member.name}</h3>
                <p className="text-xs sm:text-sm text-gray-400 uppercase">{member.position}</p>
              </div>
            );
          })}
        </div>

        {/* Título na parte inferior */}
        <div className="text-center mt-8 mb-6">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#F59F23] lowercase">
            diretoria
          </h2>
        </div>
      </div>
    </section>
  );
}
