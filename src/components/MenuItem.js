import { Button } from './Button'
import Image from 'next/image'
export function MenuItem({ title='Pepperoni Pizza', description='Lorem ipsum dolor sit amet, consectetur adipisicing elit.' }) {
  return (
    <div className='bg-black/10 px-12 py-4 rounded-md flex flex-col justify-center gap-2 hover:bg-black/15 hover:shadow-md hover:shadow-black/50 transition-all border'>
      <Image src="https://underpizza-image-storage.s3.us-east-2.amazonaws.com/sides/dEcc48jAvLAM5t2KY/0.webp" alt="pizza" width={100} height={180} className='block mx-auto' />
      <h4 className='text-xl font-semibold'>{title}</h4>
      <p className='text-sm text-gray-500 text-pretty'>
        {description}
      </p>
      <Button>
        Add to cart $12
      </Button>
    </div>
  )
}