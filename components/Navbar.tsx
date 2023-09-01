"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {};

const Navbar = (props: Props) => {
  const pathname = usePathname();

  return (
    <header className="flex justify-between items-center py-3 border-b-2 fixed top-0 w-full bg-white px-12 z-50">
      <div>
        <Link href="/">
          <Image
            src="https://sian.sa/Uploads/Beneficiary/16866632384.png"
            alt="Logo"
            width={150}
            height={150}
            priority
            className="w-32"
          />
        </Link>
      </div>
      <nav>
        <Link
          href="/create-post"
          className={`font-semibold hover:text-red-500 ${
            pathname === "/create-post" ? "text-red-500" : ""
          }`}
        >
          Create New Post
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
