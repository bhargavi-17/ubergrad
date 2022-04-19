import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import section2_image1 from "../images/azhar_1.jpg";
import section2_image2 from "../images/azhar_1.jpg";
import section2_image3 from "../images/azhar_1.jpg";
import "./section5.css";

export default class Section2 extends Component {
  render() {
    var settings = {
      dots: false,
      arrows: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      mobileFirst: true,
      adaptiveHeight: false,
      responsive: [
        {
          breakpoint: 2000,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: true,
          },
        },
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: true,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            arrows: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            arrows: true,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
          },
        },
      ],
    };
    const posts = [
      {
        pic: section2_image1,
      },
      {
        pic: section2_image2,
      },

      {
        pic: section2_image3,
      },
    ];

    return (
      <div style={{ backgroundColor: "rgb(229, 231, 235)" }} className="pt-8">
        <hr className="hr-style1" />
        <h1 className="text-center font-semibold text-4xl font-sans mt-2">
          Ubergrads admitted into universities of USA
        </h1>
        <div className="section2-mainContainer">
          <div className="section2-container1">
            <div className="section2-slider-flex">
              <Slider {...settings}>
                {posts.map((post, index) => {
                  return (
                    <div key={index} id="section2-container">
                      <div class="max-w-xs bg-white rounded-xl border border-gray-200 shadow-md ">
                        <div>
                          <div className="start-Card flex justify-between">
                            <div className="block py-2 px-4 bg-orange-600 text-white text-left border rounded-full hover:shadow-lg">
                              Spring 2022
                            </div>
                            <div className="block py-2 px-4 bg-amber-500 text-black text-right border rounded-full hover:shadow-lg">
                              USA
                            </div>
                          </div>
                          <img
                            class="rounded-t-lg "
                            src={section2_image2}
                            height={12}
                            style={{height:'200px',marginLeft:60}}
                          ></img>
                        </div>

                        <div className="text-center pb-10">
                          <div class="p-1">Venkata Nagasai</div>
                          <div class="p-1 text-orange-500 ">
                            Wichita State University
                          </div>
                          <div class="p-3">Master in Computer Science</div>
                          <div class="p-1 text-orange-500">
                            GRE:299 | ILETS :7
                          </div>
                          <div class="p-1">GPA :7.18</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
