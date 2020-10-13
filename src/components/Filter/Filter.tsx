import React from "react";
import FilterSearch from "components/FilterSearch";
import { Spinner } from "baseui/spinner";
import { getField } from "./utils/getField";
import { FilterElement, FilterPainel, FilterSearchPainel } from "./styles";
import { filterFormatField } from "types/filterFormatTypes";

interface Props {
  filterFields: Array<filterFormatField>,
  filterData: { [key: string]: string},
  handleFieldChange: ({ field, value, }: {
        field: string;
        value: string;
    }) => void,
  loading: boolean
}

function Filter(props: Props) {
  const { filterFields, filterData, handleFieldChange, loading } = props;

  return (
    <FilterElement className="container">
      <FilterPainel className="painel">
        {loading ? (
          <Spinner data-testid="loading" color="#EA1D2C" />
        ) : (
          filterFields.map((filterField) =>
            getField(filterField, handleFieldChange, filterData)
          )
        )}
      </FilterPainel>
      <FilterSearchPainel className="search-painel">
        <FilterSearch name={"Filtrar por nome..."} />
      </FilterSearchPainel>
    </FilterElement>
  );
}

export default Filter;
