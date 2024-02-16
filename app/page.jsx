/** @format */

export default function LandingPage() {
  return (
    <>
      {/*  */}
      <div className='flex flex-row py-[6rem] justify-between px-[4.2rem]'>
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
      <div className='flex flex-col py-24 text-center bg-[#F9FAFB] px-[4.2rem]'>
        <div className='flex justify-center '>
          <h1 className=' rounded-full bg-[#E5E7EB] max-w-max h-auto px-5 py-2'>
            About Me
          </h1>
        </div>
        <div className='flex flex-row text-left pt-[3.75rem]'>
          <div className='flex-1'>
            <img src='/images/main-image-2.png' alt='' />
          </div>
          <div className='flex-1'>
            <div className='pb-6'>
              <h2 className='text-3xl font-semibold'>
                Curious about me? Here you have it:
              </h2>
            </div>
            <div className='flex flex-col gap-4'>
              <div>
                <p>
                  I'm a passionate, self-proclaimed designer who specializes in
                  full stack development (React.js & Node.js). I am very
                  enthusiastic about bringing the technical and visual aspects
                  of digital products to life. User experience, pixel perfect
                  design, and writing clear, readable, highly performant code
                  matters to me.
                </p>
                <div>
                  <p>
                    I began my journey as a web developer in 2015, and since
                    then, I've continued to grow and evolve as a developer,
                    taking on new challenges and learning the latest
                    technologies along the way. Now, in my early thirties, 7
                    years after starting my web development journey, I'm
                    building cutting-edge web applications using modern
                    technologies such as Next.js, TypeScript, Nestjs,
                    Tailwindcss, Supabase and much more.
                  </p>
                </div>
                <div>
                  <p>
                    I am very much a progressive thinker and enjoy working on
                    products end to end, from ideation all the way to
                    development.
                  </p>
                </div>
                <div>
                  <p>
                    When I'm not in full-on developer mode, you can find me
                    hovering around on twitter or on indie hacker, witnessing
                    the journey of early startups or enjoying some free time.
                    You can follow me on Twitter where I share tech-related
                    bites and build in public, or you can follow me on GitHub.
                  </p>
                </div>
                <div>
                  <p>Finally, some quick bits about me.</p>
                </div>
              </div>
              <div>
                <ul className='grid grid-cols-2'>
                  <li>
                    <p>B.E. in Computer Engineering</p>
                  </li>
                  <li>
                    <p>Full time freelancer</p>
                  </li>
                  <li>
                    <p>Avid learner</p>
                  </li>
                  <li>
                    <p>Aspiring indie hacker</p>
                  </li>
                </ul>
              </div>
              <div>
                <p>
                  One last thing, I'm available for freelance work, so feel free
                  to reach out and say hello! I promise I don't bite 😉
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className='flex flex-col px-[4.2rem] py-24 text-center'>
        <div className='flex justify-center '>
          <h1 className=' rounded-full bg-[#E5E7EB] max-w-max h-auto px-5 py-2'>
            Skills
          </h1>
        </div>
        <div>
          <p className='pt-5 text-xl font-normal'>
            The skills, tools and technologies I am really good at:
          </p>
        </div>
        <div className='grid grid-cols-8 gap-12 pt-12'>
          <div className='flex flex-col gap-2 text-center place-items-center'>
            <div>
              <img src='/images/icon-javscript.png' alt='' />
            </div>
            <div>
              <p>Javascript</p>
            </div>
          </div>
          <div className='flex flex-col gap-2 text-center place-items-center'>
            <div>
              <img src='/images/icon-typescript.png' alt='' />
            </div>
            <div>
              <p>Javascript</p>
            </div>
          </div>
          <div className='flex flex-col gap-2 text-center place-items-center'>
            <div>
              <img src='/images/icon-react.png' alt='' />
            </div>
            <div>
              <p>Javascript</p>
            </div>
          </div>
          <div className='flex flex-col gap-2 text-center place-items-center'>
            <div>
              <img src='/images/icon-nextjs.png' alt='' />
            </div>
            <div>
              <p>Javascript</p>
            </div>
          </div>
          <div className='flex flex-col gap-2 text-center place-items-center'>
            <div>
              <img src='/images/icon-nodejs.png' alt='' />
            </div>
            <div>
              <p>Javascript</p>
            </div>
          </div>
          <div className='flex flex-col gap-2 text-center place-items-center'>
            <div>
              <img src='/images/icon-express.png' alt='' />
            </div>
            <div>
              <p>Javascript</p>
            </div>
          </div>
          <div className='flex flex-col gap-2 text-center place-items-center'>
            <div>
              <img src='/images/icon-nest.png' alt='' />
            </div>
            <div>
              <p>Javascript</p>
            </div>
          </div>
          <div className='flex flex-col gap-2 text-center place-items-center'>
            <div>
              <img src='/images/icon-socket.png' alt='' />
            </div>
            <div>
              <p>Javascript</p>
            </div>
          </div>
          <div className='flex flex-col gap-2 text-center place-items-center'>
            <div>
              <img src='/images/icon-postgresql.png' alt='' />
            </div>
            <div>
              <p>Javascript</p>
            </div>
          </div>
          <div className='flex flex-col gap-2 text-center place-items-center'>
            <div>
              <img src='/images/icon-mongodb.png' alt='' />
            </div>
            <div>
              <p>Javascript</p>
            </div>
          </div>
          <div className='flex flex-col gap-2 text-center place-items-center'>
            <div>
              <img src='/images/icon-sass.png' alt='' />
            </div>
            <div>
              <p>Javascript</p>
            </div>
          </div>
          <div className='flex flex-col gap-2 text-center place-items-center'>
            <div>
              <img src='/images/icon-tailwindcss.png' alt='' />
            </div>
            <div>
              <p>Javascript</p>
            </div>
          </div>
          <div className='flex flex-col gap-2 text-center place-items-center'>
            <div>
              <img src='/images/icon-cypress.png' alt='' />
            </div>
            <div>
              <p>Javascript</p>
            </div>
          </div>
          <div className='flex flex-col gap-2 text-center place-items-center'>
            <div>
              <img src='/images/icon-storybook.png' alt='' />
            </div>
            <div>
              <p>Javascript</p>
            </div>
          </div>
          <div className='flex flex-col gap-2 text-center place-items-center'>
            <div>
              <img src='/images/icon-javscript.png' alt='' />
            </div>
            <div>
              <p>Javascript</p>
            </div>
          </div>
          <div className='flex flex-col gap-2 text-center place-items-center'>
            <div>
              <img src='/images/icon-git.png' alt='' />
            </div>
            <div>
              <p>Javascript</p>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className='flex flex-col gap-12 text-center  px-[17rem] py-24  bg-[#F9FAFB]'>
        <div className='flex justify-center'>
          <h1 className=' rounded-full bg-[#E5E7EB] max-w-max h-auto px-5 py-2 font-semibold text-xl'>
            Experience
          </h1>
        </div>
        <div>
          <p className='text-xl'>
            Here is a quick summary of my most recent experiences:
          </p>
        </div>
        <div className='p-8 bg-white rounded-lg shadow-lg'>
          <div className='flex flex-row justify-between '>
            <div>
              <img src='/images/logo-upwork.png' alt='' />
            </div>
            <div className='flex flex-col w-96'>
              <div>
                <p className='pb-4 text-xl font-semibold text-left'>
                  Sr. Frontend Developer
                </p>
              </div>
              <div>
                <ul className='text-left list-disc list-inside text-[#4B5563] '>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                  <li>
                    Ut pretium arcu et massa semper, id fringilla leo semper.
                  </li>
                  <li>Sed quis justo ac magna.</li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <p>Nov 2021 - Present</p>
            </div>
          </div>
        </div>
        <div className='p-8 bg-white rounded-lg shadow-lg'>
          <div className='flex flex-row justify-between '>
            <div>
              <img src='/images/logo-upwork.png' alt='' />
            </div>
            <div className='flex flex-col w-96'>
              <div>
                <p className='pb-4 text-xl font-semibold text-left'>
                  Sr. Frontend Developer
                </p>
              </div>
              <div>
                <ul className='text-left list-disc list-inside text-[#4B5563] '>
                  <li>Sed quis justo ac magna.</li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                  <li>Sed quis justo ac magna.</li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <p>Jul 2017 - Oct 2021</p>
            </div>
          </div>
        </div>
        <div className='p-8 bg-white rounded-lg shadow-lg'>
          <div className='flex flex-row justify-between '>
            <div>
              <img src='/images/logo-upwork.png' alt='' />
            </div>
            <div className='flex flex-col w-96'>
              <div>
                <p className='pb-4 text-xl font-semibold text-left'>
                  Sr. Frontend Developer
                </p>
              </div>
              <div>
                <ul className='text-left list-disc list-inside text-[#4B5563] '>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <p>Dec 2015 - May 2017</p>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className='flex flex-col gap-12 text-center  px-[17rem] py-24  bg-[#F9FAFB]'>
        <div className='flex justify-center'>
          <h1 className='rounded-full bg-[#E5E7EB] max-w-max h-auto px-5 py-2 font-semibold text-xl'>
            Work
          </h1>
        </div>
        <div>
          <p>Some of the noteworthy projects I have built:</p>
        </div>
        <div className='grid grid-cols-2'>
          <div>
            <div>
              <img src='' alt='' />
            </div>
          </div>
          <div>
            {" "}
            <div className='flex flex-col gap-6'>
              <div>
                <h1>Fiskil</h1>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante
                  ipsum primis in faucibus orci luctus et ultrices posuere
                  cubilia curae.
                </p>
              </div>
              <div>
                <div>
                  <h3></h3>
                </div>
                <div>
                  <h3></h3>
                </div>
                <div>
                  <h3></h3>
                </div>
                <div>
                  <h3></h3>
                </div>
                <div>
                  <h3></h3>
                </div>
                <div>
                  <h3></h3>
                </div>
                <div>
                  <h3></h3>
                </div>
                <div>
                  <h3></h3>
                </div>
                <div>
                  <h3></h3>
                </div>
                <div>
                  <h3></h3>
                </div>
              </div>
              <div>
                <h3></h3>
              </div>
            </div>
          </div>
          <div>3</div>
          <div>
            <img src='' alt='' />
          </div>
          <div>
            <img src='' alt='' />
          </div>
          <div>6</div>
        </div>
      </div>
    </>
  );
}
