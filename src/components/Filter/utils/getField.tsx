import React, { ReactElement } from "react";
import { filterFormatField } from 'types/filterFormatTypes';
import FilterInput from 'components/FilterInput';
import FilterInputDataPicker from 'components/FilterInputDataPicker';
import FilterInputSelect from 'components/FilterInputSelect';

export const getField = (
  field: filterFormatField,
  handleFieldChange: ({ field, value }: { field: string, value: string}) => void,
  filterData: {[key: string]: string}
  ): ReactElement => {
  const { id, name } = field;
  let max, min, pattern;
  let values: any = [];

  if (field.validation) {
    max = field.validation.max;
    min = field.validation.min;
    pattern = field.validation.pattern;
  }

  if (field.values) {
    values = field.values
  }

  switch (id) {
    case "locale":
      return (<FilterInputSelect options={values} field={id} name={name} handleFieldChange={handleFieldChange} key={id}/>);

    case "country":
      return (<FilterInputSelect options={values} field={id} name={name} handleFieldChange={handleFieldChange} key={id}/>);

    case "timestamp":
      return (<FilterInputDataPicker filterData={filterData[id]} field={id} name={name} pattern={pattern} handleFieldChange={handleFieldChange} key={id}/>)

    case "limit":
      return (<FilterInput field={id} name={name} min={min} max={max} handleFieldChange={handleFieldChange} key={id}/>);

    case "offset":
      return (<FilterInput field={id} name={name} min={0} handleFieldChange={handleFieldChange} key={id}/>);

    default:
      return (<FilterInput field={id} name={name} handleFieldChange={handleFieldChange} key={id}/>);
  }
};
