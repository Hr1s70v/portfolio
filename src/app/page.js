"use client"; // This tells Next.js that this component should be a Client Component

import Image from "next/image";
import pfp from "./pfp.png";
import react from "./icons/react.png"
import next from "./icons/nextjs.png"
import angular from "./icons/angular.png"

import svelte from "./icons/sveltekit.png"
import html from "./icons/html.png"
import css from "./icons/css.png"
import javascript from "./icons/js.png"
import typescript from "./icons/ts.png"
import csharp from "./icons/csharp.png"
import rust from "./icons/rust.png"
import axum from "./icons/rust.png"
import nodejs from "./icons/nodejs.png"
import styles from "./page.module.css";
import Nav from "../nav";
import Typewriter from 'typewriter-effect';

const skillCategories = {
  Frontend: [
    { src: react, alt: "React", name: "React" },
    { src: next, alt: "NextJS", name: "NextJS" },
    { src: svelte, alt: "SvelteKit", name: "SvelteKit" },
    { src: angular, alt: "Angular", name: "Angular" },
  ],
  Backend: [
    { src: nodejs, alt: "Node.js", name: "Node.js" },
    { src: axum, alt: "axum", name: "Axum" },
  ],
  Languages: [
    { src: html, alt: "HTML", name: "HTML" },
    { src: css, alt: "CSS", name: "CSS" },
    { src: javascript, alt: "JavaScript", name: "JS" },
    { src: csharp, alt: "C#", name: "C#" },
  ],
  "Currently Learning": [
    { src: typescript, alt: "TS", name: "TS" },
    { src: rust, alt: "Rust", name: "Rust" },
  ],
};

// Skill component
function Skill({ src, alt, name }) {
  return (
    <div className={styles.languages}>
      <Image
        className={styles.langi}
        src={src}
        alt={alt}
        width={30}
        height={30}
        priority={true}
      />
      <p className={styles.langt}>{name}</p>
    </div>
  );
}

// Skill category
function SkillCategory({ title, skills }) {
  return (
    <div className={styles.category}>
      <h3 className={styles.skillst}>{title}</h3>
      <div className={styles.skillGrid}>
        {skills.map((skill, index) => (
          <Skill key={index} src={skill.src} alt={skill.alt} name={skill.name} />
        ))}
      </div>
    </div>
  );
}


export default function Home() {
  return (
    <main className={styles.main}>
      <Nav />
      <header className={styles.header}>
        <div className={styles.infobox}>
          <Image
            className={styles.profileImage}
            src={pfp}
            alt="Profile Picture"
            width={100}
            height={100}
            priority={true}
          />
          <div className={styles.info}>
            <h3 className={styles.headertext}>Martin Hristov</h3>
            <p className={styles.typwriter}>
              <Typewriter
                options={{
                  strings: ["Student", "Gopnik", "Developer", "Designer"],
                  autoStart: true,
                  loop: true,
                  delay: 100,
                  deleteSpeed: 50,
                }}
              />
            </p>
          </div>
          <div className={styles.about}>
            <p className={styles.abouttext}>My name is Hristov, I am a Student, Developer, Designer, and a chill person in my free time</p>
          </div>
        </div>
      </header>
      <section className={styles.skills}>
        <h2 className={styles.skillsh2}>Skills</h2>
        {Object.entries(skillCategories).map(([category, skills]) => (
          <SkillCategory key={category} title={category} skills={skills} />
        ))}
      </section>
    </main>
  );
}

