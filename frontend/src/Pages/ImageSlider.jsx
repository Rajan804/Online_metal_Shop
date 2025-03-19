// // import React from "react";

// // const ImageSlider = () => {
// //   return (
// //     <div
// //       className="relative min-h-screen flex justify-center items-center bg-cover bg-center px-4 md:px-20 max-w-screen-2xl container mx-auto z-10"
// //       style={{
// //         backgroundImage: "url('https://img.freepik.com/free-photo/male-working-with-welding-torch_181624-47275.jpg?t=st=1742378016~exp=1742381616~hmac=8988b581f2768f8e68267c4840b5cf8686cd64acdc5f1cdbf3c8cd7349d53a19&w=1380')",
// //       }}
// //     >
// //       {/* Overlay to improve text readability */}
// //       <div className="absolute inset-0 bg-black bg-opacity-50"></div>

// //       {/* Carousel container */}
// //       <div className="relative z-10 w-full max-w-lg bg-white rounded-lg shadow-lg p-4">
// //         <div className="carousel w-full">
// //           <div id="slide1" className="carousel-item relative w-full">
// //             <img
// //               src="https://via.placeholder.com/600x300/FF5733/FFFFFF?text=Slide+1"
// //               className="w-full rounded-lg"
// //               alt="Slide 1"
// //             />
// //             <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
// //               <a href="#" className="btn btn-circle">❮</a>
// //               <a href="#" className="btn btn-circle">❯</a>
// //             </div>
// //           </div>

// //           <div id="slide2" className="carousel-item relative w-full">
// //             <img
// //               src="https://via.placeholder.com/600x300/33FF57/FFFFFF?text=Slide+2"
// //               className="w-full rounded-lg"
// //               alt="Slide 2"
// //             />
// //             <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
// //               <a href="#" className="btn btn-circle">❮</a>
// //               <a href="#" className="btn btn-circle">❯</a>
// //             </div>
// //           </div>

// //           <div id="slide3" className="carousel-item relative w-full">
// //             <img
// //               src="https://via.placeholder.com/600x300/3357FF/FFFFFF?text=Slide+3"
// //               className="w-full rounded-lg"
// //               alt="Slide 3"
// //             />
// //             <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
// //               <a href="#" className="btn btn-circle">❮</a>
// //               <a href="#" className="btn btn-circle">❯</a>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>

// //   );
// // };

// // export default ImageSlider;

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";

// export default function ImageSlider() {
//   return (
//     <div className="relative min-h-screen flex justify-center items-center bg-gray-100 px-4 md:px-20 w-full">
//       <div className="w-full max-w-2xl">
//         <Swiper
//           modules={[Navigation, Pagination, Autoplay]}
//           spaceBetween={10}
//           slidesPerView={1}
//           navigation
//           pagination={{ clickable: true }}
//           autoplay={{ delay: 3000 }}
//           className="rounded-lg shadow-lg"
//         >
//           <SwiperSlide>
//             <img
              // src="https://img.freepik.com/free-photo/male-working-with-welding-torch_181624-47275.jpg?t=st=1742378016~exp=1742381616~hmac=8988b581f2768f8e68267c4840b5cf8686cd64acdc5f1cdbf3c8cd7349d53a19&w=1380"
//               alt="Slide 1"
//               className="w-full h-auto rounded-lg"
//             />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img
              // src="https://img.freepik.com/free-photo/cutting-metal-with-plasma-equipment-plant_176420-4759.jpg?t=st=1742379294~exp=1742382894~hmac=6e261a5676b4ddfcebe7d367a63742a00c029ba047a32874cdadcc31274a5801&w=1380"
//               alt="Slide 2"
//               className="w-full h-auto rounded-lg"
//             />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img
              // src="https://img.freepik.com/free-photo/professional-industrial-welder-welding-metal-parts-metalworking-factory_342744-519.jpg?t=st=1742379320~exp=1742382920~hmac=735fba55956a0192b0bc718f7c70a2bff3cfc948d6969656444609b3e7245cd8&w=1380"
//               alt="Slide 3"
//               className="w-full h-auto rounded-lg"
//             />
//           </SwiperSlide>
//         </Swiper>
//       </div>
//     </div>
//   );
// }

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function ImageSlider() {
  return (
    <div className="w-full mt-14">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        className="w-full"
      >
        <SwiperSlide>
          <img
              src="https://img.freepik.com/free-photo/male-working-with-welding-torch_181624-47275.jpg?t=st=1742378016~exp=1742381616~hmac=8988b581f2768f8e68267c4840b5cf8686cd64acdc5f1cdbf3c8cd7349d53a19&w=1380"
              alt="Slide 1"
            className="w-full h-[500px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
              src="https://img.freepik.com/free-photo/cutting-metal-with-plasma-equipment-plant_176420-4759.jpg?t=st=1742379294~exp=1742382894~hmac=6e261a5676b4ddfcebe7d367a63742a00c029ba047a32874cdadcc31274a5801&w=1380"
              alt="Slide 2"
            className="w-full h-[500px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
              src="https://img.freepik.com/free-photo/professional-industrial-welder-welding-metal-parts-metalworking-factory_342744-519.jpg?t=st=1742379320~exp=1742382920~hmac=735fba55956a0192b0bc718f7c70a2bff3cfc948d6969656444609b3e7245cd8&w=1380"
              alt="Slide 3"
            className="w-full h-[500px] object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

