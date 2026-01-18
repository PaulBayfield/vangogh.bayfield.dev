import { biographyConclusion } from "@/content/biography";

export default function DoubleSection() {
  return (
    <section className="px-[10%] xl:px-[15%] py-12 flex flex-col gap-6">
      <div
        className="p-9 text-white rounded-xl text-3xl flex justify-center items-center"
        style={{
          background: "var(--color-light-green)",
          boxShadow: "var(--shadow-green)",
          fontFamily: "var(--font-title)",
        }}
      >
        {biographyConclusion}
      </div>

      <div
        className="h-48 rounded-xl bg-cover bg-center"
        style={{
          backgroundImage: "url('/paysage-aso.png')",
          boxShadow: "var(--shadow-green)",
        }}
      />
    </section>
  );
}
