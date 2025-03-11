import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import Card from "./Card";

describe("Card Component Snapshots", () => {
  it("renders default draft card correctly", () => {
    const { container } = render(
      <Card
        title="Getting Started with Vitest"
        description="Learn how to test React components"
      />
    );
    expect(container).toMatchSnapshot();
  });

  it("renders published card with tags correctly", () => {
    const { container } = render(
      <Card
        title="Advanced Testing Tips"
        description="Master React testing strategies"
        status="published"
        tags={["react", "testing", "vitest"]}
      />
    );
    expect(container).toMatchSnapshot();
  });

  it("renders card with review status correctly", () => {
    const { container } = render(
      <Card
        title="Work in Progress"
        description="This post is under review"
        status="review"
        tags={["draft"]}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
