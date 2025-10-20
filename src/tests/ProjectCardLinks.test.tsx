import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Projects from "../components/Projects";
import type { Project } from "../components/Projects"; 

const mockProjects: Project[] = [
  {
    image: "test.png",
    title: "Test Project",
    description: "Test description",
    status: "Completed",
    tech: ["React", "TypeScript"],
    url: "https://github.com/0Asenov0", 
  },
];

describe("Project Card Links", () => {
  test("renders GitHub link if present", () => {
    render(<Projects projects={mockProjects} />);

   
    const link = screen.getByTestId("github-link-Test Project");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "https://github.com/0Asenov0");
  });
});
