import React from "react";
import "./section3";
import College from "../images/home.png";
import Students from "../images/people.png";
import Man from "../images/man.png";
import Business from "../images/bud.png";
import Analysis from "../images/computerScience.png";
import Timer from "../images/timer.png"
import Calender from "../images/calender.png"
import './section3.css'

export default function MoreStatusOnUsa() {
  return (
    <div className="MoreStatusOnUsa-main-Div">
      <div className="EligibilityRequirements-top-div">
        <hr className="hr-style" />
        <div className="heading">
          <h6>More stats on the USA and its education</h6>
        </div>
      </div>

      <div className="MoreStatusOnUsa-gridContainer1 ">
        <div className="container1-box  rounded-lg shadow-lg h-full px-4 py-4 bg-white text-black  MuiPaper-elevation1 MuiPaper-rounded">
          <div className="container1-box-grid">
            <div className="container1-box-grid-top-div">
              <h>
                <span style={{ color: "red" }}>30</span>/100
              </h>
              <p>30 universities among top 100 across the world</p>
            </div>
            <div className="container1-box-grid-right-div">
              <img src={College}></img>
            </div>
          </div>
        </div>
        <div className="container1-box rounded-lg shadow-lg h-full px-4 py-4 bg-white text-black  MuiPaper-elevation1 MuiPaper-rounded">
          <div className="container1-box-grid ">
            <div className="container1-box-grid-top-div">
              <h>
                <span style={{ color: "red" }}>211,930</span>
              </h>
              <p>Number of Indian students in the USA</p>
            </div>
            <div className="container1-box-grid-right-div">
              <img src={Students}></img>
            </div>
          </div>
        </div>
        <div className="container1-box rounded-lg shadow-lg h-full px-4 py-4 bg-white text-black  MuiPaper-elevation1 MuiPaper-rounded">
          <div className="container1-box-top">Most Preferred Courses</div>
          <hr />
          <div className="container1-box-bottom">
            <div className="container1-box-bottom-box1">
              <div className="box1-top">
                <img src={Man}></img>
              </div>
              <p>Engineering</p>
            </div>
            <div className="container1-box-bottom-box1">
              <div className="box1-top">
                <img src={Business}></img>
              </div>
              <p>Business</p>
            </div>
            {/* <div className="container1-box-bottom-box1">
              <div className="box1-top">
                <img src={Analysis}></img>
              </div>
              <p>Computer Science & IT</p>
            </div> */}

            <div class="p-2 text-center">
            <img src={Analysis}></img>
              <p>Computer Science &amp; IT</p>
            </div>
            <div className="container1-box-bottom-box1">
              <div className="box1-top">
                <img src={Analysis}></img>
              </div>
              <p>Business Analytics</p>
            </div>
          </div>
        </div>
      </div>

      <div class="MuiContainer-root h-full MuiContainer-maxWidthLg">
        <div class="h-full">
          <div class="grid md:grid-cols-3 gap-4 h-full text-center px-8">
            <div class="md:col-span-1 border-r-0 border-white border-solid">
              <div class="MuiPaper-root MuiCard-root rounded-lg shadow-lg h-full px-auto pb-10 py-auto my-auto bg-white  MuiPaper-elevation1 MuiPaper-rounded">
                <div class="text-xl font-semibold py-4">
                  Approximate Tuition Fee Per Year
                </div>
                <div class="relative h-2 w-3/5 mx-auto my-5 mb-8 bg-gray-400 rounded max-w-xs border-1 border-white border-solid ">
                  <div class="absolute h-4 w-2 rounded bg-ug-secondary -top-1 left-1"></div>
                  <div class="absolute h-4 w-2 rounded bg-ug-secondary -top-1 right-1"></div>
                </div>
                <div class="relative w-5/5 mx-auto mb-8 ">
                  <div class="absolute h-4 -top-1 left-2">
                    $15,000
                    <div class="text-ug-secondary">(approx. ₹11.5 Lakhs) </div>
                  </div>
                  <div class="absolute h-4 -top-1 right-2">
                    $30K <div class="text-ug-secondary"> Aprx. ₹20.5 L</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="md:col-span-1 border-r-0 border-white border-solid">
              <div class="MuiPaper-root MuiCard-root rounded-lg shadow-lg h-full pb-10 px-auto py-auto my-auto bg-white MuiPaper-elevation1 MuiPaper-rounded">
                <div class="text-xl font-semibold py-4">
                  {" "}
                  Approximate Living Expenses Per Year
                </div>
                <div class="relative h-2 w-3/5 mx-auto my-5 mb-8 bg-gray-400 rounded max-w-xs border-1 border-white border-solid">
                  <div class="absolute h-4 w-2 rounded bg-ug-secondary -top-1 left-1"></div>
                  <div class="absolute h-4 w-2 rounded bg-ug-secondary -top-1 right-1"></div>
                </div>
                <div class="relative w-5/5 mx-auto mb-8 ">
                  <div class="absolute h-4 -top-1 left-2">
                    {" "}
                    $10K<div class="text-ug-secondary">Aprx ₹7.0 L </div>
                  </div>
                  <div class="absolute h-4 -top-1 right-2">
                    $18K <div class="text-ug-secondary"> Aprx. ₹12.5 L</div>{" "}
                  </div>
                </div>
              </div>
            </div>
            <div class="md:col-span-1 border-r-0 border-white border-solid">
              <div class="MuiPaper-root MuiCard-root  rounded-lg shadow-lg h-full px-4 py-4 bg-white text-black  MuiPaper-elevation1 MuiPaper-rounded">
                <div class="text-xl font-semibold pb-4">Quality of Life</div>
                <div class="">
                  <div class="text-2xl w-20 mx-auto rounded-lg shadow-lg p-4 bg-orange-500">
                    #17
                  </div>
                </div>
                <div class="text-center my-2">
                  U.S. News &amp; World Report : Quality of Life Rankings
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="MuiContainer-root h-full MuiContainer-maxWidthLg pt-10">
        <div class=" h-full">
          <div class="grid md:grid-cols-2 gap-4 h-full text-center px-8 ">
            <div class="md:col-span-1 md:border-r-0 border-white border-solid">
              <div class="MuiPaper-root MuiCard-root rounded-lg bg-white shadow-lg rounded h-full p-4 MuiPaper-elevation1 MuiPaper-rounded">
                <div class="text-xl align-middle font-semibold pb-4">Part Time Jobs</div>
                <div class="text-xl pb-4">
                  {" "}
                  <img style={{height:"45px",width:"45px",marginLeft:235}} src={Timer}></img>
                 <p style={{marginTop:-30,marginLeft:50}}>20 Hours</p>
                </div>
                <div class="text-center">
                  You can work 20 hours per week as part of your CPT/OPT
                  Programs
                </div>
              </div>
            </div>
            <div class="md:col-span-1 md:border-r-0 border-white border-solid">
              <div class="MuiPaper-root MuiCard-root rounded-lg bg-white shadow-lg h-full p-4 MuiPaper-elevation1 MuiPaper-rounded">
                <div class="text-xl font-semibold pb-4">
                  Post Study Work Duration
                </div>
                <div class="text-xl align-middle px-40 ">
                  <img style={{height:"45px",width:"45px",textAlign:"center",marginLeft:55}} src={Calender} ></img>
                  <p style={{marginTop:-30,marginLeft:50}}>36 months</p>
                </div>
                <div class="text-center">
                  Upon graduating, STEM students can apply for an extension of
                  their OPT (usually it is 12 months) and can work for up to 36
                  months.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}