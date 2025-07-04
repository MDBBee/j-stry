'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuCheckboxItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MoonIcon, SunIcon, SunMoon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="focus-visible:ring-0 focus-visible:ring-offset-0 cursor-pointer hover:bg-background"
          >
            {theme === 'system' ? (
              <SunMoon />
            ) : theme === 'dark' ? (
              <MoonIcon />
            ) : (
              <SunIcon />
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Appearance</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem
            checked={theme === 'system'}
            onClick={() => setTheme('system')}
          >
            System
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={theme === 'dark'}
            onClick={() => setTheme('dark')}
          >
            Dark
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={theme === 'light'}
            onClick={() => setTheme('light')}
          >
            Light
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
export default ThemeToggle;
