import { render, screen } from '@testing-library/react';
import Contact from '../Contact';
import '@testing-library/jest-dom';


test('should load', () => {
    render(<Contact />);

})

test('should load textboxes', () => {
    render(<Contact />);
    const textboxes = screen.getAllByRole('textbox');

    expect(textboxes.length).not.toBe(5);
})

test('should load the submit button', () => {
    render(<Contact />);
    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
})