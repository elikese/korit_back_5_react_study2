import { useState } from "react";

export function useInput() {
  const [inputValue, setInputValue] = useState("");

  const onChange = (e) => {
    const { value } = e.target;
    setInputValue(() => value);
  }

  return [inputValue, onChange];
}

/**
 * Custom Hook : Hook이 섞인 funtion임
 * @param {*} maxLength : (Number)입력할 최대 길이 
 * @returns 
 */

export function useMaxLengthValidateInput(maxLength) {
  const [inputValue, setInputValue] = useState("");

  const onChange = (e) => {
    const { value } = e.target;
    if (value.length <= maxLength) {
      setInputValue(() => value);
    }
  }

  return [inputValue, onChange];
}