import { Link } from "react-scroll";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
} from "@heroui/navbar";

import { ThemeSwitch } from "@/components/theme-switch";
// import { Logo } from "@/components/icons";

export const Navbar = () => {
  return (
    <HeroUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <div
            className="flex justify-start items-center gap-1"
            color="foreground"
          >
            {/* <Logo /> */}
            <p className="font-bold text-inherit">Farid Ramadhan</p>
          </div>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <div className="hidden md:flex gap-4 justify-start ml-2">
            <NavbarItem>
              <Link
                className="cursor-pointer"
                color="foreground"
                duration={500}
                offset={-64}
                smooth={true}
                to="home"
              >
                Home
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link
                className="cursor-pointer"
                color="foreground"
                duration={500}
                offset={-64}
                smooth={true}
                to="skills"
              >
                Skills
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link
                className="cursor-pointer"
                color="foreground"
                duration={500}
                offset={-64}
                smooth={true}
                to="projects"
              >
                Projects
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link
                className="cursor-pointer"
                color="foreground"
                duration={500}
                offset={-64}
                smooth={true}
                to="contacts"
              >
                Contacts
              </Link>
            </NavbarItem>
          </div>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu className="h-fit">
        <div className="mx-4 mt-2 flex flex-col gap-2">
          <NavbarItem>
            <Link
              className="cursor-pointer"
              color="foreground"
              duration={500}
              offset={-64}
              smooth={true}
              to="home"
            >
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className="cursor-pointer"
              color="foreground"
              duration={500}
              offset={-64}
              smooth={true}
              to="skills"
            >
              Skills
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className="cursor-pointer"
              color="foreground"
              duration={500}
              offset={-64}
              smooth={true}
              to="projects"
            >
              Projects
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className="cursor-pointer"
              color="foreground"
              duration={500}
              offset={-64}
              smooth={true}
              to="contacts"
            >
              Contacts
            </Link>
          </NavbarItem>
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
