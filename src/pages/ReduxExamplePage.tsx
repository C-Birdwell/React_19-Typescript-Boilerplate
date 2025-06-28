import {
  InputField,
  PageTemplate,
  Card,
  Column,
  Row,
  Button,
} from "@/components";
import { useActionCreators, useStoreSelector } from "@/hooks";
import {
  _exampleSetSecondWord,
  _exampleSetFirstWord,
  _exampleSetFirstNumber,
  _exampleSetSecondNumber,
  _exampleSetPhoneNumber,
  _modalSetModalRoute,
  _modalSetBackgroundColor,
  _modalSetVisible,
  type RootState,
} from "@/store";
import type { InputOnChangeEvent } from "@/lib";
import { phoneMask, phoneMaskConfig, TITLE_REDUX } from "@/constants";

const actionCreators = {
  _exampleSetSecondWord,
  _exampleSetFirstWord,
  _exampleSetFirstNumber,
  _exampleSetSecondNumber,
  _exampleSetPhoneNumber,
  _modalSetModalRoute,
  _modalSetBackgroundColor,
  _modalSetVisible,
};

export const ReduxExamplePage: React.FC = () => {
  const {
    firstWord,
    secondWord,
    firstNumber,
    secondNumber,
    phoneNumber,
    phoneClean,
  } = useStoreSelector((state: RootState) => state.example);

  const {
    _exampleSetSecondWord,
    _exampleSetFirstWord,
    _exampleSetFirstNumber,
    _exampleSetSecondNumber,
    _exampleSetPhoneNumber,
    _modalSetModalRoute,
    _modalSetBackgroundColor,
    _modalSetVisible,
  } = useActionCreators(actionCreators);

  const inputReduxHandlerFoo = (e: InputOnChangeEvent) => {
    _exampleSetFirstWord(e.target.value);
  };

  const inputReduxHandlerBar = (e: InputOnChangeEvent) => {
    _exampleSetSecondWord(e.target.value);
  };
  const inputReduxHandlerFirstNumber = (e: InputOnChangeEvent) => {
    _exampleSetFirstNumber(e.target.value);
  };

  const inputReduxHandlerSecondNumber = (e: InputOnChangeEvent) => {
    _exampleSetSecondNumber(e.target.value);
  };

  const inputReduxHandlerPhoneNumber = (e: InputOnChangeEvent) => {
    _exampleSetPhoneNumber(e.target.value);
  };

  const buttonReviewHandler = () => {
    _modalSetModalRoute("redux");
    _modalSetBackgroundColor("dark");
    _modalSetVisible(true);
  };

  return (
    <PageTemplate
      title={TITLE_REDUX}
      subtitle="A page of examples of Redux Toolkit connected inputs."
    >
      <Card border animationSlide="left">
        <h4>
          {firstWord} {secondWord}
        </h4>
        <Row gutter={20}>
          <Column>
            <InputField
              name="foo-input"
              labelText="First Word"
              type="text"
              value={firstWord}
              onUpdate={inputReduxHandlerFoo}
            />
          </Column>
          <Column>
            <InputField
              name="bar-input"
              labelText="Second Word"
              type="text"
              value={secondWord}
              onUpdate={inputReduxHandlerBar}
            />
          </Column>
        </Row>
      </Card>
      <Card border animationSlide="right">
        <h4>
          {firstNumber} + {secondNumber} = {firstNumber + secondNumber}
        </h4>
        <h4>
          {firstNumber} - {secondNumber} = {firstNumber - secondNumber}
        </h4>
        <Row gutter={20}>
          <Column>
            <InputField
              name="num1-input"
              labelText="First Number"
              type="number"
              value={firstNumber}
              onUpdate={inputReduxHandlerFirstNumber}
            />
          </Column>
          <Column>
            <InputField
              name="num2-input"
              labelText="Second Number"
              type="number"
              value={secondNumber}
              onUpdate={inputReduxHandlerSecondNumber}
            />
          </Column>
        </Row>
      </Card>
      <Card border animationSlide="bottom">
        <h4>
          Phone Number:{" "}
          {phoneNumber ? `${phoneNumber} or ${phoneClean}` : phoneMask}
        </h4>
        <Row gutter={20}>
          <Column>
            <InputField
              name="phone-input"
              labelText="Phone Number Example"
              type="text"
              value={phoneNumber}
              onUpdate={inputReduxHandlerPhoneNumber}
              dataMask={phoneMaskConfig}
              placeholder={phoneMask}
            />
          </Column>
          <Column></Column>
        </Row>
      </Card>
      <Card border>
        <Button
          backgroundTheme="success"
          buttonText="Review Inputs"
          onClick={buttonReviewHandler}
        ></Button>
      </Card>
    </PageTemplate>
  );
};
