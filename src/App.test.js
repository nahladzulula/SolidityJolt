// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders SolidityJolt title', () => {
    render(<App />);
    const titleElement = screen.getByText(/SolidityJolt/i);
    expect(titleElement).toBeInTheDocument();
});
