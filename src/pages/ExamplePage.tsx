import { type FC } from "react";
import { Button, Column, Row } from "@/components";

import { _modalSetBackgroundColor, _modalSetVisible } from "@/store";
import { useActionCreators } from "@/hooks";
import {
  COLOR_DEF_CAUTION,
  COLOR_DEF_DANGER,
  COLOR_DEF_DARK,
  COLOR_DEF_LIGHT,
  COLOR_DEF_PRIMARY,
  COLOR_DEF_SECONDARY,
  COLOR_DEF_SUCCESS,
} from "@/constants";

const actionCreators = { _modalSetBackgroundColor, _modalSetVisible };

export const ExamplePage: FC = () => {
  const envFOO = import.meta.env.VITE_API_FOO;
  const envBAR = import.meta.env.VITE_API_BAR;

  const { _modalSetBackgroundColor, _modalSetVisible } =
    useActionCreators(actionCreators);

  const buttonModalLightHandler = () => {
    _modalSetBackgroundColor(COLOR_DEF_LIGHT);
    _modalSetVisible(true);
  };

  const buttonModalDarkHandler = () => {
    _modalSetBackgroundColor(COLOR_DEF_DARK);
    _modalSetVisible(true);
  };

  const buttonModalSuccessHandler = () => {
    _modalSetBackgroundColor(COLOR_DEF_SUCCESS);
    _modalSetVisible(true);
  };

  const buttonModalCautionHandler = () => {
    _modalSetBackgroundColor(COLOR_DEF_CAUTION);
    _modalSetVisible(true);
  };
  const buttonModalDangerHandler = () => {
    _modalSetBackgroundColor(COLOR_DEF_DANGER);
    _modalSetVisible(true);
  };

  const buttonModalPrimaryHandler = () => {
    _modalSetBackgroundColor(COLOR_DEF_PRIMARY);
    _modalSetVisible(true);
  };

  const buttonModalSecondaryHandler = () => {
    _modalSetBackgroundColor(COLOR_DEF_SECONDARY);
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
