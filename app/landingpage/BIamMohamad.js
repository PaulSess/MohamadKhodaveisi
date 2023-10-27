import Image from 'next/image'

export default function BIamMohamad() {
  return (
    <>
      <section className='min-h-screen flex space-x-36 relative'>
        <Image
          className='ml-7'
          style={{marginTop:'5%', height: '40%', width: '40%' }}
          src="/canon_01.png"
          alt="picture of Mohamad Khodaveisi"
          width={0}
          height={0}
          sizes="20%"
          // style={{ height: '20%', width: '20%' }} // optional
        />
        {/* <Image
          className='rounded-full ml-40'
          style={{marginTop:'15%', height: '20%', width: '20%' }}
          src="/Mohamad Khodaveisi.jpg"
          alt="picture of Mohamad Khodaveisi"
          width={0}
          height={0}
          sizes="20%"
          // style={{ height: '20%', width: '20%' }} // optional
        /> */}

        <p className='w-1/2 text-[#E8E8E8] text-center absolute top-1/2 left-1/4'>
        "Welcome to the online home of Mohamad Khodaveisi, where passion meets purpose.<br></br>
        I am a dedicated individual with an unrelenting commitment to my craft.<br></br>
        Through this website, I invite you to explore the world of my passions and discover the stories that define my journey.
        Whether it's photography, art, or any other endeavor, I pour my heart and soul into every project, aiming to capture the essence of life and creativity.<br></br>
        Join me in this exploration of endless inspiration and let's embark on a shared journey of artistry and self-expression.
        Thank you for visiting, and I look forward to sharing my passions with you."
        </p>

      </section>

    </>
  )
}
