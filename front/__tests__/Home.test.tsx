import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Home from "@/app/components/Home";
import { useSearchParams } from "next/navigation";

// Mocking useSearchParams
jest.mock("next/navigation", () => ({
  useSearchParams: jest.fn(),
}));

describe("Home Component", () => {
  it("should render the title", () => {
    (useSearchParams as jest.Mock).mockReturnValue(new URLSearchParams());
    const { getByText } = render(<Home />);
    expect(getByText("Scalio Challenge")).toBeInTheDocument();
  });

  it("should render the search post section", () => {
    (useSearchParams as jest.Mock).mockReturnValue(new URLSearchParams());
    const { getByText } = render(<Home />);
    expect(getByText("Search Post")).toBeInTheDocument();
  });

  it("should render the input field and handle change", () => {
    (useSearchParams as jest.Mock).mockReturnValue(new URLSearchParams());
    const { getByPlaceholderText } = render(<Home />);
    const input = getByPlaceholderText("Enter ID") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "1" } });
    expect(input.value).toBe("1");
  });

  it("should render the send button", () => {
    (useSearchParams as jest.Mock).mockReturnValue(new URLSearchParams());
    const { getByText } = render(<Home />);
    expect(getByText("Send")).toBeInTheDocument();
  });

  it("should render error message when error exists", () => {
    (useSearchParams as jest.Mock).mockReturnValue(
      new URLSearchParams("error=someError"),
    );
    const { getByText } = render(<Home />);
    expect(getByText("Error: someError")).toBeInTheDocument();
  });
});
