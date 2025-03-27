import {
  InputHTMLAttributes,
  useState,
  FocusEvent,
  forwardRef,
  Ref,
  HTMLAttributes,
} from "react";
import { ContainerInput, Input, LabelInput } from "./style";

interface ContentInput {
  placeholder: string;
  isOptional?: boolean;
}

type Props = InputHTMLAttributes<HTMLInputElement> & {
  optional?: boolean;
  styleProps?: HTMLAttributes<HTMLDivElement>;
  contentProps: ContentInput;
};

export const TextInput = forwardRef(function TextInput(
  { onFocus, styleProps, contentProps }: Props,
  ref: Ref<HTMLInputElement>
) {
  const [isFocused, setIsFocused] = useState(false);

  function HandleFocus(event: FocusEvent<HTMLInputElement>) {
    setIsFocused(true);
    onFocus?.(event);
  }

  function HandleBlur(event: FocusEvent<HTMLInputElement>) {
    setIsFocused(false);
    onFocus?.(event);
  }

  return (
    <ContainerInput {...styleProps}>
      <LabelInput data-state={isFocused ? "focused" : "blurred"}>
        <Input
          onFocus={HandleFocus}
          onBlur={HandleBlur}
          type="text"
          placeholder={contentProps.placeholder}
          ref={ref}
        />
        {contentProps.isOptional && <span>Opcional</span>}
      </LabelInput>
    </ContainerInput>
  );
});
