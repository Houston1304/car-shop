import { Car } from "../lib/types";
import CarCard from "./CarCard";

export default function CarCards({ cars }: { cars: Car[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      {cars.map((car) => (
        <CarCard key={car.vin} car={car} />
      ))}
    </div>
  );
}
