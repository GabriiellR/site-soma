import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const Slide = (props) => {
    if (props.conteudo && props.conteudo.length > 0) {
        return (
            <>
                <Swiper navigation={true} centeredSlides={true} modules={[Navigation, Autoplay, Pagination]} autoplay={{ delay: 4000, disableOnInteraction: false }} loop={true} autoHeight={true}>
                    {props.conteudo.map((item, index) => (
                        <SwiperSlide key={index}>{item}</SwiperSlide>
                    ))}
                </Swiper>
            </>
        );
    }
};

export default Slide;