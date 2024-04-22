import Contact from "../Contact"
import { render,screen } from "@testing-library/react";
import '@testing-library/jest-dom';

//for groupd og test cases//

describe('contact us test cases', () => {
//We will also write IT instead of TEST both are same here..//
test("should load contaCT US PAGE",() => {
    render(<Contact/>);

    const heading = screen.getByRole("heading");
    
    expect(heading).toBeInTheDocument();
});

test("should load button",() => {
    render(<Contact/>);

    const button = screen.getByRole("button");
    
    expect(button).toBeInTheDocument();
});

test("should load submit button",() => {
    render(<Contact/>);

    const button = screen.getByText("Submit");
    
    expect(button).toBeInTheDocument();
});

test("load the all input boxes",() => {
    render(<Contact/>);
    const inputboxes = screen.getAllByRole("textbox");
//    console.log(inputboxes);
   expect(inputboxes.length).toBe(3);
})

});



