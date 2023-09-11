'use client'

import Image from 'next/image'
import React from 'react'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  })

  return (
    <>
      <section className={'section section-even'} id={'about'}>
        <div className={'container mx-auto'}>
          <div className={'flex flex-col items-center mb-8'}>
            <h2 className={'text-h2-semibold uppercase'}>About me</h2>
          </div>
          <div className={'flex flex-row items-center justify-between'}>
            <div
              className={'relative flex flex-1 items-center justify-center'}
            >
              <Image
                alt={'About me'}
                className={'about-image object-top object-cover h-[300px] scale-125'}
                height={400}
                src={'/assets/images/about.png'}
                width={400}
              />
            </div>
            <div className={'flex flex-1 flex-col justify-start gap-y-4'}>
              <h2 className={'text-h3-semibold'}>
                Curious about me? <br />
                Here&#39;s a little bit about myself.
              </h2>
              <div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                </p>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                </p>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                </p>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
