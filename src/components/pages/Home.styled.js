import styled from "styled-components";
import { images } from "../../img/Images";

export const Container = styled.div`
  width: auto;
  height: 100vh;
  margin: 0;
`;

export const BackImg = styled.div`
  width: auto;
  height: 100vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 124px;
  /* background-image: url(${images.Homeback_123}); */
  animation: imgSlider 16s ease-in-out infinite;
  -webkit-animation: imgSlider 16s ease-in-out infinite;
  -moz-animation: imgSlider 16s ease-in-out infinite;

  @keyframes imgSlider {
    0%,
    100% {
      -moz-background-image: url(${images.bgImg1});
      -webkit-background-image: url(${images.bgImg1});
      background-image: url(${images.bgImg1});
    }
    33% {
      -moz-background-image: url(${images.bgImg2});
      -webkit-background-image: url(${images.bgImg2});
      background-image: url(${images.bgImg2});
    }
    66% {
      -moz-background-image: url(${images.bgImg3});
      -webkit-background-image: url(${images.bgImg3});
      background-image: url(${images.bgImg3});
    }
  }
  @-webkit-keyframes imgSlider {
    0%,
    100% {
      -moz-background-image: url(${images.bgImg1});
      -webkit-background-image: url(${images.bgImg1});
      background-image: url(${images.bgImg1});
    }
    33% {
      -moz-background-image: url(${images.bgImg2});
      -webkit-background-image: url(${images.bgImg2});
      background-image: url(${images.bgImg2});
    }
    66% {
      -moz-background-image: url(${images.bgImg3});
      -webkit-background-image: url(${images.bgImg3});
      background-image: url(${images.bgImg3});
    }
  }
  @-webkit-keyframes imgSlider {
    0%,
    100% {
      -moz-background-image: url(${images.bgImg1});
      -webkit-background-image: url(${images.bgImg1});
      background-image: url(${images.bgImg1});
    }
    33% {
      -moz-background-image: url(${images.bgImg2});
      -webkit-background-image: url(${images.bgImg2});
      background-image: url(${images.bgImg2});
    }
    66% {
      -moz-background-image: url(${images.bgImg3});
      -webkit-background-image: url(${images.bgImg3});
      background-image: url(${images.bgImg3});
    }
  }
  @media (max-width: 760px) {
    @keyframes imgSlider {
      0%,
      100% {
        -moz-background-image: url(${images.bgImg1_tablet});
        -webkit-background-image: url(${images.bgImg1_tablet});
        background-image: url(${images.bgImg1_tablet});
      }
      33% {
        -moz-background-image: url(${images.bgImg2_tablet});
        -webkit-background-image: url(${images.bgImg2_tablet});
        background-image: url(${images.bgImg2_tablet});
      }
      66% {
        -moz-background-image: url(${images.bgImg3_tablet});
        -webkit-background-image: url(${images.bgImg3_tablet});
        background-image: url(${images.bgImg3_tablet});
      }
    }
    @-webkit-keyframes imgSlider {
      0%,
      100% {
        -moz-background-image: url(${images.bgImg1_tablet});
        -webkit-background-image: url(${images.bgImg1_tablet});
        background-image: url(${images.bgImg1_tablet});
      }
      33% {
        -moz-background-image: url(${images.bgImg2_tablet});
        -webkit-background-image: url(${images.bgImg2_tablet});
        background-image: url(${images.bgImg2_tablet});
      }
      66% {
        -moz-background-image: url(${images.bgImg3_tablet});
        -webkit-background-image: url(${images.bgImg3_tablet});
        background-image: url(${images.bgImg3_tablet});
      }
    }
    @-webkit-keyframes imgSlider {
      0%,
      100% {
        -moz-background-image: url(${images.bgImg1_tablet});
        -webkit-background-image: url(${images.bgImg1_tablet});
        background-image: url(${images.bgImg1_tablet});
      }
      33% {
        -moz-background-image: url(${images.bgImg2_tablet});
        -webkit-background-image: url(${images.bgImg2_tablet});
        background-image: url(${images.bgImg2_tablet});
      }
      66% {
        -moz-background-image: url(${images.bgImg3_tablet});
        -webkit-background-image: url(${images.bgImg3_tablet});
        background-image: url(${images.bgImg3_tablet});
      }
    }
  }
  @media (max-width: 466px) {
    @keyframes imgSlider {
      0%,
      100% {
        -moz-background-image: url(${images.bgImg1_mobil});
        -webkit-background-image: url(${images.bgImg1_mobil});
        background-image: url(${images.bgImg1_mobil});
      }
      33% {
        -moz-background-image: url(${images.bgImg2_mobil});
        -webkit-background-image: url(${images.bgImg2_mobil});
        background-image: url(${images.bgImg2_mobil});
      }
      66% {
        -moz-background-image: url(${images.bgImg3_mobil});
        -webkit-background-image: url(${images.bgImg3_mobil});
        background-image: url(${images.bgImg3_mobil});
      }
    }
    @-webkit-keyframes imgSlider {
      0%,
      100% {
        -moz-background-image: url(${images.bgImg1_mobil});
        -webkit-background-image: url(${images.bgImg1_mobil});
        background-image: url(${images.bgImg1_mobil});
      }
      33% {
        -moz-background-image: url(${images.bgImg2_mobil});
        -webkit-background-image: url(${images.bgImg2_mobil});
        background-image: url(${images.bgImg2_mobil});
      }
      66% {
        -moz-background-image: url(${images.bgImg3_mobil});
        -webkit-background-image: url(${images.bgImg3_mobil});
        background-image: url(${images.bgImg3_mobil});
      }
    }
    @-webkit-keyframes imgSlider {
      0%,
      100% {
        -moz-background-image: url(${images.bgImg1_mobil});
        -webkit-background-image: url(${images.bgImg1_mobil});
        background-image: url(${images.bgImg1_mobil});
      }
      33% {
        -moz-background-image: url(${images.bgImg2_mobil});
        -webkit-background-image: url(${images.bgImg2_mobil});
        background-image: url(${images.bgImg2_mobil});
      }
      66% {
        -moz-background-image: url(${images.bgImg3_mobil});
        -webkit-background-image: url(${images.bgImg3_mobil});
        background-image: url(${images.bgImg3_mobil});
      }
    }
  }
`;
