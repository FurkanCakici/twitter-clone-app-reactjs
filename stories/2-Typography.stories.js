import React from 'react'
import TextTitle from '../components/text-title'

export default {
  title: 'Typography'
}

export const Text = () => {
  return (
    <>
      <TextTitle>Merhaba Dünya</TextTitle>
      <TextTitle bold={false}>Merhaba Dünya</TextTitle>
    </>
  )
}
