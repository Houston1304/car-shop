import { fetchCars } from "./lib/api";
import CarCards from "./components/CarCards";
import Pagination from "./components/Paginaton";
import SortControls from "./components/SortControls";
import { SearchParams } from "./lib/types";

export default async function Home({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { _page = "1", _sort, _order } = searchParams;
  const page = parseInt(_page as string) || 1;

  const { data: cars, meta } = await fetchCars({
    _page: page.toString(),
    _sort,
    _order,
  });

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Автомобили</h1>

      <SortControls currentSort={_sort} currentOrder={_order} />

      <CarCards cars={cars} />

      <Pagination meta={meta} sort={_sort} order={_order} />
    </main>
  );
}
