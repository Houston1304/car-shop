import Link from "next/link";

export default function SortControls({
  currentSort,
  currentOrder,
  page = "1",
}: {
  currentSort?: string;
  currentOrder?: string;
  page?: string;
}) {
  const generateSortUrl = (sort?: string, order?: string) => {
    const params = new URLSearchParams();
    if (sort) params.set("_sort", sort);
    if (order) params.set("_order", order);
    params.set("_page", page || "1");
    return `/?${params.toString()}`;
  };

  return (
    <div className="flex gap-4 mb-6 flex-wrap">
      <Link
        href={generateSortUrl("price", "asc")}
        className={`px-4 py-2 rounded ${
          currentSort === "price" && currentOrder === "asc"
            ? "bg-blue-500 text-white"
            : "bg-gray-200"
        }`}
      >
        По возрастанию цены
      </Link>
      <Link
        href={generateSortUrl("price", "desc")}
        className={`px-4 py-2 rounded ${
          currentSort === "price" && currentOrder === "desc"
            ? "bg-blue-500 text-white"
            : "bg-gray-200"
        }`}
      >
        По убыванию цены
      </Link>
      <Link
        href={generateSortUrl()}
        className={`px-4 py-2 rounded ${
          !currentSort ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}
      >
        Без сортировки
      </Link>
    </div>
  );
}
