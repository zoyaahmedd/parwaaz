// The Parwaaz homepage: hero, features, how it works, opportunity types, and a call to action.
// Content lives in the arrays below so it is easy to edit without touching the layout.

const features = [
  {
    icon: "🎯",
    title: "Personalised recommendations",
    description:
      "Tell us your skills, interests and education. We match you with the opportunities that fit you best, and explain why.",
  },
  {
    icon: "🎓",
    title: "Opportunities in one place",
    description:
      "Jobs, scholarships, fellowships and courses from across Pakistan and abroad, with deadlines so you never miss one.",
  },
  {
    icon: "📄",
    title: "AI resume feedback",
    description:
      "Upload your resume to see which skills you already have, what's missing for your goals, and free resources to learn it.",
  },
];

const steps = [
  { title: "Create your profile", description: "Add your skills, interests and education. It takes two minutes." },
  { title: "Get matched", description: "See opportunities ranked for you, with the reasons each one fits." },
  { title: "Grow your skills", description: "Upload your resume and follow a learning path to close any gaps." },
];

const opportunityTypes = [
  { label: "Jobs", description: "Remote and on-site roles across industries" },
  { label: "Scholarships", description: "Funding for study in Pakistan and abroad" },
  { label: "Fellowships", description: "Leadership, research and tech programmes" },
  { label: "Courses", description: "Free and low-cost ways to learn new skills" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-light/60 to-white">
        <div className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6 sm:py-28">
          <p className="font-urdu text-3xl text-brand sm:text-4xl" lang="ur" dir="rtl">
            پرواز
          </p>
          <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-bold tracking-tight text-ink sm:text-6xl">
            Opportunities that help Pakistani women take flight
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
            Find jobs, scholarships, fellowships and courses matched to your skills, and get clear,
            practical feedback on how to grow.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#get-started"
              className="w-full rounded-full bg-brand px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-dark sm:w-auto"
            >
              Create your free profile
            </a>
            <a
              href="#how-it-works"
              className="w-full rounded-full border border-stone-300 px-6 py-3 font-semibold text-ink transition-colors hover:border-brand hover:text-brand sm:w-auto"
            >
              See how it works
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="scroll-mt-16 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center text-3xl font-bold tracking-tight">Everything you need in one place</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-2xl border border-stone-200 p-6">
                <div className="text-3xl" aria-hidden="true">
                  {feature.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-muted">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="scroll-mt-16 bg-surface py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center text-3xl font-bold tracking-tight">How it works</h2>
          <ol className="mt-12 grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <li key={step.title} className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand font-bold text-white">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="mt-1 text-muted">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Opportunity types */}
      <section id="opportunities" className="scroll-mt-16 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center text-3xl font-bold tracking-tight">What you&apos;ll find</h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {opportunityTypes.map((type) => (
              <div key={type.label} className="rounded-2xl bg-brand-light/50 p-6">
                <h3 className="text-lg font-semibold text-brand">{type.label}</h3>
                <p className="mt-1 text-sm text-muted">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section id="get-started" className="scroll-mt-16 px-4 pb-20 sm:px-6">
        <div className="mx-auto max-w-4xl rounded-3xl bg-brand px-6 py-14 text-center text-white">
          <h2 className="text-3xl font-bold tracking-tight">Ready to take flight?</h2>
          <p className="mx-auto mt-4 max-w-xl text-brand-light">
            Sign-up opens soon. Parwaaz is being built in the open, so follow along on GitHub.
          </p>
          <a
            href="https://github.com/zoyaahmedd/parwaaz"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-white px-6 py-3 font-semibold text-brand transition-colors hover:bg-brand-light"
          >
            Follow the project
          </a>
        </div>
      </section>
    </>
  );
}
