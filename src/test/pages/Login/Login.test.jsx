import React from 'react';
import { render, screen, fireEvent } from "@testing-library/react";
import AuthProvider from '../../../providers/Auth/Auth.provider'
import LoginPage from '../../../pages/Login/Login.page';

describe('LoginPage', () => {
    it('renders the login page properly', () => {
        render(<AuthProvider><LoginPage /></AuthProvider>);
        const userInput = screen.getByRole('textbox');

        expect(userInput.textContent).toBe("");
    });
    /*
    it('changes the input of the user and password inputs', () => {
        render(<AuthProvider><LoginPage /></AuthProvider>);
        const userInput = screen.getByRole('textbox');

        fireEvent.change(userInput, { target: { value: "wizeline" } });
        fireEvent.keyDown(userInput, { key: "q" });
        console.log(userInput.innerText);

        expect(userInput.textContent).toBe("wizeline");
    });
    */
});