import Layout from "../components/layout";
import Banner from "../components/banner";
import Image from "next/image";
import towBg from "../public/towheader.jpeg";
import { LocationMarkerIcon } from "@heroicons/react/solid";
import TruckCard from "../components/truckcard";

export default function Home() {
  return (
    <Layout>
      <Banner></Banner>
      <section className="py-12 flex flex-col gap-6 max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-lg font-medium">Recommended Near You</h2>
          <a className="text-blue-700" href="">
            View all tow trucks near Dover, NH
          </a>
        </div>
        {/* TruckCards */}
        <div className="overflow-x-scroll snap-x grid grid-flow-col auto-cols-max gap-6">
          <TruckCard truck="2015 Ford F550"></TruckCard>
          <TruckCard truck="2017 Dodge 4500"></TruckCard>
          <TruckCard truck="2006 Kenworth T800"></TruckCard>
          <TruckCard truck="2009 International 4500"></TruckCard>
          <TruckCard truck="2006 Kenworth T800"></TruckCard>
          <TruckCard truck="2009 International 4500"></TruckCard>
        </div>
      </section>
    </Layout>
  );
}
