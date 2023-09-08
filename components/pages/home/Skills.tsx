import { skillList } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Skills = async () => {
  return (
    <>
      <section className={'section'} id={'skills'}>
        <div className={'container mx-auto'}>
          <div className={'flex flex-col items-center mb-12'}>
            <h2 className={'text-h2-semibold uppercase mb-2'}>Skills</h2>
            <p className={'text-subtitle-regular'}>
              These are some of the technologies and tools that I use on a daily
            </p>
          </div>
          <div className={'grid grid-cols-7 grid-flow-row gap-y-8'}>
            {skillList.map((skill, index) => (
              <div
                key={index}
                className={
                  'flex flex-col items-center justify-center gap-y-2'
                }>
                <div className={'flex flex-1'}>
                  <Image
                    src={skill.imgUrl}
                    alt={skill.name}
                    width={40}
                    height={40}
                  />
                </div>
                <p className={'text-body-regular-1'}>{skill.name}</p>
              </div>
              ))}
          </div>
        </div>
      </section>
    </>
  )
}
export default Skills
