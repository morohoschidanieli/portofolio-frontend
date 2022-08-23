import NavbarElement from "./NavbarElement";
import NavbarLayout from "../layouts/NavbarLayout";

const NavbarLinks = [
  { title: "home", path: "/", type: "link" },
  { title: "about me", path: "/about", type: "link" },
  { imageUrl: "da", path: "/", type: "logo" },
  { title: "experience", path: "/experience", type: "link" },
  { title: "portofolio", path: "/portofolio", type: "link" },
];

const Navbar = () => {
  return (
    <nav>
      <NavbarLayout>
        {NavbarLinks.map((navbarElement, index) => {
          return <NavbarElement key={index} navbarLink={navbarElement} />;
        })}
      </NavbarLayout>
    </nav>
  );
};

export default Navbar;
