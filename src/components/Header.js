import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <header>
      {/* top header */}
      <div className="flex items-center p-1 flex-grow py-2 bg-amazon_blue">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="https://bit.ly/3rV7nLL"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        {/* search */}
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
          <input
            type="text"
            className="p-2 h-full w-6 flex-grow flex-shrink focus:outline-none px-4 rounded-l-md"
          />
          <SearchIcon className="h-12 p-4" />
        </div>
        {/* right */}
        <div className="text-white flex items-centertext-xs space-x-6 mx-6 whitespace-nowrap">
          <div className="link">
            <p>first</p>
            <p className="font-extrabold md:text-sm">acount & list</p>
          </div>
          <div className="link">
            <p>returns</p>
            <p className="font-extrabold md:text-sm">&orders</p>
          </div>
          <div className="relative flex items-center link">
            <span className="absolute top-0 right-0 md:right-10 h-6 w-6 bg-yellow-400 text-center rounded-full text-black font-bold">
              0
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline mt-2 font-extrabold md:text-sm">
              basket
            </p>
          </div>
        </div>
      </div>
      {/* bottom header */}
      <div className='flex space-x-3 p-2 pl-6 items-center bg-amazon_blue-light text-white text-sm'>
        <p className='link flex items-center'>
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
        <p className='link'>Prime Video</p>
        <p className='link'>Amazon Business</p>
        <p className='link'>Today's Deals</p>
        <p className='link hidden lg:inline-flex'>Electronics</p>
        <p className='link hidden lg:inline-flex'>Food & Grocery</p>
        <p className='link hidden lg:inline-flex'>Prime</p>
        <p className='link hidden lg:inline-flex'>Buy Again</p>
        <p className='link hidden lg:inline-flex'>Shopper Toolkit</p>
        <p className='link hidden lg:inline-flex'>Health & Personal Care</p>





      </div>
    </header>
  );
}

export default Header;
