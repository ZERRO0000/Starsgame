import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import "./style.css";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/a11y';

import 'swiper/less';
import 'swiper/less/navigation';
import 'swiper/less/pagination';

export default () => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={100}
            slidesPerView={1}
            autoplay={3000}
            pagination={{ clickable: true }}
        >
            

            <SwiperSlide>
                <img className='slider-image' src='https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/620/ss_f3f6787d74739d3b2ec8a484b5c994b3d31ef325.1920x1080.jpg?t=1698805825'></img>
            </SwiperSlide>
            <SwiperSlide>
                <img className='slider-image' src='https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/02/gta5-screenshot-cityscape-landscape.jpg'></img>
            </SwiperSlide>
            <SwiperSlide>
                <img className='slider-image' src='https://assets1.ignimgs.com/2018/10/25/rdr2-1600-1540463299681.jpg'></img>
            </SwiperSlide>
        </Swiper>
    );
};