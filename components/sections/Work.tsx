import ProjectDetail from '@/components/cards/ProjectDetail'
import { PROJECTS } from '@/lib/data'
import React from 'react'

const Work = ({}) => {
  return (
    <>
      <section className={'section'} id={'work'}>
        <div className={'container mx-auto'}>
          <div className={'flex flex-col items-center mb-12'}>
            <h2 className={'text-h2-semibold uppercase mb-2'}>Work</h2>
            <p className={'text-subtitle-regular'}>
              These are some of the projects that I have worked on
            </p>
          </div>
        </div>
        <div className={'flex flex-col gap-12'}>
          {
            PROJECTS.map((project, index) => (
              <ProjectDetail key={1} {...project} type={index % 2 == 0 ? 'default' : 'reverse'} />
            ))
          }
        </div>
      </section>
    </>
  )
}
export default Work
