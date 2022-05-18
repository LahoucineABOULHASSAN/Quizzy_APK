import { useState } from "react";
import TextVideo from "../components/main-comps/TextVideo.jsx";
const Home = () => {
  const [displayText, setDisplayText] = useState(false);
  return (
    <section className="mb-4">
      <div className="w-11/12 m-auto my-2">
        <iframe
          className="md:w-4/6 sm:w-11/12 sm:h-auto m-auto my-2"
          src="https://www.youtube.com/embed/xHQ7Y9YOykk"
          title="Computer Parts"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="w-11/12 m-auto">
        <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
          <input
            type="checkbox"
            name="toggle"
            id="toggle"
            className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
            onClick={(e) => setDisplayText(!displayText)}
          />
          <label
            htmlFor="toggle"
            className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
          ></label>
        </div>
        <label htmlFor="toggle" className="text-xs text-gray-700">
          {displayText ? "Cacher " : "Afficher "} vidéo text.
        </label>
      </div>
      {displayText && <TextVideo />}
    </section>
  );
};

export default Home;
