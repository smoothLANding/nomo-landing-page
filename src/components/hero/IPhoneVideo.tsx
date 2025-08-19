export default function IPhoneVideo({ src }: { src: string }) {
  return (
    <div className="mx-auto" style={{ height: "72vh", maxHeight: 680 }}>
      {/* Bezel sized by height with aspect ratio to compute width */}
      <div className="relative mx-auto h-full aspect-[9/19.5] rounded-[42px] bg-black p-2 shadow-2xl ring-1 ring-black/50">
        {/* optional side buttons */}
        <span className="absolute left-[-6px] top-[20%] h-16 w-1.5 rounded-full bg-black/70" />
        <span className="absolute left-[-6px] top-[35%] h-10 w-1.5 rounded-full bg-black/70" />

        {/* Screen */}
        <div className="relative h-full w-full overflow-hidden rounded-[36px] bg-black">
          <video className="h-full w-full object-cover" src={src} autoPlay muted loop playsInline />
        </div>
      </div>
    </div>
  );
}


