

"use client"

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, UserRoundPlus } from 'lucide-react';
import Image from 'next/image';
import { ModeToggle } from '../shared/header/ModeToggle';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { RootState } from '@/redux/store';
import assets from '@/assets';
import { useToast } from '../ui/use-toast';
import { logout, useCurrentUser } from '@/redux/features/auth/authSlice';
import { APP_NAME } from '@/lib/constant';
import HeaderLink from './HeaderLink';
import { ToastAction } from '@radix-ui/react-toast';

type MenuItem = {
  label: string;
  path: string;
  show: boolean;
};

export function Dashboard({ children }: { children: React.ReactNode }) {
    const { toast } = useToast();
    const dispatch = useAppDispatch();
    const user = useAppSelector(useCurrentUser);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleLogout = () => {
        dispatch(logout());
        toast({
            variant: "destructive",
            title: "Logged out",
            description: "You have been logged out successfully.",
            action: <ToastAction altText="Undo">Undo</ToastAction>,
        });
    };

    const menuItems: MenuItem[] = [
        { label: "Home", path: "/", show: true },
        { label: "Blogs", path: "/blogs", show: true },
        { label: "Projects", path: "/projects", show: !!user },
        { label: "Add Blog", path: "/add-blog", show: !!user },
        { label: "About Us", path: "/about-us", show: true },
    ];

    return (
        <div className="flex min-h-screen w-full flex-col">
            <header className={`sticky top-0 flex h-16 items-center z-50 transition-shadow duration-300 justify-between gap-4 border-b px-4 md:px-6 ${scrolled ? "shadow-md border-b bg-background/90 backdrop-blur-lg" : "bg-background/70 border-b"}`}>
                <div className="hidden sm:block">
                    <Link href="/" className="flex-start">
                        <Image
                            src={assets.images.logo}
                            width={30}
                            height={30}
                            alt={`${APP_NAME} logo`}
                            className="rounded-lg mr-1"
                        />
                    </Link>
                </div>
                <nav className="hidden md:flex gap-5 text-lg font-medium md:text-sm">
                    {menuItems.filter(item => item.show).map((item, index) => (
                        <HeaderLink key={index} item={item} />
                    ))}
                </nav>
                <div className="flex md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline" size="icon">
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle navigation menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left">
                            <nav className="grid gap-2 text-sm font-medium">
                                {menuItems.filter(item => item.show).map((item, index) => (
                                    <HeaderLink key={index} item={item} />
                                ))}
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
                <div className="flex sm:hidden">
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src={assets.images.logo}
                            width={30}
                            height={30}
                            alt={`${APP_NAME} logo`}
                            className="rounded-lg mr-1"
                        />
                    </Link>
                </div>
                <div className="flex items-center gap-2">
                    <ModeToggle />
                    <div className="flex items-center gap-2">
                        {user ? (
                            <Button onClick={handleLogout} asChild className="cursor-pointer group">
                                <span className="flex items-center gap-2">
                                    Logout
                                </span>
                            </Button>
                        ) : (
                            <Button asChild variant="link" className="group">
                                <Link href="/login" className="flex items-center gap-2">
                                    <UserRoundPlus size={30} className="transition-transform duration-300 ease-in-out transform group-hover:translate-x-1" />
                                </Link>
                            </Button>
                        )}
                    </div>
                </div>
            </header>
            <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
                {children}
            </main>
        </div>
    );
}

