import React,{useState} from 'react';
import Card from './Card';
import Banner from './Banner';

export default function Cardlist({products,goToCardExpand}) {

    return(
        <div>
            <Banner/>
            <section className="section-name  padding-y-sm">
                <div className="container">
                <header className="section-heading">
                    <a href="#" className="btn btn-outline-primary float-right">See all</a>
                    <h3 className="section-title">Popular products</h3>
                </header>
                    <div className="row" onClick={()=>{goToCardExpand("cardExapand")}}>
                    {
                        products.map((product) => {
                            const percentage = (product.rating*100)/5 + '%';
                            return <Card key={product.id} 
                                        product={product}
                                        ratingPercentage={percentage}
                                    />
                        })
                    }
                    </div>
                </div>
            </section>
        </div>
    )
    

}
