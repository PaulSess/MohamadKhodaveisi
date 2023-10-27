import Image from 'next/image'

export default function herosection() {
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

          <div className='min-w-fit absolute inset-0 flex items-center justify-center'>
            <div>
              <h1
                className='text-white text-7xl'
                style={{ fontFamily: 'Archivo' }} >
                Mohamad Khodaveisi
              </h1>
              <h2
                className='text-[#E8E8E8] text-5xl text-center'
                style={{ fontFamily: 'Archivo' }}>
                Photography
              </h2>
            </div>
          </div>
      </section>

    </>
  )
}
