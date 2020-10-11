import React from "react";
import useFilterInput from './useFilterInput';
import { StatefulInput } from 'baseui/input';

interface Props {
    handleFieldChange: ({ field, value }: { field: string, value: string}) => void,
    name: string,
    field: string,
    min?: number,
    max?: number
}

function FilterInput(props: Props) {
    const { name, min, max, field, handleFieldChange } = props;
    const { handleChange } = useFilterInput(handleFieldChange, field)

    return (
        <StatefulInput
        type="number"
        placeholder={name}
        clearable={true}
        onChange={handleChange}
        min={ String(min) ? min : undefined}
        max={ max ? max : undefined}
      />
    );
}

export default FilterInput;