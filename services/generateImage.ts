export async function generateImage(query: string) {
  try {
    const response = await fetch(
      "https://rabiyulfahim-prompt-refinery-text-to-image-generation.hf.space/run/TextAI2",
      {
        method: "POST",

        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: [query],
        }),
      }
    )
    const { data } = await response.json()
    const imageArray = data[0].filter((item: { name: string }) =>
      item.name.endsWith(".jpg")
    )
    return imageArray.map(
      (item: { name: string }) =>
        `https://rabiyulfahim-prompt-refinery-text-to-image-generation.hf.space/file=${item.name}`
    )
  } catch (error) {
    console.error(error)
  }
}

// export async function generateImage(data: any) {
//   const response = await fetch(
//     "https://api-inference.huggingface.co/models/runwayml/stable-diffusion-v1-5",
//     {
//       headers: {
//         Authorization: "Bearer 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",
//       },
//       method: "POST",
//       body: JSON.stringify(data),
//     }
//   )
//   const result = await response.blob()

//   return result
// }
