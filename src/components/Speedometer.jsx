import React, { useEffect } from "react";
import InnerSvg from "./InnerSvg";
import "./speedometer.scss";
import $ from "jquery";
import Progress from "./Progress";

const Speedometer = () => {
  const [number, setNumber] = React.useState(0);
  const [percentage, setPercentage] = React.useState(62);

  //   useEffect(() => {
  //     $(".progress").each(function () {
  //       var $bar = $(this).find(".bar");
  //       var $val = $(this).find("span");
  //       var perc = parseInt($val.text(), 10);
  //       //   console.log(perc);

  //       $({ p: 0 }).animate(
  //         { p: perc },
  //         {
  //           duration: 3000,
  //           easing: "swing",
  //           step: function (p) {
  //             $bar.css({
  //               transform: "rotate(" + (45 + p * 1.8) + "deg)", // 100%=180° so: ° = % * 1.8
  //               // 45 is to add the needed rotation to have the green borders at the bottom
  //             });
  //             $val.text(p | 0);
  //           },
  //         }
  //       );
  //     });
  //   }, []);

  useEffect(() => {
    let interval = null;
    interval = setInterval(() => {
      setNumber((number) => number + 1);
    }, 1000);

    if (number == 220) {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [number]);

  //   useEffect(() => {
  //     console.log("number her", number);
  //     let percentage = (number / 220) * 100;
  //     setPercentage(percentage);
  //   }, [number]);

  //   useEffect(() => {
  //     console.log("percentage", percentage);
  //     $(".progress").each(function () {
  //       var $bar = $(this).find(".bar");
  //       var $val = $(this).find("span");
  //       //   var perc = parseInt($val.text(), 10);
  //       //   console.log(perc);

  //       $({ p: 0 }).animate(
  //         { p: percentage },
  //         {
  //           duration: 3000,
  //           easing: "swing",
  //           step: function (p) {
  //             $bar.css({
  //               transform: "rotate(" + (45 + p * 1.8) + "deg)", // 100%=180° so: ° = % * 1.8
  //               // 45 is to add the needed rotation to have the green borders at the bottom
  //             });
  //             $val.text(p | 0);
  //           },
  //         }
  //       );
  //     });
  //   }, [percentage]);

  return (
    <div className="speedometer_container">
      {/* <div class="progress">
        <div class="barOverflow">
          <div class="bar"></div>
        </div>
        <span>52</span>%
      </div> */}
      <Progress number={number} percentage={percentage} />

      {/* <div className="outermost_circle">
       
      </div> */}
      <div className="inner_circle">
        <div class="speedometer">
          <svg
            class="js-guage-svg guage-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 327 205.4"
          >
            <path d="M60.5 127.9l-17.9-3.8c-.1.6-.3 1.3-.4 1.9l17.9 3.8c.1-.6.3-1.3.4-1.9z"></path>
            <path d="M63.2 118.3l-17.4-5.7c-.2.6-.4 1.2-.6 1.9l17.4 5.7c.2-.7.4-1.3.6-1.9z"></path>
            <path d="M66.9 108.9l-16.7-7.5c-.3.6-.6 1.2-.8 1.8l16.7 7.5c.2-.6.5-1.2.8-1.8z"></path>
            <path d="M71.5 100.1l-15.9-9.2c-.3.6-.7 1.1-1 1.7l15.9 9.2c.4-.6.7-1.2 1-1.7z"></path>
            <path d="M77.1 91.7L62.2 81c-.4.5-.8 1.1-1.1 1.6l14.8 10.8c.4-.6.8-1.1 1.2-1.7z"></path>
            <path d="M83.5 84L69.8 71.8c-.4.5-.9 1-1.3 1.5l13.6 12.3c.5-.6.9-1.1 1.4-1.6z"></path>
            <path d="M90.6 77L78.3 63.4c-.5.4-1 .9-1.5 1.3l12.3 13.6c.5-.4 1-.8 1.5-1.3z"></path>
            <path d="M98.5 70.8L87.7 56c-.5.4-1.1.8-1.6 1.1L96.8 72c.6-.4 1.1-.8 1.7-1.2z"></path>
            <path d="M106.9 65.5l-9.2-15.9c-.6.3-1.1.7-1.7 1l9.2 15.9c.5-.4 1.1-.7 1.7-1z"></path>
            <path d="M115.8 61l-7.5-16.7c-.6.3-1.2.5-1.8.8l7.5 16.7c.6-.3 1.2-.5 1.8-.8z"></path>
            <path d="M125.2 57.5l-5.7-17.4c-.6.2-1.3.4-1.9.6l5.7 17.4c.7-.2 1.3-.4 1.9-.6z"></path>
            <path d="M134.9 55l-3.8-17.9c-.7.1-1.3.3-1.9.4l3.8 17.9c.6-.1 1.3-.2 1.9-.4z"></path>
            <path d="M144.8 53.6l-1.9-18.2c-.7.1-1.3.1-2 .2l1.9 18.2c.7-.1 1.4-.2 2-.2z"></path>
            <path d="M153.8 53.2h1V34.8h-2v18.3c.4.1.7.1 1 .1z"></path>
            <path d="M164.8 53.8l1.9-18.2c-.7-.1-1.3-.2-2-.2l-1.9 18.2c.7 0 1.3.1 2 .2z"></path>
            <path d="M174.7 55.5l3.8-17.9c-.6-.1-1.3-.3-1.9-.4L172.7 55c.7.2 1.3.3 2 .5z"></path>
            <path d="M184.3 58.1l5.7-17.4c-.6-.2-1.2-.4-1.9-.6l-5.7 17.4c.6.2 1.3.4 1.9.6z"></path>
            <path d="M193.6 61.8l7.5-16.7c-.6-.3-1.2-.6-1.8-.8L191.8 61c.6.3 1.2.6 1.8.8z"></path>
            <path d="M202.5 66.5l9.2-15.9c-.6-.3-1.1-.7-1.7-1l-9.2 15.9c.5.3 1.1.6 1.7 1z"></path>
            <path d="M210.8 72l10.8-14.8c-.5-.4-1.1-.8-1.6-1.1l-10.8 14.8c.5.3 1.1.7 1.6 1.1z"></path>
            <path d="M218.5 78.4l12.3-13.6c-.5-.4-1-.9-1.5-1.3L217 77.1c.5.4 1 .8 1.5 1.3z"></path>
            <path d="M225.5 85.5l13.6-12.3c-.4-.5-.9-1-1.3-1.5L224.2 84c.4.5.9 1 1.3 1.5z"></path>
            <path d="M231.7 93.4l14.8-10.8c-.4-.5-.8-1.1-1.1-1.6l-14.8 10.8c.4.5.7 1 1.1 1.6z"></path>
            <path d="M237.1 101.8l15.9-9.2c-.3-.6-.7-1.1-1-1.7l-15.9 9.2c.3.6.7 1.1 1 1.7z"></path>
            <path d="M241.5 110.8l16.7-7.5c-.3-.6-.5-1.2-.8-1.8l-16.7 7.5c.3.6.6 1.2.8 1.8z"></path>
            <path d="M245 120.1l17.4-5.7c-.2-.6-.4-1.2-.6-1.9l-17.4 5.7c.2.7.4 1.3.6 1.9z"></path>
            <path d="M247.5 129.8l17.9-3.8c-.1-.7-.3-1.3-.4-1.9l-17.9 3.8c.1.6.3 1.3.4 1.9z"></path>
            <path d="M153.8 53.2h1V34.8h-2v18.3c.4.1.7.1 1 .1z"></path>
          </svg>
        </div>
      </div>
      <div className="innermost_circle"></div>
      <div className="data_container">
        <div>
          <span style={{ fontSize: 60, fontWeight: 500 }}>{number}</span>
          <small style={{ color: "#b1772a" }}>Kmh</small>
        </div>
      </div>
    </div>
  );
};

export default Speedometer;
