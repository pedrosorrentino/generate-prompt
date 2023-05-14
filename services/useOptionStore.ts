import { create } from "zustand"

type dataOptions = {
  nameCategory: string
  nameOption: string
}

type selectedOptions = {
  userInput: string
  selectedOptions: dataOptions[]
  addOptions: (nameCategory: string, nameOption: string) => void
  removeOptions: (nameOption: string) => void
  clearOptions: (nameCategory: string) => void
  userInputText: (userInput: string) => void
}

const useOptionStore = create<selectedOptions>((set) => ({
  userInput: "",
  userInputText: (userInput: string) =>
    set(() => ({
      userInput: userInput,
    })),
  selectedOptions: [],
  addOptions: (nameCategory: string, nameOption: string) =>
    set((state) => ({
      selectedOptions: [
        ...state.selectedOptions,
        { nameCategory: nameCategory, nameOption: nameOption },
      ],
    })),
  removeOptions: (nameOption: string) =>
    set((state) => ({
      selectedOptions: [
        ...state.selectedOptions.filter(
          (option) => option.nameOption !== nameOption
        ),
      ],
    })),
  clearOptions: (nameCategory: string) =>
    set((state) => ({
      selectedOptions: [
        ...state.selectedOptions.filter(
          (option) => option.nameCategory !== nameCategory
        ),
      ],
    })),
}))

export default useOptionStore

// type State = {
//   selectedOptions: { nameCategory: string; optionCategory: string[] }[]
//   items: { [key: string]: any[] }
//   addOption: (nameCategory: string, option: string) => void
// }

// const useStore = create<State>((set) => ({
//   selectedOptions: [],
//   items: {},
//   addOption: (nameCategory: string, option: string) =>
//     set((state) => {
//       const categoryIndex = state.selectedOptions.findIndex(
//         (item) => item.nameCategory === nameCategory
//       )

//       if (categoryIndex !== -1) {
//         // La categoría ya existe, añade la opción al array de opciones
//         const selectedCategory = state.selectedOptions[categoryIndex]
//         const updatedCategory = {
//           ...selectedCategory,
//           optionCategory: [...selectedCategory.optionCategory, option],
//         }
//         const updatedSelectedOptions = [
//           ...state.selectedOptions.slice(0, categoryIndex),
//           updatedCategory,
//           ...state.selectedOptions.slice(categoryIndex + 1),
//         ]

//         return { selectedOptions: updatedSelectedOptions, items: state.items }
//       } else {
//         // La categoría no existe, crea una nueva
//         const newCategory = { nameCategory, optionCategory: [option] }
//         const updatedSelectedOptions = [...state.selectedOptions, newCategory]
//         const updatedItems = { ...state.items, [nameCategory]: [option] }

//         return { selectedOptions: updatedSelectedOptions, items: updatedItems }
//       }
//     }),
// }))

// export default useStore
