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

  const reactLinkHandler = () => hyperLinkCreator("https://react.dev/");

  const reduxLinkHandler = () =>
    hyperLinkCreator("https://redux-toolkit.js.org/");

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
      <Card border flipIn="right" marginBottom={20}>
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
          Arrow functions are exported by index pages found in every folder.
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
        onClick={() => reactLinkHandler()}
        buttonText="React Link"
        backgroundTheme="success"
        marginBottom={20}
      />
      <Button
        onClick={() => reduxLinkHandler()}
        buttonText="Redux Toolkit Link"
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
    <Card border classNames={["gradient--background"]} flipIn="left">
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
    <Card border flipIn="left" marginBottom={20}>
      <h4>Atomic Design</h4>
      <p>
        The folder structure of components follows the principles of Atomic
        Design.
      </p>
      <p>Components are separated by their individual levels of complexity.</p>
      <p>Simpler components are compounded into higher order components.</p>
      <p>
        "Atoms" are the simplest components that are then incorporated into
        "molecules".
      </p>
      <p>
        "Molecules" are then utilized by "organisms" which are major DOM
        elements of the application.
      </p>
      <p>
        Finally "templates" are created from "molecules" which primarily serve
        the purposes of creating individual pages and modals.
      </p>
    </Card>
  );

  const columnRightThree = (
    <Card border animationSlide="top" marginBottom={20}>
      <h4>State Management</h4>
      <p>Primarily state management is handled by Redux via Redux Toolkit.</p>
      <p>
        This facilitates any data that needs to be shared and updated by
        components that don't share a straight forward "parent-child"
        relationship.
      </p>
      <p>
        The Provider is imported in App.tsx, supplied a store from the store
        folder, and then wraps the entirety of the application.
      </p>
      <p>
        The store itself is a collection of reducers which are defined along
        with actions in individual slices.
      </p>
    </Card>
  );

  const columnLeftFour = (
    <Card border animationSlide="left" marginBottom={20}>
      <h4>Card Layout</h4>
      <p>Most elements in the application are wrapped in the Card component.</p>
      <p>
        This gives bounds to children elements and provides coherent guidelines
        just by it's nature.
      </p>
      <p>
        This leads to application where it's individual parts are organized and
        it's information arranged in a aesthetically pleasant manner.
      </p>
      <p>
        Cards also allow for an easy rearrangement of elements on smaller
        screens for responsive layout.
      </p>
    </Card>
  );

  const columnRightFour = (
    <Card border flipIn="right" marginBottom={20}>
      <h4>Styling</h4>
      <p>
        The boilerplate's styling is created in CSS which is handled by SaSS.
      </p>
      <p>
        SaSS is a CSS preprocessor that extends functionality and capabilities
        to CSS.
      </p>
      <p>
        SaSS allows us to split the code required for styling the project into
        multiple files.
      </p>
      <p>
        Each folder contains an _index.scss that is forwards it's sibling files.
        These files are then imported (@use) in the index file located in
        "styles".
      </p>
      <p>
        The "abstracts" folder is responsible for tools and helpers for SaSS
        (mixins, variables, functions, etc.).
      </p>
      <p>
        The "base" folder handles the foundational root styles of the project.
      </p>
      <p>
        The "vendor" folder's function is to house third party styles; such as
        "normalize" which comes installed on the boilerplate.
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
  const rowFour = (
    <Row gutter={10} breakPoint="mobile">
      <Column>{columnLeftFour}</Column>
      <Column>{columnRightFour}</Column>
    </Row>
  );

  return (
    <>
      {rowOne}
      {rowTwo}
      {rowThree}
      {rowFour}
    </>
  );
};
