import Typography from '@/components/ui/typography'
import { cn } from '@/lib/utils'
import * as React from 'react'

interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
}

const Tag = React.forwardRef<HTMLDivElement, TagProps>(
  ({ label, className, ...props }: TagProps, ref) => {
    return (
      <div
        className={cn(
          'flex items-center justify-center rounded-xl bg-gray-200 px-5 py-1',
          className,
        )}
        {...props}
      >
        <Typography variant='body3' className='font-medium'>
          {label}
        </Typography>
      </div>
    )
  },
)

Tag.displayName = 'Tag'

export default Tag
