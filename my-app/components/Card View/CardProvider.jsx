import React from 'react'
import CardContent from './CardContent'
import CardButtons from './CardButtons'



const CardProvider = ({ data }) => {
    return (
        <div className='mt-6'>
            {
                data.map(item => (
                    <div key={item.id} className="flex flex-col justify-between items-center h-96 border-b-2 py-2">
                        <CardContent key={item.id} item={item} />
                        <CardButtons key={item.id} id={item.id} isActive={item.active} />
                    </div>
                ))
            }
        </div>
    )




}

export default CardProvider