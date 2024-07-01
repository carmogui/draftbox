import { CommonScreen } from "../../components";
import { CleanString, ConvertCurrency, CustomCaretInput } from "./components";

export function Currency() {
  return (
    <CommonScreen title="fixed decimals currency input">
      <p>
        this is useful when you need some value from the user, but the decimals
        doesn't matter
      </p>

      <CustomCaretInput />

      <ConvertCurrency />

      <CleanString />
    </CommonScreen>
  );
}
