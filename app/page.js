import Image from 'next/image'

export default function Home() {
  return (
    <>
      <section className='min-h-screen'>
          <Image
            src="/placeholder wallpaper.jpg"
            width={0}
            height={0}
            // sizes="100vw"
            layout='fill'
            objectFit='cover'
            style={{ height: '100%',  }} // optional
          />

          <div className='text-white min-w-fit absolute inset-0 flex items-center justify-center'>
            <div>
              <h1 className='text-4xl' >Mohamad Khodaveisi</h1>
              <h2 className='text-3xl text-center'>Photography</h2>
            </div>
          </div>
      </section>

    </>
  )
}
