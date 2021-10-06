import DynamicComponent from '../storyblok/stock-components/DynamicComponent'

const CustomGrid = ({blok}) => {
  return (
      <>
        <div className="w-11/12 mt-8 flex justify-end m-auto xl:w-8/12">
            <h1 className="font-my-font text-3xl">Popular Locations</h1>
        </div>
        <ul className="flex flex-col items-center w-11/12 justify-between m-auto md:flex-row md:flex-wrap xl:w-8/12">
        {blok.grid.map((nestedBlok) => ( 
            <li key={nestedBlok._uid} className="flex w-11/12 h-36 md:w-2/12 py-2">
                <DynamicComponent blok={nestedBlok} />
            </li>
            )
        )}
        </ul>
      </>
  )
}

export default CustomGrid
