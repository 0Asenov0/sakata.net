import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../components/Home";

describe("Home Component", () => {
  test("renders greeting and button", () => {
    render(<Home />);
    expect(screen.getByText("Hi, I am")).toBeInTheDocument();
    expect(screen.getByText("Play Dino Game")).toBeInTheDocument();
  });

  describe("Home Buttons", () => {
    test("View Projects button is present", () => {
      render(<Home />);
      const button = screen.getByText("View Projects");
      expect(button).toBeInTheDocument();
    });

    test("shows iframe when clicking Play button", () => {
      render(<Home />);
      const playButton = screen.getByText("Play Dino Game");
      fireEvent.click(playButton);
      expect(screen.getByTitle("Offline Dino Game")).toBeInTheDocument();
    });

    test("hides iframe when clicking Close button", () => {
      render(<Home />);
      const playButton = screen.getByText("Play Dino Game");
      fireEvent.click(playButton);

      const closeButton = screen.getByText("Close Game");
      fireEvent.click(closeButton);

      expect(screen.queryByTitle("Offline Dino Game")).toBeNull();
    });
  });
});
