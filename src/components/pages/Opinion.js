import React from "react";
import {
  Container,
  Title,
  Parent,
  Child,
  ImgChild,
  Text,
} from "./Opinion.styled";
import i18n from "../../i18n";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { images } from "../../img/Images";

const OpinionSection = () => {
  return (
    <Container className="opinion-section" id="opinion">
      <Title>{i18n.t("opinion.opinionTitle")}</Title>
      <Parent>
        <Carousel className="carusel">
          <Child>
            <ImgChild src={images.comment1} />
            <Text>
              asndjklaslkdnaslknf ajklsndlkasnkl njkasnd nasklnf jkanflkd
              asnjkdb njkasklnaksljdckla nasdjclasjklncklams klnaskljdljsakln
              klasnvjkabnslk jlkashn jkvnslkfoi jaspojcdksnhvipokxcbpojb
            </Text>
          </Child>

          <Child>
            <ImgChild src={images.comment2} />
            <Text className="second">
              asndjklaslkdnaslknf ajklsndlkasnkl njkasnd nasklnf jkanflkd
              asnjkdb njkasklnaksljdckla nasdjclasjklncklams klnaskljdljsakln
              klasnvjkabnslk jlkashn jkvnslkfoi jaspojcdksnhvipokxcbpojb
            </Text>
          </Child>

          <Child>
            <ImgChild src={images.comment3} />
            <Text className="triad">
              asndjklaslkdnaslknf ajklsndlkasnkl njkasnd nasklnf jkanflkd
              asnjkdb njkasklnaksljdckla nasdjclasjklncklams klnaskljdljsakln
              klasnvjkabnslk jlkashn jkvnslkfoi jaspojcdksnhvipokxcbpojb
            </Text>
          </Child>

          <Child>
            <ImgChild src={images.comment4} />
            <Text className="four">
              asndjklaslkdnaslknf ajklsndlkasnkl njkasnd nasklnf jkanflkd
              asnjkdb njkasklnaksljdckla nasdjclasjklncklams klnaskljdljsakln
              klasnvjkabnslk jlkashn jkvnslkfoi jaspojcdksnhvipokxcbpojb
            </Text>
          </Child>

          <Child>
            <ImgChild src={images.comment5} />
            <Text className="five">
              asndjklaslkdnaslknf ajklsndlkasnkl njkasnd nasklnf jkanflkd
              asnjkdb njkasklnaksljdckla nasdjclasjklncklams klnaskljdljsakln
              klasnvjkabnslk jlkashn jkvnslkfoi jaspojcdksnhvipokxcbpojb
            </Text>
          </Child>
        </Carousel>
      </Parent>
    </Container>
  );
};
export default OpinionSection;
