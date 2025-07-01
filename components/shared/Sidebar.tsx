'use client';

import links from '@/utils/links';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LiaBusinessTimeSolid } from 'react-icons/lia';
import { ImStatsBars2 } from 'react-icons/im';

import { Button } from '../ui/button';
import Logo from '@/assets/logo.png';
import Image from 'next/image';
import { LaptopMinimal } from 'lucide-react';

function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="py-4 px-8 bg-muted h-full border-r-4">
      {/* Logo */}
      <Link href="/">
        <div className="flex-start group">
          <Image
            src={Logo}
            className="h-10 w-10 group-hover:scale-110 group-hover:shadow-2xl duration-200"
            alt="App logo"
          />
          <span className="first-letter:text-3xl first-letter:text-slate-700 text-xl first-letter:font-extrabold tracking-widest py-4 font-bold">
            -stry
          </span>
        </div>
      </Link>
      <div className="flex flex-col mt-20 gap-y-4">
        {links.map((link) => {
          const { href, label, icon } = link;
          return (
            <Button
              asChild
              key={href}
              variant={pathname === href ? 'default' : 'secondary'}
              className="group hover:bg-background hover:text-foreground"
            >
              <Link
                href={link.href}
                className="flex justify-start items-center gap-x-4 "
              >
                {icon === 'Layers' ? (
                  <LaptopMinimal className="group-hover:animate-bounce" />
                ) : icon === 'AppWindow' ? (
                  <LiaBusinessTimeSolid className="group-hover:animate-bounce" />
                ) : icon === 'AreaChart' ? (
                  <ImStatsBars2 className="group-hover:animate-bounce" />
                ) : (
                  ''
                )}{' '}
                <span className="capitalize group-hover:scale-110 duration-200">
                  {label}
                </span>
              </Link>
            </Button>
          );
        })}
      </div>
    </aside>
  );
}
export default Sidebar;
