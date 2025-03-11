import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router";

export function renderWithProviders(ui, options = {}) {
  const utils = render(ui, {
    wrapper: ({ children }) => <BrowserRouter>{children}</BrowserRouter>,
    ...options,
  });

  return {
    ...utils,
    screen,
  };
}