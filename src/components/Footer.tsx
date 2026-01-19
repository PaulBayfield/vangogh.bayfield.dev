export default function Footer() {
  return (
    <footer
      className="px-[10%] xl:px-[15%] py-12 bg-[url('/footer.png')] bg-cover bg-center w-full text-white"
    >
      <div
        className="
          mx-auto
          flex
          flex-col-reverse
          gap-8
          md:flex-row
          md:justify-between
        "
      >
        <div
          className="
            flex
            flex-col
            gap-6
            bg-black/20
            backdrop-blur-sm
            rounded-2xl
            p-6
          "
        >
          <div className="flex flex-col gap-4">
            <img src="/logo.png" alt="Vincent Van Gogh" className="w-20 h-20" />

            <p className="text-xl font-semibold">Vincent Van Gogh</p>
          </div>

          <div className="text-md font-medium leading-relaxed">
            <p className="max-w-sm mb-4 italic">
              Toutes les images présentes sur le site sont la propriété de Peter
              Bayfield et ne peuvent être utilisées sans autorisation.
            </p>
            <p>
              Site réalisé par{" "}
              <a
                href="https://bayfield.dev"
                className="underline hover:no-underline hover:text-gray-200 hover:underline"
                target="_blank"
              >
                Paul Bayfield
              </a>
              .
            </p>
            <p>© 2024 - {new Date().getFullYear()}, tous droits réservés.</p>
          </div>
        </div>

        <div
          className="
            bg-black/20
            rounded-2xl
            p-6
            flex
            flex-col
            gap-6
            backdrop-blur-sm
          "
        >
          <div className="flex flex-col gap-6">
            <p className="text-3xl font-semibold">Navigation</p>

            <div className="flex flex-col gap-2 text-xl font-medium">
              <a href="#accueil" className="hover:underline">
                Accueil
              </a>
              <a href="#biographie" className="hover:underline">
                Biographie
              </a>
              <a href="#peintures" className="hover:underline">
                Peintures
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
