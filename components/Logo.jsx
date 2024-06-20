import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/logo.png';

const Logo = () => {
  return (
    <Link href="/">
      <Image src={logo} width={160} height={55} alt="company logo" />
    </Link>
  );
};
export default Logo;
