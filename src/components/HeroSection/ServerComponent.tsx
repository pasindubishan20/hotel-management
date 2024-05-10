import Image from "next/image";

export const heading1 = (
    <>
    <h1 className='font-heading mb-6'>Welcome to Our Hotel</h1>
        <p className='text-[#4a4a4a] dark:text-[#ffffffea] mb-12 max-w-lg'>
            Experience an Luxery Rooms & Exquisite Hotel Immersed in Rich History.
        </p>
        <button className='btn-primary'>Get Started</button>
        </>
);

export const section2 = (

<div className='md:grid hidden gap-8 grid-cols-1'>
<div className='rounded-2xl overflow-hidden h-48'>
    <Image
      src='/images/main.jpg'
      alt='main'
      width={300}
      height={300}
      className='img scale-animation'
    />
</div>

<div className='grid grid-cols-2 gap-8 h-48'>
    <div className='rounded-2xl overflow-hidden'>
    <Image
      src='/images/main2.png'
      alt='main2'
      width={300}
      height={300}
      className='img scale-animation'
    />
    </div>
    <div className='rounded-2xl overflow-hidden'>
    <Image
      src='/images/main3.png'
      alt='main3'
      width={300}
      height={300}
      className='img scale-animation'
    />
    </div>
</div>
</div>
);