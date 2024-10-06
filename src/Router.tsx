import { createBrowserRouter } from 'react-router-dom';
import GlobalError from './GlobalError';
import HomePage from './pages/Home/HomePage';
import RootLayout from './pages/RootLayout';
import { ProductPage, ProductRegistrationPage } from './pages/Product';
import { RegisterPage, RegisterSuccessPage } from './pages/Member';

export default function Router() {
    return createBrowserRouter([
        {
            path: '',
            element: <RootLayout />,
            errorElement: <GlobalError />,
            children: [
                {
                    index: true,
                    element: <HomePage />,
                },
                {
                    path: 'product',
                    children: [
                        {
                            index: true,
                            element: <ProductPage />,
                        },
                        {
                            path: 'registration',
                            element: <ProductRegistrationPage />,
                        },
                    ],
                },
                {
                    path: '/auth',
                    children: [
                        {
                            path: 'register',
                            element: <RegisterPage />,
                        },
                        {
                            path: 'success',
                            element: <RegisterSuccessPage />,
                        },
                    ],
                },
            ],
        },
    ]);
}
