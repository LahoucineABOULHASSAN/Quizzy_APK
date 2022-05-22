const TextVideo = () => {
  return (
    <section className="w-full sm:w-11/12 md:w-10/12 m-auto my-5 p-8">
      <p className="text-base font-light leading-relaxed mt-0 mb-1.5 text-gray-800">
        Salut tout le monde. C'est Lahoucine. Bienvenue.
      </p>
      <p className="text-base font-light leading-relaxed mt-0 mb-1.5 text-gray-800">
        Vous savez peut-être déjà qu'il existe de nombreuses pièces importantes
        à l'intérieur d'un ordinateur. Mais c'est quoi le role de chacune ?
      </p>
      <p className="text-base font-light leading-relaxed mt-0 mb-1.5 text-gray-800">
        Jetons un coup d'œil à l'intérieur et découvrons les différents
        composants qui font fonctionner un ordinateur. Soit Qu'il s'agisse d'un
        ordinateur bureau ou d'un ordinateur portable.
      </p>
      <p className="text-base font-light leading-relaxed mt-0 mb-1.5 text-gray-800">
        Chaque ordinateur possède une grande carte de circuit imprimé appelée
        carte mère. Il contient certaines des parties les plus importantes de
        l'ordinateur. c'est ce qu'on va voir aujourdhui{" "}
      </p>
      <p className="text-base font-light leading-relaxed mt-0 mb-1.5 text-gray-800">
        le CPU (central processing unit) également connu sous le nom
        micro-processeur. Il peut être considéré comme le cerveau de
        l'ordinateur. Parce qu'il traite les informations et exécute les
        commandes. pour cela il s'echauffe , il est recouvert d'un morceau de
        métal appelé (heat sink) dissipateur de chaleur, qui évacue la chaleur
        du processeur.{" "}
      </p>
      <p className="text-base font-light leading-relaxed mt-0 mb-1.5 text-gray-800">
        pour que le cpu puisse faire son traitement, il a besoin d'un ressource
        de memoire. appeller la RAM (random access memory) ou la mémoire vive.
        Il s'agit de la mémoire à court terme utilisée par l'ordinateur
        lorsqu'il effectue des calculs. Cependant, vous ne pouvez pas y stocker
        vos fichiers. Parce que la RAM est effacée lorsque vous éteignez
        l'ordinateur
      </p>
      <p className="text-base font-light leading-relaxed mt-0 mb-1.5 text-gray-800">
        à fin d'etre cappable de stocker les donnees a long term, le cpu utilise
        Le disque dur. qui peut conserve toutes les données de l'ordinateur même
        lorsqu'il est éteint. il existe 2 types: HDD: qui utilisent un plateau
        magnétique pour stocker des données, mais il est tres lempt, . SSD: il
        est plus rapides et plus durables, mais aussi plus chers.
      </p>
      <p className="text-base font-light leading-relaxed mt-0 mb-1.5 text-gray-800">
        L'ordinateur est une machine assez complexe mais maintenant que vous
        avez vu ce qui se passe à l'intérieur, cela devrait être un peu moins
        mystérieux.
      </p>
      <p className="text-base font-light leading-relaxed mt-0 mb-1.5 text-gray-800">
        Sur de nombreux ordinateurs de bureau, la carte mère possède des
        connecteurs d'extension, ce qui vous permet d'effectuer une mise à
        niveau en ajoutant des cartes d'extension. Vous pouvez ajouter une carte
        vidéo pour obtenir de meilleures performances graphiques ou une carte
        sans fil pour vous connecter à votre réseau domestique sans fil.
        Cependant, la plupart des ordinateurs portables n'ont pas de connecteurs
        d'extension. Bien sûr, les composants des ordinateurs ont besoin
        d'électricité pour fonctionner. L'unité d'alimentation est conçue pour
        prendre l'alimentation de la prise murale et l'envoyer à tous les
        différents composants qui ont besoin d'alimentation. Les ordinateurs
        portables contiennent également une batterie intégrée qui vous permet de
        les utiliser n'importe où.
      </p>
    </section>
  );
};

export default TextVideo;
