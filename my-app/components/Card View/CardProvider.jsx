import React from 'react'
import CardContent from './CardContent'
import CardButtons from './CardButtons'



const CardProvider = ({ data }) => {
    return (
        <div className='mt-6 flex flex-col justify-between items-center sm:flex-row sm:flex-wrap'>
            {
                data.map(item => (
                    <div key={item.id} className="flex flex-col justify-between items-center w-80 h-80 border-b-2 m-2">
                        <CardContent key={item.id} item={item} />
                        <CardButtons key={item.id} id={item.id} isActive={item.active} />
                    </div>
                ))
            }
        </div>
    )




}

export default CardProvider