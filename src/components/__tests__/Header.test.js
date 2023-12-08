import { render, screen, fireEvent, renderHook } from '@testing-library/react';
import HeaderComponent from '../Header';
import '@testing-library/jest-dom'
import { Provider } from 'react-redux';
import { appStore } from '../../redux/appStore';
import { BrowserRouter } from 'react-router-dom';
import useOnlineStatus from '../../hooks/useOnlineStatus';
import BodyComponent from '../Body';
import { UserContext } from '../../utils/UserContext';


it('Should load header component with a user name', () => {

    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <HeaderComponent />
            </Provider>
        </BrowserRouter>
    )

    const login = screen.getByText('Login');
    expect(login).toBeInTheDocument();
})

it('Should load header component with cart default value', () => {

    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <HeaderComponent />
            </Provider>
        </BrowserRouter>
    )

    const cart = screen.getByText('Cart-0');
    expect(cart).toBeInTheDocument();
})

it('Should load header component with cart any value', () => {

    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <HeaderComponent />
            </Provider>
        </BrowserRouter>
    )

    const cart = screen.getByText(/Cart/); //using regex here
    expect(cart).toBeInTheDocument();
})

it('Should check if user is online', () => {

    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <HeaderComponent />
            </Provider>
        </BrowserRouter>
    )

    const onlineStatus = renderHook(useOnlineStatus);
    expect(onlineStatus.result.current).toBe(true);
    expect(screen.getByTestId('onlineStatus')).toBeInTheDocument();
    expect('🟢');
})

// it('Should check if user is offline', () => {

//     render(
//         <BrowserRouter>
//             <Provider store={appStore}>
//                 <HeaderComponent />
//             </Provider>
//         </BrowserRouter>
//     )

//     const onlineStatus  = renderHook(useOnlineStatus);
//     console.log('getStatus', onlineStatus.result.current);
//     expect(onlineStatus.result.current).toBe(false);
//     expect(screen.getByTestId('onlineStatus')).toBeInTheDocument();
//     expect('🔴');
// })

it('Should check for dark mode theme', () => {

    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <HeaderComponent />
            </Provider>
        </BrowserRouter>
    )

    const darkMode = screen.getByRole('checkbox');
    expect(darkMode).toBeInTheDocument();
    fireEvent.change(darkMode);
    expect(screen.getByTestId('header')).toHaveStyle('background-color: bg-slate-600, text-color:text-slate-50');
})

it('Should check for light mode theme', () => {

    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <HeaderComponent />
            </Provider>
        </BrowserRouter>
    )

    const lightMode = screen.getByRole('checkbox');
    expect(lightMode).toBeInTheDocument();
    expect(screen.getByTestId('header')).toHaveStyle('background-color: bg-gray-200,  text-color:text-black');
})

it('Should test login and logout button', () => {

    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <HeaderComponent />
            </Provider>
        </BrowserRouter>
    )

    const login = screen.getByRole('button', { name: "Login" });
    expect(login).toBeInTheDocument();
    fireEvent.click(login);
    const logout = screen.getByRole('button', { name: "Logout" });
    expect(logout).toBeInTheDocument();
    fireEvent.click(logout);
    expect(login).toBeInTheDocument();
})

it('Should test if the logged in username reflects in the header', () => {

    render(
        <BrowserRouter>
            {/* <UserContext.Provider value={{loggedInUser: 'Tulika', setUserName}}> */}
                <Provider store={appStore}>
                    <HeaderComponent />
                    <BodyComponent />
                </Provider>
            {/* </UserContext.Provider> */}
        </BrowserRouter>
    )

    const userTextBox = screen.getByTestId('username')
    expect(userTextBox).toBeInTheDocument();
    fireEvent.change(userTextBox, { target: { value: 'Tulika' } })
    const getUser = screen.getByTestId('loggeduser');
    console.log('getUser', getUser);
    // expect(getUser).toBeInTheDocument()
})

it('Should test if the logged in username reflects in the header', () => {

    render(
        <BrowserRouter>
                <Provider store={appStore}>
                    <HeaderComponent />
                    <BodyComponent />
                </Provider>
        </BrowserRouter>
    )

    const userTextBox = screen.getByTestId('username')
    expect(userTextBox).toBeInTheDocument();
    fireEvent.change(userTextBox, { target: { value: 'ssd' } })

})

