import { type FC } from "react";

export const ExamplePage: FC = () => {
  const envFOO = import.meta.env.VITE_API_FOO;
  const envBAR = import.meta.env.VITE_API_BAR;

  return (
    <>
      <p>ExamplePage</p>
      <p>
        {envFOO} {envBAR}
      </p>
    </>
  );
};
