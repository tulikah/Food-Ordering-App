import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import BodyComponent from '../../Body';
import { BrowserRouter } from 'react-router-dom';

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(data);
        }
    }
        ) 
})


test('Should render the body component', () => {
    render(
        <BrowserRouter>
            <BodyComponent />
        </BrowserRouter>
    )

    const cards = screen.getAllByTestId('restCard');
    expect(cards.length).toBe(7);
    const searchBtn = screen.getByRole('button', {name: 'Search'});
    const searchTb = screen.getByTestId( 'searchInput');
    fireEvent.change(searchTb, { target: { value: 'Misal'}});
    fireEvent.click(searchBtn);
    const rests = screen.getAllByTestId('restCard');
    expect(rests.length).toBe(2);
    expect(rests.length).not.toBe(3);

})

test('Should search restaurants', () => {
    render(
        <BrowserRouter>
            <BodyComponent />
        </BrowserRouter>
    )

    const cards = screen.getAllByTestId('restCard');
    expect(cards.length).toBe(7);
    const searchBtn = screen.getByRole('button', {name: 'Search'});
    const searchTb = screen.getByTestId( 'searchInput');
    fireEvent.change(searchTb, { target: { value: 'Misal'}});
    fireEvent.click(searchBtn);
    const rests = screen.getAllByTestId('restCard');
    expect(rests.length).toBe(2);
    expect(rests.length).not.toBe(3);

})


test('Should filter top rated restaurants', () => {
    render(
        <BrowserRouter>
            <BodyComponent />
        </BrowserRouter>
    )

    const cards = screen.getAllByTestId('restCard');
    expect(cards.length).toBe(7);
    const searchBtn = screen.getByRole('button', {name: 'Top Rated Restaurants'});
    fireEvent.click(searchBtn);
    const rests = screen.getAllByTestId('restCard');
    expect(rests.length).toBe(5);
    expect(rests.length).not.toBe(3);

})