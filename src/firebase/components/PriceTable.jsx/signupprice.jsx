import React from 'react';
import Price from './price';
import { UseAuth } from '../../../context/context';

const Signupprice = () => {
    const {firstName} = UseAuth()
    return (
        <div className='signupprice__section'>
           <div className='price'>
        <h1 className='plan'>Please choose your plan</h1>
           </div>
           <div id="generic_price_table" className='choose__price'>
		<section>
			<div class="container_price ">
				<div class="row">
					<div class="col-md-12">
						{/* <!--PRICE HEADING START--> */}
						<div class="price-heading clearfix">
							
						</div>
						{/* <!--//PRICE HEADING END--> */}
					</div>
				</div>
			</div>
			<div class="container_price ">

				{/* <!--BLOCK ROW START--> */}
				<div class="row">
					<div class="col-md-4">

						{/* <!--PRICE CONTENT START--> */}
						<div class="generic_content clearfix">

							{/* <!--HEAD PRICE DETAIL START--> */}
							<div class="generic_head_price clearfix">

								{/* <!--HEAD CONTENT START--> */}
								<div class="generic_head_content clearfix ">

									{/* <!--HEAD START--> */}
									<div class="head_bg "></div>
									<div class="head">
									<span>Standard</span>
									</div>
									{/* <!--//HEAD END--> */}

								</div>
								{/* <!--//HEAD CONTENT END--> */}

								{/* <!--PRICE START--> */}
								

                                    <div class="generic_price_tag clearfix">
									<span class="price">
										<span class="sign">Birr</span>
										<span class="currency">99</span>
										<span class="cent">.99</span>
										{/* <span class="month">/MON</span> */}
									</span>
								
								</div>
								{/* <!--//PRICE END--> */}

							</div>
							{/* <!--//HEAD PRICE DETAIL END--> */}

							{/* <!--FEATURE LIST START--> */}
							<div class="generic_feature_list">
								<ul>
									<li><span>2GB</span> Bandwidth</li>
									<li><span>150GB</span> Storage</li>
									<li><span>12</span> Accounts</li>
									<li><span>7</span> Host Domain</li>
									<li><span>24/7</span> Support</li>
								</ul>
							</div>
							{/* <!--//FEATURE LIST END--> */}

							{/* <!--BUTTON START--> */}
							<div class="generic_price_btn clearfix">
								<a class="" href="">Choose</a>
							</div>
							{/* <!--//BUTTON END--> */}

						</div>
						{/* <!--//PRICE CONTENT END--> */}

					</div>

					<div class="col-md-4">

						{/* <!--PRICE CONTENT START--> */}
						<div class="generic_content active clearfix">

							{/* <!--HEAD PRICE DETAIL START--> */}
							<div class="generic_head_price clearfix">

								{/* <!--HEAD CONTENT START--> */}
								<div class="generic_head_content clearfix">

									{/* <!--HEAD START--> */}
									<div class="head_bg"></div>
									<div class="head">
										<span>Free</span>
									</div>
									{/* <!--//HEAD END--> */}

								</div>
								{/* <!--//HEAD CONTENT END--> */}

								{/* <!--PRICE START--> */}
								<div class="generic_price_tag clearfix">
									<span class="price">
										<span class="sign">Birr</span>
										<span class="currency">0</span>
								
									</span>
								</div>
								{/* <!--//PRICE END--> */}

							</div>
							{/* <!--//HEAD PRICE DETAIL END--> */}

							{/* <!--FEATURE LIST START--> */}
							<div class="generic_feature_list">
								<ul>
									<li><span>2GB</span> Bandwidth</li>
									<li><span>150GB</span> Storage</li>
									<li><span>12</span> Accounts</li>
									<li><span>7</span> Host Domain</li>
									<li><span>24/7</span> Support</li>
								</ul>
							</div>
							{/* <!--//FEATURE LIST END--> */}

							{/* <!--BUTTON START--> */}
							<div class="generic_price_btn clearfix">
								<a class="" href="">Choose</a>
							</div>
							{/* <!--//BUTTON END--> */}

						</div>
						{/* <!--//PRICE CONTENT END--> */}

					</div>
					<div class="col-md-4">

						{/* <!--PRICE CONTENT START--> */}
						<div class="generic_content clearfix">

							{/* <!--HEAD PRICE DETAIL START--> */}
							<div class="generic_head_price clearfix">

								{/* <!--HEAD CONTENT START--> */}
								<div class="generic_head_content clearfix">

									{/* <!--HEAD START--> */}
									<div class="head_bg"></div>
									<div class="head">
										
                                        <span>Unlimited</span>
									</div>
									{/* <!--//HEAD END--> */}

								</div>
								{/* <!--//HEAD CONTENT END--> */}

								{/* <!--PRICE START--> */}
                                <div class="generic_price_tag clearfix">
									<span class="price">
										<span class="sign">Birr</span>
										<span class="currency">199</span>
										<span class="cent">.99</span>
										
									</span>
                                    </div>
								{/* <!--//PRICE END--> */}

							</div>
							{/* <!--//HEAD PRICE DETAIL END--> */}

							{/* <!--FEATURE LIST START--> */}
							<div class="generic_feature_list">
								<ul>
									<li> Direct chat with the employer</li>
									<li> Storage</li>
									<li> Accounts</li>
									<li>Host Domain</li>
									<li> Support</li>
								</ul>
							</div>
							{/* <!--//FEATURE LIST END--> */}

							{/* <!--BUTTON START--> */}
							<div class="generic_price_btn clearfix">
								<a class="" href="">Choose</a>
							</div>
							{/* <!--//BUTTON END--> */}

						</div>
						{/* <!--//PRICE CONTENT END--> */}

					</div>
				</div>
				{/* <!--//BLOCK ROW END--> */}

			</div>
		</section>
		
	</div>
        </div>
    );
}

export default Signupprice;
