export const convertClassName = (currentName: string, newNames: string[]) => {
  const isNewNameNotValid = () => {
    return newNames.filter((name) => name !== "").length > 0;
  };

  if (!isNewNameNotValid()) {
    return currentName;
  }

  const mapNewNames = () => newNames.map((name) => ` ${currentName}--${name}`);

  return `${currentName}${mapNewNames()}`;
};

export const disabledClassName = (disabled: boolean) => {
  return disabled ? "disabled" : "";
};
