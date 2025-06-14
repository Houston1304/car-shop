import { ApiResponse, SearchParams } from "./types";

export async function fetchCars(params: SearchParams): Promise<ApiResponse> {
  const { _page = "1", _sort, _order } = params;

  const baseUrl =
    typeof window !== "undefined"
      ? window.location.origin
      : process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const url = new URL(`${baseUrl}/api/cars`);
  url.searchParams.set("_limit", "12");
  url.searchParams.set("_page", _page);

  if (_sort) url.searchParams.set("_sort", _sort);
  if (_order) url.searchParams.set("_order", _order);

  const res = await fetch(url.toString());

  if (!res.ok) {
    throw new Error(`Failed to fetch cars: ${res.statusText}`);
  }

  return res.json();
}
