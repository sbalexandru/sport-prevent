import React from "react";

import { Container, TextArea, VideoFrame } from "./About.styled";

const About = () => {
  return (
    <Container>
      {/* <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/IuOzqZGh9u0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe> */}
      <VideoFrame>
        <iframe
          width="460"
          height="315"
          src="https://www.youtube.com/embed/IuOzqZGh9u0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </VideoFrame>
      <TextArea>
        Dragi prieteni, Vă întâmpinăm cu drag pe pagina SportPrevent.
        <br />
        Suntem încântați că ne putem deschide porțile în fata pasionaților de
        sport pentru desfășurarea activităților sportive, semn al unei vieți
        active. Asociația noastră sportivă dorește să organizeze regulat
        activați sportive si recreative atât pentru membrii săi ,cât și pentru
        publicul larg. Dar, totuși , cea mai buna veste pentru iubitorii unei
        vieți active pline de mișcare este că pregatim si organizam nenumerate
        evenimente sportive gratuite care vor avea loc dupa terminarea perioadei
        de carantină . Vă invităm, dragi prieteni, să împărtășiți această veste
        bună și această postare și cu prietenii dvs. , pentru a ni se putea
        alătura pe Facebook. Nu ratați evenimentele noastre gratuite! Începând
        de azi, în fiecare duminică,vom reveni cu o postare nouă în limbă
        maghiară, română și engleză. Ne bucura interesul dumneavoastră . Vă
        rugăm să ne contactați cu orice întrebare aveți . Vă dorim tuturor o
        duminică frumoasă! Fiți perseverenți în acest moment dificil! Nu uitați
        ca exercițiile fizice vă vor ajuta să vă păstrați echilibrul fizic si
        emoțional! Toate cele bune, Echipa, SportPrevent
      </TextArea>
    </Container>
  );
};
export default About;
