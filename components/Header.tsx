import Image from "next/image";
import Link from "next/link";

import { NavLinks } from "@/constant";
import AuthProviders from "./AuthProviders";
import Button from "./Button";

const Navbar = async () => {
  const session = {
    user: true,
  };

  return (
    <header className="flexBetween navbar">
      <div className="flex-1 flexStart gap-10">
        <Link href="/">
          <Image src="/logo.svg" width={116} height={43} alt="logo" />
        </Link>
        <ul className="xl:flex hidden text-small gap-7">
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.text}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>

      <div className="flexCenter gap-4">
        {session?.user ? (
          <>
            UserPhoto
            <Link href="/create-project">
              <Button title="Share work" />
            </Link>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </header>
  );
};

export default Navbar;
