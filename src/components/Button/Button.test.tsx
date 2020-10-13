import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import Button from "./Button";

describe("Tests for Button", () => {
    it("Should match snapshot", async () => {
        const { container } = render(<Button onClick={() => {}} />);

        expect(container).toMatchSnapshot();
    });

    it("Should render button and trigger it", async () => {
        const mockClick = jest.fn();
        const { getByTestId } = render(<Button onClick={mockClick} />);

        const buttonField = await waitFor(() => getByTestId("button-test"));

        fireEvent.click(buttonField);

        expect(mockClick).toBeCalled();
    });
});
