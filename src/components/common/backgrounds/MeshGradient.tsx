const MeshGradient = () => {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-[#050807]">
      <div className="absolute left-[10%] top-[15%] size-105 rounded-full bg-emerald-600/20 blur-[150px]" />

      <div className="absolute right-[5%] top-[30%] size-125 rounded-full bg-cyan-500/15 blur-[170px]" />

      <div className="absolute bottom-[5%] left-[35%] size-112.5 rounded-full bg-green-400/10 blur-[160px]" />
    </div>
  );
};

export default MeshGradient;
