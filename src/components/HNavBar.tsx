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

const HNavbar = () => {
  return (
    <Navbar
      isBordered
      maxWidth={"xl"}
      shouldHideOnScroll={true}
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
        <NavbarItem>
          <Link color="foreground" href="/services">
            Services
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/about" aria-current="page">
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/integrations">
            Integrations
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/faq">
            FAQ's
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default HNavbar;
