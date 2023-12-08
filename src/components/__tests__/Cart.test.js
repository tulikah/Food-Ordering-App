import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import HeaderComponent from '../Header';
import RestaurantMenu from '../RestaurantMenu';
import MOCK_DATA from './mocks/restListMockData.json';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import { appStore } from '../../redux/appStore';
import Cart from '../Cart';



global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
})

test('Should load Restaurant Menu component', async () => {
    await act(() => render(<RestaurantMenu />))
})

test('Should click accordian', async () => {
    await act(() => render(
        <Provider store={appStore}>
            <RestaurantMenu />
        </Provider>

    ))

    const accordian = screen.getByText('Recommended (6)');
    fireEvent.click(accordian);
    const dish = screen.getByText('Bombil Rawa Fry');
    expect(dish).toBeInTheDocument();
})

test('Should click and open the accordian', async () => {
    await act(() => render(
        <BrowserRouter>
            <Provider store={appStore}>
                <HeaderComponent />
                <RestaurantMenu />
            </Provider>
        </BrowserRouter>
    ))

    const accordian = screen.getByText('Recommended (6)');
    fireEvent.click(accordian);
})

test('Should check if cart has 0 items', async () => {
    await act(() => render(
        <BrowserRouter>
            <Provider store={appStore}>
                <HeaderComponent />
                <RestaurantMenu />
            </Provider>
        </BrowserRouter>
    ))

    const accordian = screen.getByText('Recommended (6)');
    fireEvent.click(accordian);
    const dish = screen.getAllByTestId('resItem');
    expect(dish.length).toBe(6);
    const cart = screen.getByText('Cart-0')
    expect(cart).toBeInTheDocument();
})

test('Should render if 1 item is added to the cart', async () => {
    await act(() => render(
        <BrowserRouter>
            <Provider store={appStore}>
                <HeaderComponent />
                <RestaurantMenu />
            </Provider>
        </BrowserRouter>
    ))

    const accordian = screen.getByText('Recommended (6)');
    fireEvent.click(accordian);
    const dish = screen.getAllByTestId('resItem');
    expect(dish.length).toBe(6);
    const addBtn = screen.getAllByRole('button', { name: 'ADD' });
    fireEvent.click(addBtn[0]);
    const cart = screen.getByText('Cart-1')
    expect(cart).toBeInTheDocument();
})

test('Should render if 2 items are added to the cart', async () => {
    await act(() => render(
        <BrowserRouter>
            <Provider store={appStore}>
                <HeaderComponent />
                <RestaurantMenu />
            </Provider>
        </BrowserRouter>
    ))

    const accordian = screen.getByText('Recommended (6)');
    fireEvent.click(accordian);
    const dish = screen.getAllByTestId('resItem');
    expect(dish.length).toBe(6);
    const addBtn = screen.getAllByRole('button', { name: 'ADD' });
    fireEvent.click(addBtn[1]);
    const cart = screen.getByText('Cart-2')
    expect(cart).toBeInTheDocument();
})

test('Should render if 3 items are added to the cart', async () => {
    await act(() => render(
        <BrowserRouter>
            <Provider store={appStore}>
                <HeaderComponent />
                <RestaurantMenu />
            </Provider>
        </BrowserRouter>
    ))

    //if you check accordian and cart both - 
    //since we're using itemList in both the components it will combine and show count as 6
    const accordian = screen.getByText('Recommended (6)');
    fireEvent.click(accordian);
    const dish = screen.getAllByTestId('resItem');
    expect(dish.length).toBe(6);
    const addBtn = screen.getAllByRole('button', { name: 'ADD' });
    fireEvent.click(addBtn[2]);
    const cart = screen.getByText('Cart-3')
    expect(cart).toBeInTheDocument();
})

test('Should render if cart has 3 items', async () => {
    await act(() => render(
        <BrowserRouter>
            <Provider store={appStore}>
                <HeaderComponent />
                <RestaurantMenu />
                <Cart />
            </Provider>
        </BrowserRouter>
    ))

    const dish = screen.getAllByTestId('resItem');
    expect(dish.length).toBe(3);
    const items = screen.getAllByText('Prawns Sukha Thali');
    expect(items[0]).toBeInTheDocument();
    expect(items[3]).toBe(undefined);
})

test('Should check the cart has no more than 3 items', async () => {
    await act(() => render(
        <BrowserRouter>
            <Provider store={appStore}>
                <HeaderComponent />
                <RestaurantMenu />
                <Cart />
            </Provider>
        </BrowserRouter>
    ))

    const dish = screen.getAllByTestId('resItem');
    expect(dish.length).toBe(3);
    const items = screen.getAllByText('Prawns Sukha Thali');
    expect(items[3]).toBe(undefined);
})

test('Should render clear cart', async () => {
    await act(() => render(
        <BrowserRouter>
            <Provider store={appStore}>
                <HeaderComponent />
                <RestaurantMenu />
                <Cart />
            </Provider>
        </BrowserRouter>
    ))

    expect(screen.getByText('Cart-3'))
    const clearCartBtn = screen.getByText('Clear Cart');
    expect(clearCartBtn).toBeInTheDocument();
    fireEvent.click(clearCartBtn);
    expect(screen.getByText('Cart-0'))
})