export default function Video({ children }){
    return (
      <div>
        <div className=" flex flex-col items-center justify-center h-screen bg-cover bg-center relative">
          <video
            autoPlay
            muted
            loop
            className="absolute inset-0 object-cover w-full h-full "
            src="/landing/landing.mp4"
            poster="/landing/landing.png"
          >
            Tu navegador no soporta el elemento de video.
          </video>
          <div className="absolute inset-0 bg-black/50 backdrop-blur-md"></div>
          <div className="relative z-10 text-white text-center">
            {children}
          </div>
        </div>
      </div>
    );
}