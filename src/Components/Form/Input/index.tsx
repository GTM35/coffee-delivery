import { InputHTMLAttributes, useState, FocusEvent } from "react";
import { ContainerInput, Input, LabelInput } from "./style";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  optional?: boolean;
};

export function TextInput({ onFocus }: Props) {
  const [isFocused, setIsFocused] = useState(false);

  function handleFocus(event: FocusEvent<HTMLInputElement>) {
    setIsFocused(true);
    onFocus?.(event);
  }

  function handleBlur(event: FocusEvent<HTMLInputElement>) {
    setIsFocused(false);
    onFocus?.(event);
  }

  return (
    <ContainerInput>
      <LabelInput data-state={isFocused ? "focused" : "blurred"} htmlFor="">
        <Input
          onFocus={handleFocus}
          onBlur={handleBlur}
          type="text"
          placeholder="CEP"
        />
        <span>Opcional</span>
      </LabelInput>
    </ContainerInput>
  );
}
