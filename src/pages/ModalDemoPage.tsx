import { Row, PageTemplate, ModalDemoButton, Card, Column } from "@/components";
import { useActionCreators } from "@/hooks";
import {
  _modalSetBackgroundColor,
  _modalSetVisible,
  _modalSetModalRoute,
} from "@/store";

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

export const ModalDemoPage: React.FC = () => {
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

  const parentClassName = "page--modal-demo";

  return (
    <PageTemplate
      title="Modal Demo"
      subtitle='A demonstration of the built-in "Modal" pop-up with lightbox feature.'
    >
      <Row gutter={10} breakPoint="tablet">
        <Column>
          <Card border marginBottom={20} animationSlide="left">
            <h4 className="center">App Theme Examples</h4>

            <Row parentName={parentClassName} breakPoint="mobile">
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
        </Column>
        <Column>
          <Card border marginBottom={20} animationSlide="right">
            <h4 className="center">Light & Dark Examples</h4>
            <Row parentName={parentClassName} breakPoint="mobile">
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
        </Column>
      </Row>

      <Card border animationSlide="bottom" marginBottom={20}>
        <h4 className="center">Examples of Status Themes</h4>
        <Row parentName={parentClassName} breakPoint="mobile">
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
      <p>
        The "Modal" is a pop up with a lightbox that sits on top of every other
        component via z-index set in SaSS.
      </p>
      <p>
        Redux actions are used to set the visibility, background color, and
        route of the modal.
      </p>
      <p>
        The modalroute function returns the designated array of objects required
        to create the slide like presentation.
      </p>
      <p>
        The modal is dismissed by either pressing the X button in the top right
        of the card, clicking on the background, or clicking the Close button
        that may be located on the last slide.
      </p>
      <p>
        Navigation happens in the component state. Every slide but the first has
        a Back button located in the bottom left of the card. Every slide but
        the last has a Next button on the bottom left. On the last slide the
        Next button is replaced with a Close button. A endAction can replace the
        Close button on the final slide.
      </p>
      <p>
        Custom actions can be supplied to any slide and will show up even if one
        slide is provided by modalRoute.
      </p>
      <p>If the modalRoute only returns one slide no navigation is rendered.</p>
    </PageTemplate>
  );
};
