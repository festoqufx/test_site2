import React from "react";
import "./portfolio.css";


function Portfolio() {
	return (

<section       className="image_gallery">

	<div class="clearfix"></div>	
		<div className="container_item">
		<input id="item1" type="checkbox"/>
		<label className="item1" for="item1" style={{backgroundImage:'url("./img/portfolio-1.jpg")'}}></label>
		<input id="item2" type="checkbox"/>
		<label className="item2" for="item2" style={{backgroundImage:'url("./img/portfolio-2.jpg")'}}></label>
		<input id="item3" type="checkbox"/>   
		<label className="item3" for="item3" style={{backgroundImage:'url("./img/portfolio-3.jpg")'}}></label>
		<input id="item4" type="checkbox"/>
		<label className="item4" for="item4" style={{backgroundImage:'url("./img/portfolio-4.jpg")'}}></label>
		<input id="item5" type="checkbox"/>
		<label className="item5" for="item5" style={{backgroundImage:'url("./img/portfolio-5.jpg")'}}></label>
		<input id="item6" type="checkbox"/>
		<label className="item6" for="item6" style={{backgroundImage:'url("./img/portfolio-6.jpg")'}}></label>
		<input id="item7" type="checkbox"/>
		<label className="item7" for="item7" style={{backgroundImage:'url("./img/portfolio-7.jpg")'}}></label>
		<input id="item8" type="checkbox"/>
		<label className="item8" for="item8" style={{backgroundImage:'url("./img/portfolio-8.jpg")'}}></label>
		<input id="item9" type="checkbox"/>
		<label className="item9" for="item9" style={{backgroundImage:'url("./img/portfolio-9.jpg")'}}></label>
		</div>
	<div class="clearfix"></div>
</section>	
	)
  }

export default Portfolio;




