export function formatCurrency(val: string) {
  if (!val) {
    return "";
  }

  return val
    .split("")
    .reverse()
    .map((val, i, arr) =>
      i % 3 === 2 && i !== arr.length - 1 ? `,${val}` : val
    )
    .reverse()
    .join("");
}

export function convertCurrency(val: string) {
  if (val === "") {
    return "";
  }

  return `$ ${val}.00`;
}
