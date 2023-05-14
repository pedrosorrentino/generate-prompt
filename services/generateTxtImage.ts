export async function generateTxt(query: string) {
  try {
    const response = await fetch(
      "https://rabiyulfahim-prompt-refinery-text-to-image-generation.hf.space/run/TextAI",
      {
        method: "POST",

        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: [query],
        }),
      }
    )
    const data = await response.json()
    const res = data.data[0]
      .split("\n")
      .filter((value: any) => value.trim() !== "")
    const getImage = await generateImage(res[0])
    return {
      prompt: res,
      image: getImage,
      error: false,
    }
  } catch (error) {
    console.error(error)
    return {
      error: true,
      prompt: null,
      image: null,
    }
  }
}

async function generateImage(query: string) {
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
