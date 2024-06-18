import Image from "next/image";
import Link from "next/link";

export default function RuxandraLogo() {
    return (
      <Link href="/">
        <Image
          src="/Logo_maybe.png"
          width={416}
          height={96}
          className="hidden md:block h-24 w-[26rem]"
          alt="desktop version"
        />
        <Image
          src="/Logo horizontal mobile-03.svg"
          width={560}
          height={620}
          className="md:hidden block"
          alt="mobile version"
        />
      </Link>
    );
}
