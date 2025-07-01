'use client';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import links from '@/utils/links';
import { LaptopMinimal } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ImStatsBars2 } from 'react-icons/im';
import { LiaBusinessTimeSolid } from 'react-icons/lia';

function LinksDropdown() {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open</Button>
      </SheetTrigger>
      <SheetContent side="left" className="pl-10 text-lg">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>

        <div className="flex flex-col items-start justify-start mt-20 gap-y-4">
          {links.map((link) => {
            const { href, label, icon } = link;
            return (
              <Button
                asChild
                key={href}
                variant={pathname === href ? 'default' : 'secondary'}
                className="group w-70 h-12 "
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

        {/* <SheetFooter>
          <Button type="submit">Save changes</Button>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter> */}
      </SheetContent>
    </Sheet>
  );
}

export default LinksDropdown;
