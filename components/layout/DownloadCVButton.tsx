import { Button } from '@/components/ui/button'
import React from 'react'

const DownloadCvButton = () => {
  return (
    <Button onClick={() => window?.open('', '_blank')}>
      Download CV
    </Button>
  )
}
export default DownloadCvButton
