import { createBrowserRouter } from 'react-router-dom';
import GlobalError from './GlobalError';

export default function Router() {
    return createBrowserRouter([
        {
            path: '/',
            errorElement: <GlobalError />,
            children: [
                {
                    path: '/',
                    element: '',
                },
            ],
        },
    ]);
}
