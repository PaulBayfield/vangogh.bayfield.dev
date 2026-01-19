export default function Information() {
  return (
    <section className="px-[10%] xl:px-[15%] py-12 flex flex-col gap-6">
      <div
        className="p-9 text-white rounded-xl text-3xl flex flex-col gap-6 justify-center items-center"
        style={{
          background: "var(--color-blue)",
          boxShadow: "var(--shadow-blue)",
        }}
      >
        <p>Site réalisé à la suite d'une visite en décembre 2023 au musée d’Orsay, à l’exposition <i>Van Gogh à Auvers-sur-Oise - Les derniers mois</i>. Toutes les images présentes ont été prises lors de cette visite.</p>
        <p>Vous souhaitez voir d’autres de mes réalisations ? Rendez-vous sur mon Portfolio disponible à l’adresse suivante : <a className="underline hover:no-underline hover:text-gray-200 hover:underline" href="https://bayfield.dev" target="_blank" data-umami-event="Portfolio">https://bayfield.dev</a>.</p>
      </div>
    </section>
  );
}
