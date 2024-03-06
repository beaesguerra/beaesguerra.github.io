import * as React from 'react'
import Display from '../components/design-system/display'
import Text from '../components/design-system/text'
import Section from '../components/application/section'

const HeroBanner = () => {
  return (
    <div className="bg-rose-100 w-full">
      <Section className="md:min-h-[75vh] pt-2 md:pt-10 md:mt-0 mb-40 text-center justify-center md:w-3/4 m-auto pb-20">
        <Display variant="xl" tag="h1">Hello world!</Display> 
        <Text tag="p" className="md:w-4/6 mx-auto">
          My name is Bea and I am a software developer passionate about frontend development, design systems, accessibility, and learning! I enjoy using technology to create innovative solutions that help people!
        </Text>
      </Section>
    </div>
  )
}

export default HeroBanner