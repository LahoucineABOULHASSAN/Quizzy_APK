import { useState } from "react";
import TextVideo from "../components/main-comps/TextVideo.jsx";
const Home = () => {
  const [displayText, setDisplayText] = useState(false);
  return (
    <section className="py-8">
      <div className="video mb-4">
        <iframe
          className="iframe m-auto"
          src="https://www.youtube.com/embed/L_46_UrCehA"
          title="Computer Parts"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="w-11/12 mt-4 mx-auto">
        <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
          <input
            type="checkbox"
            name="toggle"
            id="toggle"
            className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-2 border-gray-400 appearance-none cursor-pointer"
            onClick={(e) => setDisplayText(!displayText)}
          />
          <label
            htmlFor="toggle"
            className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-400 cursor-pointer"
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
