import { type FC } from "react";
import { Button, Column, Row } from "@/components";

import {
  _modalSetBackgroundColor,
  _modalSetVisible,
  _modalSetModalRoute,
} from "@/store";
import { useActionCreators } from "@/hooks";
import {
  COLOR_CAUTION,
  COLOR_DANGER,
  COLOR_DARK,
  COLOR_LIGHT,
  COLOR_PRIMARY,
  COLOR_SECONDARY,
  COLOR_SUCCESS,
} from "@/constants";

const actionCreators = {
  _modalSetBackgroundColor,
  _modalSetVisible,
  _modalSetModalRoute,
};

export const ExamplePage: FC = () => {
  const envFOO = import.meta.env.VITE_API_FOO;
  const envBAR = import.meta.env.VITE_API_BAR;

  const { _modalSetBackgroundColor, _modalSetVisible, _modalSetModalRoute } =
    useActionCreators(actionCreators);

  const buttonModalLightHandler = () => {
    _modalSetModalRoute("demo");
    _modalSetBackgroundColor(COLOR_LIGHT);
    _modalSetVisible(true);
  };

  const buttonModalDarkHandler = () => {
    _modalSetModalRoute("demo");

    _modalSetBackgroundColor(COLOR_DARK);
    _modalSetVisible(true);
  };

  const buttonModalSuccessHandler = () => {
    _modalSetModalRoute("success");

    _modalSetBackgroundColor(COLOR_SUCCESS);
    _modalSetVisible(true);
  };

  const buttonModalCautionHandler = () => {
    _modalSetModalRoute("demo");

    _modalSetBackgroundColor(COLOR_CAUTION);
    _modalSetVisible(true);
  };
  const buttonModalDangerHandler = () => {
    _modalSetModalRoute("demo");

    _modalSetBackgroundColor(COLOR_DANGER);
    _modalSetVisible(true);
  };

  const buttonModalPrimaryHandler = () => {
    _modalSetModalRoute("demo");

    _modalSetBackgroundColor(COLOR_PRIMARY);
    _modalSetVisible(true);
  };

  const buttonModalSecondaryHandler = () => {
    _modalSetModalRoute("demo");

    _modalSetBackgroundColor(COLOR_SECONDARY);
    _modalSetVisible(true);
  };

  return (
    <>
      <p>ExamplePage</p>
      <p>
        {envFOO} {envBAR}
      </p>
      <div>
        <Row>
          <Column>
            <Button
              buttonText="Light Modal"
              onClick={buttonModalLightHandler}
              backgroundTheme="light"
            />
          </Column>
          <Column>
            <Button
              buttonText="Dark Modal"
              onClick={buttonModalDarkHandler}
              backgroundTheme="dark"
            />
          </Column>
          <Column>
            <Button
              buttonText="Primary Modal"
              onClick={buttonModalPrimaryHandler}
              backgroundTheme="primary"
            />
          </Column>
          <Column>
            <Button
              buttonText="Secondary Modal"
              onClick={buttonModalSecondaryHandler}
              backgroundTheme="secondary"
            />
          </Column>
        </Row>
        <Row style={{ marginBottom: 20 }}>
          <Column>
            <Button
              buttonText="Success Modal"
              onClick={buttonModalSuccessHandler}
              backgroundTheme="success"
            />
          </Column>
          <Column>
            <Button
              buttonText="Caution Modal"
              onClick={buttonModalCautionHandler}
              backgroundTheme="caution"
            />
          </Column>
          <Column>
            <Button
              buttonText="Danger Modal"
              onClick={buttonModalDangerHandler}
              backgroundTheme="danger"
            />
          </Column>
        </Row>
      </div>
    </>
  );
};
