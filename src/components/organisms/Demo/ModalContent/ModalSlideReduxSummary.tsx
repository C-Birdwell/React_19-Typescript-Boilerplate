import { Row, Column } from "@/components";
import { useStoreSelector } from "@/hooks";
import { type RootState } from "@/store";
export const ModalSlideReduxSummary: React.FC = () => {
  const {
    firstWord,
    secondWord,
    firstNumber,
    secondNumber,
    phoneNumber,
    phoneClean,
  } = useStoreSelector((state: RootState) => state.example);

  return (
    <div className="modal_slide--redux-summary">
      <h4>Summary of Inputs</h4>
      <Row>
        <Column>
          <p>
            First Word: <span className="bold">{firstWord}</span>
          </p>
        </Column>
        <Column>
          <p>
            Second Word: <span className="bold">{secondWord}</span>
          </p>
        </Column>
      </Row>
      <Row>
        <Column>
          <p>
            First Number: <span className="bold">{firstNumber}</span>
          </p>
        </Column>
        <Column>
          <p>
            Second Number: <span className="bold">{secondNumber}</span>
          </p>
        </Column>
      </Row>
      <Row>
        <Column>
          <p>
            Phone Number: <span className="bold">{phoneNumber}</span>
          </p>
        </Column>
        <Column>
          <p>
            Phone Value: <span className="bold">{phoneClean}</span>
          </p>
        </Column>
      </Row>
    </div>
  );
};
