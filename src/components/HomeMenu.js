import Image from 'next/image'
import { MenuItem } from './MenuItem'
import { SectionHeader } from './SectionHeader'
export function HomeMenu() {
  return (
    <section>
      <div className='absolute w-full top-96 left-0 right-0 h-48 -z-10'>
        <div className='absolute right-0 -top-12 h-full'>
          <Image src={'https://raw.githubusercontent.com/dejwid/food-ordering/master/public/sallad2.png'} alt='lettuce 2' width={109} height={189} />
        </div>
        <div className='absolute left-0 h-full'>
          <Image src={'https://raw.githubusercontent.com/dejwid/food-ordering/master/public/sallad1.png'} alt='lettuce 1' width={109} height={189} />
        </div>
      </div>
      <SectionHeader subHeader={'Check out'} mainHeader={'Menu'} />
      <div className="menu gap-4 text-center mt-4">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </section>
  )
}