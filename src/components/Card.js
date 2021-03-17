import React from 'react'
import Proptypes from 'prop-types'
import  './Cards.css'
function Card(props) {
    console.log(props)
    return (
        <div className='card text-center '>
            <div className="card-body ">
                <div className="overflow ">
                <img src={props.imageSource} alt="" className='img-thumbnail img card-img-top'/>
                </div>
                <h4 className='card-title'>{props.title}</h4>
                <p className='card-text text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ad, cumque, mollitia cum ut, suscipit reiciendis itaque blanditiis neque illum inventore! Quas consequatur consequuntur rerum magnam placeat natus eius molestiae?</p>
                <a href="#!" className="btn btn-outline-secondary">
                    Go to this web
                </a>
            </div>
        </div>
    )
}

Card.propTypes= {
    title: Proptypes.string.isRequired,
    url: Proptypes.string,
    imageSource:Proptypes.string
}

export default Card
