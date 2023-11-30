import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper/modules';


import AOS from 'aos';
import 'aos/dist/aos.css'

import './SlideServicos.css'

const ContainerServicos = (props) => {

    AOS.init();

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return <>
        <div className='bg-light mt-5' data-aos="fade-left" data-aos-duration="2000">

            {props.tituloSegmento &&

                <div className='row mt-3'>
                    <div className='col-sm-12 col-md-12 col-lg-12'>
                        <div className='d-flex flex-column gap-3 align-items-center'>
                            <span className='fs-2 fw-semibold w-auto p-2 bg-secondary text-white'>{props.tituloSegmento.toUpperCase()}</span>
                            <span className='fs-5 text-center'>{props.textoSegmento}</span>
                        </div>
                    </div>
                </div>
            }

            <div class="row mt-5">
                <div className="col-sm-12 col-md-12 col-lg-6">
                    <Swiper
                        modules={[Navigation, Thumbs]}
                        thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : alert('swiper com problema')}
                        style={{ '--swiper-navigation-color': '#f1ba1a', '--swiper-pagination-color': '#f1ba1a' }}
                        spaceBetween={10}
                        navigation={true}
                        className="mySwiper2">

                        {props.imagens ? props.imagens.map((imagem, index) => (
                            <SwiperSlide><img src={imagem} key={index} /></SwiperSlide>
                        )) : ''}
                    </Swiper>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-6">
                    <h4 class="mb-2 mt-2 fs-4"><span>{props.titulo.toUpperCase()}</span></h4>
                    <span className='fs-5'>{props.texto}</span>
                </div>
            </div>

            <div className='row'>
                <div className='cols-sm-12 col-md-12 col-lg-12'>
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        style={{ '--swiper-navigation-color': '#f1ba1a', '--swiper-pagination-color': '#f1ba1a' }}
                        modules={[Navigation, Thumbs]}
                        watchSlidesProgress
                        navigation={true}
                        spaceBetween={15}
                        slidesPerView={6}
                        className="mySwiper">

                        {props.imagens ? props.imagens.map((imagem, index) => (
                            <SwiperSlide>
                                <img src={imagem} key={index} />
                            </SwiperSlide>
                        )) : ''}
                    </Swiper>
                </div>
            </div>

        </div>
    </>;
};

export default ContainerServicos;