import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

describe("Counter Component", () => {
  it("renders initial count of 0", () => {
    render(<Counter />);
    expect(screen.getByText("Count: 0")).toBeInTheDocument();
  });

  it("increments count when increment button is clicked", () => {
    render(<Counter />);
    const incrementButton = screen.getByText("Increment");

    fireEvent.click(incrementButton);

    expect(screen.getByText("Count: 1")).toBeInTheDocument();
  });

  it("decrements count when decrement button is clicked", () => {
    render(<Counter />);
    const decrementButton = screen.getByText("Decrement");

    fireEvent.click(decrementButton);

    expect(screen.getByText("Count: -1")).toBeInTheDocument();
  });

  it("handles multiple clicks correctly", () => {
    render(<Counter />);
    const incrementButton = screen.getByText("Increment");
    const decrementButton = screen.getByText("Decrement");

    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);

    fireEvent.click(decrementButton);

    expect(screen.getByText("Count: 2")).toBeInTheDocument();
  });
});
