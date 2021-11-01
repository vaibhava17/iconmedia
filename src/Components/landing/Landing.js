import React from "react";
import "./landing.css"
import HoverVideoPlayer from "react-hover-video-player";

const TwoCards = (props) => {
    return (
        <>
            <div className={props.class}>
                <img
                    className="card_img img_one animate__animated animate__pulse animate__slower animate__infinite"
                    src={props.src.first}
                    alt=""
                    srcset=""
                    style={{
                        borderRadius: "10px !imporatnt",
                        boxSizing: "border-box",
                        overflow: "hidden",
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


const ThreeCards = (props) => {
    return (
        <>
            <div className={props.class}>
                <HoverVideoPlayer
                    style={{
                        borderRadius: "15px !important",
                        boxSizing: "border-box",
                        overflow: "hidden",
                    }}
                    videoSrc={props.src.first}
                    className="card_img img_one"
                    restartOnPaused
                    muted={false}
                    pausedOverlay={
                        <img
                            src={props.src.second}
                            alt=""
                            style={{
                                // Make the image expand to cover the video's dimensions
                                height: "100%",
                                width: "100%",
                                objectFit: "cover",
                                borderRadius: "10px",
                                boxSizing: "border-box",
                                overflow: "hidden",
                            }}
                        />
                    }
                />
                <HoverVideoPlayer
                    style={{
                        borderRadius: "15px !important",
                        boxSizing: "border-box",
                        overflow: "hidden",
                    }}
                    videoSrc={props.src.third}
                    className="card_img img_two"
                    restartOnPaused
                    muted={false}
                    pausedOverlay={
                        <img
                            src={props.src.fourth}
                            alt=""
                            style={{
                                // Make the image expand to cover the video's dimensions
                                height: "100%",
                                width: "100%",
                                objectFit: "cover",
                                borderRadius: "10px",
                                boxSizing: "border-box",
                                overflow: "hidden",
                            }}
                        />
                    }
                />
                <HoverVideoPlayer
                    style={{
                        borderRadius: "15px !important",
                        boxSizing: "border-box",
                        overflow: "hidden",
                    }}
                    videoSrc={props.src.fifth}
                    className="card_img img_one"
                    restartOnPaused
                    muted={false}
                    pausedOverlay={
                        <img
                            src={props.src.sixth}
                            alt=""
                            style={{
                                // Make the image expand to cover the video's dimensions
                                height: "100%",
                                width: "100%",
                                objectFit: "cover",
                                borderRadius: "10px",
                                boxSizing: "border-box",
                                overflow: "hidden",
                            }}
                        />
                    }
                />
            </div>
        </>
    );
};

export {ThreeCards,TwoCards};
