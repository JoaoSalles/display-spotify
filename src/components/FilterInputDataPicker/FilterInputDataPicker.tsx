import React from "react";
import useFilterInputDataPicker from "./useFilterInputDataPicker";
import { DatePicker } from "baseui/datepicker";
import { format } from "date-fns";

interface Props {
  handleFieldChange: ({
    field,
    value,
  }: {
    field: string;
    value: string;
  }) => void;
  name: string;
  field: string;
  pattern?: string;
  filterData: string;
}

function FilterInput(props: Props) {
  const { field, name, pattern, filterData, handleFieldChange } = props;
  const { dateTypevalue, setDateTypevalue } = useFilterInputDataPicker();

  let cleanedPattern = "";

  if (pattern) {
    cleanedPattern = pattern.replace("T", "'T'");
  } else {
    cleanedPattern = "yyyy-MM-dd'T'HH:mm:ss";
  }

  return (
    <DatePicker
      onChange={({ date }) => {
        if (date) {
          handleFieldChange({
            field,
            value: Array.isArray(date)
              ? format(date[0], cleanedPattern)
              : format(date, cleanedPattern),
          });
          setDateTypevalue(Array.isArray(date) ? date : [date]);
        } else if (filterData) {
          handleFieldChange({ field, value: "" });
          setDateTypevalue([]);
        }
      }}
      value={dateTypevalue}
      placeholder={name}
      clearable
      formatString="yyyy-MM-dd HH:mm:ss"
      timeSelectStart
    />
  );
}

export default FilterInput;
