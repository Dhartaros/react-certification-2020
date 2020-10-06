import React from 'react';
import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from '../../../components/Navbar/SearchBar.component';

describe('SearchBar', () => {
    it('renders the search bar renders properly', () => {
        render(<SearchBar />);

        expect(screen.getByRole('textbox').textContent).toBe("");
    });
});