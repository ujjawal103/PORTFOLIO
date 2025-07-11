import React, { useState } from "react";
import ReactDOM from "react-dom";


export default function VideoSection({handleClose , youtubeLink}) {
  

 return ReactDOM.createPortal(
    <div>
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.8)",
            zIndex: 9999,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding : "40px"
          }}
        >
          {/* ❌ Close Button */}
          <button
            onClick={handleClose}
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              fontSize: "24px",
              color: "white",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              zIndex: 10000,
            }}
          >
            &times;
          </button>

          {/* 🎬 YouTube iframe */}
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "800px",
              maxHeight: "60vh",
              paddingTop: "56.25%", // 16:9 aspect ratio
            //   display: "flex",
            //   justifyContent : "center",
            //   alignItems : "center"
             padding : "170px"
            }}
          >
            <iframe
              src={youtubeLink}
              title="YouTube Video"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: "none",
              }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
    </div>,
  document.body
  );
}
