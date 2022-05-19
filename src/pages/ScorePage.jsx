const ScorePage = ({ score }) => {
  return (
    <section>
      <div class="text-center bg-gray-100 text-gray-800 py-20 px-6">
        <h1 class="text-5xl font-bold mt-0 mb-6">Filicitations</h1>
        <h3 class="text-3xl font-bold mb-8">Vous averz depassez le score</h3>
        <a
          class="inline-block px-6 py-2.5 bg-orange-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          href="#!"
          role="button"
        >
          Aurevoir
        </a>
      </div>

      <div
        className="bg-gray-600 py-5 px-6 text-base text-gray-100"
        role="alert"
      >
        Vous avez obtenz :{" "}
        <span class="text-md inline-block py-2 px-3 leading-none text-center whitespace-nowrap align-baseline font-bold bg-gray-800 text-white rounded">
          {score}/20
        </span>
      </div>
    </section>
  );
};

export default ScorePage;
