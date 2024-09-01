"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";

export function NavBar() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }) {
  const [active, setActive] = useState(null);
  console.log("=== active", active);
  return (
    <div
      className={cn(
        "relative top-10 inset-x-0 max-w-2xl mx-auto z-50",
        className
      )}
    >
      <Menu setActive={setActive}>
        <MenuItem
          setActive={setActive}
          active={active}
          item="Our Work"
          href="our-work"
        ></MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          item="FAQ"
          href="faq"
        ></MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          item="Contact"
          href="contact"
        ></MenuItem>
      </Menu>
    </div>
  );
}
