import React from "react";
import useFilterSelect from "./useFilterSelect";
import { StatefulSelect } from "baseui/select";

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
  options: Array<{ value: string; name: string }>;
}

function FilterInputSelect(props: Props) {
  const { field, name, options, handleFieldChange } = props;
  const { normalizedOptions } = useFilterSelect(options);

  return (
    <StatefulSelect
      options={normalizedOptions}
      clearable
      placeholder={name}
      onChange={(selectedOption) => {
        if (selectedOption.option && selectedOption.type === "select") {
          handleFieldChange({
            field,
            value: String(selectedOption.value[0].id),
          });
        } else {
          handleFieldChange({
            field,
            value: "",
          });
        }
      }}
    />
  );
}

export default FilterInputSelect;
