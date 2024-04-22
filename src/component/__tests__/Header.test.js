import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/Redux/appStore";
import "@testing-library/jest-dom";

it("Should test for header button ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginbutton = screen.getByRole("button");
// const loginbutton = screen.getByText("Login");

  expect(loginbutton).toBeInTheDocument();
});


it("Should test for cart items ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  // const cartItems = screen.getByText("🛒(0)");
  //---(/🛒/) = Rajex
  const cartItems = screen.getByText(/🛒/);

  expect(cartItems).toBeInTheDocument();
});

it("Should change button login to logout",() => {
  render(
    <BrowserRouter>
    <Provider store={appStore}>
      <Header/>
    </Provider>
    </BrowserRouter>
  );
  const loginbutton = screen.getByRole("button",{name:"Login"});
  fireEvent.click(loginbutton);
  const logoutbutton = screen.getByRole("button",{name:"Logout"});

  expect(logoutbutton).toBeInTheDocument();
})