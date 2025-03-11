import { describe, it, expect, beforeEach, vi } from "vitest";
import { Navigate } from "react-router";
import { renderWithProviders } from "../../test/test-utils";
import ProtectedRoute from "./ProtectedRoute";

vi.mock("react-router", async () => {
  const actual = await vi.importActual("react-router");
  return {
    ...actual,
    Navigate: vi.fn((props, anotherArg) => {
      console.log("DEBUG", {
        props,
        anotherArg,
      });

      return `Redirected to ${props.to}`;
    }),
  };
});

describe("ProtectedRoute", () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  it("redirects to login when not authenticated", () => {
    renderWithProviders(
      <ProtectedRoute>
        <div>Protected Content</div>
      </ProtectedRoute>
    );

    expect(Navigate).toHaveBeenCalledWith(
      // { to: "/login" } gak perlu strict bisa dengan expect.objectContaining
      expect.objectContaining({ to: "/login" }),
      expect.anything()
    );
  });

  it("renders children when authenticated", () => {
    localStorage.setItem("hasLogin", "true");

    const { getByText } = renderWithProviders(
      <ProtectedRoute>
        <div>Protected Content</div>
      </ProtectedRoute>
    );

    expect(getByText("Protected Content")).toBeInTheDocument();
    expect(Navigate).not.toHaveBeenCalled();
  });

  it("correctly reads hasLogin from localStorage", () => {
    localStorage.setItem("hasLogin", "true");

    const { getByText } = renderWithProviders(
      <ProtectedRoute>
        <div>Protected Content</div>
      </ProtectedRoute>
    );

    expect(getByText("Protected Content")).toBeInTheDocument();

    localStorage.clear();

    renderWithProviders(
      <ProtectedRoute>
        <div>Protected Content</div>
      </ProtectedRoute>
    );

    expect(Navigate).toHaveBeenCalledWith(
      expect.objectContaining({ to: "/login" }),
      expect.anything()
    );
  });
});
