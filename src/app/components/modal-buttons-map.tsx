interface Props {
    destiny: boolean
    checkIn: boolean
    checkOut: boolean
    who: boolean
}

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

export const ModalButtonsMap = ((props: Props) => {
    const preUrl = 'bg-[url('
    const proUrl = ')]'
    const typeCalend = ['Datas', 'Meses', 'Flexível']    

    return (
        <>
        {props.destiny &&
                <div className="absolute h-fit w-[428px] top-[115px] border border-[#cfd3d935] rounded-3xl bg-white shadow-xl overflow-hidden p-5">
                    <p className='text-[14px] font-bold pl-2 pb-4'>Busque por região</p>
                    <div className="h-full flex flex-wrap justify-between gap-1 items-center text-[12px]">
                        {dbPlaces && dbPlaces.map((dbPlace, index) => (
                            <>
                                <div className='rounded-2xl hover:bg-[#ebebeb] transition cursor-pointer p-2 flex flex-col gap-2'>
                                    <div key={index} className={`${preUrl+dbPlace.urlPlace+proUrl} w-[110px] h-[110px] bg-cover bg-center rounded-xl border border-[#dddddd]`}>
                                    </div>
                                    <p>{dbPlace.namePlace}</p>
                                </div>
                            </>
                        ))}
                    </div>
                </div>
            }
            {props.checkIn &&
                <div className="flex justify-center gap-4 absolute h-fit w-full top-[115px] border border-[#cfd3d935] rounded-3xl bg-white shadow-xl overflow-hidden p-4">
                    {typeCalend.map((type, key) => (
                        <>
                            <p key={key} className='text-[14px] font-bold'>{type}</p>
                        </>
                    ))

                    }
                    <div className="h-full flex flex-wrap justify-between items-center text-[12px]">
                    </div>
                </div>
            }
            {props.checkOut &&
                <div>Check-out</div>
            }
            {props.who &&
                <div>Quem hóspedes?</div>
            }
        </>
    )
})