import styled from "styled-components";
import { images } from "../../img/Images";

export const Container = styled.div`
  width: auto;
  height: 100vh;
  /* position: relative; */

  /* .bgImg1 {
    width: auto;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    animation-name: imgSlider 10s ease-in-out infinite;
    animation-direction: alternate;
    transition: opacity 1s ease-in-out;
    -moz-transition: opacity 1s ease-in-out;
    -webkit-transition: opacity 1s ease-in-out;
    @keyframes imgSlider {
      0% {
        -moz-opacity: 1;
        -webkit-opacity: 1;
        opacity: 1;
      }
      33% {
        -moz-opacity: 0;
        -webkit-opacity: 0;
        opacity: 0;
      }
      66% {
        -moz-opacity: 0;
        -webkit-opacity: 0;
        opacity: 0;
      }
      100% {
        -moz-opacity: 0;
        -webkit-opacity: 0;
        opacity: 0;
      }
    }
    @-moz-keyframes imgSlider {
      0% {
        -moz-opacity: 1;
        -webkit-opacity: 1;
        opacity: 1;
      }
      33% {
        -moz-opacity: 0;
        -webkit-opacity: 0;
        opacity: 0;
      }
      66% {
        -moz-opacity: 0;
        -webkit-opacity: 0;
        opacity: 0;
      }
      100% {
        -moz-opacity: 0;
        -webkit-opacity: 0;
        opacity: 0;
      }
    }
    @-webkit-keyframes imgSlider {
      0% {
        -moz-opacity: 1;
        -webkit-opacity: 1;
        opacity: 1;
      }
      33% {
        -moz-opacity: 0;
        -webkit-opacity: 0;
        opacity: 0;
      }
      66% {
        -moz-opacity: 0;
        -webkit-opacity: 0;
        opacity: 0;
      }
      100% {
        -moz-opacity: 0;
        -webkit-opacity: 0;
        opacity: 0;
      }
    }
  }
  .bgImg2 {
    width: auto;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: opacity 1s ease-in-out;
    -moz-transition: opacity 1s ease-in-out;
    -webkit-transition: opacity 1s ease-in-out;
    @keyframes imgSlider {
      0% {
        -moz-opacity: 0;
        -webkit-opacity: 0;
        opacity: 0;
      }
      33% {
        -moz-opacity: 1;
        -webkit-opacity: 1;
        opacity: 1;
      }
      66% {
        -moz-opacity: 0;
        -webkit-opacity: 0;
        opacity: 0;
      }
      100% {
        -moz-opacity: 0;
        -webkit-opacity: 0;
        opacity: 0;
      }
    }

    @-moz-keyframes imgSlider {
      0% {
        -moz-opacity: 0;
        -webkit-opacity: 0;
        opacity: 0;
      }
      33% {
        -moz-opacity: 1;
        -webkit-opacity: 1;
        opacity: 1;
      }
      66% {
        -moz-opacity: 0;
        -webkit-opacity: 0;
        opacity: 0;
      }
      100% {
        -moz-opacity: 0;
        -webkit-opacity: 0;
        opacity: 0;
      }
    }
    @-webkit-keyframes imgSlider {
      0% {
        -moz-opacity: 0;
        -webkit-opacity: 0;
        opacity: 0;
      }
      33% {
        -moz-opacity: 1;
        -webkit-opacity: 1;
        opacity: 1;
      }
      66% {
        -moz-opacity: 0;
        -webkit-opacity: 0;
        opacity: 0;
      }
      100% {
        -moz-opacity: 0;
        -webkit-opacity: 0;
        opacity: 0;
      }
    }
  }
  .bgImg3 {
    width: auto;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: opacity 1s ease-in-out;
    -moz-transition: opacity 1s ease-in-out;
    -webkit-transition: opacity 1s ease-in-out;
    @keyframes imgSlider {
      0% {
        -moz-opacity: 0;
        -webkit-opacity: 0;
        opacity: 0;
      }
      33% {
        -moz-opacity: 0;
        -webkit-opacity: 0;
        opacity: 0;
      }
      66% {
        -moz-opacity: 1;
        -webkit-opacity: 1;
        opacity: 1;
      }
      100% {
        -moz-opacity: 1;
        -webkit-opacity: 1;
        opacity: 1;
      }
    }
    @-moz-keyframes imgSlider {
      0% {
        -moz-opacity: 0;
        -webkit-opacity: 0;
        opacity: 0;
      }
      33% {
        -moz-opacity: 0;
        -webkit-opacity: 0;
        opacity: 0;
      }
      66% {
        -moz-opacity: 1;
        -webkit-opacity: 1;
        opacity: 1;
      }
      100% {
        -moz-opacity: 1;
        -webkit-opacity: 1;
        opacity: 1;
      }
    }
    @-webkit-keyframes imgSlider {
      0% {
        -moz-opacity: 0;
        -webkit-opacity: 0;
        opacity: 0;
      }
      33% {
        -moz-opacity: 0;
        -webkit-opacity: 0;
        opacity: 0;
      }
      66% {
        -moz-opacity: 1;
        -webkit-opacity: 1;
        opacity: 1;
      }
      100% {
        -moz-opacity: 1;
        -webkit-opacity: 1;
        opacity: 1;
      }
    }
  } */
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
  @media (max-width: 768px) {
    width: auto;
  }
`;
