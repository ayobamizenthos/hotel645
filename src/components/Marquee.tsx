const Marquee = () => {
  const items = [
    "LUXURY",
    "✦",
    "COMFORT",
    "✦",
    "TRANSPARENCY",
    "✦",
    "6:45 HOTELS",
    "✦",
    "ALAKUKO LAGOS",
    "✦",
    "PREMIUM SUITES",
    "✦",
    "24/7 SERVICE",
    "✦",
  ];

  return (
    <div className="w-full py-6 bg-primary/5 border-y border-primary/10 overflow-hidden">
      <div className="marquee-container">
        <div className="marquee-content">
          {[...items, ...items].map((item, index) => (
            <span
              key={index}
              className="mx-8 text-sm md:text-base font-medium tracking-[0.2em] text-primary/80"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;