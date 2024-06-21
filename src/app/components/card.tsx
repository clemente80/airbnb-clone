import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons'
import { Poppins } from 'next/font/google'
import { cardsIcons } from './../db/card-icons.json'

const poppins = Poppins({ weight: ["400"], subsets: ['latin']})

export const Card = (() => {
    return (
        <div className='flex justify-between flex-1 h-full flex-wrap gap-2 w-full px-[66px] py-5 border-t !border-t-[#ebebeb]'>
            { cardsIcons && cardsIcons.map((card, key) => (
                <>
                <div key={key} className='cursor-pointer hover:shadow-2xl transition rounded-xl p-[8px]'>
                    <div className={`${card.urlCard} relative w-[272px] h-[256px] bg-cover bg-center rounded-xl`}>
                        <div className='absolute top-3 right-3 bg-[#cfd3d9] text-[#222222] rounded-full'>
                            <FontAwesomeIcon icon={faArrowUpFromBracket} className='w-[30px] h-[30px] p-2'/>
                        </div>
                    </div>
                    <div className={`${poppins.className} w-[272px] mt-3 text-[14px]`}>
                        <p className='font-black'>{card.titleCard}</p>
                        <p className='text-[12px]'>Hosted by {card.hosted}</p>
                        <p className='font-black text-[12px]'>{card.status}</p>
                    </div>
                </div>
                </>
            ))

            }
        </div>
    )
})