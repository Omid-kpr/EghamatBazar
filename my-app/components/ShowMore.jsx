import { FaPlus } from "react-icons/fa6";
import ClientNavigationButton from "@/utils/ClientNavigationButton";





const ShowMore = ({ categoryCount, endCount }) => {
    const bigger = categoryCount < endCount
    const Query = {
        name: "endCount",
        value: `${endCount + 6}`
    }

    return (
        <div className='flex justify-center items-center h-16 mb-20'>
            <div className={bigger ? "hidden" : "flex justify-center border-2 rounded-sm w-80"}>
                <ClientNavigationButton classname="flex text-sm items-center text-black py-1" query={Query}>
                    مشاهده بیشتر
                    <FaPlus size="0.9em" className='ml-2' />
                </ClientNavigationButton>
            </div>
        </div>
    )
}

export default ShowMore