import React from "react";
import githubLogo from "./img/GitHub-Mark-120px-plus.png";

const Footer = () => {
  return (
    <footer className=" w-screen h-fit bg flex flex-col justify-center items-center bg-[color:#d988ff] text-center mt-4 px-2 text-xl shadow-xl">
      <a href="https://github.com/J-boardman" target="_blank" rel="noreferrer">
        <img src={githubLogo} alt="github profile link" className="h-16" />
      </a>
      <p>
        <a
          href="https://www.flaticon.com/free-icons/pokemon"
          title="pokemon icons"
          target="_blank"
          rel="noreferrer"
        >
          Pokemon icons created by: Roundicons Freebies - Flaticon
        </a>
      </p>
    </footer>
  );
};

export default Footer;
