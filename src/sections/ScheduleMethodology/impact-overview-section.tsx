"use client";

import { instrumentSans } from "@/app/layout";
import { Impact } from "@/types/strapi";
import Image from "next/image";

type ImpactOverviewSectionProps = {
  impact: Impact;
};

export function ImpactOverviewSection({ impact }: ImpactOverviewSectionProps) {
  const mentors = impact?.mentorsTrained ?? 0;
  const mentees = impact?.menteesInCurrentCycle ?? 0;
  const hours = impact?.totalMentoringHours ?? 0;
  const cycles = impact?.totalCyclesCompleted ?? 0;
  const map = impact?.impactMapImage ?? null;

  const formattedHours = new Intl.NumberFormat("pt-BR").format(hours);

  return (
    <section
      id="impacto"
      className="pt-[72px] h-screen w-full bg-white text-black"
    >
      <div className="h-[calc(100vh-72px)] w-full flex flex-col lg:flex-row items-center justify-between p-6 md:p-12 lg:p-16 gap-8">
        <div className="w-full lg:w-1/2 flex flex-col gap-8">
          <div className="max-w-2xl space-y-2">
            <h2
              className={`${instrumentSans.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-black lg:mt-10`}
            >
              Uuka em números
            </h2>

            <h3 className="text-3xl">O que já alcançamos?</h3>

            <p className="mt-2 text-sm">
              Mentoria de carreira para profissionais negros
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 max-w-2xl">
            <div className="flex flex-col items-start">
              <span className="text-[72px] leading-[1] font-bold">
                {mentors}
              </span>
              <p className="mt-2 text-sm">
                pessoas mentoras capacitadas gratuitamente pela Uuka.
              </p>
            </div>

            <div className="flex flex-col items-start">
              <span className="text-[72px] leading-[1] font-bold">
                {mentees}
              </span>
              <p className="mt-2 text-sm">
                pessoas mentoradas no ciclo {impact?.currentCycleNumber ?? ""}
              </p>
            </div>

            <div className="flex flex-col items-start">
              <span className="text-[72px] leading-[1] font-bold">
                {formattedHours}
              </span>
              <p className="mt-2 text-sm">
                horas de mentorias realizadas desde o início do projeto.
              </p>
            </div>

            <div className="flex flex-col items-start">
              <span className="text-[72px] leading-[1] font-bold">
                {cycles}
              </span>
              <p className="mt-2 text-sm">
                ciclos de mentorias desde a fundação
              </p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex items-center justify-center">
          {map ? (
            <div className="w-full max-w-[650px]">
              <Image
                src={map.url}
                alt={map.alternativeText || map.name}
                width={map.width}
                height={map.height}
                className="w-full h-auto object-contain"
              />
            </div>
          ) : (
            <div className="w-full max-w-[650px] h-96 bg-gray-100 flex items-center justify-center">
              <p className="text-gray-500">Mapa indisponível</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
