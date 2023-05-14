import {
  GenerateOptions,
  HeroTitlePage,
  ShowSelectedOptions,
  TextBarInput,
} from "@/components"

export default async function Home() {
  return (
    <main>
      <div className="mx-auto max-w-2xl">
        <HeroTitlePage
          title="Unleash Your Creativity Prompts"
          desc="Discover limitless storytelling inspiration with our prompt generator for Stable Diffusion and Midjourney. Create captivating narratives filled with mystery, action, and imagination. Ignite your creativity and embark on a journey that will captivate your readers. Start generating prompts now!"
        />
        <TextBarInput />
        <GenerateOptions />
        <ShowSelectedOptions />
      </div>
    </main>
  )
}

// const negative_prompts = [
//   "(((ugly)))",
//   "(((duplicate)))",
//   "((morbid))",
//   "((mutilated))",
//   "[out of frame]",
//   "extra fingers",
//   "mutated hands",
//   "((poorly drawn hands))",
//   "((poorly drawn face))",
//   "(((mutation)))",
//   "(((deformed)))",
//   "blurry",
//   "((bad anatomy))",
//   "(((bad proportions)))",
//   "((extra limbs))",
//   "cloned face",
//   "(((disfigured)))",
//   "gross proportions",
//   "((malformed limbs))",
//   "((missing arms))",
//   "((missing legs))",
//   "(((extra arms)))",
//   "(((extra legs)))",
//   "(fused fingers)",
//   "(too many fingers)",
//   "(((long neck)))",
// ]
