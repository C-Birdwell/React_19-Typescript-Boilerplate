import { useNavigate } from "react-router";

import {
  DemoSlideA,
  DemoSlideB,
  DemoSlideC,
  DemoSlideD,
  DemoSlideLightA,
  DemoSlideLightB,
  DemoSlideDarkA,
  DemoSlideDarkB,
  DemoSlideSuccess,
  ModalSlideReduxSummary,
} from "@/components";
import type { ModalRoute, ActionType } from "@/lib";
import { setAppTheme } from "@/utils";
import { URL_HOME } from "@/constants";

const setTheme = (text: string, theme: "light" | "dark") => ({
  text,
  id: `set-theme-${theme}`,
  action: () => setAppTheme(theme),
  backgroundTheme: theme,
});

const darkButton = setTheme("Dark Theme", "dark");
const lightButton = setTheme("Light Theme", "light");

export const modalRoutes = (
  selection: "demo" | "light" | "dark" | "success" | "redux",
  navigate: ReturnType<typeof useNavigate>,
  onDismiss: () => void | null
): ModalRoute[] => {
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

  const slidesDemoLight = [
    createSlide("Light Modal Demo", <DemoSlideLightA />, "demo-l-a", [
      darkButton,
      lightButton,
    ]),
    createSlide("The Light Slide", <DemoSlideB />, "demo-l-b", null),
    createSlide("Of The Force", <DemoSlideC />, "demo-l-c", null),
    createSlide("Good Day Light Modal", <DemoSlideLightB />, "demo-l-d", [
      darkButton,
      lightButton,
    ]),
  ];

  const slidesDemoDark = [
    createSlide("Dark Modal Demo", <DemoSlideDarkA />, "demo-l-a", [
      darkButton,
      lightButton,
    ]),
    createSlide("The Dark Slide", <DemoSlideB />, "demo-l-b", null),
    createSlide("Of The Force", <DemoSlideC />, "demo-l-c", null),
    createSlide("Good Night Dark Modal", <DemoSlideDarkB />, "demo-l-d", [
      darkButton,
      lightButton,
    ]),
  ];

  const slidesDemoRedux = [
    createSlide(
      "Values of Inputs from Redux Examples",
      <ModalSlideReduxSummary />,
      "demo-r-a",
      null
    ),
  ];

  const successHandler = () => {
    navigate(URL_HOME);
    window.scrollTo(0, 0);
    onDismiss();
  };

  const customActionSuccess: ActionType[] = [
    {
      text: "Submit",
      action: successHandler,
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

    case "light":
      return slidesDemoLight;

    case "dark":
      return slidesDemoDark;

    case "success":
      return slidesArraySuccess;

    case "redux":
      return slidesDemoRedux;

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
