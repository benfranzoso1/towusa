import DashBoardLayout from "../components/dashboardlayout";
import TruckCard from "../components/truckcard";

import { useState } from "react";

import { PrismaClient } from "@prisma/client";
import { RadioGroup } from "@headlessui/react";

import { QuestionMarkCircleIcon, SearchIcon } from "@heroicons/react/solid";
import {
  BellIcon,
  CogIcon,
  CreditCardIcon,
  KeyIcon,
  MenuIcon,
  UserCircleIcon,
  ViewGridAddIcon,
  XIcon,
} from "@heroicons/react/outline";

const prisma = new PrismaClient();

export default function DashBoard({ data }) {
  /** "selected" here is state variable which will hold the
   * value of currently selected dropdown.
   */
  const [selected, setSelected] = useState("");
  /** Function that will set different values to state variable
   * based on which dropdown is selected
   */
  const changeSelectOptionHandler = (event) => {
    setSelected(event.target.value);
  };

  const trucks = [
    {
      id: 1,
      make: "Chevrolet",
      models: ["4500", "C4500", "C5500", "C65", "C6500"],
    },
    {
      id: 2,
      make: "Dodge",
    },
    {
      id: 3,
      make: "Ford",
    },
    {
      id: 4,
      make: "Freightliner",
    },
    {
      id: 5,
      make: "Hino",
    },
    {
      id: 6,
      make: "International",
    },
    {
      id: 7,
      make: "Kenworth",
    },
    {
      id: 8,
      make: "Mack",
    },
    {
      id: 9,
      make: "Mitsubishi",
    },
    {
      id: 10,
      make: "Peterbilt",
    },
    {
      id: 11,
      make: "Sterling",
    },
    {
      id: 12,
      make: "UD",
    },
    {
      id: 13,
      make: "Westernstar",
    },
  ];

  // THIS WORKS BUT ITS NOT AS EASY TO READ
  /** Find Chevy Models */
  // const FindChevyModels = trucks
  //   .filter((truckMake) => truckMake.make === "Chevrolet")
  //   .map((truckMake) => truckMake.models);
  // Flatten the Chevy array
  // const ChevyModels = FindChevyModels.flat(Infinity);

  /** Different arrays for different dropdowns */
  const FordModels = ["F450", "F550", "F650"];
  const DodgeModels = ["4400", "4500", "4600"];
  const PeterbiltModels = ["389", "387"];

  /** Make variable to store different array for different dropdown */
  let make = null;

  /** This will be used to create set of options that user will see */
  let models = null;

  // get years from this year to 1987
  function generateArrayOfYears() {
    let max = new Date().getFullYear();
    let min = max - 35;
    let years = [];

    for (let i = max; i >= min; i--) {
      years.push(i);
    }
    return years;
  }

  let years = generateArrayOfYears();

  const listYear = years.map((year) => <option>{year}</option>);

  /** Setting Make variable according to dropdown */
  if (selected === "Chevrolet") {
    make = FordModels;
  } else if (selected === "Dodge") {
    make = DodgeModels;
  } else if (selected === "Peterbilt") {
    make = PeterbiltModels;
  }

  /** If "Type" is null or undefined then options will be null,
   * otherwise it will create a options iterable based on our array
   */
  if (make) {
    models = make.map((el) => <option key={el}>{el}</option>);
  }

  return (
    <DashBoardLayout>
      <section aria-labelledby="sell-truck-heading">
        <form action="#" method="POST">
          <div className="shadow sm:rounded-md sm:overflow-hidden">
            <div className="bg-white py-6 px-4 sm:p-6">
              <div>
                <h2
                  id="payment-details-heading"
                  className="text-lg leading-6 font-medium text-gray-900"
                >
                  Sell your Truck
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  Enter in your truck information below to post-it nationwide.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-4 gap-6">
                {/* Select Manufactuer */}
                <div className="col-span-4 sm:col-span-2">
                  <label
                    htmlFor="manufactuer"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Select Truck Make
                  </label>
                  <select
                    id="make"
                    name="make"
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    onChange={changeSelectOptionHandler}
                  >
                    <option value="" disabled selected>
                      Truck Make
                    </option>
                    {trucks.map((truck) => (
                      <option key={truck.id}>{truck.make}</option>
                    ))}
                  </select>
                </div>

                {/* Select Manufactuer Model */}
                <div className="col-span-4 sm:col-span-2">
                  <label
                    htmlFor="model"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Select Model
                  </label>
                  <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                    <option value="" disabled selected>
                      Truck Model
                    </option>
                    {models}
                  </select>
                </div>

                {/* Vin Number */}
                <div className="col-span-4 sm:col-span-2">
                  <label
                    htmlFor="vin-nmber"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Vin#
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="vin#"
                      id="vin#"
                      placeholder="17 Characters"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <QuestionMarkCircleIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </div>

                {/* Year */}
                <div className="col-span-4 sm:col-span-2">
                  <label
                    htmlFor="vin-nmber"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Select Year
                  </label>
                  <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                    <option value="" disabled selected>
                      Truck Year
                    </option>
                    {listYear}
                  </select>
                </div>

                {/* Miles */}
                <div className="col-span-4 sm:col-span-2">
                  <label
                    htmlFor="miles"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Miles
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      name="miles"
                      id="miles"
                      placeholder="How many miles?"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                    />
                  </div>
                </div>

                {/* New or Used */}
                <div className="col-span-4 sm:col-span-2">
                  <label
                    htmlFor="vin-nmber"
                    className="block text-sm font-medium text-gray-700"
                  >
                    New or Used?
                  </label>
                </div>
              </div>
            </div>

            <div className="px-4 py-3 bg-gray-200 text-right sm:px-6">
              <button
                type="submit"
                className="bg-gray-800 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </section>
    </DashBoardLayout>
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
