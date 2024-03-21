export function lettersAndNumbersOnly(
  inputString: string,
  options?: { exception: string }
) {
  const regexPattern = new RegExp(
    `[^a-zA-Z0-9${options ? options.exception : ""}]`,
    "g"
  );

  // Remove non-alphanumeric characters
  // const formattedString = inputString.replace(/[^a-zA-Z0-9]/g, "");
  const formattedString = inputString.replace(regexPattern, "");
  return formattedString;
}

export function formatToNumberWithDecimal(inputString: string) {
  // Remove non-alphanumeric characters
  const formattedString = inputString.replace(/[^\d.]/g, "");
  return formattedString;
}

export function capitalizeCamelCase(input: string): string {
  return input
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/^./, (match) => match.toUpperCase());
}

export function formatToSnakeCase(inputString: string): string {
  return inputString.replace(/([a-z\d])([A-Z])/g, "$1_$2").toLowerCase();
}
