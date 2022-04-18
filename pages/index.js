import Layout from "../components/layout";
import Banner from "../components/banner";
import TruckCard from "../components/truckcard";
import { PrismaClient } from "@prisma/client";
import Container from "../components/layout/container";
import { Disclosure } from "@headlessui/react";

const prisma = new PrismaClient();

export default function Home({ data }) {
  return (
    <Layout>
      <Banner></Banner>
      <Container>
        <div>
          <h2 className="text-lg font-medium">Recommended Near You</h2>
          <a className="text-blue-700" href="">
            View all tow trucks near Dover, NH
          </a>
        </div>
        {/* TruckCards */}
        <div className="overflow-x-scroll snap-x grid grid-flow-col auto-cols-max gap-6">
          <TruckCard truck="2015 Ford F650s"></TruckCard>
          <TruckCard truck="2017 Dodge 4500"></TruckCard>
          <TruckCard truck="2006 Kenworth T800"></TruckCard>
          <TruckCard truck="2009 International 4500"></TruckCard>
          <TruckCard truck="2006 Kenworth T800"></TruckCard>
          <TruckCard truck="2009 International 4500"></TruckCard>
        </div>
      </Container>
      <Container>
        <div>
          <h2 className="text-lg font-medium">Recently For Sale</h2>
          <a className="text-blue-700" href="">
            View all recently listed tow trucks
          </a>
        </div>
        {/* TruckCards */}
        <div className="overflow-x-scroll snap-x grid grid-flow-col auto-cols-max gap-6">
          <TruckCard truck="2015 Ford F650s"></TruckCard>
          <TruckCard truck="2017 Dodge 4500"></TruckCard>
          <TruckCard truck="2006 Kenworth T800"></TruckCard>
          <TruckCard truck="2009 International 4500"></TruckCard>
          <TruckCard truck="2006 Kenworth T800"></TruckCard>
          <TruckCard truck="2009 International 4500"></TruckCard>
        </div>
      </Container>
      <Container>
        <div className="flex flex-col lg:flex-row gap-6">
          <div>
            <Disclosure>
              <Disclosure.Button className="py-2 bg-red-100 grow-1">
                For Sale By State
              </Disclosure.Button>
              <Disclosure.Panel className="text-gray-500">
                <ul>
                  <li>
                    <a href="">Tow Trucks, NH</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="">Tow Trucks, MA</a>
                  </li>
                </ul>
              </Disclosure.Panel>
            </Disclosure>
          </div>
          <div>
            <Disclosure>
              <Disclosure.Button className="py-2 bg-red-100 grow-1">
                For Sale By State
              </Disclosure.Button>
              <Disclosure.Panel className="text-gray-500">
                Yes! You can purchase a license that you can share with your
                entire team.
              </Disclosure.Panel>
            </Disclosure>
          </div>
        </div>
        <div>
          <Disclosure>
            <Disclosure.Button className="py-2 bg-red-100 grow-1">
              For Sale By State
            </Disclosure.Button>
            <Disclosure.Panel className="text-gray-500">
              Yes! You can purchase a license that you can share with your
              entire team.
            </Disclosure.Panel>
          </Disclosure>
        </div>
      </Container>
    </Layout>
  );
}

// pulls truck data from prisma
export async function getServerSideProps() {
  const trucks = await prisma.truck.findMany();

  return {
    props: {
      data: trucks,
    },
  };
}
