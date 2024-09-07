import React from "react";
import HealthForm from "./components/HealthForm";
import Header from "@/components/Header";
import Box from "@/components/Box";

const AccountsPage = () => {
  return (
    <div className="
        bg-white
        rounded-lg
        h-full
        w-full
        overflow-y-auto
        overflow-x-hidden
    ">
      <div className="
          w-full
          flex
          flex-col
          gap-y-2
          bg-white
          h-full
          overflow-x-hidden
      ">
        <Box>
          <Header>
            <div className="mb-2 flex flex-col gap-y-3">
              <h1 className="text-transparent bg-clip-text text-center bg-gradient-to-r from-teal-500 to-blue-600 text-4xl md:text-5xl font-extrabold uppercase tracking-widest">
                Your Health Information
              </h1>
            </div>
          </Header>
        </Box>
        <Box className="overflow-y-auto flex-1 h-full">
          <div className="mt-4 mb-4 p-6">
            <HealthForm />
          </div>
        </Box>
      </div>
    </div>
  );
};

export default AccountsPage;
