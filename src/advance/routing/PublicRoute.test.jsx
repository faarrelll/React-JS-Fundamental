import { describe, it, expect, beforeEach, vi } from "vitest";
import { Navigate } from "react-router";
import { renderWithProviders } from "../../test/test-utils";
import PublicRoute from "./PublicRoute";

vi.mock("react-router", async () => {
  const actual = await vi.importActual("react-router");
  return {
    ...actual,
    Navigate: vi.fn(({ to }) => `Redirected to ${to}`),
  };
});

describe("PublicRoute", () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  it("renders children when not authenticated", () => {
    const { getByText } = renderWithProviders(
      <PublicRoute>
        <div>Login Page</div>
      </PublicRoute>
    );

    expect(getByText("Login Page")).toBeInTheDocument();
    expect(Navigate).not.toHaveBeenCalled();
  });

  it("redirects to dashboard when authenticated", () => {
    localStorage.setItem("hasLogin", "true");

    renderWithProviders(
      <PublicRoute>
        <div>Login Page</div>
      </PublicRoute>
    );

    expect(Navigate).toHaveBeenCalledWith(
      expect.objectContaining({ to: "/dashboard" }),
      expect.anything()
    );
  });

  it("reflects authentication state on new mount", () => {
    const { getByText, unmount } = renderWithProviders(
      <PublicRoute>
        <div>Login Page</div>
      </PublicRoute>
    );
    expect(getByText("Login Page")).toBeInTheDocument();

    unmount();

    localStorage.setItem("hasLogin", "true");

    renderWithProviders(
      <PublicRoute>
        <div>Login Page</div>
      </PublicRoute>
    );

    expect(Navigate).toHaveBeenCalledWith(
      expect.objectContaining({ to: "/dashboard" }),
      expect.anything()
    );
  });
});
