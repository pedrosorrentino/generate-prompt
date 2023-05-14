export async function generatePrompt(query: string) {
  try {
    const response = await fetch(
      "https://drviruz-prompt-generate.hf.space/api/predict",
      {
        headers: {
          Authorization: "Bearer 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",
        },
        method: "POST",
        body: JSON.stringify(query),
      }
    )
    const result = await response.json()
    return result
  } catch (error) {
    console.error(error)
  }
}

// export async function generatePrompt(query: string) {
//   try {
//     const response = await fetch(
//       "https://gustavosta-magicprompt-stable-diffusion.hf.space/api/predict",
//       {
//         method: "POST",

//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           data: [query],
//         }),
//       }
//     )
//     const data = await response.json()
//     console.log(data.data)
//   } catch (error) {
//     console.error(error)
//   }
// }

// https://txandim-succinctly-text2image-prompt-generator.hf.space/run/predict
