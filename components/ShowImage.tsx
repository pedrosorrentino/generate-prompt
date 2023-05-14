import Link from "next/link"
import TitleSection from "./TitleSection"
import Image from "next/image"

const ShowImage = ({ arrayImages }: any) => {
  return (
    <>
      <TitleSection title={"Example Image"} />
      <div className="flex justify-center gap-6 w-full">
        {arrayImages.map((item: any, index: any) => (
          <Link key={`item${index}`} href={item} target="_blank">
            <Image
              src={item}
              width={450}
              height={450}
              className="w-full"
              alt="Generated"
            />
          </Link>
        ))}
      </div>
    </>
  )
}

export default ShowImage
