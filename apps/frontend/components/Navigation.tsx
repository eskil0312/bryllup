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
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const menuItems = [
    { label: 'Om oss', route: 'om-oss' },
    { label: 'VIP', route: 'vip' },
    { label: 'Q & A', route: 'q-and-a' },
    { label: 'Opphold', route: 'opphold' },
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
                <NavbarBrand className="absolute right-[50%] translate-x-2/4 sm:hidden">
                    <Link className="font-bold text-inherit text-xl" href="/">
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
                            className={clsx({
                                ['underline']: pathName.includes(menuItem.route),
                            })}
                        >
                            {menuItem.label}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((menuItem, index) => (
                    <NavbarMenuItem key={`${menuItem}-${index}`}>
                        <Link
                            color={'foreground'}
                            className={clsx('w-full', {
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
