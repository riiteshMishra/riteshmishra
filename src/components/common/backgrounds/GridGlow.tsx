const GridGlow = () => {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-[#030605]">
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(rgba(52,211,153,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(52,211,153,0.06)_1px,transparent_1px)]
          bg-size-[60px_60px]
        "
      />

      <div className="absolute left-1/2 top-1/2 size-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/10 blur-[150px]" />
    </div>
  );
};

export default GridGlow;
