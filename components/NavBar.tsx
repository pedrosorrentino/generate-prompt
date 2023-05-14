import Image from "next/image"
import Link from "next/link"

const NavBar = () => {
  return (
    <header>
      <div className="flex justify-between items-center m-5">
        <div className="flex">
          <Image
            src={"/Generate-Prompt.png"}
            width={32}
            height={32}
            alt="Generate Prompt"
            className="mr-2"
          />
          <Link href={"/"} className="text-xl" title="Generate Prompt">
            generate
            <span className="text-primary font-extrabold underline">
              Prompt
            </span>
          </Link>
        </div>
        <nav className="bg-slate-100 p-2 hover:bg-primary hover:text-white font-semibold rounded-md transition-colors">
          <ul>
            <li>
              <Link href={"/prompts"} title="Example Prompts">
                🔍 Examples Prompts
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default NavBar
