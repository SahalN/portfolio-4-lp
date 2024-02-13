/** @format */
import { inter } from "./font";
import "./global.css";
export default function RootLayout({ children }) {
  return (
    <html lang='en' className={inter.variable}>
      <body className='font-inter px-44 py-20'>
        <header></header>
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
