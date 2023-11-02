"use client";

import Link from "next/link";

import { ButtonIcon } from "../ui/button-icon";
import { useState } from "react";
import { menus } from "@/lib/links-app";
import Container from "../container/container";
import { ModeToggle } from "../theme/mode-toggle";
import { AvatarLogo } from "../avatar-logo/avatar-logo";
import Typography from "../ui/typography";

const Header = () => {
  const [value, setvalue] = useState<boolean>(false);
  return (
    <header className=" relative bg-transparent">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Typography variant="p" className="font-bold">
              +253 77 84 14 36
            </Typography>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                {menus.map((menu) => (
                  <li key={menu.title}>
                    <Link
                      href={menu.path}
                      className="text-foreground text-[16px] transition hover:text-foreground/75"
                    >
                      {menu.title}
                    </Link>
                  </li>
                ))}

                <li>
                  <ModeToggle />
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="block md:hidden">
                <ModeToggle />
              </div>
              <div className="block md:hidden">
                <ButtonIcon
                  action={() => {
                    setvalue(!value);
                  }}
                  iconName="Menu"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
