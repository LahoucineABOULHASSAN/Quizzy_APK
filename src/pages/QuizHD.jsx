const QuizHD = () => {
  return (
    <section className="bg-gray-300 p-2 my-4">
      <h1 className="mb-4 p-1 pl-4 rounded-md font-medium leading-tight text-2xl">
        <span className="text-orange-600 underline"> Quizz 5 :</span>{" "}
        <small className="text-gray-600">(4pts)</small>
      </h1>
      <div className="">
        <div className="flex justify-center my-4">
          <ul className="bg-white rounded-lg border w-96 text-gray-900">
            <li className="px-6 py-2 border-b w-full bg-gray-400 rounded-t-lg text-xl font-medium">
              1- Les disques dure sert à ?{" "}
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
                  Stocker les données d'une façon temporaire.
                </label>
              </div>
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
                  Stocker les données d'une façon permanante.
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
                  Traiter les données.
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
                  Aucune de ces proposistion.
                </label>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex justify-center my-4">
          <ul className="bg-white rounded-lg border w-96 text-gray-900">
            <li className="px-6 py-2 border-b w-full bg-gray-400 rounded-t-lg text-xl font-medium">
              2- Lequel des types suivantes utilise un plateau magnétique?:{" "}
            </li>
            <li className="px-6 py-2 border-b w-full">
              <div className="form-check">
                <input
                  class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label
                  className="form-check-label inline-block text-gray-800"
                  htmlFor="flexCheckChecked"
                >
                  SSD.
                </label>
              </div>
            </li>
            <li className="px-6 py-2 border-b w-full">
              <div className="form-check">
                <input
                  class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label
                  className="form-check-label inline-block text-gray-800"
                  htmlFor="flexCheckChecked"
                >
                  HDD.
                </label>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex justify-center my-4">
          <ul className="bg-white rounded-lg border w-96 text-gray-900">
            <li className="px-6 py-2 border-b w-full bg-gray-400 rounded-t-lg text-xl font-medium">
              3- Lequel des types suivantes est plus cher parapport a l'autre?:{" "}
            </li>
            <li className="px-6 py-2 border-b w-full">
              <div className="form-check">
                <input
                  class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label
                  className="form-check-label inline-block text-gray-800"
                  htmlFor="flexCheckChecked"
                >
                  SSD.
                </label>
              </div>
            </li>
            <li className="px-6 py-2 border-b w-full">
              <div className="form-check">
                <input
                  class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label
                  className="form-check-label inline-block text-gray-800"
                  htmlFor="flexCheckChecked"
                >
                  HDD.
                </label>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex justify-center my-4">
          <ul className="bg-white rounded-lg border w-96 text-gray-900">
            <li className="px-6 py-2 border-b w-full bg-gray-400 rounded-t-lg text-xl font-medium">
              4- Lequel des types suivantes est le plus rapide parapport a
              l'autre? :{" "}
            </li>
            <li className="px-6 py-2 border-b w-full">
              <div className="form-check">
                <input
                  class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label
                  className="form-check-label inline-block text-gray-800"
                  htmlFor="flexCheckChecked"
                >
                  SSD.
                </label>
              </div>
            </li>
            <li className="px-6 py-2 border-b w-full">
              <div className="form-check">
                <input
                  class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label
                  className="form-check-label inline-block text-gray-800"
                  htmlFor="flexCheckChecked"
                >
                  HDD.
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default QuizHD;
