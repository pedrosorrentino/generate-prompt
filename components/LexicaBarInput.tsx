"use client"
import { useState } from "react"
import { getLexicaPrompt } from "@/services"
import ShowImageLexica from "./ShowImageLexica"
import Loading from "./Loading"

const LexicaBarInput = () => {
  const [inputText, setInputText] = useState<string>("")
  const [arrayImages, setArrayImages] = useState<string[]>()
  const [showError, setShowError] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleButtonClick = async () => {
    setIsLoading(true)
    if (inputText.length > 0) {
      const lexicaPrompt = await getLexicaPrompt(inputText)
      setArrayImages(lexicaPrompt)
      setShowError(false)
      setIsLoading(false)
    } else {
      setShowError(true)
      setIsLoading(false)
    }
  }

  const AlertMessage = () => {
    return (
      <div className="alert alert-primary shadow-lg mx-auto my-10 w-80">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current flex-shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <span>Please write a name to search...</span>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="input-group justify-center">
        <input
          type="text"
          placeholder="Name of the character..."
          className="input input-bordered sm:w-1/3"
          onChange={(e) => {
            setInputText(e.target.value)
          }}
        />
        <button className="btn btn-square px-16" onClick={handleButtonClick}>
          Find Images
        </button>
      </div>
      {isLoading && <Loading />}
      {!isLoading && showError && <AlertMessage />}
      {!isLoading && arrayImages && (
        <ShowImageLexica arrayImages={arrayImages} />
      )}
    </>
  )
}

export default LexicaBarInput
