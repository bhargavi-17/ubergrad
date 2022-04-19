import React from "react";
import "../section4/EligibilityRequirements.css";

export default function EligibilityRequirements() {
  return (
    <div className="block p-20 pt-8  space-y-2">
      <hr className="hr-style" />
      <h1 className="text-center font-semibold text-4xl pb-10">
        Eligibility Requirements
      </h1>
      <div className="flex flex-row justify-around space-x-3">
        <div className=" flex flex-col justify-around block p-3 w-1/3 bg-white rounded-lg border border-gray-200 shadow-md">
          <h3 class=" text-xl font-semibold tracking-normal text-center">
            Average Scores
          </h3>
          <div className="flex flex-row justify-around ">
            <div>
              <ul>
                <li className="text-sm">GRE</li>
                <li className="text-orange-600 text-2xl">303</li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="text-sm">TOFEL</li>
                <li className="text-orange-600 text-2xl">82</li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="text-sm">ILETS</li>
                <li className="text-orange-600 text-2xl">6</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between block p-3 w-1/3 bg-white rounded-lg border border-gray-200 shadow-md">
          <h5 className="font-semibold text-center text-xl">
            Documents Required
          </h5>
          <div className="pl-6">
            <ul className="list-disc text-sm">
              <li>Proof of Financial Support</li>
              <li>Academic Details</li>
              <li>Statement of Purpose (SoP)</li>
              <li>Letter of Recommendation (LoR)</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-around block p-3 w-1/3 bg-white rounded-lg border border-gray-200 shadow-md">
          <h3 class=" text-xl font-semibold tracking-normal text-center">
            Visa Requirements
          </h3>
          <div>
            <p className="text-sm">
              F1 Student Visa for Full-time International Students
            </p>
            <ul className="text-sm list-disc pl-5">
              <li>F1 Student Visa Fee : $360 (approx. ₹ 26,900)</li>
              <li>Application Fee : $160 (approx. ₹ 11,950)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
