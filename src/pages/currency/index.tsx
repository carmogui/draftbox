import { CommonScreen } from "../../components";
import {
  CleanString,
  ConvertCurrency,
  CustomCaretInput,
  FinalCurrencyInput,
} from "./components";

export function Currency() {
  return (
    <CommonScreen title="fixed decimals currency input">
      <p>
        this is useful when you need some value from the user, but the decimals
        doesn't matter
      </p>

      <ConvertCurrency />

      <CleanString />

      <CustomCaretInput />

      <span>apply all the other components in the same input:</span>

      <FinalCurrencyInput />
    </CommonScreen>
  );
}
