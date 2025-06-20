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

  const columnLeftOne = (
    <>
      <Card border animationSlide="left" marginBottom={20}>
        <h4>Greetings</h4>
        <p>
          Thanks for checking out my boilerplate. It was built with the
          intention to increase the speed and ease of spinning up projects.
        </p>
        <p>
          This boilerplate can serve as a foundation for projects requiring{" "}
          <span className="bold color--primary">React</span> for a frontend. The
          focus on modularity allows white-labeling via a few configuration
          settings.
        </p>
        <p>
          Out of the box the boilerplate has Typescript, Redux Toolkit, SaSS,
          React Router, environment files, folder path aliasing, and Github
          Pages deployment capabilities already setup.
        </p>
        <p>
          It's built without any frontend style frameworks such as Bootstrap or
          Tailwind but can incorporate them if so desired.
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
          that must remain effective while relying on ambiguity for reusability;
          almost every part of the application is compartmentalized.
        </p>
        <p>
          The compartmentalization applies not only on the folder structure, but
          also the actual layout of DOM elements.
        </p>
        <p>
          This approach is achieved by adopting Atomic Design principles in the
          folder structure of the application. In the front-end the DOM is
          assembled by a combination of display grid, rows, column, and a card
          layout.
        </p>
        <p>
          By adhering to the establish patterns technical debt can be addressed
          head on instead of being postponed.
        </p>
      </Card>
    </>
  );

  const columnRightOne = (
    <Card border classNames={["gradient--background"]} animationSlide="bottom">
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
      <Button
        onClick={() => alert("Coming Soon!")}
        buttonText="Creator's Portfolio Link"
        backgroundTheme="success"
        marginBottom={20}
      />
    </Card>
  );

  const rowOne = (
    <Row gutter={10} breakPoint="tablet">
      <Column size={3}>{columnLeftOne}</Column>
      <Column>{columnRightOne}</Column>
    </Row>
  );

  const columnLeftTwo = (
    <Card border classNames={["gradient--background"]} animationSlide="top">
      <h4>SRC Map:</h4>
      <blockquote>
        src
        <br />|
        <br />
        |- assets
        <br />
        |- components
        <br />
        |- constants
        <br />
        |- hooks
        <br />
        |- lib
        <br />
        |- pages
        <br />
        |- routes
        <br />
        |- store
        <br />
        |- styles
        <br />
        |- utils
        <br />
        |- App.tsx
        <br />
        |- main.tsx
      </blockquote>
    </Card>
  );

  const columnRightTwo = (
    <Card border animationSlide="right" marginBottom={20}>
      <h4>Application Structure</h4>
      <p>
        The src folder contains all the source files that makes each{" "}
        <span className="bold color--primary">React</span> application unique.
      </p>
      <p>
        From a high level perspective the application is assembled by creating
        components placed into folders categorized by their complexity
        determined by Atomic Design principles.
      </p>
      <p>
        Navigation between web pages is facilitated by React Router. These are
        separated out by the judgement of the developer (most likely based on
        the needs of the project). These files are found in the pages folder.
      </p>
      <p>
        The pages are then given url designations in React Router which is
        located in the routes folder. PagesRoutes.tsx houses the actual pages
        while AppRoute wraps around every major component so they have access to
        URL navigation functionality.
      </p>
      <p>
        AppRoute is then exported as a component to be wrapped by the Provider
        from Redux.
      </p>
      <p>
        App is then imported into main.tsx which the application has a root
        created for it to be attached to a DOM element with the id of "root".
      </p>
    </Card>
  );

  const columnLeftThree = (
    <Card border animationSlide="left" marginBottom={20}>
      <h4>Atomic Design</h4>
      <p>
        The src folder contains all the source files that makes each{" "}
        <span className="bold color--primary">React</span> application unique.
      </p>
      <p>
        From a high level perspective the application is assembled by creating
        components placed into folders categorized by their complexity
        determined by Atomic Design principles.
      </p>
      <p>
        Navigation between web pages is facilitated by React Router. These are
        separated out by the judgement of the developer (most likely based on
        the needs of the project). These files are found in the pages folder.
      </p>
      <p>
        The pages are then given url designations in React Router which is
        located in the routes folder. PagesRoutes.tsx houses the actual pages
        while AppRoute wraps around every major component so they have access to
        URL navigation functionality.
      </p>
      <p>
        AppRoute is then exported as a component to be wrapped by the Provider
        from Redux.
      </p>
      <p>
        App is then imported into main.tsx which the application has a root
        created for it to be attached to a DOM element with the id of "root".
      </p>
    </Card>
  );

  const columnRightThree = (
    <Card border animationSlide="top" marginBottom={20}>
      <h4>State Management</h4>
      <p>
        The src folder contains all the source files that makes each{" "}
        <span className="bold color--primary">React</span> application unique.
      </p>
      <p>
        From a high level perspective the application is assembled by creating
        components placed into folders categorized by their complexity
        determined by Atomic Design principles.
      </p>
      <p>
        Navigation between web pages is facilitated by React Router. These are
        separated out by the judgement of the developer (most likely based on
        the needs of the project). These files are found in the pages folder.
      </p>
      <p>
        The pages are then given url designations in React Router which is
        located in the routes folder. PagesRoutes.tsx houses the actual pages
        while AppRoute wraps around every major component so they have access to
        URL navigation functionality.
      </p>
      <p>
        AppRoute is then exported as a component to be wrapped by the Provider
        from Redux.
      </p>
      <p>
        App is then imported into main.tsx which the application has a root
        created for it to be attached to a DOM element with the id of "root".
      </p>
    </Card>
  );

  const rowTwo = (
    <Row gutter={10} breakPoint="mobile">
      <Column>{columnLeftTwo}</Column>
      <Column size={3}>{columnRightTwo}</Column>
    </Row>
  );

  const rowThree = (
    <Row gutter={10} breakPoint="mobile">
      <Column>{columnLeftThree}</Column>
      <Column>{columnRightThree}</Column>
    </Row>
  );

  return (
    <>
      {rowOne}
      {rowTwo}
      {rowThree}
    </>
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
