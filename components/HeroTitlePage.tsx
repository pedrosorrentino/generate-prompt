const HeroTitlePage = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <div className="flex justify-center mt-20 mb-10 mx-5">
      <div className="text-center">
        <h1 className="text-2xl sm:text-4xl font-bold">{title}</h1>
        <p className="text-sm sm:text-base py-3 text-justify">{desc}</p>
      </div>
    </div>
  )
}

export default HeroTitlePage
