import React, { useEffect } from "react";
import Typewriter from "typewriter-effect/dist/core";
import classes from "./home.module.css";
import { autoTypeData } from "../../Data/PersonalData";

import { useSelector } from "react-redux";
// const linkIcons=[GitHubIcon,LinkedInIcon,TwitterIcon,InstagramIcon,EmailIcon];

function Home(props) {
  const nonThemeColor = useSelector((state) => state.nonThemeColor);
  const uiColor = useSelector((state) => state.uiColor);
  function handleTyper() {
    let textItems = autoTypeData;
    var autoTyper = document.getElementById("typer");
    new Typewriter(autoTyper, {
      strings: textItems,
      autoStart: true,
      pauseFor: 1000,
      loop: true,
    });
  }
  useEffect(handleTyper, []);
  return (
    <main>
      <div className={classes.homeContent}>
        <h1
          className={classes.greeting}
          style={{ fontSize: "50px", fontWeight: "600" }}
        >
          Axborot xavfsizligi asoslari
        </h1>
        <div className={classes.autoText}>
          MAVZU:Xavfsizlik buzilganini aniqlovchi dasturlar
        </div>

        {/* <SocialLinks className={classes.links} /> */}
      </div>
      <div className={classes.avatarImage}>
        <img
          src="https://avatars.mds.yandex.net/i?id=7858d4977f0aae60fc6afa2578a16f52a7c92439-7662207-images-thumbs&n=13"
          alt=""
          srcSet=""
        />
      </div>
    </main>
  );
}
export default Home;
