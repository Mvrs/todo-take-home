import { forwardRef, HTMLInputTypeAttribute, useEffect } from "react";
import {
  Control,
  useController,
  UseFormSetValue,
  useWatch,
} from "react-hook-form";
import { FormValues } from "../pages/login";

const _saveInLocalStorage = (key: string, value: string) => {
  window.localStorage.setItem(key, value);
};

const _getFromLocalStorage = (key: string) => {
  return window.localStorage.getItem(key);
};

interface InputProps {
  name: keyof FormValues;
  required?: boolean;
  control?: Control<FormValues, object>;
  setValue: UseFormSetValue<FormValues>;
  type?: HTMLInputTypeAttribute;
  id?: HTMLInputTypeAttribute;
  placeholder: HTMLInputTypeAttribute;
  autocomplete?: HTMLInputTypeAttribute;
  style?: React.CSSProperties;
  className?: React.HTMLAttributes<HTMLInputElement>["className"];
}

export const Input = forwardRef(
  (
    {
      name,
      required,
      control,
      setValue,
      type,
      placeholder,
      style,
      className,
    }: InputProps,
    ref,
  ) => {
    const {
      field,
      fieldState: { error, isDirty },
    } = useController({
      control,
      name,
    });

    const value = useWatch({ control, name });

    if (isDirty) {
      _saveInLocalStorage(name, value ?? "");
    }

    useEffect(() => {
      const _userValue = _getFromLocalStorage(name);
      setValue(name, _userValue ?? "");
    }, []);

    return (
      <div>
        <input
          ref={field.ref}
          value={field.value}
          onChange={field.onChange}
          type={type}
          placeholder={placeholder}
          style={style}
          className={className}
        />
      </div>
    );
  },
);
