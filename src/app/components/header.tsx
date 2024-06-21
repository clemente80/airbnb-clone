import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAirbnb } from '@fortawesome/free-brands-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faBars, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { Outfit, Source_Code_Pro } from 'next/font/google'

const outfit = Outfit({ weight: ["700"], subsets: ['latin'] });
const source = Source_Code_Pro({ weight: ["400"], subsets: ['latin'] });

export const Header = (() => {
    return (
        <section className="relative w-full flex justify-between px-20 py-5">
            <div className='flex items-center gap-1 text-[#ff385c] font-black'>
                <FontAwesomeIcon icon={faAirbnb} className='h-[35px]'/>
                <p className={`${outfit.className} text-[24px]`}>airbnb</p>
                <p className={`${source.className} text-[18px] translate-y-[1px]`}>clone</p>
            </div>
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center'>
                <div className='flex items-center justify-center gap-4'>
                    <p>Acomodações</p>
                    <p>Experiências</p>
                    <p>Experiências online</p>
                </div>
                <div>Search</div>
            </div>
            <div className='flex items-center h-fit gap-4 text-[14px]'>
                <p className='hover:bg-[#f7f7f7] p-2 px-4 rounded-full transition cursor-pointer'>Anuncie seu espaço no Airbnb</p>
                <div className='flex items-center gap-8'>
                    <FontAwesomeIcon icon={faGlobe} className='h-[30px] hover:bg-[#f7f7f7] transition p-[6px] rounded-full cursor-pointer'/>
                    <div className='flex items-center rounded-full shadow-sm border border-[#dddddd] gap-4 p-2 px-3 hover:shadow-md transition cursor-pointer'>
                        <FontAwesomeIcon icon={faBars} className='h-[15px]'/>
                        <div className='relative bg-[#6a6a6a] w-7 h-7 rounded-full overflow-hidden border-2 border-[#6a6a6a] after:content-[""] after:w-[12px] after:h-[12px] after:bg-white after:rounded-full after:absolute after:left-1/2 after:-translate-x-1/2 after:translate-y-[2px] before:content-[""] before:absolute before:w-[22px] before:h-[22px] before:bg-white before:rounded-full before:-translate-x-1/2 before:left-1/2 before:-bottom-3'/>
                    </div>
                </div>
            </div>
        </section>
    )
})