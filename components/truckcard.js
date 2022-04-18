import Image from "next/image";
import towBg from "../public/towheader.jpeg";
import { LocationMarkerIcon } from "@heroicons/react/solid";

export default function TruckCard({ year, make, model }) {
  return (
    <div className="relative  w-64 snap-center bg-white sm:rounded-lg border border-slate-300 ">
      <div className="relative w-full  rounded-t-lg h-60  aspect-w-1 aspect-h-1  overflow-hidden group-hover:opacity-75 lg:h-60 lg:aspect-none">
        <Image
          className="rounded-t-lg"
          src={towBg}
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          priority
        />
      </div>
      <div className="flex flex-col  p-4 gap-3">
        <div>
          <span className="text-lg font-medium">
            {year} {make} {model}
          </span>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <span>$16,000</span>
            <span>155,958 miles</span>
          </div>
          <div className="flex gap-1 items-center text-gray-400 text-sm">
            <LocationMarkerIcon className="h-4"></LocationMarkerIcon>
            <span>Missouri</span>
          </div>
        </div>
      </div>
    </div>
  );
}
