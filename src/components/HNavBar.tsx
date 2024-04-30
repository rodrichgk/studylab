import React from "react";
import { StudyLabLogo } from "./StudyLabLogo";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import SignButton from "./SignInButton";

const HNavbar = () => {
  return (
    <Navbar
      isBordered
      maxWidth={"xl"}
      shouldHideOnScroll={false}
      motionProps={{ initial: "hidden", animate: "visible" }}
      disableAnimation={false}
    >
      <NavbarBrand>
        <Link href="/">
          <StudyLabLogo />
          <p className="font-bold text-inherit">StudyLabs</p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link color="foreground" href="/services">
            Services
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/about" color="foreground">
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link color="foreground" href="/integrations">
            Integrations
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link color="foreground" href="/faq">
            FAQ's
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <SignButton />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default HNavbar;
