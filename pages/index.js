import Layout from "../components/layout";
import Image from "next/image";
import towBg from "../public/towheader.jpeg";

export default function Home() {
  return (
    <Layout>
      <div className="relative h-[32rem] bg-gradient-to-r from-cyan-500 to-blue-500">
        <Image
          src={towBg}
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          priority
        />
        <div className="absolute w-full h-full bg-black opacity-50"></div>
        <div className="absolute w-full h-full">
          <div className="relative flex  flex-col gap-6 h-full justify-center items-center max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl text-white text-center font-bold">
              Search Tow Trucks for Sale
            </h1>
            <div className="flex gap-4 flex-col w-full">
              <a
                className="flex font-bold justify-center py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-[#EF0914]  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                href=""
              >
                Shop Used
              </a>
              <a
                className="flex font-bold justify-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-[#EF0914]  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                href=""
              >
                Shop New
              </a>
              <a
                className="flex font-bold justify-center px-6 py-3 border border-2 border-[#EF0914] shadow-sm text-base font-medium rounded-md text-white   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                href=""
              >
                Sell My Tow Truck
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
