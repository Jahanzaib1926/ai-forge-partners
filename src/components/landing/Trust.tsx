const logos = ["NORTHWIND", "LUMEN", "ACME/AI", "VERTEX", "PARALLEL", "OCTANE"];

const Trust = () => {
  return (
    <section className="py-16 border-y border-border/60">
      <div className="container">
        <p className="text-center text-sm text-muted-foreground mb-10">
          Trusted by fast-growing startups and modern teams
        </p>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-x-8 gap-y-6 items-center justify-items-center">
          {logos.map((l) => (
            <span
              key={l}
              className="text-sm md:text-base font-semibold tracking-[0.2em] text-muted-foreground/70 hover:text-foreground transition-colors"
            >
              {l}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trust;
