import { useState } from "react";
import Home from "../pages/Home";
import {
  QuizIntro,
  QuizCPU,
  QuizHD,
  QuizMB,
  QuizRAM,
  ScorePage,
} from "../pages";

const Main = () => {
  const [page, setPage] = useState(1);
  const [score, setScore] = useState(0);

  const handleScore = (score) => {
    setScore(score);
  };

  return (
    <main className="w-screen py-5">
      {page !== 6 && <Home />}
      {page === 1 && <QuizIntro handleScore={handleScore} />}
      {page === 2 && <QuizMB handleScore={handleScore} />}
      {page === 3 && <QuizCPU handleScore={handleScore} />}
      {page === 4 && <QuizRAM handleScore={handleScore} />}
      {page === 5 && <QuizHD handleScore={handleScore} />}
      {page === 6 && <ScorePage score={score} />}

      <div className="flex space-x-2 justify-center">
        {page > 0 && page < 5 && (
          <div className="mx-1">
            <button
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              className="inline-block p2 w-8 h-8 flex justify-center items-center bg-orange-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out"
              onClick={() => setPage(page + 1)}
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="arrow-alt-circle-right"
                className="w-7 h-7"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm72 20v-40c0-6.6 5.4-12 12-12h116v-67c0-10.7 12.9-16 20.5-8.5l99 99c4.7 4.7 4.7 12.3 0 17l-99 99c-7.6 7.6-20.5 2.2-20.5-8.5v-67H140c-6.6 0-12-5.4-12-12z"
                ></path>
              </svg>
            </button>
          </div>
        )}
        {page == 5 && (
          <div className="mx-1">
            <button
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              className="inline-block p-3 w-full flex justify-center items-center bg-orange-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out"
              onClick={() => setPage(page + 1)}
            >
              Afficher score
            </button>
          </div>
        )}
      </div>
    </main>
  );
};

export default Main;
