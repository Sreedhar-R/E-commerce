import React from 'react';
import companyLogo from './images/logo.png'

export default function Header(props) {
    return (
        
	        <div className="container">
                <div className="row align-items-center">
                <div className="col-lg-2 col-4">
                    <a href="http://bootstrap-ecommerce.com" className="brand-wrap">
                        <img className="logo" src={companyLogo} alt="company-logo"/>
                    </a> 
                </div>
                <div className="col-lg-6 col-sm-12">
                    <form action="#" className="search">
                        <div className="input-group w-100">
                            <input type="text" className="form-control" placeholder="Search"/>
                            <div className="input-group-append">
                            <button className="btn btn-primary" type="submit">
                                <i className="fa fa-search"></i>
                            </button>
                            </div>
                        </div>
                    </form> 
                </div> 
                <div className="col-lg-4 col-sm-6 col-12">
                    <div className="widgets-wrap float-md-right">
                        <div className="widget-header  mr-3" onClick={()=>{props.goToCart("productCart")}}>
                            <a href="#" className="icon icon-sm rounded-circle border"><i className="fa fa-shopping-cart"></i></a>
                            <span className="badge badge-pill badge-danger notify">0</span>
                        </div>
                        <div className="widget-header icontext">
                            <a href="#" className="icon icon-sm rounded-circle border"><i className="fa fa-user"></i></a>
                            <div className="text">
                                <span className="text-muted">Welcome!</span>
                                <div> 
                                    <a href="#" onClick={()=>{props.goToCart("pageSignIn")}}>Sign in</a> |  
                                    <a href="#" onClick={()=>{props.goToCart("pageSignUp")}}> Register</a>
                                </div>
                            </div>
                        </div>
                        </div> 
                    </div> 
                </div> 
            </div>
    )
}
