import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from "@testing-library/react";
import AuthProvider from '../../../providers/Auth/Auth.provider'
import NotFoundPage from '../../../pages/NotFound/NotFound.page';

describe('NotFound', () => {
    it('renders the 404 page properly', () => {
        render(<BrowserRouter><AuthProvider><NotFoundPage /></AuthProvider></BrowserRouter>);

        expect(screen.getByRole("link").textContent).toBe("home");
    });
});