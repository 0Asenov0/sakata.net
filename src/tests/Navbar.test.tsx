import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "../components/Navbar";

describe("Navbar Component", () => {
  test("renders all nav links", () => {
    render(<Navbar />);
    const links = ["Home", "About", "Projects", "Links"];
    links.forEach((text) => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });
  });

  test("hamburger toggles mobile menu", () => {
    render(<Navbar />);
    const hamburger = screen.getByTestId("hamburger");
    const navLinks = screen.getByTestId("nav-links");

    expect(navLinks.classList.contains("active")).toBe(false);

    fireEvent.click(hamburger);
    expect(navLinks.classList.contains("active")).toBe(true);

    fireEvent.click(hamburger);
    expect(navLinks.classList.contains("active")).toBe(false);
  });
});
