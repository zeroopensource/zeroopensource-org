import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Github,
  Twitter,
  Facebook,
  Youtube,
  Linkedin,
  Coffee,
  Link,
  MessageCircle,
} from 'lucide-react'
import { SlSocialReddit } from 'react-icons/sl'

const projects = [
  {
    name: 'ZeroUI',
    description:
      'A modern headless UI toolkit for React, built with performance and accessibility in mind.',
  },
  {
    name: 'ZeroAuth',
    description:
      'A plug-and-play authentication system for Next.js apps with zero config.',
  },
  {
    name: 'ZeroDB',
    description:
      'A lightweight embedded database optimized for edge and serverless environments.',
  },
]

const socialLinks = [
  { icon: Link, href: 'https://zeroopensource.org/' },
  { icon: Github, href: 'https://github.com/ZeroOpenSource' },
  { icon: MessageCircle, href: 'https://discord.gg/2a5HcmxvgC' },
  { icon: Twitter, href: 'https://x.com/ZeroOpenSource' },
  { icon: Facebook, href: 'https://www.facebook.com/ZeroOpenSource' },
  { icon: SlSocialReddit, href: 'https://www.reddit.com/r/ZeroOpenSource' },
  { icon: Youtube, href: 'https://www.youtube.com/@ZeroOpenSource' },
  { icon: Linkedin, href: 'https://www.linkedin.com/company/zeroopensource' },
  { icon: Link, href: 'https://linktr.ee/zeroopensource' },
  { icon: Coffee, href: 'https://ko-fi.com/zeroopensource' },
  { icon: Coffee, href: 'https://buymeacoffee.com/zeroopensource' },
]

export default function Home() {
  return (
    <main className='min-h-screen bg-[#212121] text-white px-4 py-12 md:px-24'>
      <section className='text-center space-y-6'>
        <h1 className='text-4xl md:text-6xl font-bold'>Zero Open Source™</h1>
        <p className='text-lg md:text-xl max-w-2xl mx-auto'>
          Welcome to Zero — an independent open source organization crafting
          tools, libraries, and applications for a faster, freer, and more open
          future.
        </p>
      </section>

      <section className='mt-16'>
        <h2 className='text-2xl md:text-4xl font-semibold text-center mb-10'>
          Upcoming Projects
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {projects.map(project => (
            <Card key={project.name} className='bg-[#2b2b2b] border-none'>
              <CardContent className='p-6'>
                <h3 className='text-xl font-semibold mb-2'>{project.name}</h3>
                <p className='text-sm text-gray-300'>{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className='mt-16 text-center'>
        <h2 className='text-2xl md:text-3xl font-semibold mb-6'>Follow Us</h2>
        <div className='flex flex-wrap justify-center gap-4'>
          {socialLinks.map(({ icon: Icon, href }, idx) => (
            <a
              key={idx}
              href={href}
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-gray-300'
            >
              <Icon className='w-6 h-6' />
            </a>
          ))}
        </div>
      </section>

      <footer className='mt-24 text-center text-gray-400 text-sm'>
        <p className='flex flex-col justify-center text-center gap-1'>
          <span className='whitespace-nowrap'>
            &copy; {new Date().getFullYear()} Zero Open Source™
          </span>
          <span className='whitespace-nowrap'>
            (aka ZeroOpenSource™; Zero)
          </span>
          <span className='whitespace-nowrap'>All rights reserved.</span>
        </p>
      </footer>
    </main>
  )
}
