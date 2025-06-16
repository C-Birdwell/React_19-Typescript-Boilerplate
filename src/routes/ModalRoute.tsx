import {
  DemoSlideA,
  DemoSlideB,
  DemoSlideC,
  DemoSlideD,
  DemoSlideSuccess,
} from "@/components";
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
    createSlide("Example Slide One", <DemoSlideA />, "demo-1-a", null),
    createSlide("The Second Slide", <DemoSlideB />, "demo-1-b", null),
    createSlide("SLIDE III", <DemoSlideC />, "demo-1-c", null),
    createSlide("Last Slide", <DemoSlideD />, "demo-1-d", null),
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
