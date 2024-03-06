import * as React from 'react'
import Display from '../components/design-system/display'
import Text from '../components/design-system/text'
import Section from '../components/application/section'

const HeroBanner = () => {
  return (
    <div className="bg-gradient-to-br from-rose-100 to-rose-300 w-full">
      <Section className="md:min-h-[75vh] pt-10 md:pt-10 md:mt-0 mb-40 text-center justify-center md:w-3/4 m-auto pb-20">
        <div className="bg-white/95 rounded-3xl md:w-4/6 mx-auto px-4 py-8 md:py-12">
          <Display variant="xl" tag="h1">Hello world!</Display> 
          <Text tag="p">
            My name is Bea and I am a software developer passionate about frontend development, design systems, accessibility, and learning! I enjoy using technology to create innovative solutions that help people!
          </Text>
        </div>
      </Section>
    </div>
  )
}

export default HeroBanner