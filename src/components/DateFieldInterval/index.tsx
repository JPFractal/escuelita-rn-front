"use client";

import { useEffect } from "react";
import useToogle from "@/hooks/useToogle";
import useInputHandler from "@/hooks/useInputHandler";
import TextFieldProps from "@/types/common/TextField";
import TextField from "../common/TextField";
import CheckBox from "../common/CheckBox";
import dateParser from "@/utils/date-parser";

interface DateIntervalProps extends TextFieldProps {
  alternative?: string;
  checkboxLabel?: string;
  nameFirstInput?: string;
  nameSecondInput?: string;
  labelFirstInput?: string;
  labelSecondInput?: string;
  valueFirstInput?: string;
  valueSecondInput?: string;
}

export default function DateFieldInterval({
  className = "",
  checkboxLabel = "Until present",
  nameFirstInput = "date_start",
  nameSecondInput = "date_end",
  labelFirstInput = "Start Date",
  labelSecondInput = "End Date",
  valueFirstInput = "",
  valueSecondInput = "",
  alternative = "",
}: DateIntervalProps) {
  const { flag, toogle } = useToogle(
    Boolean(valueFirstInput && !valueSecondInput)
  ); // auto check until present if exits a start date but not an end date

  const {
    value: _value,
    handleChange,
    reset,
    setValue,
  } = useInputHandler(valueSecondInput);

  useEffect(() => {
    if (flag) setValue("--");
    else reset();
  }, [flag]);

  return (
    <div className={`${className} grid grid-cols-12 gap-2`}>
      <TextField
        className="col-span-6"
        type={"date"}
        label={labelFirstInput}
        name={nameFirstInput}
        value={valueFirstInput}
      />
      <TextField
        className="col-span-6"
        type={"date"}
        label={labelSecondInput}
        name={nameSecondInput}
        value={_value}
        onChange={handleChange}
        disabled={flag}
      />
      <CheckBox
        className="col-span-12"
        label={checkboxLabel}
        checked={flag}
        onClick={toogle}
      />
    </div>
  );
}
