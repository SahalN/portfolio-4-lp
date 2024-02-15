/** @format */

export default function LandingPage() {
  return (
    <>
      {/*  */}
      <div className='flex flex-row py-[6rem] justify-between '>
        <div className='flex flex-col  mr-[8rem]'>
          <div className='flex flex-row items-center '>
            <div>
              <h1 className='text-6xl font-bold '>Hi, I’m Sagar</h1>
            </div>
            <div>
              <img src='/images/waving.png' alt='' />
            </div>
          </div>
          <div>
            <p className='pt-2 text-base w-[48rem]'>
              I'm a full stack developer (React.js & Node.js) with a focus on
              creating (and occasionally designing) exceptional digital
              experiences that are fast, accessible, visually appealing, and
              responsive. Even though I have been creating web applications for
              over 7 years, I still love it as if it was something new.
            </p>
          </div>
          <div className='py-12'>
            <div className='flex flex-row items-center p-1 gap-x-2'>
              <div>
                <img src='/images/map.png' alt='' className='w-3' />
              </div>
              <div>
                <p>Ahmedabad, India</p>
              </div>
            </div>
            <div className='flex flex-row items-center p-1 gap-x-2'>
              <div>
                <img src='/images/dot.png' alt='' className='w-3' />
              </div>
              <div>
                <p>Available for new projects</p>
              </div>
            </div>
          </div>
          <div className='flex flex-row gap-1'>
            <div>
              <img src='/images/github.png' alt='' />
            </div>
            <div>
              <img src='/images/twitter.png' alt='' />
            </div>
            <div>
              <img src='/images/figma.png' alt='' />
            </div>
          </div>
        </div>
        <div>
          <img
            src='/images/main-image.png'
            alt=''
            className='w-[17.5rem] h-[20rem]'
          />
        </div>
      </div>
      {/*  */}
      <div className='py-6'></div>
    </>
  );
}
