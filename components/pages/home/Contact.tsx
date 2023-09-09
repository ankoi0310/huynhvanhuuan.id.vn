import { CustomIcon } from '@/components/shared'
import Link from 'next/link'
import React from 'react'
import { FiCopy, FiMail, FiPhone } from 'react-icons/fi'
import {
  PiCopy,
  PiEnvelope,
  PiFacebookLogo,
  PiFacebookLogoFill,
  PiTwitterLogo,
  PiTwitterLogoFill,
  PiYoutubeLogo,
  PiYoutubeLogoFill,
} from 'react-icons/pi'

const Contact = () => {
  return (
    <>
      <section className={'section'} id={'contact'}>
        <div className={'container mx-auto'}>
          <div className={'flex flex-col items-center mb-12'}>
            <h2 className={'text-h2-semibold uppercase mb-2'}>Get in touch</h2>
            <p className={'text-subtitle-regular'}>
              Feel free to reach out to me for any inquiries
            </p>
          </div>
          <div className={'flex flex-col items-center mb-12 gap-y-3'}>
            <h3 className={'contact-info'}>
              <FiMail />
              <span>huynhvahuuan3620@gmail.com</span>
              <FiCopy />
            </h3>
            <h3 className={'contact-info'}>
              <FiPhone />
              <span>+84 787782050</span>
              <FiCopy />
            </h3>
          </div>
          <div className={'flex flex-col items-center gap-y-2'}>
            <span className={'text-small-regular'}>
              You may also find me on these platforms
            </span>
            <div className={'flex gap-x-4'}>
              <Link href={'https://www.github.com/ankoi0310'} target={'_blank'}>
                <CustomIcon
                  icon={<PiTwitterLogo />}
                  hoverIcon={<PiTwitterLogoFill />}
                />
              </Link>
              <Link href={'https://www.facebook.com/KOI0310.IT'} target={'_blank'}>
                <CustomIcon
                  icon={<PiFacebookLogo />}
                  hoverIcon={<PiFacebookLogoFill />}
                />
              </Link>
              <Link href={'https://www.youtube.com/@code_with_koi'} target={'_blank'}>
                <CustomIcon
                  icon={<PiYoutubeLogo />}
                  hoverIcon={<PiYoutubeLogoFill />}
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Contact
