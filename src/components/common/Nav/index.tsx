import { Home, Package2 } from 'lucide-react';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import { Link } from 'react-router-dom';

export default function Nav() {
    const menus = [
        {
            id: 1,
            icon: Home,
            label: '홈',
            to: '/',
        },
        {
            id: 2,
            icon: Package2,
            label: '상품',
            to: '/product',
        },
    ];

    return (
        <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
            <nav className="flex flex-col items-center gap-4 px-2 sm:py-4">
                {menus.map((menu) => {
                    const Icon = menu.icon;

                    return (
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Link
                                        to={menu.to}
                                        className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                                    >
                                        <Icon className="h-5 w-5" />
                                        <span className="sr-only">
                                            {menu.label}
                                        </span>
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent side="right">
                                    {menu.label}
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    );
                })}
            </nav>
        </aside>
    );
}
