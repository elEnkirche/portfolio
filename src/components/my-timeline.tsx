import Image from "next/image";
import React from "react";
import { Timeline } from "./ui/timeline";
import { vw } from "framer-motion";

export function MyTimeline
() {
  const data = [
    {
      title: "2023 -  2025",
      company: "Naval Group",
      content: (
        <div>
          <p className="text-neutral-700 dark:text-neutral-200 text-3xl md:text-5xl font-bold mb-6">
            Fullstack développer
          </p>

            <div className="grid grid-cols-4 gap-4 md:grid-cols-4 lg:grid-cols-8 mb-8" >
              <div className="flex flex-col items-center justify-center gap-1 rounded-lg border p-2">
                <img className="" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" width={30} height={30}/>   
                <span className="text-sm text-gray-600">java</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-1 rounded-lg border p-2">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" width={30} height={30}/>
                <span className="text-sm text-gray-600">javascript</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-1 rounded-lg border p-2">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" width={30} height={30}/>
                <span className="text-sm text-gray-600">html</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-1 rounded-lg border p-2">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" width={30} height={30}/>
                <span className="text-sm text-gray-600">css</span>
              </div>
            </div>

          <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-xl font-semibold mb-8">
            Développement d&apos;une solution logicielle en Java pour contrôler les émissions électromagnétiques des bâtiments de surface.
          </p>
          <ul className="mb-8 list-none pl-5 space-y-2 text-neutral-700 dark:text-neutral-300 text-base md:text-lg">
            <li>Suivi de projet via Git, gestion de version et mise en place de pipelines CI/CD.</li>
            <li>Application de design patterns pour un code modulaire et maintenable.</li>
            <li>Optimisation et restructuration de la base de données pour améliorer les performances et garantir l’intégrité des données.</li>
          </ul>
          {/* <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://www.naval-group.com/sites/default/files/styles/image_single_media_small/public/2020-10/Charles%20de%20Gaulle_1.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://www.terre.defense.gouv.fr/sites/default/files/styles/homepage_medallion/public/lycee-militaire-saintcyr-ecole/logo%20LMSCE.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div> */}
        </div>
      ),
    },
    {
      title: "2022 -  2023",
      company: "Expleo Group",
      content: (
        <div>
          <p className="text-neutral-700 dark:text-neutral-200 text-3xl md:text-5xl font-bold mb-6">
            Ingénieur Hardware
          </p>

            <div className="grid grid-cols-3 gap-4 md:grid-cols-4 lg:grid-cols-8 mb-8">
              <div className="flex flex-col items-center justify-center gap-1 rounded-lg border p-2">
                <img className="" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" width={30} height={30}/>   
                <span className="text-sm text-gray-600">c++</span>
              </div>
            </div>

          <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-xl font-semibold mb-8">
            Développement d&apos;une solution logicielle en Java pour contrôler les émissions électromagnétiques des bâtiments de surface.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-base md:text-lg">
              ✅ Suivi de projet via git, gestion de version et mise en place de pipelines CI/CD.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-base md:text-lg">
              ✅ Application de design patterns pour un code modulaire et maintenable.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-base md:text-lg">
              ✅ Optimisation et restructuration de la base de données pour améliorer les performances et garantir l'intégrité des données.
            </div>
          </div>
          {/* <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://www.naval-group.com/sites/default/files/styles/image_single_media_small/public/2020-10/Charles%20de%20Gaulle_1.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://www.terre.defense.gouv.fr/sites/default/files/styles/homepage_medallion/public/lycee-militaire-saintcyr-ecole/logo%20LMSCE.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div> */}
        </div>
      ),
    },
    {
      title: "2022 -  2025",
      company: "ESILV",
      content: (
        <div>
          <p className="text-neutral-700 dark:text-neutral-200 text-3xl md:text-5xl font-bold mb-6">
            Diplôme d&apos;ingénieur généraliste
          </p>

            <div className="grid grid-cols-3 gap-4 md:grid-cols-4 lg:grid-cols-8 mb-8" >
              <div className="flex flex-col items-center justify-center gap-1 rounded-lg border p-2">
                <img className="" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" width={30} height={30}/>   
                <span className="text-sm text-gray-600">python</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-1 rounded-lg border p-2">
                <img className="" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/solidity/solidity-original.svg" width={30} height={30}/>   
                <span className="text-sm text-gray-600">solidity</span>
              </div>
            </div>

          <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-xl font-semibold mb-8">
            Développement d&apos;une solution logicielle en Java pour contrôler les émissions électromagnétiques des bâtiments de surface.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-base md:text-lg">
              ✅ Suivi de projet via git, gestion de version et mise en place de pipelines CI/CD.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-base md:text-lg">
              ✅ Application de design patterns pour un code modulaire et maintenable.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-base md:text-lg">
              ✅ Optimisation et restructuration de la base de données pour améliorer les performances et garantir l'intégrité des données.
            </div>
          </div>
          {/* <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://www.naval-group.com/sites/default/files/styles/image_single_media_small/public/2020-10/Charles%20de%20Gaulle_1.jpg"
              alt="projet"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://www.terre.defense.gouv.fr/sites/default/files/styles/homepage_medallion/public/lycee-militaire-saintcyr-ecole/logo%20LMSCE.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div> */}
        </div>
      ),
    }, 
    {
      title: "2020-2022",
      company: "IUT de Cachan",
      content: (
        <div>
          <p className="text-neutral-700 dark:text-neutral-200 text-4xl md:text-3xl font-semibold mb-6">
            DUT Génie Electrique et Informatique Industrielle
          </p>

            <div className="grid grid-cols-3 gap-4 md:grid-cols-4 lg:grid-cols-8 mb-8" >
              <div className="flex flex-col items-center justify-center gap-1 rounded-lg border p-2">
                <img className="" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" width={30} height={30}/>   
                <span className="text-sm text-gray-600">c++</span>
              </div>
              
            </div>

          <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-xl font-semibold mb-8">
            Développement d&apos;une solution logicielle en Java pour contrôler les émissions électromagnétiques des bâtiments de surface.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-base md:text-lg">
              ✅ Suivi de projet via git, gestion de version et mise en place de pipelines CI/CD.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-base md:text-lg">
              ✅ Application de design patterns pour un code modulaire et maintenable.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-base md:text-lg">
              ✅ Optimisation et restructuration de la base de données pour améliorer les performances et garantir l'intégrité des données.
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {/* <Image
              src="https://www.iut-cachan.universite-paris-saclay.fr/sites/default/files/media/2020-06/IUT-CACHAN.svg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            /> */}
            {/* <Image
              src="https://www.naval-group.com/sites/default/files/styles/image_single_media_small/public/2020-10/Charles%20de%20Gaulle_1.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            /> */}
          </div>
        </div>
      ),
    },
    {
      title: "2018-2020",
      company: "Lycée militaire de Saint-Cyr",
      content: (
        <div>
          <p className="text-neutral-700 dark:text-neutral-200 text-3xl md:text-5xl font-bold mb-6">
            Baccalauréat STI2D
          </p>

            <div className="grid grid-cols-3 gap-4 md:grid-cols-4 lg:grid-cols-8 mb-8" >
              <div className="flex flex-col items-center justify-center gap-1 rounded-lg border p-2">
                <img className="" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg" width={30} height={30}/>   
                <span className="text-sm text-gray-600">arduino</span>
              </div>
              
            </div>

          <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-xl font-semibold mb-8">
            Développement d&apos;une solution logicielle en Java pour contrôler les émissions électromagnétiques des bâtiments de surface.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-base md:text-lg">
              ✅ Suivi de projet via git, gestion de version et mise en place de pipelines CI/CD.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-base md:text-lg">
              ✅ Application de design patterns pour un code modulaire et maintenable.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-base md:text-lg">
              ✅ Optimisation et restructuration de la base de données pour améliorer les performances et garantir l'intégrité des données.
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {/* <Image
              src="https://www.terre.defense.gouv.fr/sites/default/files/styles/homepage_medallion/public/lycee-militaire-saintcyr-ecole/logo%20LMSCE.png"
              alt="logo LMSC"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            /> */}
            {/* <Image
              src="/LMSC.jpeg"
              alt="LMSC"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            /> */}
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="min-h-screen w-full">
      <div className="absolute top-0 left-0 w-full">
        <Timeline data={data} />
      </div>
    </div>
  );
}
