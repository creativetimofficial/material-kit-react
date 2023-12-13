import Navbar from "@/components/navbar"

import "./globals.css"

export const metadata = {
  title: 'CodeMate',
  description: 'Find love',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        </body>
    </html>
  )
}
