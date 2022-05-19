const QuizMB = () => {
  return (
    <section className="bg-gray-300 p-2 my-4">
      <h1 className="mb-4 p-1 pl-4 rounded-md font-medium leading-tight text-2xl">
        <span className="text-orange-600 underline"> Quizz 2 :</span>{" "}
        <small className="text-gray-600">(2pts)</small>
      </h1>
      <div className="">
        <div className="flex justify-center my-4">
          <ul className="bg-white rounded-lg border w-96 text-gray-900">
            <li className="px-6 py-2 border-b w-full bg-gray-400 rounded-t-lg text-xl font-medium">
              1- Quel image si-dessous correspond à la carte mère? :{" "}
            </li>
            <li className="px-6 py-2 border-b w-full">
              <div className="form-check flex justify-center items-center flex-row">
                <input
                  className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="checkbox"
                  value={0}
                  id="flexCheckChecked"
                />
                <label
                  className="form-check-label inline-block text-gray-800 flex flex-wrap justify-center"
                  htmlFor="flexCheckChecked"
                >
                  <img
                    src="/assets/cpu.png"
                    className="w-52 h-auto shadow-lg"
                    alt="cpu"
                  />
                </label>
              </div>
            </li>
            <li className="px-6 py-2 border-b w-full">
              <div className="form-check flex justify-center items-center flex-row">
                <input
                  className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="checkbox"
                  value={0}
                  id="flexCheckChecked"
                />
                <label
                  className="form-check-label inline-block text-gray-800 flex flex-wrap justify-center"
                  htmlFor="flexCheckChecked"
                >
                  <img
                    src="/assets/gpu.png"
                    className="w-52 h-auto shadow-lg"
                    alt="carte graphique"
                  />
                </label>
              </div>
            </li>
            <li className="px-6 py-2 border-b w-full">
              <div className="form-check flex justify-center items-center flex-row">
                <input
                  className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="checkbox"
                  value={0}
                  id="flexCheckChecked"
                />
                <label
                  className="form-check-label inline-block text-gray-800 flex flex-wrap justify-center"
                  htmlFor="flexCheckChecked"
                >
                  <img
                    src="/assets/mb.png"
                    className="w-52 h-auto shadow-lg"
                    alt="carte graphique"
                  />
                </label>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex justify-center my-4">
          <ul className="bg-white rounded-lg border w-96 text-gray-900">
            <li className="px-6 py-2 border-b w-full bg-gray-400 rounded-t-lg text-xl font-medium">
              2- La carte mère est une composante externe de l'ordinateur? :{" "}
            </li>
            <li className="px-6 py-2 border-b w-full">
              <div className="form-check">
                <input
                  className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="checkbox"
                  value={1}
                  id="flexCheckChecked"
                />
                <label
                  className="form-check-label inline-block text-gray-800"
                  htmlFor="flexCheckChecked"
                >
                  Vraie.
                </label>
              </div>
            </li>
            <li className="px-6 py-2 border-b w-full">
              <div className="form-check">
                <input
                  className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="checkbox"
                  value={0}
                  id="flexCheckChecked"
                />
                <label
                  className="form-check-label inline-block text-gray-800"
                  htmlFor="flexCheckChecked"
                >
                  Faux
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default QuizMB;
