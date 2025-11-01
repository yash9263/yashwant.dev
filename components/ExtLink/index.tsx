import { cn } from '@/utils/cn'
import TopRight from '../Icons/TopRight'

export default function ExtLink({
  href,
  children,
  className,
  showIcon = true,
  target = '_blank',
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: React.ReactNode
  showIcon?: boolean
}) {
  return (
    <a
      href={href}
      target={target}
      rel="noopener noreferrer"
      className={cn('group inline-block', className)}
      {...props}
    >
      {children}
      {showIcon ? (
        <TopRight className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-200" />
      ) : null}
    </a>
  )
}
