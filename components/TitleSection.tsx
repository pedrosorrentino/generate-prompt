const TitleSection = ({ title }: { title: string }) => {
  return (
    <>
      <h2 className="text-2xl font-bold text-center mt-10">{title}</h2>
      <div className="divider"></div>
    </>
  )
}

export default TitleSection
