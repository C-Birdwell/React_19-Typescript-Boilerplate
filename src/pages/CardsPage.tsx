import { Row, PageTemplate, Card, Column } from "@/components";

export const CardsPage: React.FC = () => {
  const invisibleBox = <div style={{ height: "80px" }} />;
  return (
    <PageTemplate
      title="Card Animations"
      subtitle="A demonstration of animations built into the Card component."
    >
      <Row gutter={10} breakPoint="tablet">
        <Column>
          <Card border marginBottom={20} animationSlide="left">
            <h4 className="center">Left</h4>
            {invisibleBox}
          </Card>
        </Column>
        <Column>
          <Card border marginBottom={20} animationSlide="top">
            <h4 className="center">Top</h4>
            {invisibleBox}
          </Card>
        </Column>
      </Row>
      <Row gutter={10} breakPoint="tablet">
        <Column>
          <Card border marginBottom={20} animationSlide="bottom">
            <h4 className="center">Bottom</h4>
            {invisibleBox}
          </Card>
        </Column>
        <Column>
          <Card border marginBottom={20} animationSlide="right">
            <h4 className="center">Right</h4>
            {invisibleBox}
          </Card>
        </Column>
      </Row>
      <Row gutter={10} breakPoint="tablet">
        <Column>
          <Card border marginBottom={20} flipIn="left">
            <h4 className="center">Flip In Left</h4>
            {invisibleBox}
          </Card>
        </Column>
        <Column>
          <Card border marginBottom={20} flipIn="right">
            <h4 className="center">Flip In Right</h4>
            {invisibleBox}
          </Card>
        </Column>
      </Row>
      <Row breakPoint="tablet">
        <Column>
          <Card
            border
            marginBottom={20}
            fadeIn
            classNames={["gradient--background"]}
          >
            <h4 className="center">Fade In</h4>
            {invisibleBox}
          </Card>
        </Column>
      </Row>
    </PageTemplate>
  );
};
