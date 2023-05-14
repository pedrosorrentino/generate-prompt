interface ArrayOrder {
  name: string
  slug: string
  icon: string
  description: string
}

export function ordenarArray(array: ArrayOrder[]): ArrayOrder[] {
  return array.sort((a: ArrayOrder, b: ArrayOrder) => {
    const nombreA = a.name.toUpperCase()
    const nombreB = b.name.toUpperCase()
    if (nombreA < nombreB) {
      return -1
    }
    if (nombreA > nombreB) {
      return 1
    }
    return 0
  })
}
