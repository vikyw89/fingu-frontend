import Link from "next/link";
import Image from "next/image";

type LogoProps = {
    className?: string;
};

const Logo = ({ className }: LogoProps) => (
    <Link className={`block w-[11.875rem] ${className || ""}`} href="/">
        <Image
            src="/images/fingu.webp"
            width={190}
            height={40}
            priority={true}
            alt="Fingu"
        />
    </Link>
);

export default Logo;
