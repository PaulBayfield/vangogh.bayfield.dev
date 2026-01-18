import {
  biographyHighlight,
} from "@/content/biography";

export default function Highlight() {
  return (
    <section className="bg-[var(--color-light-gray)] px-[10%] xl:px-[15%] py-12 flex flex-col md:flex-row gap-6">
      <img
        src="/dr-gachet.png"
        className="rounded-xl md:max-w-[50lvh] max-w-full object-cover"
        style={{ boxShadow: "var(--shadow-red)" }}
      />

      <div
        className="p-9 text-white rounded-xl text-3xl flex flex-col justify-center items-center gap-6"
        style={{
          background: "var(--color-dark-red)",
          boxShadow: "var(--shadow-red)",
        }}
      >
        {biographyHighlight.map((p, i) => (
          <p key={i} className="mb-3">
            {p}
          </p>
        ))}
      </div>
    </section>
  );
}
