import React from 'react'
import Card from './Card'
import image1 from '../assets/img1.jpg'
import image2 from '../assets/img2.jpg'
import image3 from '../assets/img3.jpg'

const cards = [
    {
        id:1,
        title:'Noruega',
        image: image2
    },
    {
        id:2,
        title:'Brasil',
        image:image2

    },
    {
        id:3,
        title:'México',
        image:image3

    },
    
]

function Cards() {
    return (
        <div className='container d-flex justify-content-center align-items-center h-100'>
            <div className="row">
            {
                cards.map(card =>(
                    <div className="col-md-4" key={card.id}>
                        <Card title={card.title} imageSource={card.image}/>
                    </div>
                ))
            }
            
        </div>
      
    </div>
    )
}

export default Cards
