import { strapiFetch } from "@/connection/api";
import { ApiResponse } from "@/types/strapi";
import { ErrorMessage } from "@/utils/error-message";
import { Loader2 } from "lucide-react";
import { Metadata } from "next";
import { Suspense } from "react";
import { HomeContent } from "./_components/home-content";

type LandingPageResult = {
  landingPage: ApiResponse["data"] | null;
  error?: string;
};

async function fetchLandingPage(): Promise<LandingPageResult> {
  const params = new URLSearchParams({
    "populate[Header]": "*",
    "populate[About][populate][imageHero][populate]": "image",
    "populate[About][populate][Schedule]": "*",
    "populate[About][populate][impact][populate]": "*",
    "populate[Testimonials][populate]": "*",
    "populate[Supporters][populate]": "*",
    "populate[Contact][populate][ContactList][populate]": "icon",
    "populate[Partnerships]": "*",
    "populate[Leadership][populate][LeadershipCard][populate]": "photo",
  });

  const { data, error } = await strapiFetch<ApiResponse>(
    "landing-page",
    params
  );
  return { landingPage: data?.data ?? null, error };
}

export const metadata: Metadata = {
  title: "UUKA",
  openGraph: {
    title: "UUKA",
    type: "website",
  },
};

export default async function Home() {
  const { landingPage, error } = await fetchLandingPage();

  if (!landingPage) {
    return (
      <div className="p-6">
        <ErrorMessage
          title="Ops! Algo deu errado."
          message={
            <>
              Não foi possível carregar os dados da página no momento. Por
              favor, tente novamente mais tarde.
              <br />
              Se o problema persistir, entre em contato.
              <br />
              <br />
              {error ? ` (${error})` : ""}
            </>
          }
        />
      </div>
    );
  }

  return (
    <Suspense
      fallback={
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center">
          <Loader2 className="w-14 h-14 text-[#F59F23] animate-spin" />
        </div>
      }
    >
      <HomeContent landingPage={landingPage} />
    </Suspense>
  );
}
