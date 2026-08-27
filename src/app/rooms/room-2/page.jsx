export default function Room2() {
  return (
    <div className="relative w-full h-screen">
      <div className=" w-full h-full ">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover">
          <source src="/video/room/room-2.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="absolute left-0 top-0 w-full h-full bg-[linear-gradient(45deg,#0d003d87,#b73ab424)] backdrop-brightness-50">

      </div>
    </div>
  );
}
