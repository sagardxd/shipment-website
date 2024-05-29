"use client";
import  { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu"
import { cn } from "../utils/cn";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive} >
        {/* <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/E-Commerce">E-Commerce</HoveredLink>
            <HoveredLink href="/Air-Ship">Air Ship</HoveredLink>
            <HoveredLink href="/Ocean-Ship">Door to Door</HoveredLink>
            <HoveredLink href="/Warehouse">WareHouse</HoveredLink>
          </div>
        </MenuItem> */}
        <MenuItem setActive={setActive} active={active} item="Service">
          <div className="  text-sm grid lg:grid-cols-2 sm:grid-cols-1  gap-10 p-4">
            <ProductItem
              title="Ecommerce"
              to=""
              src="https://www.cloudways.com/blog/wp-content/uploads/Ecommerce-Shipping-Guide.jpg"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Air Shipping"
              to=""
              src="https://www.logisticsinsider.in/wp-content/uploads/2023/12/Aircargo.jpg"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Door to Door"
              to=""
              src="https://www.airborneinternational.in/assets/door-to-door.jpg"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Ocean Shipping"
              to=""
              src="https://www.exfreight.com/wp-content/uploads/2020/11/ocean-freight-explained-mts-2017-1000x640-1.jpg"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Booking">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink to="/hobby">Get Quote</HoveredLink>
            <HoveredLink to="/individual">Pick Request</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
