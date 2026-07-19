export default function SocialProof() {
  const items = [
    "Clínicas & saúde",
    "Escritórios",
    "Restaurantes",
    "Prestadores de serviço",
    "E-commerce local",
    "Profissionais liberais",
  ];

  return (
    <section className="border-y border-black/[0.06] bg-white py-10">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="text-center text-xs font-medium uppercase tracking-[0.18em] text-muted-soft">
          Ideal para negócios que precisam de presença digital profissional
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {items.map((item) => (
            <span
              key={item}
              className="text-sm font-medium tracking-tight text-muted sm:text-[15px]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
