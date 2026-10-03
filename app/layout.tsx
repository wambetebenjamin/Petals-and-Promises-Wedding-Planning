import './globals.css'
import type { Metadata } from 'next'
export const metadata: Metadata={title:'Petals & Promises | Wedding Planning in Nairobi',description:'Thoughtful wedding planning and destination celebrations across East Africa.'}
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
