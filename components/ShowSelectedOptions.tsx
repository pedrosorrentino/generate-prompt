"use client"
import useOptionStore from "@/services/useOptionStore"
import TitleSection from "./TitleSection"

const ShowSelectedOptions = () => {
  const { selectedOptions } = useOptionStore((state) => ({
    selectedOptions: state.selectedOptions,
  }))

  const categories: { [key: string]: string[] } = {}
  selectedOptions.forEach((option) => {
    if (!categories[option.nameCategory]) {
      categories[option.nameCategory] = []
    }
    categories[option.nameCategory].push(option.nameOption)
  })

  return (
    <>
      {selectedOptions.length > 0 && (
        <>
          <TitleSection title={"Selected options"} />
          <div className="flex flex-wrap justify-center my-10 mx-5 sm:mx-0 gap-5">
            {Object.entries(categories).map(([category, options]) => (
              <div
                className="p-2 rounded-md border border-primary"
                key={category}
              >
                <h3 className="font-bold text-indigo-900">{category}</h3>
                <ul>
                  {options.map((option) => (
                    <li key={option} className="text-sm">
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  )
}

export default ShowSelectedOptions
