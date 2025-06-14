export interface Car {
  vin: string;
  id: number;
  mark_id: string;
  folder_id: string;
  price: number;
  year: number;
  run: number;
  engine_power: number;
  engine_type: "petrol" | "diesel";
  transmission: "automatic" | "manual";
  color: string;
  images: { image: string[] };
}

export interface Meta {
  count: number;
  first_page_link: string;
  from: number;
  last_page: number;
  last_page_link: string;
  limit: number;
  next_page_link: string | null;
  page: number;
  prev_page_link: string | null;
  to: number;
  total: number;
  total_no_filters: number;
}

export interface ApiResponse {
  data: Car[];
  meta: Meta;
}

export interface SearchParams {
  _page?: string;
  _sort?: string;
  _order?: "asc" | "desc";
}
