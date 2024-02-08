'use client';
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
} from '@nextui-org/react';
import clsx from 'clsx';
import { Playfair_Display } from 'next/font/google';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
const inter = Playfair_Display({ weight: '400', subsets: ['latin'] });

const menuItems = [
    { label: 'Om oss', route: 'om-oss' },
    { label: 'VIP', route: 'vip' },
    { label: 'Q & A', route: 'sporsmal' },
    { label: 'Ønskeliste', route: 'onskeliste' },
    { label: 'Kjøreplan', route: 'kjoreplan' },
];

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathName = usePathname();

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} isBordered>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                    className="sm:hidden"
                />
                <NavbarBrand className="absolute right-[50%] translate-x-2/4 sm:left-8 sm:right-auto">
                    <Link
                        className={clsx('font-bold text-inherit text-xl', inter.className)}
                        href="/"
                    >
                        S | E
                    </Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4 w-full" justify="center">
                {menuItems.map((menuItem, index) => (
                    <NavbarItem key={`item-${index}`}>
                        <Link
                            color="foreground"
                            href={`/${menuItem.route}`}
                            className={clsx('text-large', {
                                ['underline']: pathName.includes(menuItem.route),
                            })}
                        >
                            {menuItem.label}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>
            <NavbarMenu className="list-none">
                {menuItems.map((menuItem, index) => (
                    <NavbarMenuItem key={`${menuItem}-${index}`}>
                        <Link
                            color={'foreground'}
                            className={clsx('w-full text-2xl', {
                                ['underline']: pathName.includes(menuItem.route),
                            })}
                            href={`/${menuItem.route}`}
                            size="lg"
                        >
                            {menuItem.label}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
};

export default Navigation;
