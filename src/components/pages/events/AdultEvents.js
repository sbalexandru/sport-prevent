import React, { useState } from "react";
import {
  Container,
  Title,
  Text,
  ImgParent,
  ImgChild,
  ImgBox,
  ImgTitle,
  BackColor,
  Model,
} from "./Events.styed";
import { images } from "../../../img/Images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faForward,
  faBackward,
} from "@fortawesome/free-solid-svg-icons";

// import i18n from "../../../i18n";

const AdultEvents = () => {
  let event1 = [
    {
      id: 1,
      imgSrc: images.gyerek_600,
      title: "asdasdasd",
    },
    {
      id: 2,
      imgSrc: images.comment1,
      title: "dasdasdas",
    },
    {
      id: 3,
      imgSrc: images.gyerek_600,
      title: "sdfsdfsdf asd ",
    },
    {
      id: 4,
      imgSrc: images.comment1,
      title: "fas asf dsf",
    },

    {
      id: 5,
      imgSrc: images.gyerek_600,
      title: "sdf sdfg sd",
    },
    {
      id: 6,
      imgSrc: images.comment1,
      title: "rwe rwe we",
    },
    {
      id: 7,
      imgSrc: images.comment2,
      title: "rwe rwe we",
    },
    {
      id: 8,
      imgSrc: images.comment4,
      title: "rwe rwe we",
    },
  ];

  let event2 = [
    {
      id: 1,
      imgSrc: images.gyerek_600,
      title: "asdasdasd",
    },
    {
      id: 2,
      imgSrc: images.logo,
      title: "dasdasdas",
    },
    {
      id: 3,
      imgSrc: images.comment5,
      title: "sdfsdfsdf asd ",
    },
    {
      id: 4,
      imgSrc: images.comment1,
      title: "fas asf dsf",
    },

    {
      id: 5,
      imgSrc: images.bent_600,
      title: "sdf sdfg sd",
    },
    {
      id: 6,
      imgSrc: images.kint_300,
      title: "rwe rwe we",
    },
    {
      id: 7,
      imgSrc: images.gyerek_300,
      title: "rwe rwe we",
    },
    {
      id: 8,
      imgSrc: images.comment4,
      title: "rwe rwe we",
    },
  ];

  let event3 = [
    {
      id: 1,
      imgSrc: images.kint_300,
      title: "asdasdasd",
    },
    {
      id: 2,
      imgSrc: images.logo,
      title: "dasdasdas",
    },
    {
      id: 3,
      imgSrc: images.bgImg1,
      title: "sdfsdfsdf asd ",
    },
    {
      id: 4,
      imgSrc: images.felnott_600,
      title: "fas asf dsf",
    },

    {
      id: 5,
      imgSrc: images.bent_600,
      title: "sdf sdfg sd",
    },
    {
      id: 6,
      imgSrc: images.comment2,
      title: "rwe rwe we",
    },
    {
      id: 7,
      imgSrc: images.comment5,
      title: "rwe rwe we",
    },
    {
      id: 8,
      imgSrc: images.logo,
      title: "rwe rwe we",
    },
  ];

  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  return (
    <>
      <Model className={model ? "model open" : "model"}>
        <img src={tempImgSrc} alt="img" />
        <FontAwesomeIcon
          className="exitBtn"
          icon={faTimes}
          onClick={() => setModel(false)}
        />
        <FontAwesomeIcon
          className="forwardBtn"
          icon={faForward}
          onClick={() => setModel(false)}
        />
        <FontAwesomeIcon
          className="backwardBtn"
          icon={faBackward}
          onClick={() => setModel(false)}
        />
      </Model>
      <BackColor className="adultEvent">
        <Container>
          <Title>Event title </Title>
          <Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, id
            consequatur! Debitis corrupti tempore dolore facere, quos, mollitia
            atque corporis quas id officiis, architecto adipisci vero similique
            aut delectus veniam repellat ad! Facere nisi iste laboriosam
            dolores! Beatae modi nulla similique dignissimos molestiae, rem
            laudantium hic debitis reprehenderit quisquam! Soluta culpa quas
            suscipit quam, repellat labore, distinctio pariatur commodi quae
            maxime modi, amet nisi saepe! Tempora veniam, est pariatur, corporis
            ipsa autem doloremque quidem esse iure aperiam eius quia officiis!
            At autem itaque minus eligendi in natus consectetur sunt deleniti?
            Voluptatem esse officiis assumenda fugit reprehenderit deleniti
            labore ex tempore. Blanditiis excepturi, natus officia impedit quo
            esse sit reprehenderit magnam placeat sunt numquam debitis delectus
            sapiente necessitatibus, vel atque dolores consequuntur? Aliquid od
            facilis quis adipisci officiis expedita voluptate nemo nostrum,
            autem maxime reprehenderit odit? Explicabo dolores minus assumenda
            ab facilis repudiandae, quo officia corporis blanditiis asperiores
            vel quidem temporibus autem sapiente? Iure, eos vero. Earum veniam
            repellat iure ipsum ad dolor.
          </Text>

          <ImgParent>
            {event1.map((item) => {
              return (
                <ImgChild key={item.id} onClick={() => getImg(item.imgSrc)}>
                  <ImgBox src={item.imgSrc} alt="img" />
                  <ImgTitle>{item.title}</ImgTitle>
                </ImgChild>
              );
            })}
          </ImgParent>
        </Container>
      </BackColor>

      <Container className="adjust bottom">
        <Title className="white">Event title </Title>
        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, id
          consequatur! Debitis corrupti tempore dolore facere, quos, mollitia
          atque corporis quas id officiis, architecto adipisci vero similique
          aut delectus veniam repellat ad! Facere nisi iste laboriosam dolores!
          Beatae modi nulla similique dignissimos molestiae, rem laudantium hic
          debitis reprehenderit quisquam! Soluta culpa quas suscipit quam,
          repellat labore, distinctio pariatur commodi quae maxime modi, amet
          nisi saepe! Tempora veniam, est pariatur, corporis ipsa autem
          doloremque quidem esse iure aperiam eius quia officiis! At autem
          itaque minus eligendi in natus consectetur sunt deleniti? Voluptatem
          esse officiis assumenda fugit reprehenderit deleniti labore ex
        </Text>

        <ImgParent>
          {event2.map((item) => {
            return (
              <ImgChild key={item.id} onClick={() => getImg(item.imgSrc)}>
                <ImgBox src={item.imgSrc} alt="img" />
                <ImgTitle>{item.title}</ImgTitle>
              </ImgChild>
            );
          })}
        </ImgParent>
      </Container>

      <BackColor className="adultEvent">
        <Container className="adjust">
          <Title>Event title </Title>
          <Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, id
            consequatur! Debitis corrupti tempore dolore facere, quos, mollitia
            atque corporis quas id officiis, architecto adipisci vero similique
            aut delectus veniam repellat ad! Facere nisi iste laboriosam
            dolores! Beatae modi nulla similique dignissimos molestiae, rem
            laudantium hic debitis reprehenderit quisquam! Soluta culpa quas
            suscipit quam, repellat labore, distinctio pariatur commodi quae
            maxime modi, amet nisi saepe! Tempora veniam, est pariatur, corporis
            ipsa autem doloremque quidem esse iure aperiam eius quia officiis!
            At autem itaque minus eligendi in natus consectetur sunt deleniti?
            Voluptatem esse officiis assumenda fugit reprehenderit deleniti
            labore ex tempore. Blanditiis excepturi, natus officia impedit quo
            esse sit reprehenderit magnam placeat sunt numquam debitis delectus
            sapiente necessitatibus, vel atque dolores consequuntur? Aliquid od
            facilis quis adipisci officiis expedita voluptate nemo nostrum,
            autem maxime reprehenderit odit? Explicabo dolores minus assumenda
            ab facilis repudiandae, quo officia corporis blanditiis asperiores
            vel quidem temporibus autem sapiente? Iure, eos vero. Earum veniam
            repellat iure ipsum ad dolor.
          </Text>

          <ImgParent>
            {event3.map((item) => {
              return (
                <ImgChild key={item.id} onClick={() => getImg(item.imgSrc)}>
                  <ImgBox src={item.imgSrc} alt="img" />
                  <ImgTitle>{item.title}</ImgTitle>
                </ImgChild>
              );
            })}
          </ImgParent>
        </Container>
      </BackColor>
    </>
  );
};
export default AdultEvents;
