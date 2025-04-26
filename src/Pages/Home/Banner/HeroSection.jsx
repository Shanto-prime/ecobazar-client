import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'; 
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

export default function HeroSection() {
    const [banners, setBanners] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5050/api/banners')
            .then((res) => res.json())
            .then((data) => setBanners(data));
    }, []);
    return (
        <>
            <div className="">
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {banners.map((item, id) => (
                        <SwiperSlide key={id}>
                            <section className="shopery_container">
                                <div className=" banner_main bg-[#EDF2EE]">
                                    <div className="banner_left_side">
                                        <p className="banner_subtitle ">{item.subtitle}</p>
                                        <h1 className="banner_title capitalize">{item.title}</h1>
                                        <h6 className="banner_sale">{item.sale} <span className="uppercase">{item.discount}</span></h6>
                                        <p className="banner_description">{item.description}</p>
                                        <Link className="btn_primary" href={item.buttonLink}>
                                            Shop Now
                                            <FontAwesomeIcon className='arrow_right' icon={faHouse} color="#FFFFFF" />
                                        </Link>
                                    </div>
                                    <div className="banner_right_side">
                                        <img src={item.image} alt={item.title}></img>
                                    </div>
                                </div>
                            </section>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <section className="shopery_container">
                    <div className="promo">
                        <div className="promo_card">
                            <div className="promo_img">
                                <img src="src/assets/icons/delevary_van.svg" alt=""></img>
                            </div>
                            <div className="promo_title">
                                <p>Free Shipping</p>
                                <span>Free shipping on all your order</span>
                            </div>
                        </div>
                        <div className="promo_card">
                            <div className="promo_img">
                                <img src="src/assets/icons/headphones .svg" alt=""></img>
                            </div>
                            <div className="promo_title">
                                <p>Customer Support 24/7</p>
                                <span>Instant access to Support</span>
                            </div>
                        </div>
                        <div className="promo_card">
                            <div className="promo_img">
                                <img src="src/assets/icons/shopping-bag.svg" alt=""></img>
                            </div>
                            <div className="promo_title">
                                <p>100% Secure Payment</p>
                                <span>We ensure your money is save</span>
                            </div>
                        </div>
                        <div className="promo_card">
                            <div className="promo_img">
                                <img src="src/assets/icons/package.svg" alt=""></img>

                            </div>
                            <div className="promo_title">
                                <p>Money-Back Guarantee</p>
                                <span>30 Days Money-Back Guarantee</span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}