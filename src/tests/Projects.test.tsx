import { render, screen } from "@testing-library/react";
import Projects from '../components/Projects';
import type { Project } from '../components/Projects';
import "@testing-library/jest-dom";

const mockProjects: Project[] = [
  {
    image: "test.png",
    title: "Test Project",
    description: "Test description",
    status: "Completed",
    tech: ["React", "TypeScript"],
    url:""
  },
];

describe("Projects Component", () => {
  test("renders project title and description", () => {
    render(<Projects projects={mockProjects} />);
    expect(screen.getByText(/Test Project/i)).toBeInTheDocument();
    expect(screen.getByText(/Test description/i)).toBeInTheDocument();
  });

  test("renders tech tags", () => {
    render(<Projects projects={mockProjects} />);
    expect(screen.getByText(/React/i)).toBeInTheDocument();
    expect(screen.getByText(/TypeScript/i)).toBeInTheDocument();
  });
});