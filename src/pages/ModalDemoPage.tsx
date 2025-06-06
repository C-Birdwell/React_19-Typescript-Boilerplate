import { Row, PageTemplate, ModalDemoButton, Card } from "@/components";
import { useActionCreators } from "@/hooks";
import {
  _modalSetBackgroundColor,
  _modalSetVisible,
  _modalSetModalRoute,
} from "@/store";

import {
  COLOR_DEF_CAUTION,
  COLOR_DEF_DANGER,
  COLOR_DEF_DARK,
  COLOR_DEF_LIGHT,
  COLOR_DEF_PRIMARY,
  COLOR_DEF_SECONDARY,
  COLOR_DEF_SUCCESS,
} from "@/constants";

const actionCreators = {
  _modalSetBackgroundColor,
  _modalSetVisible,
  _modalSetModalRoute,
};

export const ModalDemoPage: React.FC = () => {
  const { _modalSetBackgroundColor, _modalSetVisible, _modalSetModalRoute } =
    useActionCreators(actionCreators);

  const buttonModalLightHandler = () => {
    _modalSetModalRoute("demo");
    _modalSetBackgroundColor(COLOR_DEF_LIGHT);
    _modalSetVisible(true);
  };

  const buttonModalDarkHandler = () => {
    _modalSetModalRoute("demo");

    _modalSetBackgroundColor(COLOR_DEF_DARK);
    _modalSetVisible(true);
  };

  const buttonModalSuccessHandler = () => {
    _modalSetModalRoute("success");

    _modalSetBackgroundColor(COLOR_DEF_SUCCESS);
    _modalSetVisible(true);
  };

  const buttonModalCautionHandler = () => {
    _modalSetModalRoute("demo");

    _modalSetBackgroundColor(COLOR_DEF_CAUTION);
    _modalSetVisible(true);
  };
  const buttonModalDangerHandler = () => {
    _modalSetModalRoute("demo");

    _modalSetBackgroundColor(COLOR_DEF_DANGER);
    _modalSetVisible(true);
  };

  const buttonModalPrimaryHandler = () => {
    _modalSetModalRoute("demo");

    _modalSetBackgroundColor(COLOR_DEF_PRIMARY);
    _modalSetVisible(true);
  };

  const buttonModalSecondaryHandler = () => {
    _modalSetModalRoute("demo");

    _modalSetBackgroundColor(COLOR_DEF_SECONDARY);
    _modalSetVisible(true);
  };

  const parentClassName = "page--modal-demo";

  return (
    <PageTemplate
      title="Modal Demo"
      subtitle='A demonstration of the built-in "Modal" pop-up with lightbox feature.'
    >
      <Card border marginBottom={20} animationSlide="right">
        <Row parentName={parentClassName}>
          <ModalDemoButton
            buttonText="Light Modal"
            onClick={buttonModalLightHandler}
            backgroundTheme="light"
            alignment="left"
          />
          <ModalDemoButton
            buttonText="Dark Modal"
            onClick={buttonModalDarkHandler}
            backgroundTheme="dark"
            alignment="right"
          />
        </Row>
      </Card>
      <Card border marginBottom={20} animationSlide="left">
        <Row parentName={parentClassName}>
          <ModalDemoButton
            buttonText="Primary Modal"
            onClick={buttonModalPrimaryHandler}
            backgroundTheme="primary"
            alignment="left"
          />
          <ModalDemoButton
            buttonText="Secondary Modal"
            onClick={buttonModalSecondaryHandler}
            backgroundTheme="secondary"
            alignment="right"
          />
        </Row>
      </Card>
      <Card border marginBottom={20} animationSlide="right">
        <Row parentName={parentClassName}>
          <ModalDemoButton
            buttonText="Success Modal"
            onClick={buttonModalSuccessHandler}
            backgroundTheme="success"
            alignment="left"
          />
          <ModalDemoButton
            buttonText="Caution Modal"
            onClick={buttonModalCautionHandler}
            backgroundTheme="caution"
          />
          <ModalDemoButton
            buttonText="Danger Modal"
            onClick={buttonModalDangerHandler}
            backgroundTheme="danger"
            alignment="right"
          />
        </Row>
      </Card>
    </PageTemplate>
  );
};
