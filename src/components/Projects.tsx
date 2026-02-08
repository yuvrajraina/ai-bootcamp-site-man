import { projects } from "@/lib/content";

export default function Projects() {
  return (
    <section className="section-padding bg-white/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate">
            Projects
          </p>
          <h2 className="text-3xl font-semibold text-ink sm:text-4xl">
            Build real AI applications
          </h2>
          <p className="max-w-2xl text-base text-slate">
            Every two weeks you ship a project. By the end, your capstone is portfolio ready.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div key={project.title} className="glass rounded-3xl p-6">
              <h3 className="text-lg font-semibold text-ink">{project.title}</h3>
              <p className="mt-2 text-sm text-slate">{project.description}</p>
              <div className="mt-4 rounded-2xl border border-white/40 bg-white/70 px-4 py-3 text-sm text-slate">
                {project.outcome}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
