'use client';

import React, { useState } from 'react';
import { InputSkeleton } from './InputSkeleton';
import * as yup from 'yup';
import { FatCalcFormula } from './FatCalcFormula';

const schema = yup.object().shape({
  age: yup.number().positive().min(14, 'Не менше 14').max(130, 'Не більше 130'),

  skinFold: yup
    .number()
    .positive()
    .min(1, 'Не менше 1')
    .max(100, 'Не більше 100'),
  skinFoldW: yup
    .number()
    .positive()
    .min(1, 'Не менше 1')
    .max(100, 'Не більше 100'),
  skinFoldL: yup
    .number()
    .positive()
    .min(1, 'Не менше 1')
    .max(100, 'Не більше 100'),
});

export const FatCalcList = () => {
  const [sex, setSex] = useState<boolean>(true);
  const [age, setAge] = useState<string>('');
  const [skinFold, setSkinFold] = useState<string>('');
  const [skinFoldW, setSkinFoldW] = useState<string>('');
  const [skinFoldL, setSkinFoldL] = useState<string>('');

  const [errors, setErrors] = useState<{
    age?: string;
    skinFold?: string;
    skinFoldW?: string;
    skinFoldL?: string;
  }>({});

  const changeAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAge(e.target.value);
  };

  const changeSF = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSkinFold(e.target.value);
  };
  const changeSFW = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSkinFoldW(e.target.value);
  };
  const changeSFL = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSkinFoldL(e.target.value);
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

  let sum = 0;
  if (skinFold && skinFoldW) {
    let sumFold = Number(skinFold) + Number(skinFoldW);
    if (skinFoldL) {
      sum = sumFold + Number(skinFoldL);
    }
  }
  return (
    <form className="flex flex-col gap-7">
      <label htmlFor="sex" className="font-bold flex items-center gap-3">
        <span className="p-2 text-lg">Стать: </span>
        <label
          htmlFor="woman"
          className={`cursor-pointer flex items-center justify-center 
          truncate font-semibold text-lg rounded-lg p-2 hover:bg-[#d9d9d9] ${
            !sex ? 'bg-mainText text-main' : ''
          } `}
        >
          Жінка{' '}
        </label>
        <input
          id="woman"
          name="sex"
          type="radio"
          value="Жінка"
          className="appearance-none"
          checked={!sex}
          onChange={() => setSex(false)}
        />
        <label
          htmlFor="man"
          className={`cursor-pointer flex items-center justify-center 
          truncate font-semibold text-lg rounded-lg p-2 hover:bg-[#d9d9d9] ${
            sex ? 'bg-mainText text-main' : ''
          } `}
        >
          Чоловік{' '}
        </label>
        <input
          id="man"
          name="sex"
          type="radio"
          value="Чоловік"
          className="appearance-none"
          checked={sex}
          onChange={() => setSex(true)}
        />
      </label>
      <InputSkeleton
        text={'Вік, років:'}
        name="age"
        max={130}
        min={14}
        value={age}
        setAny={changeAge}
        onBlur={validate}
        error={errors.age}
      />
      <p className="font-bold md:text-lg">
        Виміряйте шкірні складки на таких частинах тіла:
      </p>
      <InputSkeleton
        text={sex ? 'На грудях (мм):' : 'На трицепсі (мм):'}
        name="skinFold"
        max={100}
        min={1}
        value={skinFold}
        setAny={changeSF}
        onBlur={validate}
        error={errors.skinFold}
      />

      <InputSkeleton
        text={sex ? 'На животі (мм):' : 'Бокова шкірна складка (мм):'}
        name="skinFoldW"
        max={100}
        min={1}
        value={skinFoldW}
        setAny={changeSFW}
        onBlur={validate}
        error={errors.skinFoldW}
      />
      <InputSkeleton
        text={sex ? 'На стегні (мм):' : 'На стегні (мм):'}
        name="skinFoldL"
        max={100}
        min={1}
        value={skinFoldL}
        setAny={changeSFL}
        onBlur={validate}
        error={errors.skinFoldL}
      />
      <FatCalcFormula age={age} sex={sex} sum={sum} />
    </form>
  );
};
