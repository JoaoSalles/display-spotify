import React from "react";
import useFilter from './useFilter';
import { FilterElement } from './styles';

interface Props {
}

function Filter(props: Props) {
    const { filterField } = useFilter();
    console.log(filterField);
    return (
        <FilterElement>
            
        </FilterElement>
    );
}

export default Filter;