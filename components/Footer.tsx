import Link from "next/link"

const Footer = () => {
  return (
    <footer className="flex justify-center text-sm my-20">
      <p>
        Copyright © {new Date().getFullYear()} - All right reserved to{" "}
        <Link
          href={"https://pedrosorrentino.com"}
          target="_blank"
          className="font-bold hover:text-primary"
          title="Pedro Sorrentino"
        >
          OrdepDev
        </Link>
      </p>
    </footer>
  )
}

export default Footer
