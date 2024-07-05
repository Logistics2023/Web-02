import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Responsive({ content }) {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        // slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 8000,
        // cssEase: "linear",
        pauseOnHover: false,
        arrows: false,

    };
    return (
        <div className="slider-container">
            <Slider {...settings} autoplay={true}>
                {content.map((i, index) => (
                    <div className='relative w-full  text-center p-[100px] lg:p-[100px] '>
                        <div className='text-center relative left-0 right-0 mx-auto bg-gray-100 p-[100px] max-w-[800px]  rounded-[20px]'>
                            <p className='italic text-black' dangerouslySetInnerHTML={{ __html: i.paragraph }}></p>
                            <br />
                            <h4 className='font-bold italic text-black'>{i.title}</h4>

                        </div>

                    </div>
                ))}
            </Slider>
        </div>
    );
}


export default Responsive;
