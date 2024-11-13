import React from 'react'

const Contact = () => {
  return (
    <>
      <section className=' text-black'>
        <h1 className=' text-center'>contact us</h1>
        <div className="bg-zinc-200 p-10 w-full flex flex-col justify-center items-center md:flex-row">
          <form action="" className=' flex flex-col gap-8 p-3 w-3/5 '>
            <input type="text" className=' bg-white rounded-md h-12 outline-none text-red-800' />
            <input type="text" className=' bg-white rounded-md h-12 outline-none text-red-800' />
            <input type="text" className=' bg-white rounded-md h-12 outline-none text-red-800' />
            <div className=" flex justify-around items-center gap-3">
              <button type="submit" className=' bg-orange-500 p-2 rounded-md w-1/2'>send</button>
              <button type="submit" className=' bg-orange-500 p-2 rounded-md w-1/2'>register</button>
            </div>
          </form>
        </div>
      </section>

    </>
  )
}

export default Contact
