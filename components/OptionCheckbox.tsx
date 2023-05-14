"use client"
import useOptionStore from "@/services/useOptionStore"

interface ArrayData {
  name: string
  slug: string
  icon: string
  description: string
}

interface Props {
  arrayOptions: ArrayData[]
  maxItems?: number
  nameCategory: string
}

const OptionCheckbox = ({
  arrayOptions,
  maxItems = 2,
  nameCategory,
}: Props) => {
  const addOption = useOptionStore((state) => state.addOptions)
  const removeOption = useOptionStore((state) => state.removeOptions)
  const clearOption = useOptionStore((state) => state.clearOptions)

  const { selectedOptions } = useOptionStore()
  const selectedCount = selectedOptions.filter(
    (item) => item.nameCategory === nameCategory
  )

  const handleCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    arrayData: ArrayData
  ) => {
    if (e.target.checked) {
      addOption(nameCategory, arrayData.name)
    } else {
      removeOption(arrayData.name)
    }
  }

  return (
    <>
      <div className="flex justify-end">
        <button
          className="btn btn-sm btn-error my-5 "
          onClick={() => clearOption(nameCategory)}
        >
          Clear {selectedCount.length}/{maxItems}
        </button>
      </div>
      <div className="form-control">
        {arrayOptions.map((item) => (
          <label
            key={item.slug}
            className="label cursor-pointer hover:bg-slate-200 m-2 rounded-md"
          >
            <div className="tooltip tooltip-right" data-tip={item.description}>
              <span className="label-text text-lg">
                {item.icon} {item.name}
              </span>
            </div>
            <input
              type="checkbox"
              className="checkbox"
              onChange={(e) => handleCheckboxChange(e, item)}
              checked={selectedCount.some(
                (selectedItem) => selectedItem.nameOption === item.name
              )}
              disabled={
                selectedCount.length === maxItems &&
                !selectedCount.some(
                  (selectedItem) => selectedItem.nameOption === item.name
                )
              }
            />
          </label>
        ))}
      </div>
    </>
  )
}

export default OptionCheckbox
