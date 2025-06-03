import {
  DemoSlideA,
  DemoSlideB,
  DemoSlideC,
  DemoSlideD,
} from "@/components/organisms/DemoModalSlides";
import type { ModalRoute } from "@/lib";

export const modalRoutes = (selection: string): ModalRoute[] => {
  const createSlide = (
    title: string,
    slide: React.ReactElement,
    id: string
  ) => ({
    title,
    slide,
    id,
  });

  const slidesArray1 = [
    createSlide("Welcome to Demo 1", <DemoSlideA />, "demo-1-a"),
    createSlide("The Second Slide of Demo 1", <DemoSlideB />, "demo-1-b"),
    createSlide("SLIDE III of Demo 1", <DemoSlideC />, "demo-1-c"),
    createSlide("The Last SLide of Demo 1", <DemoSlideD />, "demo-1-d"),
  ];

  switch (selection) {
    case "demo":
      return slidesArray1;

    default:
      return [
        {
          title: "ERROR",
          slide: <p>ERROR!!!</p>,
          id: "slide-error",
        },
      ];
  }
};
