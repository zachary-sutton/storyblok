import DynamicComponent from './DynamicComponent'

const Grid = ({blok}) => {
  return (
    <ul className="flex flex-col items-center py-8 w-11/12 m-auto md:flex-row xl:w-8/12">
      {blok.columns.map((nestedBlok) => ( 
          <li key={nestedBlok._uid} className="flex justify-center w-11/12 m:w-4/12">
            <DynamicComponent blok={nestedBlok} />
          </li>
        )
      )}
    </ul>
  )
}

export default Grid
