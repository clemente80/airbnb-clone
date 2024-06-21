import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons'

export const Card = (() => {
    return (
        <div className='flex flex-wrap w-full min-h-screen px-20 py-5 border border-[#ebebeb]'>
            <div className='relative w-[272px] h-[256px] bg-[url(https://media.newyorker.com/photos/5cb7a0e992dcf02ddc8613c2/master/pass/DSF-KevinHartSpecial.jpg)] bg-cover rounded-xl'>
                <div className='absolute top-3 right-3 bg-[#cfd3d9] text-[#222222] rounded-full'>
                    <FontAwesomeIcon icon={faArrowUpFromBracket} className='w-[30px] h-[30px] p-2'/>
                </div>
            </div>
        </div>
    )
})