import React, { useEffect, useState } from 'react'


const Navbar = () => {

    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;

            setVisible(prevScrollPos > currentScrollPos);

            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos, visible]);
    
    return (
        <nav className={`bg-[#f1f1f1] w-full  h-24 flex items-center fixed top-[22px]  transition-transform duration-300 ${visible ? '' : '-translate-y-full'}`}>
            <div className='flex justify-between w-full px-20'>
                <span className='text-lg font-semibold'>
                    <h3>BomBino</h3>
                </span>
                <div className='flex gap-12 text-md items-center w-auto text-gray-500 '>
                    {['Home', 'Track Package', 'About us', 'Service', 'Resources'].map((linkText, index) => (
                        <div key={index} className='hover:text-black'>{linkText}</div>
                    ))}
                </div>
                <div className='text-md bg-black text-white px-5 py-2 '>
                    <h3>Contact Us</h3>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
