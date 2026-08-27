export default function Room4() {
  return (
    <div className="relative w-full h-screen">
      <div className=" w-full h-full ">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover">
          <source src="/video/room/room-4.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="absolute left-0 top-0 w-full h-full bg-[#230059b3]">

      </div>
    </div>
  );
}
