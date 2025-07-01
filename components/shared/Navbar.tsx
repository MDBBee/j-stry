import LinksDropdown from './LinksDropdown';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import ThemeToggle from './ThemeToggle';
import { Button } from '../ui/button';
import { UserLock } from 'lucide-react';

function Navbar() {
  return (
    <nav className="bg-muted py-4 sm:px-16 lg:px-24 px-4 flex items-center justify-between border-b-4">
      {/* Mobile drawer */}
      <div className="lg:hidden">
        <LinksDropdown />
      </div>
      {/* Agent */}
      <div>
        <h2>Agent-Mode</h2>
      </div>
      {/* Left bar */}
      <div className="flex items-center gap-x-4 h-8">
        <div className="hover:cursor-pointer hover:bg-background rounded-2xl">
          <ThemeToggle />
        </div>
        <SignedOut>
          <SignInButton>
            <Button className="cursor-pointer">
              <UserLock />
              Sign In
            </Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
export default Navbar;
