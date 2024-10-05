import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import QueryProvider from './provider/queryProvider.tsx';
import { RouterProvider } from 'react-router-dom';
import Router from './Router.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <QueryProvider>
            <RouterProvider router={Router()} />
        </QueryProvider>
    </StrictMode>,
);
