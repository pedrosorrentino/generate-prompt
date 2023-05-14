import OptionCheckbox from "./OptionCheckbox"
import { ordenarArray } from "@/services"
import { MenuOptions } from "@/db/MenuOptions"
import TitleSection from "./TitleSection"

const GenerateBarInput = () => {
  return (
    <>
      <TitleSection title={"Choose your options to generate a prompt"} />
      <ul className="grid mx-5 sm:mx-0 sm:grid-cols-2 gap-5 my-10">
        {MenuOptions.map((item, index) => (
          <>
            <li id={`modal-${item.name}`}>
              <label
                htmlFor={`modal${index}`}
                className="btn btn-outline w-full"
              >
                {item.name}{" "}
                <span className="ml-5 text-green-500">({item.db.length})</span>
              </label>
              <input
                type="checkbox"
                id={`modal${index}`}
                className="modal-toggle"
              />

              <label htmlFor={`modal${index}`} className="modal cursor-pointer">
                <div className="modal-box max-w-2xl">
                  <h3 className="text-lg font-bold">Select {item.name}</h3>
                  <OptionCheckbox
                    arrayOptions={ordenarArray(item.db)}
                    maxItems={item.max}
                    nameCategory={item.name}
                  />
                  <div className="modal-action ">
                    <label
                      htmlFor={`modal${index}`}
                      className="btn btn-success btn-sm"
                    >
                      Save select
                    </label>
                  </div>
                </div>
              </label>
            </li>
          </>
        ))}
      </ul>
    </>
  )
}

export default GenerateBarInput
