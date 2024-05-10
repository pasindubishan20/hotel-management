import Image from "next/image"

const Gallery = () => {
    return (
        <div className='mx-auto container py-14 h-full'>
            <div className='flex flex-wrap md:-m-2'>
                <div className='flex w-full flex-wrap'>
                    <div className='w-1/2 p-1 md:p-2 h-48'>
                        <Image
                          alt='gallery'
                          className='img'
                          src='/images/hero-1.jpeg'
                          width={5472}
                          height={3648}
                          />
                    </div>
                    <div className='w-1/2 p-1 md:p-2 h-48'>
                        <Image
                          alt='gallery'
                          className='img'
                          src='/images/hero-2.jpeg'
                          width={5843}
                          height={3895}
                          />
                    </div>
                    <div className='w-full p-1 md:p-2 h-72'>
                        <Image
                          alt='gallery'
                          className='img'
                          src='/images/hero-3.jpeg'
                          width={4000}
                          height={6000}
                          />
                    </div>

                    <div className='w-full p-1 md:p-2 h-72'>
                        <Image
                          alt='gallery'
                          className='img'
                          src='/images/hero-1.jpeg'
                          width={5472}
                          height={3648}
                          />
                    </div>
                    <div className='w-1/2 p-1 md:p-2 h-48'>
                        <Image
                          alt='gallery'
                          className='img'
                          src='/images/hero-2.jpeg'
                          width={5843}
                          height={3895}
                          />
                    </div>
                    <div className='w-1/2 p-1 md:p-2 h-48'>
                        <Image
                          alt='gallery'
                          className='img'
                          src='/images/hero-3.jpeg'
                          width={4000}
                          height={6000}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;