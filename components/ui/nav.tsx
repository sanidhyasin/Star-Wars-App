import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "@/components/ui/toggle-mode";
import StarWarsWhite from "../../public/assets/StarWarsWhite.png";
import StarWarsBlack from "../../public/assets/StarWarsBlack.png";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LuUser2, LuMenu } from "react-icons/lu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  return (
    <div className="flex flex-row justify-between items-center w-full py-6 border-b-2 px-4 md:px-24">
      {/* Mobile View */}
      <div className="flex justify-between items-center w-full md:hidden">
        <Image
          alt="star-wars"
          className="cursor-pointer dark:hidden h-12 w-auto"
          src={StarWarsBlack}
        />
        <Image
          alt="star-wars"
          className="cursor-pointer hidden dark:flex h-12 w-auto"
          src={StarWarsWhite}
        />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none focus:ring"
              aria-label="Open menu"
            >
              <LuMenu size={24} />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className=" w-36">
            <DropdownMenuItem asChild>
              <Link href="/" className="flex items-center">
                <FaInstagram className="mr-2" /> Instagram
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/" className="flex items-center">
                <FaXTwitter className="mr-2" /> Twitter
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/" className="flex items-center">
                <FaFacebook className="mr-2" /> Facebook
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/" className="flex items-center">
                <FaYoutube className="mr-2" /> YouTube
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/" className="flex items-center">
                <LuUser2 className="mr-2" /> Profile
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <ModeToggle />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex flex-row justify-between items-center w-full">
        <span className="flex flex-row gap-3">
          <Link
            href="https://www.instagram.com/starwars/?hl=en"
            className="hover:opacity-80"
          >
            <FaInstagram size={25} />
          </Link>
          <Link href="https://x.com/starwars" className="hover:opacity-80">
            <FaXTwitter size={25} />
          </Link>
          <Link
            href="https://www.facebook.com/StarWars/"
            className="hover:opacity-80"
          >
            <FaFacebook size={25} />
          </Link>
          <Link
            href="https://www.youtube.com/@StarWars"
            className="hover:opacity-80"
          >
            <FaYoutube size={25} />
          </Link>
        </span>

        <Image
          alt="star-wars"
          className="cursor-pointer dark:hidden h-20 w-auto"
          src={StarWarsBlack}
        />
        <Image
          alt="star-wars"
          className="cursor-pointer hidden dark:flex h-20 w-auto"
          src={StarWarsWhite}
        />

        <span className="flex flex-row items-center justify-center gap-5">
          <Link
            href="/"
            className="hover:underline flex flex-row items-center justify-center gap-1 font-semibold"
          >
            <LuUser2 size={17} />
            <span className="">Log In</span>
          </Link>
          <ModeToggle />
        </span>
      </div>
    </div>
  );
}
