interface Props {
  newStr: string;
  currentEnd: number;
  allowedEnd: number;
}

export function formatEndEdge({ newStr, currentEnd, allowedEnd }: Props) {
  const newValue = newStr.slice(0, currentEnd) + newStr.slice(currentEnd);

  const typedValue = newStr.charAt(currentEnd ? currentEnd - 1 : 0);

  const formattedStr =
    newValue.slice(0, allowedEnd - 1) +
    typedValue +
    newValue.slice(allowedEnd - 1);

  return formattedStr;
}
