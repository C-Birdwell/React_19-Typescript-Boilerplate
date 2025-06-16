import { Card, InputField, PageTemplate } from "@/components";
import { useActionCreators, useStoreSelector } from "@/hooks";
import { _exampleSetBar, _exampleSetFoo, type RootState } from "@/store";
import type { InputOnChangeEvent } from "@/lib";

const actionCreators = { _exampleSetBar, _exampleSetFoo };
const envTitle = import.meta.env.VITE_API_TITLE;

export const HomePage: React.FC = () => {
  const { foo, bar } = useStoreSelector((state: RootState) => state.example);

  const { _exampleSetBar, _exampleSetFoo } = useActionCreators(actionCreators);

  const inputReduxHandlerFoo = (e: InputOnChangeEvent) => {
    _exampleSetFoo(e.target.value);
  };

  const inputReduxHandlerBar = (e: InputOnChangeEvent) => {
    _exampleSetBar(e.target.value);
  };

  return (
    <PageTemplate title={envTitle} subtitle="Welcome the Home Page!">
      <Card border animationSlide="left" marginBottom={20}>
        <h4>Greetings</h4>
        <p>
          Thanks for checking out my boilerplate. It was built with the
          intention to increase the speed and ease of spinning up projects.
        </p>
        <p>
          This boilerplate can serve as a foundation for projects requiring{" "}
          <span className="bold">React</span> for a frontend. The focus on
          modularity allows white-labeling via a few configuration settings.
        </p>
        <p>
          Out of the box the boilerplate has Typescript, Redux Toolkit, SaSS,
          React Router, environment files, and Github Pages deployment
          capabilities setup.
        </p>
        <p>
          It's built without any frontend style frameworks such as Bootstrap or
          Tailwind but can incorporate them if so desired.
        </p>
      </Card>
      <Card border animationSlide="right" marginBottom={20}>
        <h4>Philosophy</h4>
        <p>
          Thanks for checking out my boilerplate. It was built with the
          intention to increase the speed and ease of spinning up projects.
        </p>
        <p>
          This boilerplate can serve as a foundation for projects requiring{" "}
          <span className="bold">React</span> for a frontend. The focus on
          modularity allows white-labeling via a few configuration settings.
        </p>
        <p>
          Out of the box the boilerplate has Typescript, Redux Toolkit, SaSS,
          React Router, environment files, and Github Pages deployment
          capabilities setup.
        </p>
        <p>
          It's built without any frontend style frameworks such as Bootstrap or
          Tailwind but can incorporate them if so desired.
        </p>
      </Card>

      <Card border>
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
      </Card>

      <p>
        {foo} {bar}
      </p>
    </PageTemplate>
  );
};
