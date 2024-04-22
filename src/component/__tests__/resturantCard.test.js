import ResturantCards from "../ResturantCards";
import { render, screen } from "@testing-library/react";
import Mock_Data from "../mocks/restrocardMock.json";
import "@testing-library/jest-dom";
import { withStarRating } from "../ResturantCards";

it("Should render resturant card component with props data", () => {
  render(<ResturantCards resData={Mock_Data} />); 

  const name = screen.getByText("Punjabi Rasoi");

  expect(name).toBeInTheDocument();
});

it("Should render resturant card with promoted star rating",() => {
  render(<withStarRating />);
 
})
