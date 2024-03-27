import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { pricingCards } from '@/lib/constants'
import clsx from 'clsx'
import { Check } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home () {
  return (
    <div className='flex flex-col p-3 md:p-10'>
      <section className='h-full w-full md:pt-44 mt-[-70px] relative flex items-center justify-center flex-col'>
        <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]' />

        <p className='relative text-muted-foreground mt-20 md:mt-0'>
          Everything you need to run your agency, in one place
        </p>
        <div
          className='py-7 md:mb-20 bg-gradient-to-r from-[#33ccff] to-[#0000cc]
        text-transparent bg-clip-text relative'
        >
          <h1 className='text-9xl font-bold md:text-[300px] md:mb-7'>Σigma</h1>
        </div>
        <div
          className='flex justify-center items-center relative
        md:mt-[-70px]'
        >
          <Image
            priority
            src={'/assets/preview.png'}
            alt='banner image'
            height={1200}
            width={1200}
            className='rounded-tl-2xl rounded-tr-2xl border-2 border-muted'
          />
        </div>
      </section>
      <section className='flex flex-col justify-center items-center gap-4 mt-10 md:mt-20'>
        <p className='text-muted-foreground text-center'>
          Our plans are tailored to meet your needs. If {"you're"} not ready to
          commit, you can start for free.
        </p>
        <div className='flex flex-wrap gap-4 items-center justify-center mt-6'>
          {pricingCards.map(card => (
            <Card
              key={card.title}
              className={`w-[300px] h-[350px] flex flex-col justify-between bg-slate-300  ${
                card.title === 'Unlimited Saas' && 'border-2 border-orange-700'
              }`}
            >
              <CardHeader>
                <CardTitle
                  className={clsx('', {
                    'text-muted-foreground': card.title !== 'Unlimited Saas'
                  })}
                >
                  {card.title}
                </CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <span className='text-4xl font-bold'>{card.price}</span>
                <span className='text-muted-foreground'>/m</span>
              </CardContent>
              <CardFooter className='flex flex-col items-start'>
                <div>
                  {card.features.map(feature => (
                    <div key={feature} className='inline-flex gap-2'>
                      <Check className='' />
                      <p>{feature}</p>
                    </div>
                  ))}
                </div>
                <Link
                  href={`/agency?plan=${card.priceId}`}
                  className={`w-full text-center p-2 rounded-sm  ${
                    card.title === 'Unlimited Saas'
                      ? 'bg-blue-600'
                      : 'bg-muted-foreground/10'
                  }`}
                >
                  Get Started
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
