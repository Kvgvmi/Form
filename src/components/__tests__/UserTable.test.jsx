import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import UserTable from "../UserTable";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("UserTable", () => {
  const mockUsers = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
  ];

  beforeEach(() => {
    mockNavigate.mockClear();
  });

  test("renders user data correctly", () => {
    render(
      <BrowserRouter>
        <UserTable users={mockUsers} />
      </BrowserRouter>
    );

    expect(screen.getByText("Alice")).toBeInTheDocument();
    expect(screen.getByText("bob@example.com")).toBeInTheDocument();
  });

  test("navigates to edit page when update button is clicked", () => {
    render(
      <BrowserRouter>
        <UserTable users={mockUsers} />
      </BrowserRouter>
    );

    const updateButtons = screen.getAllByText("Update");
    fireEvent.click(updateButtons[0]);

    expect(mockNavigate).toHaveBeenCalledWith("/user/1/edit");
  });

  test("navigates to details page when details button is clicked", () => {
    render(
      <BrowserRouter>
        <UserTable users={mockUsers} />
      </BrowserRouter>
    );

    const detailsButtons = screen.getAllByText("Details");
    fireEvent.click(detailsButtons[0]);

    expect(mockNavigate).toHaveBeenCalledWith("/user/1");
  });
});