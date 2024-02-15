/** @format */
import Header from "../components/Header";
import { inter } from "./font";
import "./global.css";
export default function RootLayout({ children }) {
  return (
    <html lang='en' className={inter.variable}>
      <body className='py-4 font-inter'>
        <header className='px-[4.2rem]'>
          <Header />
        </header>
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
