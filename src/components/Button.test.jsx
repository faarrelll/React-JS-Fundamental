import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

function Button({ label, onClick }) {
  return <button onClick={onClick}>{label}</button>;
}

describe("Button", () => {
  it("renders with label", () => {
    render(<Button label="Click me!" />);
    expect(screen.getByText("Click me!")).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    const onClick = vi.fn();

    render(
      <Button
        label="Click me!"
        onClick={onClick}
        // onClick={() => {
        //   console.log("Button ke Click");
        // }}
      />
    );

    fireEvent.click(screen.getByText("Click me!"));

    // ekspektasinya onClick callback akan kepanggil ketika buttonnya di click
    expect(onClick).toHaveBeenCalledOnce();
  });
});
