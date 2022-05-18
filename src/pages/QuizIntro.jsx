const QuizIntro = () => {
  return (
    <section className="bg-gray-300 px-2 py-4 my-4">
      <h1 className="mb-4 p-1 pl-4 rounded-md font-medium leading-tight text-2xl">
        <span className="text-orange-600 underline"> Quizz 1 :</span>{" "}
        <small className="text-gray-600">(5pts)</small>
      </h1>
      <div className="">
        <div className="flex justify-center my-4">
          <ul className="bg-white rounded-lg border w-96 text-gray-900">
            <li className="px-6 py-2 border-b w-full bg-gray-400 rounded-t-lg text-xl font-medium">
              1- Cette vidéo parle sur :{" "}
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
                  Le coté logiciel de l'ordinateur.
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
                  Le coté matériel de l'ordinateur.
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
                  Le coté software de l'ordinateur.
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
                  Le coté hardeware de l'ordinateur.
                </label>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex justify-center my-4">
          <ul className="bg-white rounded-lg border w-96 text-gray-900">
            <li className="px-6 py-2 border-b w-full bg-gray-400 rounded-t-lg text-xl font-medium">
              2- Les composantes mentionner dans cette video sont :{" "}
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
                  Interne.
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
                  Externe.
                </label>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex justify-center my-4">
          <ul className="bg-white rounded-lg border w-96 text-gray-900">
            <li className="px-6 py-2 border-b w-full bg-gray-400 rounded-t-lg text-xl font-medium">
              3- Sélécter les composantes mentionner dans la video :{" "}
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
                  Micro-processeur
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
                  Mémoire volatile
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
                  Mémoire morte
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
                  Disque dure.
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
                  Carte graphique.
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
                  Carte mère.
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
                  Carte réseaux.
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default QuizIntro;
