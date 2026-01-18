export default function Separator({
  title,
  id,
}: {
  title: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className="h-48 bg-[var(--color-light-gray)] flex items-center justify-center"
    >
      <div
        className="px-8 py-6 rounded-xl text-white text-5xl"
        style={{
          background: "var(--color-dark-red)",
          boxShadow: "var(--shadow-red)",
        }}
      >
        {title}
      </div>
    </section>
  );
}
