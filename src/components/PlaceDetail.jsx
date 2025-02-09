import React, { Component } from 'react';
import 'components/components.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export default function PlaceDetail() {
  return (
      <article className="content cont_detail">
        <div className="box_top">
          <svg className="ico_logo" viewBox="0 0 288 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M93.24 41.8061V28.8061H69.64V41.8061H93.24ZM93.24 26.9661V6.60612H89.32V15.2061H85.68V7.28612H81.8V26.5661H85.68V18.6461H89.32V26.9661H93.24ZM78.68 9.08612H65.04V12.4461H74.36C74.24 13.4861 74.08 14.4461 73.76 15.4061L63.56 16.2861L64.24 19.6861L72.16 18.6861C70.24 21.6061 67.2 23.8861 63.32 25.2461L65.8 28.3261C73.92 24.8461 78.64 18.0861 78.68 9.08612ZM89.16 38.5261H73.76V32.0461H89.16V38.5261ZM127.409 35.2461C127.409 31.0061 122.969 28.2061 115.209 28.2061C107.529 28.2061 103.129 31.0061 103.129 35.2461C103.129 39.4461 107.529 42.2461 115.209 42.2461C122.969 42.2461 127.409 39.4461 127.409 35.2461ZM106.049 14.0861L101.969 14.4461L102.929 22.9261C101.169 22.9661 99.4894 23.0061 97.9694 23.0061L98.5694 26.4461C101.809 26.4061 105.569 26.3261 109.049 26.1661C113.249 25.9661 117.729 25.5661 120.289 25.0861L119.969 21.9661C118.489 22.2061 116.769 22.3661 114.849 22.4461L115.729 14.4461L111.689 14.0461L111.209 22.6861L106.569 22.8461L106.049 14.0861ZM115.209 31.5661C120.289 31.5661 123.209 32.8861 123.209 35.2461C123.209 37.5661 120.289 38.9261 115.209 38.9261C110.289 38.9261 107.329 37.5661 107.329 35.2461C107.329 32.8861 110.289 31.5661 115.209 31.5661ZM127.169 28.0061V6.60612H123.049V28.0061H127.169ZM118.809 12.4061V9.16612H99.1294V12.4061H118.809ZM152.979 17.9261C152.979 12.9261 148.939 9.40612 143.659 9.40612C138.499 9.40612 134.539 13.0061 134.539 17.9261C134.539 22.7661 138.459 26.0461 143.659 26.0461C148.899 26.0461 152.979 22.8461 152.979 17.9261ZM148.859 17.8861C148.859 20.7261 146.459 22.5661 143.659 22.5661C140.939 22.5661 138.539 20.7261 138.539 17.8861C138.539 14.9261 140.899 12.9261 143.659 12.9261C146.539 12.9261 148.859 14.8061 148.859 17.8861ZM162.219 6.60612H158.139V42.2461H162.219V6.60612ZM156.139 29.8461C153.059 30.1661 149.059 30.4461 143.979 30.6461C139.819 30.8861 135.939 30.8861 132.139 30.8461L132.779 34.3661C141.139 34.3261 148.819 33.9661 156.459 33.1261L156.139 29.8461ZM209.736 37.7261V34.4461H195.616V26.2461H205.776V9.40612H181.536V26.2461H191.536V34.4461H177.536V37.7261H209.736ZM201.696 23.0061H185.616V12.6861H201.696V23.0061ZM244.345 28.0061V24.6861H212.145V28.0061H244.345ZM240.585 41.2461V37.9661H220.385V30.9661H216.265V41.2461H240.585ZM240.585 20.8061V17.4861H220.505V11.2861H240.225V8.00612H216.385V20.8061H240.585ZM276.075 30.2061V6.60612H271.995V16.3261H264.955V19.7261H271.995V30.2061H276.075ZM264.875 9.44612H248.595V12.8861H260.435C259.635 18.7661 253.635 23.8061 246.835 25.3661L249.035 28.6861C258.395 25.6461 264.515 19.0861 264.875 9.44612ZM277.955 39.4061C272.515 38.5261 266.475 34.6461 266.475 29.5661V28.2461H262.195V29.5661C262.195 34.6461 256.315 38.7261 250.555 39.3661L252.515 42.6061C257.675 41.8061 262.875 38.1661 264.235 34.8861C265.915 38.0861 271.115 41.7261 275.955 42.6461L277.955 39.4061Z" fill="white"/>
            <rect y="20.9247" width="29.3399" height="6.35825" rx="3.17912" transform="rotate(-45 0 20.9247)" fill="#62EB70"/>
            <rect x="9.84619" y="43.1722" width="21.2074" height="6.05926" rx="3.02963" transform="rotate(-90 9.84619 43.1722)" fill="#62EB70"/>
            <rect x="42.4148" y="43.1722" width="24.9944" height="6.05926" rx="3.02963" transform="rotate(180 42.4148 43.1722)" fill="#62EB70"/>
            <rect x="27.5234" width="29.3399" height="6.35825" rx="3.17912" transform="rotate(45 27.5234 0)" fill="#62EB70"/>
          </svg>
        </div>
        <div className="box_img">
          <img src="//mometum-clone-app.s3.ap-northeast-2.amazonaws.com/1.jpg" alt="캠핑 이미지"/>
        </div>
        <div className="box_detail">
          <strong className="tit_detail">가게이름</strong>
          <strong className="tit_info">상세 설명</strong>
          <p>
          끓는 같은 굳세게 장식하는 품으며, 내려온 인간의 보이는 따뜻한 있는가? 보는 놀이 찬미를 천고에 것이다. 
          낙원을 만물은 봄날의 가치를 가지에 같으며, 우리의 되는 것이다. 들어 천하를 때에, 산야에 목숨을 보는 봄바람이다. 
          위하여, 방지하는 이상을 실현에 구할 얼음에 위하여 아니다. 얼음과 뼈 굳세게 내는 심장의 위하여 이는 뭇 것이다. 평화스러운 두기 일월과 생생하며, 
          품었기 청춘 것이다. 가슴이 얼마나 피가 있을 것이다. 안고, 기쁘며, 소리다.이것은 황금시대를 얼음 청춘의 듣는다. 
          방지하는 봄날의 속잎나고, 사람은 얼마나 인생에 길을 앞이 위하여서. 맺어, 넣는 가지에 오직 설산에서 그들은 있으며, 위하여서.
          </p>
          <strong className="tit_info">위치</strong>
          <p>서울시 강남구</p>
          <strong className="tit_info">사진</strong>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            className="swiper_pictures"
            spaceBetween={10}
            slidesPerView={3}
            // navigation
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
              <SwiperSlide><img src="http://placehold.it/125x120" alt="" style={{ borderRadius:18 }}/></SwiperSlide>
              <SwiperSlide><img src="http://placehold.it/125x120" alt="" style={{ borderRadius:18 }}/></SwiperSlide>
              <SwiperSlide><img src="http://placehold.it/125x120" alt="" style={{ borderRadius:18 }}/></SwiperSlide>
              <SwiperSlide><img src="http://placehold.it/125x120" alt="" style={{ borderRadius:18 }}/></SwiperSlide>
              <SwiperSlide><img src="http://placehold.it/125x120" alt="" style={{ borderRadius:18 }}/></SwiperSlide>
          </Swiper>
        </div>
        <div className="box_foot">
          <p>캠핑의 모든것</p>
          <span>&copy; copyright {new Date().getFullYear()} All Right Reserved.</span>
        </div>
      </article>
  )
}
