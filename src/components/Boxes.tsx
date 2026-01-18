import { biographyBoxes } from "@/content/biography";

export default function BiographyBoxes() {
  return (
    <section className="px-[10%] xl:px-[15%] py-12 grid grid-cols-1 gap-6 md:grid-cols-2 gap-6">
      <div
        className="p-9 text-white rounded-xl text-3xl flex justify-center items-center"
        style={{
          background: "var(--color-dark-yellow)",
          boxShadow: "var(--shadow-yellow)",
        }}
      >
        {biographyBoxes[0]}
      </div>

      <div
        className="h-full rounded-xl bg-cover bg-center min-h-[250px]"
        style={{
          backgroundImage: "url('/champ-corbeaux.png')",
          boxShadow: "var(--shadow-yellow)",
        }}
      />

      <div
        className="h-full rounded-xl bg-cover bg-center min-h-[250px]"
        style={{
          backgroundImage: "url('/crepuscule-aso.png')",
          boxShadow: "var(--shadow-yellow)",
        }}
      />

      <div
        className="p-9 text-white rounded-xl text-3xl flex justify-center items-center"
        style={{
          background: "var(--color-dark-yellow)",
          boxShadow: "var(--shadow-yellow)",
        }}
      >
        {biographyBoxes[1]}
      </div>
    </section>
  );
}
