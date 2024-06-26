"use client"

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAirbnb } from '@fortawesome/free-brands-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faBars, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { Outfit, Source_Code_Pro } from 'next/font/google'
import Searchs from './searchs'

const outfit = Outfit({ weight: ["700"], subsets: ['latin'] });
const source = Source_Code_Pro({ weight: ["400"], subsets: ['latin'] });

export const Header: React.FC = (() => {
    const [modalLogin, setModalLogin] = React.useState(false)

    return (
        <section className="relative w-full h-[180px] flex justify-between px-20 py-5">
            <div className='flex h-fit gap-1 text-[#ff385c] font-black'>
                <FontAwesomeIcon icon={faAirbnb} className='h-[35px]'/>
                <p className={`${outfit.className} text-[24px]`}>airbnb</p>
                <p className={`${source.className} text-[18px] translate-y-[1px]`}>clone</p>
            </div>
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center'>
                <div className='flex items-center justify-center gap-4 mb-4'>
                    <p>Acomodações</p>
                    <p>Experiências</p>
                    <p>Experiências online</p>
                </div>
                <Searchs />
            </div>
            <div className='flex items-center h-fit gap-4 text-[14px]'>
                <p className='hover:bg-[#f7f7f7] p-2 px-4 rounded-full transition cursor-pointer'>Anuncie seu espaço no Airbnb</p>
                <div className='relative flex items-center gap-8'>
                    <FontAwesomeIcon icon={faGlobe} className='hover:bg-[#f7f7f7] transition p-2 rounded-full cursor-pointer'/>
                    <div className='flex items-center rounded-full shadow-sm border border-[#dddddd] gap-4 p-2 px-3 hover:shadow-md transition cursor-pointer'>
                        <FontAwesomeIcon icon={faBars} className='h-[15px]'/>
                        <div className='relative bg-[#6a6a6a] w-7 h-7 rounded-full overflow-hidden border-2 border-[#6a6a6a] after:content-[""] after:w-[12px] after:h-[12px] after:bg-white after:rounded-full after:absolute after:left-1/2 after:-translate-x-1/2 after:translate-y-[2px] before:content-[""] before:absolute before:w-[22px] before:h-[22px] before:bg-white before:rounded-full before:-translate-x-1/2 before:left-1/2 before:-bottom-3' onClick={()=>setModalLogin(!modalLogin)}/>
                    </div>
                    {modalLogin && 
                        <div className='absolute flex flex-col w-[240px] top-14 right-0 z-10 bg-white ph-4 rounded-xl shadow-2xl overflow-hidden'>
                            <p className='hover:bg-[#f7f7f7] cursor-pointer p-3'>Sign up</p>
                            <p className='relative hover:bg-[#f7f7f7] cursor-pointer p-3 after:content-[""] after:absolute after:w-full after:h-[1px] after:bg-[#dddddd] after:bottom-0 after:left-0'>Log in</p>
                            <p className='hover:bg-[#f7f7f7] cursor-pointer p-3'>Gift cards</p>
                            <p className='hover:bg-[#f7f7f7] cursor-pointer p-3'>Airbnb your home</p>
                            <p className='hover:bg-[#f7f7f7] cursor-pointer p-3'>Help center</p>
                        </div>
                    }
                </div>
            </div>
        </section>
    )
})