import {
  DemoSlideA,
  DemoSlideB,
  DemoSlideC,
  DemoSlideD,
  DemoSlideSuccess,
} from "@/components/organisms/DemoModalSlides";
import type { ModalRoute, ActionType } from "@/lib";

export const modalRoutes = (selection: string): ModalRoute[] => {
  const createSlide = (
    title: string,
    slide: React.ReactElement,
    id: string,
    customActions: ActionType[] | undefined | null
  ) => ({
    title,
    slide,
    id,
    customActions,
  });

  const slidesArray1 = [
    createSlide("Welcome to Demo 1", <DemoSlideA />, "demo-1-a", null),
    createSlide("The Second Slide of Demo 1", <DemoSlideB />, "demo-1-b", null),
    createSlide("SLIDE III of Demo 1", <DemoSlideC />, "demo-1-c", null),
    createSlide("The Last SLide of Demo 1", <DemoSlideD />, "demo-1-d", null),
  ];

  const customActionSuccess: ActionType[] = [
    {
      text: "Submit",
      action: () => alert("hello"),
      id: "demo-success-action",
      backgroundTheme: "success",
    },
  ];

  const slidesArraySuccess = [
    createSlide(
      "Thank You!!!",
      <DemoSlideSuccess />,
      "demo-success",
      customActionSuccess
    ),
  ];

  switch (selection) {
    case "demo":
      return slidesArray1;

    case "success":
      return slidesArraySuccess;

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
