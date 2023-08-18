import video from "assets/video/runningVideo.mp4";

export const RunningVideoHeader = () => (
  <div style={{ height: "200px" }}>
    <video
      style={{
        width: "100vw",
      }}
      autoPlay
      muted
      loop
      src={video}
    ></video>
  </div>
);
