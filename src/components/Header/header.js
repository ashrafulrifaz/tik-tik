import logo from '@/assests/logo.png'
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
    return (
        <div className='py-4 flex justify-between items-center z-10'>
            <Link href="/">
                <Image src={logo} width={100} alt='logo'/>
            </Link>
            <ul className='flex gap-7'>
                <li>
                    <Link href="/">
                        <span className='font-medium text-lg'>Home</span>
                    </Link>
                </li>
                <li>
                    <Link href="/products">
                        <span className='font-medium text-lg'>Products</span>
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <span className='font-medium text-lg'>Men{"'"}s</span>
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <span className='font-medium text-lg'>Women{"'"}s</span>
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <span className='font-medium text-lg'>Contact Us</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Header;