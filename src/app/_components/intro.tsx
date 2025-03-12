export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Blog.
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        <a
          href="https://nextjs.org/"
          className="underline hover:text-blue-600 duration-200 transition-colors"
        >
          Samma
        </a>{" "}
        is a modern hybrid martial art from Eastern Africa with its own training
        curriculum (cheni 6) and a distinctive sparring method that combines the
        three ranges of man to man combat, that is; strike by an
        extension/stick, strike by limb (elbow, fist, knee and foot) and finally
        grappling.
      </h4>
    </section>
  );
}
