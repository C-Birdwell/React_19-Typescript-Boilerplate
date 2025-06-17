import { Card, Row, Column, Button } from "@/components";

export const HomeDemo: React.FC = () => {
  const hyperLinkCreator = (destination: string) => {
    window.open(destination, "_blank");
  };

  const githubLinkHandler = () =>
    hyperLinkCreator(
      "https://github.com/C-Birdwell/React_19-Typescript-Boilerplate"
    );
  const pagesLinkHandler = () =>
    hyperLinkCreator(
      "https:c-birdwell.github.io/React_19-Typescript-Boilerplate/"
    );
  return (
    <Row gutter={10} breakPoint="mobile">
      <Column size={3}>
        <Card border animationSlide="left" marginBottom={20}>
          <h4>Greetings</h4>
          <p>
            Thanks for checking out my boilerplate. It was built with the
            intention to increase the speed and ease of spinning up projects.
          </p>
          <p>
            This boilerplate can serve as a foundation for projects requiring{" "}
            <span className="bold color--primary">React</span> for a frontend.
            The focus on modularity allows white-labeling via a few
            configuration settings.
          </p>
          <p>
            Out of the box the boilerplate has Typescript, Redux Toolkit, SaSS,
            React Router, environment files, folder path aliasing, and Github
            Pages deployment capabilities already setup.
          </p>
          <p>
            It's built without any frontend style frameworks such as Bootstrap
            or Tailwind but can incorporate them if so desired.
          </p>
        </Card>
        <Card border animationSlide="right" marginBottom={20}>
          <h4>Architecture Philosophy</h4>
          <p>
            The intention of this application is to serve as boilerplate for
            creating <span className="bold color--primary">React</span>{" "}
            front-ends.
          </p>
          <p>
            To address the complexity that arises from developing an application
            that must remain effective while relying on ambiguity for
            reusability; almost every part of the application is
            compartmentalized.
          </p>
          <p>
            The compartmentalization applies not only on the folder structure,
            but also the actual layout of DOM elements.
          </p>
          <p>
            This approach is achieved by adopting Atomic Design principles in
            the folder structure of the application. In the front-end the DOM is
            assembled by a combination of display grid, rows, column, and a card
            layout.
          </p>
          <p>
            By adhering to the establish patterns technical debt can be
            addressed head on instead of being postponed.
          </p>
        </Card>
      </Column>
      <Column>
        <Card border>
          <h4>Documentation & Links</h4>
          <Button
            onClick={() => githubLinkHandler()}
            buttonText="Github Repository Link"
            backgroundTheme="primary"
            marginBottom={20}
          />
          <Button
            onClick={() => pagesLinkHandler()}
            buttonText="Github Pages Link"
            backgroundTheme="secondary"
            marginBottom={20}
          />
        </Card>
      </Column>
    </Row>
  );
};
{
  /* <Card border>
        <InputField
          name="foo-input"
          labelText="Foo"
          type="text"
          value={foo}
          onUpdate={inputReduxHandlerFoo}
        />
        <InputField
          name="bar-input"
          labelText="Bar"
          type="text"
          value={bar}
          onUpdate={inputReduxHandlerBar}
        />
        <InputField
          name="bar-disabled"
          labelText="Disabled Input"
          type="text"
          value={""}
          disabled
          placeholder="This input is disabled."
          onUpdate={() => {}}
        />
      </Card> */
}
