import { InputField, PageTemplate } from "@/components";
import { useActionCreators, useAppSelector } from "@/hooks";
import { _exampleSetBar, _exampleSetFoo, type RootState } from "@/store";
import type { InputOnChangeEvent } from "@/lib";

const actionCreators = { _exampleSetBar, _exampleSetFoo };

export const HomePage: React.FC = () => {
  const { foo, bar } = useAppSelector((state: RootState) => state.example);

  const { _exampleSetBar, _exampleSetFoo } = useActionCreators(actionCreators);

  const inputReduxHandlerFoo = (e: InputOnChangeEvent) => {
    _exampleSetFoo(e.target.value);
  };

  const inputReduxHandlerBar = (e: InputOnChangeEvent) => {
    _exampleSetBar(e.target.value);
  };

  return (
    <PageTemplate
      title="Home"
      subtitle="This subtitle can be set to anything you want."
    >
      <p>
        {foo} {bar}
      </p>
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
    </PageTemplate>
  );
};
