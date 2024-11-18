import { HashLink } from "react-router-hash-link";

export function Header() {
  return (
    <header className="text-white p-4 fixed top-0 w-full">
      <nav className="w-full lg:justify-center justify-around flex list-none lg:gap-20 uppercase font-bold">
        <HashLink smooth to={"#home"}>
          Home
        </HashLink>
        <HashLink smooth to={"#about"}>
          About
        </HashLink>
        <HashLink smooth to={"#projects"}>
          Projects
        </HashLink>
      </nav>
    </header>
  );
}
