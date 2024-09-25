import { Nav } from '@/components/common';
import { Outlet } from 'react-router';

export default function RootLayout() {
    return (
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
            <Nav />
            <main className="flex flex-col sm:gap-4 sm:py-4 sm:pl-20 px-5">
                <Outlet />
            </main>
        </div>
    );
}
