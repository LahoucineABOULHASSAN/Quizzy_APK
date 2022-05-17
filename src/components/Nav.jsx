import { MenuBtn, MenuLi } from "./nav/";

const Nav = () => {
  return (
    <nav className="bg-gray-800 border-gray-200 px-2 sm:px-4">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <div className="flex items-center  text-white">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Quizzy
          </span>
        </div>
        <MenuBtn />
        <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <MenuLi li="Home" />
            <MenuLi li="Aout" />
            <MenuLi li="Contact" />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
