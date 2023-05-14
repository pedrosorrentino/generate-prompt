import { Footer, NavBar } from "@/components"
import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Unleash Your Imagination with an Prompt Generator",
  description:
    "Discover thrilling adventures with our prompt generator designed for Stable Diffusion and Midjourney. Find the perfect inspiration for your narratives and immerse yourself in worlds full of mystery, action and adventure. Visit us now and unlock the power of your imagination.",
  keywords: [
    "Adventure prompts",
    "prompt generator",
    "Stable Diffusion",
    "Midjourney",
    "storytelling inspiration",
    "creative writing tool",
    "immersive narratives",
    "mystery and action prompts",
    "epic storytelling",
    "ignite imagination",
    "captivating stories",
  ],
  authors: [{ name: "Pedro Sorrentino", url: "https://pedrosorrentino.com" }],
  creator: "OrdepDev",
  publisher: "Pedro Sorrentino",
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
