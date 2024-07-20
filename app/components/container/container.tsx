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
          src="https://flowbite-react.com/favicon.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite React
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
