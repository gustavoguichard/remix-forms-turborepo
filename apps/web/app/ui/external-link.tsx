import { cx } from '~/helpers'

export default function ExternalLink({
  className,
  ...props
}: JSX.IntrinsicElements['a']) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      {...props}
      className={cx('underline', className)}
    />
  )
}
