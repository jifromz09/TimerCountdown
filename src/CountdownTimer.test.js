import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import CountdownTimer from "./CountdownTimer";

afterEach(() => {
  cleanup(); // Resets the DOM after each test suite
});
 
describe("CountdownTimer", () => {
  const renderCountdownTimer = () =>
    render(<CountdownTimer targetDate={`2025-01-01T00:00:00Z`} />);

  it("should render the component onto the screen", () => {
    render(<CountdownTimer />);
  });
});
