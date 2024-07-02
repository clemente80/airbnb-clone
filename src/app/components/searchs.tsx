import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import React from "react"

const dbWheres = [
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

const dbPlaces = [
    {
        namePlace: 'Busca flexível',
        urlPlace: 'https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg?im_w=320'
    },
    {
        namePlace: 'Europa',
        urlPlace: 'https://a0.muscache.com/im/pictures/7b5cf816-6c16-49f8-99e5-cbc4adfd97e2.jpg?im_w=320'
    },
    {
        namePlace: 'Argentina',
        urlPlace: 'https://a0.muscache.com/im/pictures/86307179-60ee-4a7e-a4cb-c32d511bee0b.jpg?im_w=320'
    },
    {
        namePlace: 'Estados Unidos',
        urlPlace: 'https://a0.muscache.com/im/pictures/4e762891-75a3-4fe1-b73a-cd7e673ba915.jpg?im_w=320'
    },
    {
        namePlace: 'Itália',
        urlPlace: 'https://a0.muscache.com/im/pictures/ea5598d7-2b07-4ed7-84da-d1eabd9f2714.jpg?im_w=320'
    },
    {
        namePlace: 'Caribe',
        urlPlace: 'https://a0.muscache.com/im/pictures/c61d10f5-4ab3-4d16-bed7-0449e15c8277.jpg?im_w=320'
    }
]

const Searchs = (() => {
    const [searchFlexible, setSearchFexible] = React.useState<boolean>(false)
    const preUrl = 'bg-[url('
    const proUrl = ')]'

    return (
        <div>
            <div className='flex items-center h-[62px] select-none rounded-full border border-[#dddddd] shadow-md overflow-hidden'>
                {dbWheres.map((dbWhere, index) => (
                    <>
                        <section className="relative text-[12px] rounded-full hover:bg-[#ebebeb] cursor-pointer pl-6 py-4 transition" onClick={()=>{setSearchFexible(!searchFlexible)}}>
                            <div className={`${index<3 && 'absolute content-[""] w-[1px] h-6 bg-[#cfd3d9] top-1/2 -translate-y-1/2 right-0'}`}/>
                            <h4>{dbWhere.destiny}</h4>
                            <input type='text' placeholder={`${dbWhere.placeholder}`} className={`bg-white/0 placeholder-black/50 outline-none box-border ${index>0 && index<3?'w-[110px]':'w-[240px]'}`}></input>
                        </section>
                    </>
                ))
                }
                <section className='bg-[#ff385c] hover:bg-[#db0b64] rounded-full p-3 px-4 mr-2 text-white transition cursor-pointer'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </section>
            </div>
            {searchFlexible &&
                <div className="absolute h-fit w-[428px] top-[115px] border border-[#cfd3d935] rounded-3xl bg-white shadow-xl overflow-hidden p-4">
                    <p className='text-[14px] font-bold'>Busque por região</p>
                    <div className="h-full flex flex-wrap justify-between items-center text-[12px]">
                        {dbPlaces && dbPlaces.map((dbPlace, index) => (
                            <>
                                <div className='rounded-2xl hover:bg-[#ebebeb] transition cursor-pointer p-2'>
                                    <div key={index} className={`${preUrl+dbPlace.urlPlace+proUrl} w-[110px] h-[110px] bg-cover bg-center rounded-xl border border-[#dddddd] mb-2`}>
                                    </div>
                                    <p>{dbPlace.namePlace}</p>
                                </div>
                            </>
                        ))}
                    </div>
                </div>
            }
        </div>
    )
})

export default Searchs