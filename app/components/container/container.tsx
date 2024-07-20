import { Navbar } from "flowbite-react";
import { NavLink } from "@remix-run/react";

export default function Container() {
  // const { pathname } = useLocation();

  // console.log("pathpathpath");
  // console.log(pathname);
  // console.log("pathpathpath");

  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="/" as={NavLink} to="/">
        <img
          src="https://ik.imagekit.io/terpusat/tr:h-100,w-100/assets/v1_0_0/logo/terpusat_YecCfAziS.png?ik-sdk-version=react-1.1.0"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Terpusat Micro Frontend
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/" as={NavLink} to="/">
          Home
        </Navbar.Link>
        <Navbar.Link href="/microservice-1" as={NavLink} to="/microservice-1">
          Microservice 1
        </Navbar.Link>
        <Navbar.Link href="/microservice-2" as={NavLink} to="/microservice-2">
          Microservice 2
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
