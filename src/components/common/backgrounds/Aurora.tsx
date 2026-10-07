const Aurora = () => {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-[#020504]">
      <div className="absolute left-[-10%] top-[20%] h-75 w-[80%] -rotate-12 rounded-full bg-emerald-400/15 blur-[120px]" />

      <div className="absolute right-[-10%] top-[45%] h-70 w-[75%] rotate-15 rounded-full bg-cyan-400/10 blur-[120px]" />

      <div className="absolute bottom-[5%] left-[20%] h-50 w-[60%] rotate-[-8deg] rounded-full bg-teal-500/10 blur-[100px]" />
    </div>
  );
};

export default Aurora;
