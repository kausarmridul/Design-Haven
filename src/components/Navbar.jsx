"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBars, FaCalendarAlt, FaHome } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const navItems = [
    {
      id: 1,
      url: "/",
      label: "Home",
    },
    {
      id: 2,
      url: "/about",
      label: "About",
    },
    {
      id: 3,
      url: "/services",
      label: "Services",
    },
    {
      id: 4,
      url: "/portfolio",
      label: "Porfolio",
    },
    {
      id: 5,
      url: "/team",
      label: "Team",
    },
    {
      id: 6,
      url: "/blog",
      label: "Blog",
    },
  ];

  const [openMenu, setOpenMenu] = useState(true);

  const pathname = usePathname();

  return (
    <div className="w-full bg-white fixed shadow-lg z-50 p-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href={"/"} className="flex items-center space-x-3">
          <div className="size-10 flex bg-accent rounded-full items-center justify-center">
            <FaHome className="text-xl text-white" />
          </div>
          <div className="font-heading text-2xl font-bold text-gray-800">
            Design <span className="text-accent">Haven</span>
          </div>
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((nav) => {
            const isActive = pathname === nav.url;
            return (
              <Link
                key={nav.id}
                href={nav.url}
                className={`${isActive ? "text-accent after:w-full" : "text-gray-700 after:w-0 hover:text-accent hover:after:w-full"} relative font-medium transition-all duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:bg-accent after:transition-all after:duration-300`}
              >
                {nav.label}
              </Link>
            );
          })}
          <Link
            href={"/contact"}
            className="px-6 py-2 bg-accent text-white rounded-full"
          >
            Contact
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setOpenMenu(!openMenu)}>
            {openMenu ? (
              <FaXmark className="text-2xl text-accent" />
            ) : (
              <FaBars className="text-2xl text-accent" />
            )}
          </button>
        </div>
      </div>

      {openMenu && (
        <div className="md:hidden mt-6 pb-4">
          <div className="flex flex-col space-y-6">
            {navItems.map((nav) => {
              const isActive = pathname === nav.url;
              return (
                <Link
                  key={nav.id}
                  href={nav.url}
                  onClick={() => setOpenMenu(false)}
                  className={`${isActive ? "text-accent after:w-full" : "text-gray-700 after:w-0 hover:text-accent hover:after:w-full"} relative font-medium transition-all duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:bg-accent after:transition-all after:duration-300`}
                >
                  {nav.label}
                </Link>
              );
            })}
            <Link
              href={"/contact"}
              className="px-6 py-3 bg-accent text-white rounded-full flex items-center justify-center gap-2"
              onClick={() => setOpenMenu(false)}
            >
              <FaCalendarAlt />
              Contact
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
