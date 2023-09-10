import Image from 'next/image'

export default async function Index() {

  return (
    <div className='relative min-h-screen'>
      <div className='absolute min-h-screen h-full w-full'>
        <img 
          className='min-h-full min-w-full max-w-none'
          alt='' 
          src="/loginBG_small.jpg" 
          srcSet="/loginBG_small.jpg 1000w, /loginBG_medium.jpg 1500w, /loginBG_large.jpg 1800w" />
      </div>
    </div>
  )
}
