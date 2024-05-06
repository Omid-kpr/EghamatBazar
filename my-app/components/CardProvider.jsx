import React from 'react'



const CardProvider = ({ isActive, data }) => {
    return (
        <div className='mt-6'>
            {
                data.map(item => (

                    <div key={item.id} className="flex flex-col justify-between items-center h-96 border-b-2 py-2">
                        <div className="relative flex flex-col items-center justify-between w-full h-full">
                            <img src={item.imageUrl} alt='location image' className="absolute -z-10 max-w-96 w-full h-full rounded-lg" />
                            <div className={isActive ? "relative left-40 top-3 rounded-full bg-green-400 w-8 h-4" : "bg-red-500"}>{isActive}</div>
                            <div className="absolute max-w-96 w-full h-1/5 right-10 bottom-0 flex flex-col justify-between items-end">
                                <h2 className='text-white pr-2'>{item.name}</h2>
                                <h2 className='text-white text-end pr-2 pt-2 rounded-b-lg bg-gradient-to-t from-black w-full h-full'>{`id:${item.id}`}</h2>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <button className="text-xs text-blue-600">ویرایش</button>
                            <button className="text-xs text-red-600">{isActive ? "deactive" : "active"}</button>
                        </div>
                    </div>)
                )
            }
        </div>
    )




}

export default CardProvider