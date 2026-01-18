import {
  biographyMain,
} from "@/content/biography";

export default function Biography() {
  return (
    <section className="bg-[var(--color-light-gray)] px-[10%] xl:px-[15%] py-12">
      <div className="flex flex-col gap-6 md:flex-row">
        <div
          className="p-9 rounded-xl text-white text-3xl flex gap-5 flex-col justify-center items-center"
          style={{
            background: "var(--color-dark-blue)",
            boxShadow: "var(--shadow-blue)",
            fontFamily: "var(--font-title)",
          }}
        >
          {biographyMain.map((p, i) => (
            <p key={i} className="mb-3">
              {p}
            </p>
          ))}
        </div>

        <img
          src="/eglise-aso.png"
          alt="L'église d'Auvers-sur-Oise"
          className="rounded-xl md:max-w-[50lvh] max-w-full object-cover"
          style={{ boxShadow: "var(--shadow-blue)" }}
        />
      </div>
    </section>
  );
}
