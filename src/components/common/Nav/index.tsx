import { Home, Package2, PanelLeft } from 'lucide-react';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import { Link } from 'react-router-dom';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

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
        <>
            <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
                <nav className="flex flex-col items-center gap-4 px-2 sm:py-4">
                    {menus.map((menu) => {
                        const Icon = menu.icon;

                        return (
                            <TooltipProvider key={menu.id}>
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

            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14 sm:hidden">
                <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                size="icon"
                                variant="outline"
                                className="sm:hidden"
                            >
                                <PanelLeft className="h-5 w-5" />
                                <span className="sr-only">Toggle Menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="sm:max-w-xs">
                            <nav className="grid gap-6 text-lg font-medium">
                                {menus.map((menu) => {
                                    const Icon = menu.icon;
                                    return (
                                        <Link
                                            key={menu.id}
                                            to={menu.to}
                                            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                        >
                                            <Icon className="h-5 w-5" />
                                            {menu.label}
                                        </Link>
                                    );
                                })}
                            </nav>
                        </SheetContent>
                    </Sheet>
                </header>
            </div>
        </>
    );
}
