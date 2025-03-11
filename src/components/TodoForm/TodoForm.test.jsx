import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoForm from "./TodoForm";

describe("TodoForm Component", () => {
  it("renders input and submit button", () => {
    render(<TodoForm onSubmit={() => {}} />);

    expect(screen.getByLabelText("Todo input")).toBeInTheDocument();
    expect(screen.getByText("Add Todo")).toBeInTheDocument();
  });

  it("updates input value when typing", () => {
    render(<TodoForm onSubmit={() => {}} />);
    const input = screen.getByLabelText("Todo input");

    fireEvent.change(input, { target: { value: "New Todo" } });

    expect(input.value).toBe("New Todo");
  });

  it("calls onSubmit with input value when form is submitted", () => {
    const mockOnSubmit = vi.fn();
    render(<TodoForm onSubmit={mockOnSubmit} />);

    const input = screen.getByLabelText("Todo input");
    fireEvent.change(input, { target: { value: "New Todo" } });

    const submitButton = screen.getByText("Add Todo");
    fireEvent.click(submitButton);

    expect(mockOnSubmit).toHaveBeenCalledWith("New Todo");
  });

  it("clears input after form submission", () => {
    render(<TodoForm onSubmit={() => {}} />);
    const input = screen.getByLabelText("Todo input");

    fireEvent.change(input, { target: { value: "New Todo" } });
    fireEvent.click(screen.getByText("Add Todo"));

    expect(input.value).toBe("");
  });

  it("does not submit if input is empty", () => {
    const mockOnSubmit = vi.fn();
    render(<TodoForm onSubmit={mockOnSubmit} />);

    const input = screen.getByLabelText("Todo input");
    fireEvent.change(input, { target: { value: "       " } });

    fireEvent.click(screen.getByText("Add Todo"));

    expect(mockOnSubmit).not.toHaveBeenCalled();
  });
});
