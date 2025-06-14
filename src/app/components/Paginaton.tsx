import Link from "next/link";
import { Meta } from "../lib/types";

export default function Pagination({
  meta,
  sort,
  order,
}: {
  meta: Meta;
  sort?: string;
  order?: string;
}) {
  const getHref = (page: number) => {
    const params = new URLSearchParams();
    if (sort) params.set("_sort", sort);
    if (order) params.set("_order", order);
    params.set("_page", page.toString());
    return `/?${params.toString()}`;
  };

  return (
    <div className="flex justify-center items-center gap-4 my-8">
      <Link
        href={getHref(meta.page - 1)}
        className={`px-4 py-2 rounded ${
          !meta.prev_page_link
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-gray-100"
        }`}
        aria-disabled={!meta.prev_page_link}
      >
        Назад
      </Link>

      <span className="mx-2">
        Страница {meta.page} из {meta.last_page}
      </span>

      <Link
        href={getHref(meta.page + 1)}
        className={`px-4 py-2 rounded ${
          !meta.next_page_link
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-gray-100"
        }`}
        aria-disabled={!meta.next_page_link}
      >
        Вперед
      </Link>
    </div>
  );
}
