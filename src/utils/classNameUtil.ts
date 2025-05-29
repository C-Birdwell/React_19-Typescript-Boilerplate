export const convertClassName = (currentName: string, newNames: string[]) => {
  const newNamesFiltered = newNames.filter((name) => name !== "");

  const isNewNameNotValid = () => {
    return newNamesFiltered.length > 0;
  };

  if (!isNewNameNotValid()) {
    return currentName;
  }

  const mapNewNames = () =>
    newNamesFiltered.map((name) => ` ${currentName}--${name}`);

  return `${currentName}${mapNewNames()}`;
};

export const disabledClassName = (disabled: boolean) => {
  return disabled ? "disabled" : "";
};
