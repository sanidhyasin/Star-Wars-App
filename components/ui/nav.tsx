import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "@/components/ui/toggle-mode";
import StarWarsWhite from "../../public/assets/StarWarsWhite.png";
import StarWarsBlack from "../../public/assets/StarWarsBlack.png";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LuUser2 } from "react-icons/lu";

export default function Navbar() {
  return (
    <div className="flex flex-row justify-between items-center w-full py-6 border-b-2 px-24">
      <span className=" flex flex-row gap-3">
        <Link href="/" className="">
          <FaInstagram size={25} />
        </Link>
        <Link href="/" className="">
          <FaXTwitter size={25} />
        </Link>
        <Link href="/" className="">
          <FaFacebook size={25} />
        </Link>
        <Link href="/" className="">
          <FaYoutube size={25} />
        </Link>
      </span>
      <Image
        alt="star-wars"
        className="dark:hidden"
        src={StarWarsBlack}
        height={80}
      />
      <Image
        alt="star-wars"
        className="hidden dark:flex"
        src={StarWarsWhite}
        height={83}
      />
      <span className=" flex flex-row items-center justify-center gap-5">
        <Link
          href={"/"}
          className=" hover:underline flex flex-row items-center justify-center gap-1 font-semibold"
        >
          <LuUser2 size={20} />
          LOG IN
        </Link>
        <ModeToggle />
      </span>
    </div>
  );
}
