import Image from "next/image";
import { Car } from "../lib/types";

export default function CarCard({ car }: { car: Car }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <div className="relative h-48">
        <Image
          src={car.images.image[0] || "/car-placeholder.jpg"}
          alt={`${car.mark_id} ${car.folder_id}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">
          {car.mark_id} {car.folder_id}
        </h3>
        <p className="text-lg font-bold text-blue-600 mb-2">
          {car.price.toLocaleString("ru-RU")} ₽
        </p>
        <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
          <div>Год: {car.year}</div>
          <div>Пробег: {car.run.toLocaleString("ru-RU")} км</div>
          <div>Двигатель: {car.engine_power} л.с.</div>
          <div>
            КПП: {car.transmission === "automatic" ? "Автомат" : "Механика"}
          </div>
          <div>
            Топливо: {car.engine_type === "petrol" ? "Бензин" : "Дизель"}
          </div>
          <div>Цвет: {car.color}</div>
        </div>
      </div>
    </div>
  );
}
