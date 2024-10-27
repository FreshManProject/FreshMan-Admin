
import { HeaderTitle, Nav } from '@/components/common';
export default function HomePage() {

    return (
        <div>
            <Nav />
            <main className="flex flex-col py-6 sm:gap-4 sm:py-4 sm:pl-20 px-5">
                <HeaderTitle title="HOME" />
            </main>
        </div>
    );
}
