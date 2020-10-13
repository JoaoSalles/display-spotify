import React from "react";
import useFilterSearch from "./useFilterSearch";
import { BACKGROUND_WHITE } from "constants/colors";
import { Search } from "baseui/icon";
import { StatefulInput } from "baseui/input";
import { ThemeProvider, createTheme, lightThemePrimitives } from "baseui";

interface Props {
  name: string;
}

function FilterSearch(props: Props) {
  const { name } = props;
  const { handleChange } = useFilterSearch();

  return (
    <ThemeProvider
      theme={createTheme(lightThemePrimitives, {
        colors: { inputFill: BACKGROUND_WHITE },
      })}
    >
      <StatefulInput
        overrides={{
          Root: {
            style: (props) => {
              const {
                $isFocused,
                $theme: { colors },
              } = props;
              const border = $isFocused ? colors.borderFocus : BACKGROUND_WHITE;
              return {
                borderLeftColor: border,
                borderRightColor: border,
                borderTopColor: border,
                borderBottomColor: border,
                borderRadius: "5px",
                boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.05)",
              };
            },
          },
        }}
        endEnhancer={<Search size="18px" />}
        placeholder={name}
        clearable={true}
        onChange={handleChange}
      />
    </ThemeProvider>
  );
}

export default FilterSearch;
