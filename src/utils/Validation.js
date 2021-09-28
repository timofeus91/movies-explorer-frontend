import React from "react";


export function Validation() {

  //хуки необходимые для валидации
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);
  

  //обработчик по валидации
  const handleChange = (evt) => {

    const target = evt.target;

    const name = target.name;
    const value = target.value;

    setValues({...values, [name]: value});
    setErrors({...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
  };

  return { values, errors, isValid, handleChange, setValues };

}
