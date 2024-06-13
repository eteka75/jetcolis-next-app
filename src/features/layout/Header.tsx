import { Button } from "@/components/ui/button";
import React from "react";
import ToggleTheme from "./ToggleTheme";
import LogginButton from "./LogginButton";

const Header = () => {
  return (
    <header className="border-b border-b-accent fixed top-0 bg-background w-full">
      <div className="container flex items-center py-2 max-w-2xl m-auto gap-1">
        <h2 className="text-2xl font-bold mr-auto">Githread</h2>
        <LogginButton />
        <ToggleTheme />
      </div>
    </header>
  );
};

export default Header;
