import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer";
import "@testing-library/jest-dom";



    const mockfooterLinks = [
    { name: "Github", url: "test_url_github", iconClass: "fab fa-github" },
    { name: "LinkedIn", url: "test_url_linkedIn", iconClass: "fab fa-linkedin-in" }
  ]
describe("Footer Links", () => {
  test("renders Github and LinkedIn links", () => {
    render(<Footer links={mockfooterLinks}/>);
    expect(screen.getByText("Github")).toBeInTheDocument();
    expect(screen.getByText("LinkedIn")).toBeInTheDocument();

    // Check the <a> href
    expect(screen.getByText("Github").nextSibling).toHaveAttribute(
      "href",
      "test_url_github"
    );
    expect(screen.getByText("LinkedIn").nextSibling).toHaveAttribute(
      "href",
      "test_url_linkedIn"
    );
  });
});
