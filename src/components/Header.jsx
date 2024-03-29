const Header = () => {
  return (
    <header className="w-screen">
      <div className="p-5 text-sm text-gray-700 bg-blue-100 dark:bg-blue-200 dark:text-gray-700">
        <h1 className="text-3xl font-medium underline mb-4">Note!!</h1>
        <h2 className="text-xl">
          Regarder la vidéo si desous, puis click sur{" "}
          <span class="font-bold text-blue-600">Commancer</span> , pour lancé le{" "}
          <span class="text-lg uppercase font-bold text-red-500">test</span>
        </h2>
      </div>
    </header>
  );
};

export default Header;
