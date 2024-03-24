

export default function Home() {
  return (
    <main >
      <section className="h-[100vh] w-full pt-36 relative flex flex-col items-center
      justify-center">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        <p className="text-black translate-y-3">Everything you need to run your agency, in one place</p>

        <div className="py-7 bg-gradient-to-r from-[#33ccff] to-[#0000cc]
        text-transparent bg-clip-text relative">
          <h1 className="text-9xl font-bold md:text-[300px]">Σigma</h1>
        </div>
        <div className="flex justify-center items-center relative
        md:mt-[-70px]"></div>
      </section>
    </main>
  );
}
