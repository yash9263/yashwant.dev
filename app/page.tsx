import Experience from '@/components/Experience'
import ExtLink from '@/components/ExtLink'
import CursorBlur from '@/components/CursorBlur'

export default function Home() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-zinc-50">
      <CursorBlur />
      <main className="relative flex min-h-dvh w-full max-w-2xl flex-col py-20 px-8 sm:px-16 gap-4">
        <h1 className="text-3xl font-semibold text-black">Yashwant</h1>
        <time className="text-zinc-600 text-sm" dateTime="2025-10-31">
          October 31, 2025
        </time>
        <div className="flex flex-col gap-16 text-pretty">
          <section className="flex flex-col gap-4" id="about">
            <p className="max-w-lg text-pretty">
              I&apos;m a software engineer with a passion for problem solving. I
              enjoy building visually engaging and performant frontends and the
              backend systems that power them. I love exploring new technologies
              and building prototypes to validate ideas.
            </p>
            <p className="max-w-lg">
              I currently work at{' '}
              <ExtLink href="https://www.canstar.com.au" target="_blank">
                Canstar
              </ExtLink>
              , where I contribute to the creation of new features and ui
              components and the migration of existing ones to the new tech
              stack, and also help with imporving the internal tools and
              processes.
            </p>
            <p>
              In my spare time, I enjoy going for runs, vibing to 80s music, or
              getting lost in the world of cyberpunk fiction.
            </p>
          </section>
          <section id="experience">
            <Experience />
            <p>
              <ExtLink href="/resume.pdf" target="_blank">
                View full resume
              </ExtLink>
            </p>
          </section>
          <section className="flex flex-col gap-4" id="contact">
            <p className="max-w-lg">
              you can reach me at{' '}
              <a href="mailto:yashwant8530@gmail.com">yashwant8530@gmail.com</a>
            </p>
            <p>
              <ExtLink href="https://github.com/yash9263" target="_blank">
                Github
              </ExtLink>{' '}
              <ExtLink
                href="https://www.linkedin.com/in/yashwant-sharma-3aa159193/"
                target="_blank"
              >
                Linkedin
              </ExtLink>
            </p>
            <p className="text-zinc-500 text-sm">
              procrastinating on writing more stuff here...
            </p>
          </section>
        </div>
      </main>
    </div>
  )
}
