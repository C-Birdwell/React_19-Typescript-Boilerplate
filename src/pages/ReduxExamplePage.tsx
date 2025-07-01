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

const errorRulesPhone = [
  {
    rule: /^\d{0,9}$/,
    message: "Phone number must be 10 digits.",
  },
  {
    rule: /^555/,
    message: "555 is a fake area code and you know it.",
  },
];

export const ReduxExamplePage: React.FC = () => {
  const {
    firstWord,
    secondWord,
    firstNumber,
    secondNumber,
    phoneNumber,
    phoneValue,
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
        <Row gutter={20} breakPoint="tablet">
          <Column>
            <InputField
              name="foo-input"
              labelText="First Word"
              type="text"
              value={firstWord}
              onUpdate={inputReduxHandlerFoo}
              marginBottom={20}
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
        <Row gutter={20} breakPoint="tablet">
          <Column>
            <InputField
              name="num1-input"
              labelText="First Number"
              type="number"
              value={firstNumber}
              onUpdate={inputReduxHandlerFirstNumber}
              marginBottom={20}
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
          {phoneNumber ? `${phoneNumber} or ${phoneValue}` : phoneMask}
        </h4>
        <Row gutter={20} breakPoint="tablet">
          <Column>
            <InputField
              name="phone-input"
              labelText="Phone Number Example"
              type="text"
              value={phoneNumber}
              ruleValue={phoneValue}
              onUpdate={inputReduxHandlerPhoneNumber}
              dataMask={phoneMaskConfig}
              placeholder={phoneMask}
              errorRules={errorRulesPhone}
              marginBottom={20}
            />
          </Column>
          <Column>
            <p>
              The phone input (type text) has a dataMask applied to it. This
              limits the valid entries to numbers and formats the string into a{" "}
              {phoneMask} pattern. The phone input also has error handling for
              values less than 10 in length and/or if the first three numbers
              are 555.
            </p>
          </Column>
        </Row>
      </Card>
      <Card border breakPoint="tablet">
        <Button
          backgroundTheme="success"
          buttonText="Review Inputs"
          onClick={buttonReviewHandler}
        ></Button>
      </Card>
    </PageTemplate>
  );
};
