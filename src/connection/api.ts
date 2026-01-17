export async function strapiFetch<T>(
  endpoint: string,
  params?: URLSearchParams
): Promise<{ data: T | null; error?: string }> {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/${endpoint}${params ? `?${params}` : ""}`;

  try {
    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${process.env.STRAPI_TOKEN}` },
      cache: "reload",
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Erro na API:", errorText);
      return {
        data: null,
        error: `Erro ao conectar com a API: Erro ${res.status}`,
      };
    }

    const json = await res.json();
    return { data: json, error: undefined };
  } catch (err) {
    console.error("Erro inesperado:", err);
    return { data: null, error: `Erro inesperado: ${String(err)}` };
  }
}
