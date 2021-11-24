import React from 'react'

export default function NewsItem(props) {
    let { title, description, urlToImage, url } = props
    return (
        <div>
            <div className="card" >
                <img src={!urlToImage ? "https://www.reuters.com/resizer/0moKCw0m7Rurdj-Ox5PgAh0A7vw=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/4JUS6AE4RVJFBJQ3OK42VODZRY.jpg" : urlToImage} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={url} target={'_blank'} rel={'noreferrer'} className="btn btn-dark btn-sm">Read more</a>
                </div>
            </div>
        </div >
    )
}
