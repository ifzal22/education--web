import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import "./Service.css"

const Service = () => {
    const [services , setServics] = useState([]);

useEffect(() => {
    fetch("./education.json")
.then(res => res.json())
.then(data => setServics(data.slice(0,4)))
},[])

    return (
        <div>
                <h1 className="title">Our Servic'S</h1>
            {
                services.map(service => (
                    
                    <div  key={service._id} className="">
    {/* CART ITEMS                 */}
<div id="container" className="cart">	
	
	<div className="product-details">
		
	<h1>{service.company}</h1>
<br />
    <span className="star"> <Rating readonly
       initialRating={service.rait}
       fullSymbol="fas fa-star fa-2px"
       emptySymbol="far fa-star fa-2px">
           </Rating></span>
	
			<p className="information">{service.about.slice(0,200)} 
         

		</p>
		
<div className="control">
	
	<button className="btn">
	 <span className="price">${service.price}</span>
   <span className="shopping-cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i></span>
   <span className="buy">Get now</span>
 </button>
	
</div>
			
</div>
	
<div className="product-image">
	
	<img src={service.picture} alt=""/>
	

<div className="info">
	<h2> Description</h2>
	<ul>
		<li><strong>Email:   </strong> { service.email}</li>
		<li><strong>Phone : </strong>{ service.phone}</li>
		<li><strong>Location: </strong>{ service.address}</li>
		<li><strong>registered: </strong>{ service.registered}</li>
		
	</ul>
</div>
</div>

</div>

                    </div>
                ))
            }
        </div>
    );
};

export default Service;