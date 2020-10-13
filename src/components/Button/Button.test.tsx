import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import Button from "./Button";

describe("Tests for Button", () => {
  it("Should render button and trigger it", async () => {
    const mockClick = jest.fn();
    const { getByTestId } = render(<Button onClick={mockClick} />);

    const buttonField = await waitForElement(() => getByTestId("button-test"));

    fireEvent.click(buttonField);

    expect(mockClick).toBeCalled();
  });
});
