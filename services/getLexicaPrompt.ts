export async function getLexicaPrompt(query: string) {
  try {
    const response = await fetch(`https://lexica.art/api/v1/search?q=${query}`)
    const data = await response.json()
    return data.images
  } catch (error) {
    console.error(error)
  }
}
