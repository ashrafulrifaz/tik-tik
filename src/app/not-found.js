import errorImage from '@/assests/404.png'
import Image from 'next/image';
import Link from 'next/link';

const notFound = () => {
    return (
        <div className='text-center'>
            <Image src={errorImage} alt='404' className='error-image'></Image>
            <Link href="/">
                <button className='prim-btn'>Back to Home</button>
            </Link>
        </div>
    );
};

export default notFound;