import { Card } from '@/components/ui/card'
import Tag from '@/components/ui/tag'
import { ProjectDetail as ProjectDetailType } from '@/lib/types'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { LuExternalLink } from 'react-icons/lu'

type ProjectDetailProps = ProjectDetailType & {
  type: 'default' | 'reverse';
};

const ProjectDetail = ({
  name,
  description,
  technologies,
  url,
  image,
  type = 'default',
}: ProjectDetailProps) => {
  return (
    <Card className={'w-full max-w-6xl mx-auto flex flex-col md:flex-row'}>
      <div
        className={cn(
          'work-image',
          type === 'default'
            ? 'md:rounded-l-xl md:border-r'
            : 'md:order-last md:rounded-r-xl md: border-l',
        )}
      >
        <Link href={'/work/1'}>
          <Image
            src={image}
            alt={`${name} preview`}
            className={
              'rounded-xl shadow-lg transition-transform duration-500 md:hover:scale-105 object-cover'
            }
          />
        </Link>
      </div>
      <div
        className={cn(
          'work-content',
          type === 'default' ? '' : 'md:order-first',
        )}
      >
        <h3>{name}</h3>
        <p>{description}</p>
        <div className={'flex flex-wrap gap-2'}>
          {technologies.map((technology, index) => (
            <Tag label={technology} key={index} />
          ))}
        </div>
        <Link
          href={url}
          className={
            'self-start rounded-lg p-1.5 hover:bg-gray-50 [&_svg]:stroke-gray-500'
          }
        >
          <LuExternalLink />
        </Link>
      </div>
    </Card>
  )
}

export default ProjectDetail
