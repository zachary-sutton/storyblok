const MapTest = ({blok}) => {
  return (
    <ul className="flex w-full">
      {blok.grid.map((navItem) => ( 
          <li key={navItem._uid} className="flex justify-center w-11/12 m:w-4/12">
            <h1>{navItem.text}</h1>
          </li>
        )
      )}
    </ul>
  )
}

export default MapTest
