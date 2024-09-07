"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import React from "react";
import { HiOutlineHome, HiMenuAlt2 } from "react-icons/hi";
import Box from "./Box";
import ListItem from "./ListItem";
import BotpressChat from "./BotPressChat"; // Import BotpressChat component
import { faBowlFood, faClockFour, faHospital, faNewspaper, faPills, faPrescriptionBottleMedical, faUserDoctor } from "@fortawesome/free-solid-svg-icons";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const router = useRouter();
  const [isExpanded, setIsExpanded] = useState(false);

  const handleHomeClick = () => {
    router.push("/");
  };

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex w-full h-full fixed">
      <div
        className={`${
          isExpanded ? "w-[230px]" : "w-[110px]"
        } flex flex-col gap-y-2 bg-white h-full px-2 pt-5 pb-1 transition-width duration-200`}
      >
        <Box>
          <div className="flex bg-gray-200 hover:opacity-75 rounded-full justify-between items-center py-2 px-2">
            <button
              onClick={handleHomeClick}
              className="flex justify-center items-center w-10 h-10 bg-transparent rounded-full hover:bg-neutral-600/35 transition duration-200"
            >
              <HiOutlineHome className="text-4xl text-black" />
            </button>
            <button
              onClick={toggleSidebar}
              className="flex justify-center items-center w-10 h-10 bg-transparent rounded-full hover:bg-neutral-600/35 transition duration-200"
            >
              <HiMenuAlt2 className="text-4xl text-black" />
            </button>
          </div>
        </Box>
        <Box className="overflow-y-auto items-center px-4 py-2 h-full">
          <div></div>
          <div
            className="
              grid
              grid-rows-2
              sm:grid-rows-3
              xl:grid-rows-4
              2xl:grid-rows-6
              gap-3
              mt-4
            "
          >
            <ListItem
              icon={faClockFour}
              name="Tracking"
              href="tracking"
            /> 
            <ListItem
                icon={faPills} 
                name="Medicines"
                href="/search"
            />
            <ListItem
              icon={faBowlFood}
              name="Dietry"
              href="dietry"
            />
            <ListItem
              icon={faPrescriptionBottleMedical}
              name="Stores"
              href="stores"
            />
            <ListItem
              icon={faUserDoctor}
              name="Doctors"
              href="doctors"
            />
            <ListItem
              icon={faHospital}
              name="Hospitals"
              href="hospitals"
            />
            <ListItem
              icon={faNewspaper}
              name="News"
              href="news"
            />
          </div>
        </Box>

        <Box className="flex justify-center items-center py-4 mt-auto">
            <BotpressChat/>
        </Box>
      </div>

      <main className="h-full w-full flex pt-2 pb-1 overflow-y-auto">
        {children}
      </main>
    </div>
  );
};

export default Sidebar;
