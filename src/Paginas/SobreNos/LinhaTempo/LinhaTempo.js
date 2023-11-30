
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Mousewheel, Pagination } from 'swiper/modules';

import './LinhaTempo.css'

import inspiracoes from '../../../Imagens/Sobrenos/LinhaTempo/inspiracoes.jpg';
import milNovecentosNoventaOito from '../../../Imagens/Sobrenos/LinhaTempo/1998.jpg';
import doisMilTres from '../../../Imagens/Sobrenos/LinhaTempo/2003.jpg';
import doisMilDez from '../../../Imagens/Sobrenos/LinhaTempo/2010.jpg';
import doisMilQuatorze from '../../../Imagens/Sobrenos/LinhaTempo/2014.jpg';
import doisMilDezesseis from '../../../Imagens/Sobrenos/LinhaTempo/2016.jpg';
import doisMilDezoito from '../../../Imagens/Sobrenos/LinhaTempo/2018.jpg';
import doisMilDezenove from '../../../Imagens/Sobrenos/LinhaTempo/2019.jpg';

const LinhaTempo = () => {

    return <>
        <div className="col-sm-12 col-md-12 col-lg-12 mt-5">
            <div className="container-fluid bg-light">
                <Swiper
                    direction={'horizontal'}
                    observer={true}
                    observeSlideChildren={true}
                    loop={false}
                    autoHeight={true}
                    speed={1600}
                    slidesPerView={1}
                    spaceBetween={5}
                    pagination={{
                        clickable: true,
                        renderBullet: (index, className) => {
                            var year = document.querySelectorAll('.swiper-slide')[index].getAttribute('data-year');
                            return `<div class="${className} ">${year}</div>`
                        }
                    }}

                    breakpoints={{
                        768: {
                            direction: 'vertical'
                        },
                    }}
                    modules={[Mousewheel, Pagination]}
                    className="timeline"
                >
                    <SwiperSlide data-year={"Inspirações"}><img src={inspiracoes} className='img-fluid w-100 h-100' /></SwiperSlide>
                    <SwiperSlide data-year={"1998"}><img src={milNovecentosNoventaOito} className='img-fluid w-100' /></SwiperSlide>
                    <SwiperSlide data-year={"2003"}><img src={doisMilTres} className='img-fluid w-100' /></SwiperSlide>
                    <SwiperSlide data-year={"2010"}><img src={doisMilDez} className='img-fluid w-100' /></SwiperSlide>
                    <SwiperSlide data-year={"2014"}><img src={doisMilQuatorze} className='img-fluid w-100' /></SwiperSlide>
                    <SwiperSlide data-year={"2016"}><img src={doisMilDezesseis} className='img-fluid w-100' /></SwiperSlide>
                    <SwiperSlide data-year={"2018"}><img src={doisMilDezoito} className='img-fluid w-100' /></SwiperSlide>
                    <SwiperSlide data-year={"2019"}><img src={doisMilDezenove} className='img-fluid w-100' /></SwiperSlide>
                </Swiper>
            </div>
        </div>
    </>
}

export default LinhaTempo;