import React, { useState, useEffect } from "react";
import $ from "jquery";
// import "./progres.css";

const Progress = ({ number, percentage }) => {
  console.log("precentage", percentage);
  useEffect(() => {
    $(".progress").each(function () {
      var $bar = $(this).find(".bar");
      var $val = $(this).find("span");
      var perc = parseInt($val.text(), 10);
      //   console.log(perc);

      $({ p: 0 }).animate(
        { p: percentage },
        {
          duration: 3000,
          easing: "swing",
          step: function (p) {
            $bar.css({
              transform: "rotate(" + (45 + p * 1.8) + "deg)", // 100%=180° so: ° = % * 1.8
              // 45 is to add the needed rotation to have the green borders at the bottom
            });
            $val.text(p | 0);
          },
        }
      );
    });
  }, [percentage]);
  return (
    // <progress className="test" value={percentage} max="100" />
    <div class="progress">
      <div class="barOverflow">
        <div class="bar"></div>
      </div>
      {/* <span>{percentage}</span>% */}
    </div>
  );
};

export default Progress;
