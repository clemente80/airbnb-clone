import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAirbnb } from '@fortawesome/free-brands-svg-icons'
import { Outfit } from 'next/font/google'

const outfit = Outfit({ weight: ["700"], subsets: ['latin'] });

export const Header = (() => {
    return (
        <section className="w-full flex justify-between">
            <div className='flex items-center gap-1 text-[#ff385c] font-black'>
                <FontAwesomeIcon icon={faAirbnb} className='h-[30px]'/>
                <p className={outfit.className}>airbnb</p>
            </div>
            {/* <div className='flex flex-col items-center'>
                <div className='flex items-center justify-center gap-4'>
                    <p>Acomodações</p>
                    <p>Experiências</p>
                    <p>Experiências online</p>
                </div>
                <div>Search</div>
            </div>
            <div>Logo</div> */}
        </section>
    )
})