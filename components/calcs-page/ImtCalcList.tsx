'use client';

import React, { useState } from 'react';
import { InputSkeleton } from './InputSkeleton';
import * as yup from 'yup';
import { ImtCalcFormula } from './ImtCaclFormula';

const schema = yup.object().shape({
  height: yup
    .number()
    .positive()
    .min(100, 'Не менше 100')
    .max(220, 'Не більше 220'),

  weight: yup
    .number()
    .positive()
    .min(40, 'Не менше 40')
    .max(130, 'Не більше 130'),
});

export const ImtCalcList = () => {
  const [weight, setWeight] = useState<string>('');
  const [height, setHeight] = useState<string>('');

  const [errors, setErrors] = useState<{ height?: string; weight?: string }>(
    {}
  );

  const changeWeight = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWeight(e.target.value);
  };
  const changeHeight = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHeight(e.target.value);
  };

  const validate = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      await schema.validate(
        { [e.target.name]: e.target.value },
        { abortEarly: false }
      );
      setErrors({});
    } catch (err) {
      const validationErrors: Record<string, string> = {};
      (err as yup.ValidationError).inner.forEach(error => {
        if (error.path) {
          validationErrors[error.path] = error.message;
        }
      });
      setErrors(validationErrors);
    }
  };

  return (
    <form className="flex flex-col gap-7">
      <InputSkeleton
        text={'Зріст (см):'}
        name="height"
        max={220}
        min={100}
        value={height}
        setAny={changeHeight}
        onBlur={validate}
        error={errors.height}
      />
      <InputSkeleton
        text={'Вага (кг):'}
        name="weight"
        max={130}
        min={40}
        value={weight}
        setAny={changeWeight}
        onBlur={validate}
        error={errors.weight}
      />
      <ImtCalcFormula weight={weight} height={height} />
    </form>
  );
};
