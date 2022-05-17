const MenuLi = ({ li }) => {
  return (
    <li>
      <a
        href="https://aboulhassan.netlify.app"
        target="_blank"
        rel="noreferrer"
        className="block text-white hover:bg-gray-700 hover:text-orange-700 transition ease-in-out delay-50 duration-300 py-4 pr-4 pl-3"
        aria-current="page"
      >
        {li}
      </a>
    </li>
  );
};

export default MenuLi;
