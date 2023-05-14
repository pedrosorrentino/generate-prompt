import Image from "next/image"

const ShowImageLexica = ({ arrayImages }: any) => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-10 m-5  mt-20">
      {arrayImages.map((i: any) => (
        <article key={i.id} className="group relative block bg-black">
          <Image
            alt={i.prompt}
            src={i.srcSmall}
            width={i.width}
            height={i.height}
            className="absolute h-full w-full object-cover transition-opacity group-hover:opacity-30"
          />

          <div className="relative p-4 sm:p-6 lg:p-8">
            <div className="mt-32 sm:mt-48 lg:mt-64">
              <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                <span className="bg-slate-100 p-2 mb-3 text-sm text-black font-bold rounded-e-md">
                  Prompt Copy
                </span>
                <p className="text-sm text-black bg-slate-100 p-3 rounded-md">
                  {i.prompt}
                </p>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}

export default ShowImageLexica
