import Header from "./header";
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

const subNavigation = [
  { name: "Home", href: "#", icon: UserCircleIcon, current: false },
  { name: "Sell Truck", href: "#", icon: KeyIcon, current: false },
  { name: "Listings", href: "#", icon: CogIcon, current: false },
  { name: "Saved Trucks", href: "#", icon: KeyIcon, current: false },
  { name: "Settings", href: "#", icon: BellIcon, current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DashBoardLayout({ children }) {
  return (
    <>
      <Header />
      <div className="bg-gray-100">
        <div class=" max-w-7xl mx-auto pb-10 lg:py-12 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
            <aside className="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3">
              <nav className="space-y-1">
                {subNavigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-50 text-orange-600 hover:bg-white"
                        : "text-gray-900 hover:text-gray-900 hover:bg-gray-50",
                      "group rounded-md px-3 py-2 flex items-center text-sm font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    <item.icon
                      className={classNames(
                        item.current
                          ? "text-orange-500"
                          : "text-gray-400 group-hover:text-gray-500",
                        "flex-shrink-0 -ml-1 mr-3 h-6 w-6"
                      )}
                      aria-hidden="true"
                    />
                    <span className="truncate">{item.name}</span>
                  </a>
                ))}
              </nav>
            </aside>
            <main className="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
              {children}
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
