import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Navbar from './Navbar';
import Logo from './Logo';
import { AlignJustify } from 'lucide-react';

const MobileNavbar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>

      <SheetContent className="xl:hidden">
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col items-center gap-y-32">
            <Logo />
            <Navbar
              containerStyles="flex flex-col items-center gap-y-6"
              linkStyles="text-1xl font-semibold"
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
export default MobileNavbar;
