import React, { useState } from 'react'

export default function CardExpand({product}) {

    const [image, setImage] = useState();

    
    function handleImageClick(e){
        setImage(e.target.src)
        console.log(product)
    }
    return (
        <div style={{marginTop:"20px"}}>
            <div className="card">
                <div className="row no-gutters">
                    <aside className="col-md-6">
                        <article className="gallery-wrap"> 
                            <div className="img-big-wrap">
                            <a href="#"><img src={image?image:"https://rukminim1.flixcart.com/image/880/1056/khmbafk0-0/t-shirt/w/j/s/xs-t322-blwh-seven-rocks-original-imafxhagtyj2xvpn.jpeg?q=50"}/></a>
                            </div> 
                            <div className="thumbs-wrap" onClick={handleImageClick}>
                                <li  className="item-thumb"> <img src="https://rukminim1.flixcart.com/image/880/1056/khmbafk0-0/t-shirt/w/j/s/xs-t322-blwh-seven-rocks-original-imafxhagtyj2xvpn.jpeg?q=50"/></li>
                                <li  className="item-thumb"> <img src="https://rukminim1.flixcart.com/image/880/1056/khmbafk0-0/t-shirt/o/x/w/xs-t322-blwh-seven-rocks-original-imafxhagbmz4mam5.jpeg?q=50"/></li>
                                <li  className="item-thumb"> <img src="https://rukminim1.flixcart.com/image/880/1056/khmbafk0-0/t-shirt/4/e/v/xs-t322-blwh-seven-rocks-original-imafxhagvpbgmrj2.jpeg?q=50"/></li>
                                <li  className="item-thumb"> <img src="https://rukminim1.flixcart.com/image/880/1056/khmbafk0-0/t-shirt/3/r/r/xs-t322-blwh-seven-rocks-original-imafxhagd9y5hn3q.jpeg?q=50"/></li>
                                <li  className="item-thumb"> <img src="https://rukminim1.flixcart.com/image/880/1056/khmbafk0-0/t-shirt/g/a/7/xs-t322-blwh-seven-rocks-original-imafxhag7ggw5ana.jpeg?q=50"/></li>
                            </div> 
                        </article>
                    </aside>
                    <main className="col-md-6 border-left">                                 
                        <article className="content-body">
                        <h2 className="title">Off-White Odsy-1000 Low-Top Sneakers</h2>

                        <div className="rating-wrap my-3">
                            <ul className="rating-stars">
                                <li style={{width:"80%"}} className="stars-active"> 
                                    <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i> 
                                </li>
                                <li>
                                    <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i> 
                                </li>
                            </ul>
                            <small className="label-rating text-muted">132 reviews</small>
                            <small className="label-rating text-success"> <i className="fa fa-clipboard-check"></i> 154 orders </small>
                        </div>

                        <div className="mb-3"> 
                            <var className="price h4">$815.00</var> 
                            <span className="text-muted">/per kg</span> 
                        </div> 

                        <p>Virgil Abloh’s Off-White is a streetwear-inspired collection that continues to break away from the conventions of mainstream fashion. Made in Italy, these black and brown Odsy-1000 low-top sneakers.</p>

                        <dl className="row">
                        <dt className="col-sm-3">Model#</dt>
                        <dd className="col-sm-9">Odsy-1000</dd>

                        <dt className="col-sm-3">Color</dt>
                        <dd className="col-sm-9">Brown</dd>

                        <dt className="col-sm-3">Delivery</dt>
                        <dd className="col-sm-9">Russia, USA, and Europe </dd>
                        </dl>

                        <hr/>
                            <div className="row">
                                <div className="form-group col-md flex-grow-0">
                                    <label>Quantity</label>
                                    <div className="input-group mb-3 input-spinner">
                                    <div className="input-group-prepend">
                                        <button className="btn btn-light" type="button" id="button-plus"> + </button>
                                    </div>
                                    <input type="text" className="form-control" value="1"/>
                                    <div className="input-group-append">
                                        <button className="btn btn-light" type="button" id="button-minus"> − </button>
                                    </div>
                                    </div>
                                </div> 
                                <div className="form-group col-md">
                                        <label>Select size</label>
                                        <div className="mt-2">
                                            <label className="js-check btn btn-check active">
                                                <input type="radio" name="option_size" value="option1" />
                                                <span>S</span>
                                            </label>
                                            <label className="js-check btn btn-check">
                                                <input type="radio" name="option_size" value="option1"/>
                                                <span>M</span>
                                            </label>
                                            <label className="js-check btn btn-check ">
                                                <input type="radio" name="option_size" value="option1"/>
                                                <span>L</span>
                                            </label>
                                            <label className="js-check btn btn-check ">
                                                <input type="radio" name="option_size" value="option1"/>
                                                <span>XL</span>
                                            </label>
                                            <label className="js-check btn btn-check ">
                                                <input type="radio" name="option_size" value="option1"/>
                                                <span>XXL</span>
                                            </label>

                                        </div>
                                </div> 
                            </div> 
                            <a href="#" className="btn  btn-primary"> Buy now </a>
                            <a href="#" className="btn  btn-outline-primary" style={{marginLeft:"10px"}}> <span className="text">Add to cart</span> <i className="fas fa-shopping-cart"></i>  </a>
                        </article>
                    </main> 
                </div> 
            </div>
        </div>
    )
}
