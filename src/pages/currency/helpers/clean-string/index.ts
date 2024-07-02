function removeLastZero(val: string) {
  const charToDeleteIndex = val.lastIndexOf("0");

  if (charToDeleteIndex + 1 === val.length) {
    return val.substring(0, charToDeleteIndex);
  }

  const part1 = val.substring(0, charToDeleteIndex);
  const part2 = val.substring(charToDeleteIndex + 1);

  return `${part1}${part2}`;
}

export function cleanString(val: string) {
  const formattedValue = val.replace(/[^0-9]/g, "");
  const valueWithoutLast0One = removeLastZero(formattedValue);
  const valueWithoutLast0Two = removeLastZero(valueWithoutLast0One);

  return valueWithoutLast0Two;
}
