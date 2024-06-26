import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

const Searchs = (() => {

    const dbSearchs = [
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
            destiny: 'Check-in',
            placeholder: "Insira as datas",
            url: ''
        },
        {
            destiny: 'Quem',
            placeholder: "Hóspedes?",
            url: ''
        }
    ]

    return (
        <div className='flex items-center h-[62px] select-none rounded-full pl-6 border border-[#dddddd] shadow-sm py-4 pr-2'>
            {dbSearchs.map((dbSearch: any) => (
                <>
                    <section className="hover:bg-[#ebebeb] cursor-pointer">
                        <h4 className='text-[12px]'>{dbSearch.destiny}</h4>
                        <input placeholder={`${dbSearch.placeholder}`} className="outline-none"></input>
                    </section>
                </>
            ))
            }
            <section className='bg-[#ff385c] rounded-full p-3 px-4 text-white'>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </section>
        </div>
    )
})

export default Searchs