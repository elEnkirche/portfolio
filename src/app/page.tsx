// src/app/page.tsx
export default function HomePage() {
  return (
    <main className="h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory">
      {/* Profil (full screen) */}
      <section id="profil" className="h-screen snap-start flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-6 py-12 space-y-4">
          <header className="space-y-4">
            <h1 className="text-4xl font-bold">Enkirche Elias</h1>
            <p className="text-lg text-gray-600">Ingénieur généraliste passionné par la gestion de projet</p>

          </header>
        </div>
      </section>

      {/* Expériences professionnelles (full screen) */}
      <section id="experience" className="h-screen snap-start flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-6 py-12 space-y-8">
          <h2 className="text-2xl font-semibold">Expériences professionnelles</h2>

          <article className="space-y-2">
            <h3 className="font-semibold">Ingénieur logiciel – Naval Group</h3>
            <p className="text-sm text-gray-500">Paris, France · 08/2023 – 07/2025</p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Développement d’une solution logicielle en <strong>Java</strong> pour le contrôle des émissions
                électromagnétiques.
              </li>
              <li>Développement back-end et intégration avec des technologies front-end.</li>
              <li>Gestion de version via Git et mise en place de pipelines CI/CD.</li>
              <li>Application de design patterns pour un code modulaire et maintenable.</li>
              <li>Optimisation et restructuration de bases de données.</li>
            </ul>
            <p className="text-sm">
              <strong>Environnement technique :</strong> Java, Node.js, GitHub, CI/CD, Bases de données, Design Patterns,
              Algorithmes
            </p>
          </article>

          <article className="space-y-2">
            <h3 className="font-semibold">Ingénieur R&amp;D Hardware / Software – Expleo Group</h3>
            <p className="text-sm text-gray-500">Saint-Quentin-en-Yvelines, France · 04/2022 – 08/2023</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Développement d’une plateforme de test pour la conduite autonome.</li>
              <li>Intégration de capteurs et traitement des données véhicules.</li>
              <li>Conception de pièces mécaniques avec Fusion 360.</li>
              <li>Développement C++ sur Jetson Nano pour traitement temps réel.</li>
            </ul>
            <p className="text-sm">
              <strong>Environnement technique :</strong> C++, Électronique, Fusion 360, CAN, Jetson Nano
            </p>
          </article>
        </div>
      </section>

      {/* Formation (full screen) */}
      <section id="formation" className="h-screen snap-start flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-6 py-12 space-y-6">
          <h2 className="text-2xl font-semibold">Formation</h2>

          <article>
            <h3 className="font-semibold">Diplôme d’ingénieur généraliste – ESILV</h3>
            <p className="text-sm text-gray-500">Paris, France · 2022 – 2025</p>
            <p>
              Majeure Fintech. Projets en informatique (Python, Rust, Kotlin, Java), mathématiques, cryptographie et
              intégration d’API d’IA.
            </p>
            <p className="text-sm">
              <strong>Environnement technique :</strong> Gestion de projet, Docker, Mathématiques, Cryptographie, WSL,
              Python, Rust, IA
            </p>
          </article>

          <article>
            <h3 className="font-semibold">DUT Génie Électrique et Informatique Industrielle – IUT de Cachan</h3>
            <p className="text-sm text-gray-500">Cachan, France · 2020 – 2022</p>
            <p>Électronique appliquée et informatique embarquée.</p>
            <p className="text-sm">
              <strong>Environnement technique :</strong> Mathématiques, Électronique, Microcontrôleurs, Automatisme, PCB,
              RTOS, VHDL, LTspice
            </p>
          </article>
        </div>
      </section>

      {/* Compétences (full screen) */}
      <section id="competences" className="h-screen snap-start flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-6 py-12 space-y-2">
          <h2 className="text-2xl font-semibold">Compétences</h2>
          <p>Java · C++ · Python · Matlab · VHDL · HTML / CSS / JavaScript · SQL</p>
          <p>Git · Windows · Linux</p>
        </div>
      </section>

      {/* Langues (full screen) */}
      <section id="langues" className="h-screen snap-start flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-6 py-12 space-y-2">
          <h2 className="text-2xl font-semibold">Langues</h2>
          <ul className="list-disc list-inside">
            <li>Français – natif</li>
            <li>Anglais – courant</li>
            <li>Espagnol – intermédiaire</li>
          </ul>
        </div>
      </section>

      {/* Intérêts (full screen) */}
      <section id="interets" className="h-screen snap-start flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-6 py-12 space-y-4">
          <h2 className="text-2xl font-semibold">Intérêts</h2>
          <p>Contenu à venir…</p>
        </div>
      </section>
    </main>
  );
}
