/** @format */

import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className='flex flex-row items-center justify-between'>
        <div>
          <img src='/images/logo.png' alt='' />
        </div>
        <div>
          <nav>
            <ul className='flex flex-row items-center gap-5'>
              <li>
                <Link href='./'>About</Link>
              </li>
              <li>
                <Link href='./'>Work </Link>
              </li>
              <li>
                <Link href='./'>Testimonials</Link>
              </li>
              <li>
                <Link href='./'>Contact</Link>
              </li>
              <li>
                <a href=''>icon</a>
              </li>
              <li>
                <button className='px-4 py-2 text-white bg-black rounded-xl'>
                  Download CV
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
