import { InputField, Button } from "@/components";
import { useActionCreators, useAppSelector } from "@/hooks";
import { _exampleSetBar, _exampleSetFoo, type RootState } from "@/store";
import type { InputOnChangeEvent } from "@/lib";
import { setAppTheme } from "@/utils";

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

  const buttonHandlerLight = () => {
    setAppTheme("light");
  };

  const buttonHandlerDark = () => {
    setAppTheme("dark");
  };

  return (
    <div>
      {foo} {bar}
      <h2>HomePage</h2>
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
      <Button buttonText="Light Theme" onClick={buttonHandlerLight} />
      <Button buttonText="Dark Theme" onClick={buttonHandlerDark} />
    </div>
  );
};
