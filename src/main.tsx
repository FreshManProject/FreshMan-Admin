import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import QueryProvider from './provider/queryProvider.tsx';
import { CookiesProvider } from 'react-cookie';
import { RouterProvider } from 'react-router-dom';
import Router from './Router.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <CookiesProvider>
            <QueryProvider>
                <div
                    className={
                        'm-auto box-border max-w-default items-center justify-center'
                    }
                >
                    <RouterProvider router={Router()} />
                </div>
            </QueryProvider>
        </CookiesProvider>
    </StrictMode>,
);
