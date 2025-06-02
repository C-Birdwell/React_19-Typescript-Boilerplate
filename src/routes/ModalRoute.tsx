import {
  DemoSlideA,
  DemoSlideB,
  DemoSlideC,
  DemoSlideD,
} from "@/components/organisms/DemoModalSlides";
import { type FC, useState } from "react";

type ModalRouteProps = {
  selection: string;
  modalIndex: number;
};

export const ModalRoute: React.FC<ModalRouteProps> = ({
  selection,
  modalIndex,
}) => {
  //   const [modalContent, setModalContent] = useState([<p>Not Initiated!!</p>]);

  const foobar = [{ title: "hello", slide: <DemoSlideA />, id: "demo-1-a" }];

  switch (selection) {
    case "demo":
      return [<DemoSlideA />, <DemoSlideB />, <DemoSlideC />, <DemoSlideD />][
        modalIndex
      ];
      break;

    default:
      return [<p>Error!!!</p>];
  }
};
