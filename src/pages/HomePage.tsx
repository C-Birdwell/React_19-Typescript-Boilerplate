import { InputField, PageTemplate } from "@/components";
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
    <PageTemplate title={envTitle} subtitle="This is the Home Page.">
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
