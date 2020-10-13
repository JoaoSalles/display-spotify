import React from "react";
import { render, fireEvent, waitFor, RenderResult } from "@testing-library/react";
import Filter from "./Filter";
import * as status from "constants/utils/status";

import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

describe("Tests for Filter Painel", () => {
    const mockStore = configureStore();
    const defaultInitialState = { auth: { status: status.LOADED }}
    const defaultFilters = [
        {
            id: "limit",
            name: "Quantidade",
            validation: {
                max: 50,
                min: 1,
                primitiveType: "INTEGER"
            }
        },
        {
            id: "offset",
            name: "Página",
            validation: {
                primitiveType: "INTEGER"
            }
        }
    ]

    const defaultProps = {
        filterFields: defaultFilters,
        filterData: {},
        handleFieldChange: () => {},
        loading: true
    }

    const renderFilter = (
        props: { [key: string]: any } = {},
        initialState: { [key: string]: any } = defaultInitialState
    ): RenderResult => {
        let store = mockStore({ ...initialState })
        return render(
            <Provider store={store}><Filter {...defaultProps} {...props} /></Provider>
        );
    }

    it("Should match snapshot", async () => {
        const { container } = renderFilter();

        expect(container).toMatchSnapshot();
    });

    it("Should render loading", async () => {
        const { getByTestId } = renderFilter();

        const buttonField = await waitFor(() => getByTestId("loading"));
        expect(buttonField).toBeTruthy();
    });

    it("Should render Filter inputs", async () => {
        const { getByPlaceholderText } = renderFilter({ loading: false });

        const paginaInput = await waitFor(() => getByPlaceholderText("Página"));

        expect(paginaInput).toBeTruthy();

        const quantidadeInput = await waitFor(() => getByPlaceholderText("Quantidade"));

        expect(quantidadeInput).toBeTruthy();
    });

    it("Should call handleFieldChange on input change", async () => {
        const mockOnchange = jest.fn();
        const { getByPlaceholderText } = renderFilter({ loading: false, handleFieldChange: mockOnchange });

        const paginaInput = await waitFor(() => getByPlaceholderText("Página"));

        fireEvent.change(paginaInput, { target: { value: '23' } });

        await waitFor(() => expect(mockOnchange).toHaveBeenCalledTimes(1));

        expect(mockOnchange).toBeCalled();
    });
});
