"use client";
import { useState, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { Player } from "@lottiefiles/react-lottie-player";
import Link from "next/link";

function PjDev() {
  const root = useRef();

  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      let ctx = gsap.context(() => {
        gsap.from(".hiddenEffect", {
          opacity: 0,
          y: 50,
          duration: 0.8,
          stagger: 0.2,
        });

        gsap.from(".hiddenEffectFast", {
          opacity: 0,
          delay: 0.8,
          y: 10,
          duration: 0.8,
          stagger: 0.15,
        });
      }, root);

      return () => ctx.revert();
    }
  }, [root]);
  return (
    <main className="bg-principal font-fragment text-text overflow-hidden">
      <div className="flex justify-center items-center p-2 h-screen" ref={root}>
        <div className="grid auto-rows-auto grid-cols-5 gap-5 h-full">
          <section className=" col-span-2 inline rounded-xl bg-secondary hiddenEffect bg-noise-pattern grid-item-sam p-4">
            <img className="h-36 m-6" src="/sam.png" alt="moi" />
            <h1 className="text-3xl">
              <span className="text-important">Samuel Prieur</span>
              <br />
              is a second year student in
              <span className="text-important"> full-stack</span> web
              developpement
            </h1>
          </section>
          <section className="grid auto-rows-auto grid-cols-3 gap-5 h-full col-span-3">
            <div className="place-content-center flex items-center rounded-xl col-start-1 col-span-3 bg-secondary hiddenEffect bg-noise-pattern">
              <div>
                <h2 className="text-2xl m-2 text-center">
                  Web developpement skills
                </h2>
                <div className="flex justify-center">
                  <img
                    className="h-16 m-2 imageHover hiddenEffectFast "
                    src="./dev/logo-HTML.png"
                    alt="logo HTML"
                  />
                  <img
                    className="h-16 m-2 imageHover hiddenEffectFast "
                    src="./dev/logo-CSS.png"
                    alt="logo CSS"
                  />
                  <img
                    className="h-16 m-2 imageHover hiddenEffectFast "
                    src="./dev/logo-JS.png"
                    alt="logo JS"
                  />
                  <img
                    className="h-16 m-2 imageHover hiddenEffectFast "
                    src="./dev/logo-PHP.png"
                    alt="logo PHP"
                  />
                  <img
                    className="h-16 m-2 imageHover hiddenEffectFast "
                    src="./dev/logo-REACT.png"
                    alt="logo REACT"
                  />
                  <img
                    className="h-16 m-2 imageHover hiddenEffectFast "
                    src="./dev/logo-NEXT.png"
                    alt="logo NEXT"
                  />
                  <img
                    className="h-16 m-2 imageHover hiddenEffectFast "
                    src="./dev/logo-SQL.png"
                    alt="logo SQL"
                  />
                  <img
                    className="h-16 m-2 imageHover hiddenEffectFast "
                    src="./dev/logo-SASS.png"
                    alt="logo SASS"
                  />
                  <img
                    className="h-16 m-2 imageHover hiddenEffectFast "
                    src="./dev/logo-PYTHON.png"
                    alt="logo PYTHON"
                  />
                </div>
              </div>
            </div>
            <div className="place-content-center flex items-center rounded-xl col-start-1 col-span-3 bg-secondary hiddenEffect bg-noise-pattern">
              <div>
                <h2 className="text-2xl m-2 text-center">
                  Digital design skills
                </h2>
                <div className="flex justify-center">
                  <img
                    className="h-16 m-2 imageHover hiddenEffectFast  hover:invert-100 duration-0"
                    src="./crea/logo-AI.png"
                    alt="logo Adobe Illustrator"
                  />
                  <img
                    className="h-16 m-2 imageHover hiddenEffectFast "
                    src="./crea/logo-PS.png"
                    alt="logo Photoshop"
                  />
                  <img
                    className="h-16 m-2 imageHover hiddenEffectFast "
                    src="./crea/logo-PR.png"
                    alt="logo Premiere Pro"
                  />
                  <img
                    className="h-16 m-2 imageHover hiddenEffectFast "
                    src="./crea/logo-XD.png"
                    alt="logo X Design"
                  />
                  <img
                    className="h-16 m-2 imageHover hiddenEffectFast "
                    src="./crea/logo-FIGMA.png"
                    alt="logo Figma"
                  />
                  <img
                    className="h-16 m-2 imageHover hiddenEffectFast "
                    src="./crea/logo-AU.png"
                    alt="logo Audition"
                  />
                  <img
                    className="h-16 m-2 imageHover hiddenEffectFast "
                    src="./crea/logo-AE.png"
                    alt="logo After Effect"
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="grid auto-rows-auto grid-cols-5 gap-5 h-full col-span-5">
            <button className="justify-center flex items-center col-start-1 col-span-1 rounded-xl bg-secondary border border-principal hover:border-important hiddenEffect bg-noise-pattern p-1">
              <p>sprieurpro@gmail.com</p>
            </button>
            <button className="justify-center flex items-center col-start-2 col-span-1 rounded-xl bg-secondary border border-principal hover:border-important hiddenEffect bg-noise-pattern">
              <p>06 03 00 01 97</p>
            </button>
            <button className="col-start-3 col-span-1 rounded-xl   inline bg-secondary border border-principal hover:border-important hiddenEffect bg-noise-pattern">
              Mon Linkedin
            </button>
            <button className="col-start-4 col-span-1 rounded-xl  inline bg-secondary border border-principal hover:border-important hiddenEffect bg-noise-pattern">
              Mon Github
            </button>
            <button className="col-start-5 col-span-1 rounded-xl  inline bg-secondary border border-principal hover:border-important hiddenEffect bg-noise-pattern">
              Mon CV
            </button>
          </section>

          <section className="col-span-3 rounded-xl  inline bg-secondary hiddenEffect bg-noise-pattern p-5">
            <h1 className="text-2xl text-center">Parcours</h1>
            <Player
              autoplay
              loop
              src="/data.json"
              style={{ height: "150px", width: "550px" }}
            ></Player>
          </section>

          <Link
            id="swup"
            className=" transition-fade rounded-xl col-span-2  bg-secondary hiddenEffect bg-noise-pattern "
            href="../home/home"
          >
            <h1 className="text-center text-2xl ">
              Projet Developpement <br />
              Projet Developpement <br />
              Projet Developpement <br />
              Projet Developpement <br />
              Projet Developpement <br />
              Projet Developpement <br />
            </h1>
          </Link>
          <section className=" rounded-xl col-span-2  inline bg-secondary hiddenEffect bg-noise-pattern">
            <h1 className="text-center text-2xl ">
              Création Numérique <br />
              Création Numérique <br />
              Création Numérique <br />
              Création Numérique <br />
              Création Numérique <br />
              Création Numérique <br />
            </h1>
          </section>
          <section className=" grid auto-rows-auto grid-cols-2 gap-5 h-full col-span-3 overflow-auto"></section>
        </div>
      </div>
    </main>
  );
}

export default PjDev;
