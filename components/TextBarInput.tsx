"use client"
import { generateImage, useOptionStore } from "@/services"
import { useState } from "react"
import ShowImage from "./ShowImage"

import Loading from "./Loading"
import TitleSection from "./TitleSection"

const TextBarInput = () => {
  const [arrayImages, setArrayImages] = useState<string[]>()
  const [isLoading, setIsLoading] = useState(false)
  const [showPrompt, setShowPrompt] = useState("")

  const { userInput } = useOptionStore((state) => ({
    userInput: state.userInput,
  }))
  const { selectedOptions } = useOptionStore()

  const userInputText = useOptionStore((state) => state.userInputText)

  let Personajes = ""
  let Estilos = ""
  let Colores = ""
  let Elementos = ""
  let Lugares = ""
  let Artistas = ""
  let Websites = ""
  let Resoluciones = ""

  selectedOptions.forEach((option) => {
    switch (option.nameCategory) {
      case "👨‍🎨 Character":
        Personajes += `${option.nameOption},  `
        return (Personajes = Personajes.slice(0, -1))

      case "✏️ Styles":
        Estilos += `${option.nameOption},  `
        return (Estilos = Estilos.slice(0, -1))

      case "🎨 Colors":
        Colores += `${option.nameOption},  `
        return (Colores = Colores.slice(0, -1))

      case "🔮 Additional Elements":
        Elementos += `${option.nameOption},  `
        return (Elementos = Elementos.slice(0, -1))

      case "🏰 Places":
        Lugares += `${option.nameOption},  `
        return (Lugares = Lugares.slice(0, -1))

      case "✏️ Artists":
        Artistas += `${option.nameOption},  `
        return (Artistas = Artistas.slice(0, -1))

      case "📝 Website":
        Websites += `${option.nameOption},  `
        return (Websites = Websites.slice(0, -1))

      case "🔍 Resolution":
        return (Resoluciones += `${option.nameOption}`)

      default:
        return
    }
  })

  if (userInput) {
    Personajes = `${userInput}`
  }

  const prompts = [
    `Design a ${Estilos}-inspired scene that features ${Personajes}. Use a color scheme of ${Colores} and incorporate ${Elementos} in the ${Lugares} setting. Draw inspiration from the works of ${Artistas} and reference ${Websites} as needed. The final resolution should be ${Resoluciones}.`,
    `Create a digital artwork featuring ${Personajes} using a ${Estilos} style. The color palette should include ${Colores} and ${Elementos} should be included in the ${Lugares} setting. Look to the works of ${Artistas} for inspiration and reference ${Websites} for additional resources. Render the final piece at a resolution of ${Resoluciones}.`,
    `Design a vibrant and colorful scene that showcases ${Personajes} in a ${Estilos} style. Use ${Colores} as the color scheme and include ${Elementos} in the ${Lugares} setting. Get inspired by the works of ${Artistas} and use ${Websites} for additional resources. Set the final resolution to ${Resoluciones}.`,
    `Create an illustration that incorporates ${Personajes} and ${Elementos} in a ${Lugares} setting, using a ${Estilos} style. The color scheme should include ${Colores}. Reference the works of ${Artistas} and use ${Websites} for additional inspiration. Render the final artwork at a resolution of ${Resoluciones}.`,
    `Design a surreal scene that includes ${Personajes} and ${Elementos}, using a ${Estilos} style. The color palette should feature ${Colores} and the setting should be inspired by ${Lugares}. Reference the works of ${Artistas} for inspiration and use ${Websites} as needed. Set the final resolution to ${Resoluciones}.`,
    `Create a digital painting that showcases ${Personajes} in a futuristic ${Estilos} style. Use a color scheme of ${Colores} and include ${Elementos} in the ${Lugares} setting. Draw inspiration from the works of ${Artistas} and use ${Websites} as needed. The final resolution should be ${Resoluciones}.`,
    `Design a fantasy-inspired scene that features ${Personajes} and incorporates ${Elementos} in the ${Lugares} setting, using a ${Estilos} style. The color scheme should include ${Colores}. Reference the works of ${Artistas} for inspiration and use ${Websites} for additional resources. Set the final resolution to ${Resoluciones}.`,
    `Create a character portrait of ${Personajes} using a ${Estilos} style. Use a color palette of ${Colores} and include ${Elementos} in the background. Look to the works of ${Artistas} for inspiration and use ${Websites} for reference. Render the final piece at a resolution of ${Resoluciones}.`,
    `Design a minimalist scene that showcases ${Personajes} in a ${Estilos} style. Use ${Colores} as the color scheme and incorporate ${Elementos} in the ${Lugares} setting. Reference the works of ${Artistas} for inspiration and use ${Websites} for additional resources. Set the final resolution to ${Resoluciones}.`,
    `Create an artwork that features ${Personajes} in an artistic ${Estilos} style. Use ${Colores} as the color scheme and incorporate ${Elementos} in the ${Lugares} setting. Get inspired by the works of ${Artistas} and use ${Websites} as needed. The final resolution`,
    `Create a piece of art featuring ${Personajes} in a ${Estilos} style. Use a color palette of ${Colores} and include ${Elementos} in the background. Choose a setting in ${Lugares} and get inspired by the works of ${Artistas}. Reference ${Websites} for any additional ideas. The final resolution should be ${Resoluciones}.`,
    `Design a ${Estilos} illustration that showcases ${Personajes} in action. Incorporate the colors of ${Colores} and include ${Elementos} in the foreground. Place the scene in ${Lugares} and take inspiration from the works of ${Artistas}. Use ${Websites} to reference any additional details. The final resolution should be ${Resoluciones}.`,
    `Create a digital painting featuring ${Personajes} in a ${Estilos} style. Use a color scheme of ${Colores} and incorporate ${Elementos} throughout the image. Choose a setting in ${Lugares} and get inspired by the works of ${Artistas}. Reference ${Websites} for any additional ideas. The final resolution should be ${Resoluciones}.`,
    `Design an illustration inspired by ${Estilos} that features ${Personajes}. Use a color palette of ${Colores} and include ${Elementos} in the composition. Choose a setting in ${Lugares} and take inspiration from the works of ${Artistas}. Use ${Websites} to reference any additional details. The final resolution should be ${Resoluciones}.`,
    `Create a piece of art that showcases ${Personajes} in a ${Estilos} style. Use a color scheme of ${Colores} and include ${Elementos} in the background. Choose a setting in ${Lugares} and get inspired by the works of ${Artistas}. Reference ${Websites} for any additional ideas. The final resolution should be ${Resoluciones}.`,
    `Design an artwork that features ${Personajes} in a ${Estilos} style. Use a color palette of ${Colores} and incorporate ${Elementos} throughout the image. Choose a setting in ${Lugares} and take inspiration from the works of ${Artistas}. Use ${Websites} to reference any additional details. The final resolution should be ${Resoluciones}.`,
    `Create a digital painting of ${Personajes} in a ${Estilos} style. Use a color scheme of ${Colores} and include ${Elementos} in the foreground. Choose a setting in ${Lugares} and get inspired by the works of ${Artistas}. Reference ${Websites} for any additional ideas. The final resolution should be ${Resoluciones}.`,
    `Design an illustration of ${Personajes} in a ${Estilos} style. Use a color palette of ${Colores} and incorporate ${Elementos} in the composition. Choose a setting in ${Lugares} and take inspiration from the works of ${Artistas}. Use ${Websites} to reference any additional details. The final resolution should be ${Resoluciones}.`,
    `Create a piece of art inspired by ${Estilos} that features ${Personajes}. Use a color scheme of ${Colores} and include ${Elementos} throughout the image. Choose a setting in ${Lugares} and get inspired by the works of ${Artistas}. Reference ${Websites} for any additional ideas. The final resolution should be ${Resoluciones}.`,
  ]

  const handleButtonClick = async () => {
    setIsLoading(true)

    const randomIndex = Math.floor(Math.random() * prompts.length)
    const randomPrompt = prompts[randomIndex]
    const image = await generateImage(randomPrompt)

    setShowPrompt(randomPrompt)
    setArrayImages(image)
    setIsLoading(false)
  }

  return (
    <div className="my-10 mx-5 sm:mx-0">
      <div className="input-group">
        <input
          type="text"
          placeholder="Name of the character or select one from our list..."
          className="input input-bordered w-full"
          onChange={(e) => {
            userInputText(e.target.value)
          }}
        />
        <button className="btn btn-square px-16" onClick={handleButtonClick}>
          Generate Prompt
        </button>
      </div>
      {isLoading && <Loading />}
      {!isLoading && arrayImages && (
        <>
          <TitleSection title={"Copy your Generate Prompt"} />
          <div className="mockup-code bg-primary text-primary-content p-3">
            <code>{showPrompt}</code>
          </div>
          <ShowImage arrayImages={arrayImages} />
        </>
      )}
    </div>
  )
}

export default TextBarInput

// Personajes = "Valor por defecto de Personajes"
// Estilos = "Valor por defecto de Estilos"
// Colores = "Valor por defecto de Colores"
// Elementos = "Valor por defecto de Elementos"
// Lugares = "Valor por defecto de Lugares"
// Artistas = "Valor por defecto de Artistas"
// Websites = "Valor por defecto de Websites"
// Resoluciones = "Valor por defecto de Resoluciones"

// Personajes = "Rick and morty"
// Estilos = "Pixel Art"
// Colores = "Adobe RGB"
// Elementos = "Earth"
// Lugares = "Steam Punk Metropolis"
// Artistas = "Zdzislaw Beksinski"
// Websites = "Getty Images"
// Resoluciones = "4K Ultra HD"
