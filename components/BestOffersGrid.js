import DynamicComponent from './DynamicComponent'

const CustomGrid = ({blok}) => {
  return (
    <>
      <div className="w-11/12 mt-8 flex justify-start m-auto xl:w-8/12">
        <h1 className="font-my-font text-3xl">Best Deals</h1>
      </div>
        <ul className="flex flex-col items-center w-full m-auto md:flex-row xl:w-8/12">
        {blok.block.map((nestedBlok) => ( 
            <li key={nestedBlok._uid} className="flex w-11/12 md:6/12">
                <DynamicComponent blok={nestedBlok} />
            </li>
            )
        )}
        </ul>
    </>
  )
}

export default CustomGrid
