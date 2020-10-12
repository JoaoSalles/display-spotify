import React from "react";
import FilterSearch from 'components/FilterSearch';
import { Spinner } from "baseui/spinner";
import useFilter from './useFilter';
import { getField } from './utils/getField';
import { FilterElement, FilterPainel, FilterSearchPainel } from './styles';

interface Props {
}

function Filter(props: Props) {
    const { filterFields, filterData, handleFieldChange, loading } = useFilter();
    


    return (
        <FilterElement className="container">
            <FilterPainel className="painel">    
                {loading ? 
                    (<Spinner color="#EA1D2C" />) :
                    filterFields.map( filterField => getField(filterField, handleFieldChange, filterData))
                }
            </FilterPainel>
            <FilterSearchPainel className="search-painel">
                <FilterSearch name={"Filtrar por nome..."}/> 
            </FilterSearchPainel>
        </FilterElement>
    );
}

export default Filter;