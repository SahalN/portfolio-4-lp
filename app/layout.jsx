/** @format */
import Header from "../components/Header";
import { inter } from "./font";
import "./global.css";
export default function RootLayout({ children }) {
  return (
    <html lang='en' className={inter.variable}>
      <body className='font-inter px-[4.2rem] py-4'>
        <header>
          <Header />
        </header>
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
