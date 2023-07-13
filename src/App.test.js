import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import Reservation from "./pages/Reservations";
import App from "./App";

test("renders Reserve a Table button", () => {
  render(
    <MemoryRouter>
      <Reservation />
    </MemoryRouter>
  );
  console.log(screen);
  const linkElement = screen.getByText("Reserve");
  expect(linkElement).toBeInTheDocument();
});

test("renders Reserve a table inputs", () => {
  render(
    <MemoryRouter>
      <Reservation />
    </MemoryRouter>
  );
  console.log(screen);

  const linkElement1 = screen.getByText(/Telephone/);
  expect(linkElement1).toBeInTheDocument();
  const linkElement2 = screen.getByText(/Email/);
  expect(linkElement2).toBeInTheDocument();
  const linkElement3 = screen.getByText(/Full Name/);
  expect(linkElement3).toBeInTheDocument();
  const linkElement4 = screen.getByText(/Date/);
  expect(linkElement4).toBeInTheDocument();
});

test("renders App Reserve a Table button", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const linkElement = screen.getByText("Reserve a Table");
  expect(linkElement).toBeInTheDocument();
});

test("renders App Online Menu button", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const linkElement1 = screen.getByText(/Online Menu/);
  expect(linkElement1).toBeInTheDocument();
});
