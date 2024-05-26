import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import "./style.css";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import 'swiper/less';
import 'swiper/less/navigation';
import 'swiper/less/pagination';

export default () => {
    return (
        <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={50}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            slidesPerView={1}
            pagination={{ clickable: true }}
        >
            

            <SwiperSlide>
                <img className='slider-image' src='https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/620/ss_f3f6787d74739d3b2ec8a484b5c994b3d31ef325.1920x1080.jpg?t=1698805825'></img>
                <a href="/game" class="link-game">Portal2</a>
            </SwiperSlide>
            <SwiperSlide>
                <img className='slider-image' src='https://wallpapergod.com/images/hd/rdr2-1920X1080-wallpaper-grnnecomf1z9pcx2.jpeg'></img>
            </SwiperSlide>
            <SwiperSlide>
                <img className='slider-image' src='https://i.pinimg.com/originals/e2/6f/ba/e26fba8d9f2102d2dd8699c80b8ddc78.jpg'></img>
            </SwiperSlide>
        </Swiper>
    );
};