import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import React from "react"
import { ModalButtonsMap } from "./modal-buttons-map"

const dbDestinies = [
    {
        destiny: 'Onde',
        placeholder: "Buscar destinos",
        url: ''
    },
    {
        destiny: 'Check-in',
        placeholder: "Insira as datas",
        url: ''
    },
    {
        destiny: 'Check-out',
        placeholder: "Insira as datas",
        url: ''
    },
    {
        destiny: 'Quem',
        placeholder: "Hóspedes?",
        url: ''
    }
]

const Searchs = (() => {
    const [searchDestiny, setSearchDestiny] = React.useState<boolean>(false)
    const [searchCheckIn, setSearchCheckIn] = React.useState<boolean>(false)
    const [searchCheckOut, setSearchCheckOut] = React.useState<boolean>(false)
    const [searchWho, setSearchWho] = React.useState<boolean>(false)

    const clickSearch = ((index: any) => {
        switch (index) {
            case 'Onde':
                setSearchDestiny(true)
                setSearchCheckIn(false)
                setSearchCheckOut(false)
                setSearchWho(false)
                break;
            case 'Check-in':
                setSearchDestiny(false)
                setSearchCheckIn(true)
                setSearchCheckOut(false)
                setSearchWho(false)
                break;
            case 'Check-out':
                setSearchDestiny(false)
                setSearchCheckIn(false)
                setSearchCheckOut(true)
                setSearchWho(false)
                break;
            case 'Quem':
                setSearchDestiny(false)
                setSearchCheckIn(false)
                setSearchCheckOut(false)
                setSearchWho(true)
                break;
            default:
                break;
        }
        return
    })

    return (
        <div>
            <div className='flex items-center h-[62px] select-none rounded-full border border-[#dddddd] shadow-md overflow-hidden'>
                {dbDestinies.map((dbDestiny, index) => (
                    <>
                        <section className="relative text-[12px] rounded-full hover:bg-[#ebebeb] cursor-pointer pl-6 py-4 transition" onClick={()=>{clickSearch(dbDestiny.destiny)}}>
                            <div className={`${index<3 && 'absolute content-[""] w-[1px] h-6 bg-[#cfd3d9] top-1/2 -translate-y-1/2 right-0'}`}/>
                            <h4>{dbDestiny.destiny}</h4>
                            <input type='text' placeholder={`${dbDestiny.placeholder}`} className={`bg-white/0 placeholder-black/50 outline-none box-border ${index>0 && index<3?'w-[110px]':'w-[240px]'}`}></input>
                        </section>
                    </>
                ))
                }
                <section className='bg-[#ff385c] hover:bg-[#db0b64] rounded-full p-3 px-4 mr-2 text-white transition cursor-pointer'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </section>
            </div>
            <ModalButtonsMap
                destiny={searchDestiny}
                checkIn={searchCheckIn}
                checkOut={searchCheckOut}
                who={searchWho}
            />
        </div>
    )
})

export default Searchs