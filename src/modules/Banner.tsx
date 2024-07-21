
import bg from '@/assets/png/banner-bg.png';
import { Form } from '@/components/Form';
import { useEffect, useState } from 'react';


export const Banner = () => {
    const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    // Check initial width
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

    return (
        <section className=' relative   mx-[100px]'>
            <img src={bg} className='absolute -z-[1] pb-16 w-full top-0 left-0' alt="" />
            <h2 className='text-5xl font-mont font-black text-left leading-5 text-[#FF9900]'>1,000,000 USD<br />AIRDROP </h2>
            <p className='text-3xl font-mont font-semibold text-left'>5% of Collection for Early Adopters and Influencers!</p>
            <Form />
            
        </section>
    );
};
