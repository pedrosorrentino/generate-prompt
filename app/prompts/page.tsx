import { HeroTitlePage, LexicaBarInput } from "@/components"
import { Metadata } from "next/types"

export const metadata: Metadata = {
  title: "Explore a World of Generated Prompts: Spark Your Creativity!",
  description:
    "Unlock your storytelling potential with a rich collection of diverse prompts generated for Stable Diffusion and Midjourney. Ignite your creativity and embark on exciting adventures through our curated selection of imaginative prompts. Discover endless inspiration and bring your stories to life. Explore now!",
}

const PromptsPage = () => {
  return (
    <main>
      <div className="mx-auto">
        <div className="mx-auto max-w-2xl">
          <HeroTitlePage
            title="Explore a World of Generated Prompts: Spark Your Creativity!"
            desc="Unlock your storytelling potential with a rich collection of diverse prompts generated for Stable Diffusion and Midjourney. Ignite your creativity and embark on exciting adventures through our curated selection of imaginative prompts. Discover endless inspiration and bring your stories to life. Explore now!"
          />
        </div>

        <LexicaBarInput />
      </div>
    </main>
  )
}

export default PromptsPage
