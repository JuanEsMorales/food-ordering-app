import Image from 'next/image'
import { Button } from './Button';
import { ArrowRight } from './icons/ArrowRight';
export function Hero() {
  return (
    <section className="grid py-8 hero">
      <div className=''>
        <h1 className="text-5xl text-pretty font-bold text-raisinBlack">
          Indulge in <br/> every <strong className='text-primary'>bite</strong>, delight in <br/> every <strong className='text-primary'>flavor</strong>.
        </h1>
        <p className="text-gray-700 my-4">
          Pizza: the essential ingredient that completes every day, a simple yet savory delight that brings joy to life.
        </p>
        <div className='flex gap-4 items-center mt-4'>
          <Button>Order now <ArrowRight /></Button>
          <button className='font-semibold flex'>Learn more <ArrowRight /></button>
        </div>
      </div>
      <div className='relative ml-16'>
        <Image src={'https://underpizza-image-storage.s3.us-east-2.amazonaws.com/sides/dEcc48jAvLAM5t2KY/0.webp'} alt={'pizza'} fill priority style={{objectFit: 'contain'}} className="" />
      </div>
    </section>
  );
}