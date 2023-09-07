import Image from 'next/image'



export default async function Index() {

  return <div className='min-h-screen bg-slate-600  overflow-clip'>
    <Image
      src="/loginBG.jpg"
      fill={true}
      sizes='(min-width: 100%)'
      alt="Picture of the author" />
  </div>
}
