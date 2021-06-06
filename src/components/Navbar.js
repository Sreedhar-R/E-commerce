import React from 'react'

export default function Navbar() {
    return (
        <div >
            <nav className="navbar navbar-main navbar-expand-lg navbar-dark bg-primary">
                <div className="container">
                    <a className="navbar-brand" href="#">Categories</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">Fashion</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Supermarket</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Electronics</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Baby &amp; Kids</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Home &amp; Furniture</a>
                        </li><li className="nav-item">
                        <a className="nav-link" href="#">Sports &amp; Fitness</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Offer zone</a>
                        </li>

                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
