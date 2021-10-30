import React from "react";

import HoverVideoPlayer from "react-hover-video-player";

const Cards = (props) => {
  return (
    <>
      <div className={props.class}>
        {/* <video
          src={props.src.first}
          alt="video_source"
          className="card_img img_one"
        /> */}

        <img
          className="card_img img_one animate__animated animate__pulse animate__slower animate__infinite"
          src={props.src.first}
          alt=""
          srcset=""
          style={{
            // Make the image expand to cover the video's dimensions
            width: "100%",
            height: "100%",
            objectFit: "cover",
            // borderRadius: "15px !imporatnt",
          }}
        />

        <HoverVideoPlayer
          style={{
            // Make the image expand to cover the video's dimensions
            // width: "100%",
            // height: "100%",
            objectFit: "cover",
            borderRadius: "10px !imporatnt",
            boxSizing: "border-box",
            overflow: "hidden",
          }}
          videoSrc={props.src.second}
          className="card_img img_two "
          restartOnPaused
          muted={false}
          pausedOverlay={
            <img
              src={props.src.third}
              alt=""
              style={{
                // Make the image expand to cover the video's dimensions
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "10px !important",
              }}
            />
          }
        />
        {/* <HoverVideoPlayer
            videoSrc={props.src.third}
            className="card_img "
            restartOnPaused
            muted={false}
            pausedOverlay={
              <img
                src={Image}
                alt=""
                style={{
                  // Make the image expand to cover the video's dimensions
                  width: "100%",
                  height: "100%",
                  objectFit: "",
                }}
              />
            }
          /> */}
      </div>
      <style jsx>
        {`
          // .card_img {
          // }
        `}
      </style>
    </>
  );
};

export default Cards;
