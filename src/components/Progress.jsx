import React, { useState, useEffect } from "react";
import $ from "jquery";
// import "./progres.css";

const Progress = ({ number, percentage }) => {
  console.log("precentage", percentage);
  return (
    <div class="progress">
      <div class="barOverflow">
        <div
          class="bar"
          style={{
            transform: "rotate(" + (45 + percentage * 1.8) + "deg",
            animationDuration: 3000,
            easing: "swing",
          }}
        ></div>
      </div>
      {/* <span>{percentage.toFixed(0) * 1}</span>% */}
    </div>
  );
};

export default Progress;
