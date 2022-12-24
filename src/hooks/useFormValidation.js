
import { useState } from "react";

const useValidation = (validateForm) => {
  const [value, setValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const fildesAreValid = validateForm(value);
  const inputError = isTouched && !fildesAreValid;
  const isFormValid = !inputError;

  return {
    value,
    setValue,
    isTouched,
    setIsTouched,
    inputError,
  };
}

export default useValidation;