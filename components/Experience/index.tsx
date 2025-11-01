import ExtLink from '../ExtLink'

export default function Experience() {
  return (
    <ol className="flex flex-col gap-2">
      {experiences.map(({ date, position, description, link }, i) => (
        <li
          className="group relative flex flex-col gap-2 py-3 px-0 rounded-md"
          key={i}
        >
          <header className="text-zinc-700 text-sm">{date}</header>
          <h3 className="text-lg font-medium">
            <ExtLink
              href={link}
              target="_blank"
              className="text-black group-hover:text-blue-600 transition-colors duration-200"
            >
              {position}
              <span className="absolute inset-0" aria-hidden="true"></span>
            </ExtLink>
          </h3>
          {description}
        </li>
      ))}
    </ol>
  )
}

const experiences = [
  {
    date: 'August 2024 - Present',
    position: 'Software Engineer · Canstar (via Fullness)',
    link: 'https://www.canstar.com.au',
    description: (
      <p>
        Built a serverless pipeline that feeds data into Elasticsearch,
        improving query performance and reducing search latency. Contributed to
        migrating insurance verticals to Next.js and developed parts of a Go
        service powering live insurance pricing. I work closely with product
        managers and designers to improve the user experience and continuously
        add new features and components to the UI.
      </p>
    ),
  },
  {
    date: 'July 2021 - July 2024',
    position:
      'Fullstack Developer · Ratecity · acquired by Canstar (via Fullness)',
    link: 'https://www.ratecity.com.au',
    description: (
      <p>
        Develop and maintain RateCity&apos;s financial comparison platform.
        Collaborate with RateCity&apos;s product and design teams to improve
        user experience. Spearheaded several tooling migrations, introducing
        TypeScript across multiple repositories and updating outdated tooling,
        resulting in cleaner codebases and a smoother developer workflow.
      </p>
    ),
  },
]
