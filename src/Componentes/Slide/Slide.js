import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';


const Slide = (props) => {


    if (props.conteudo && props.conteudo.length > 0) {
        return (
            <>
                <Swiper
                    style={{ '--swiper-navigation-color': '#f1ba1a', '--swiper-pagination-color': '#f1ba1a' }}
                    navigation={true}
                    centeredSlides={true}
                    slidesPerView={1}
                    modules={[Navigation, Autoplay, Pagination]}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    loop={true}
                    autoHeight={true}
                    spaceBetween={20}

                    breakpoints={{
                        768: {
                            slidesPerView: props.slidersPerView
                        }
                    }}

                >

                    {props.conteudo.map((item, index) => (
                        <SwiperSlide key={index}>{item}</SwiperSlide>
                    ))}

                </Swiper>
            </>
        );
    }
};

export default Slide;