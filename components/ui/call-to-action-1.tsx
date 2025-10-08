export default function DownloadResumeCTA() {
  return (
    <>
      <div className="mx-2 mt-60 flex max-w-5xl flex-col items-center justify-center rounded-2xl bg-gradient-to-b from-[#5524B7] to-[#380B60] p-10 py-16 text-center font-sans text-white md:mx-auto md:w-full">
        <div className="flex flex-wrap items-center justify-center rounded-full border border-purple-500/40 bg-purple-600/10 p-1 text-sm backdrop-blur">
          <div className="flex items-center">
            <span className="mr-2 text-lg">💼</span>
            <span className="mr-2 text-lg">🚀</span>
            <span className="text-lg">📈</span>
          </div>
          <p className="ml-2 font-medium">
            Trusted by leading companies and startups
          </p>
        </div>
        <h1 className="mt-5 max-w-xl bg-gradient-to-r from-white to-[#CAABFF] bg-clip-text text-4xl font-semibold text-transparent md:text-5xl md:leading-[60px]">
          See my credentials & expertise
        </h1>
        <p className="mt-4 max-w-md text-white/80">
          Download my resume to learn more about my experience, skills, and how
          I can help bring your next project to life.
        </p>
        <a
          href="https://docs.google.com/document/d/15DKjg8zZwIXyBa8Bva6vI90dvgSh34HxlHaPAnwGOJE/edit?usp=sharing"
          download
          className="mt-8 inline-block rounded-full bg-violet-600 px-8 py-3 text-sm uppercase text-white transition-all hover:bg-violet-700"
        >
          Download Resume
        </a>
      </div>
    </>
  );
}
