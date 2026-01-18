import ExtLink from '../ExtLink'

export default function Experience() {
  return (
    <ol className="flex flex-col gap-2">
      {experiences.map(({ date, position, description, link }, i) => (
        <li
          className="relative flex flex-col gap-2 py-3 px-0 rounded-md"
          key={i}
        >
          <header className="text-zinc-700 text-sm">{date}</header>
          <h3 className="text-lg font-medium">
            <ExtLink href={link} target="_blank">
              {position}
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
    date: 'July 2021 - Present',
    position: 'Software Engineer · Fullness Web Solutions',
    link: 'https://www.fullness.io',
    description: (
      <>
        <p>
          Contributed to migration of multiple insurance verticals to Next.js
          and developed parts of a Go service powering live insurance pricing.
        </p>
        <p>
          Built a serverless pipeline that feeds data into Elasticsearch,
          improving query performance and reducing search latency. I work
          closely with product managers and designers to improve the user
          experience and continuously add new features and components to the UI.
        </p>
      </>
    ),
  },
]
