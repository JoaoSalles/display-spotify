import React from "react";
import FilterSearch from 'components/FilterSearch';
import useFilter from './useFilter';
import { getField } from './utils/getField';
import { FilterElement, FilterPainel, FilterSearchPainel } from './styles';

interface Props {
}

function Filter(props: Props) {
    const { filterFields, filterData, handleFieldChange } = useFilter();
    console.log(filterFields, filterData);
    return (
        <FilterElement className="container">
            <FilterPainel className="painel">
                {filterFields.map( filterField => getField(filterField, handleFieldChange, filterData))}
            </FilterPainel>
            <FilterSearchPainel className="search-painel">
                <FilterSearch name={"Filtrar por nome..."}/> 
            </FilterSearchPainel>
        </FilterElement>
    );
}

export default Filter;