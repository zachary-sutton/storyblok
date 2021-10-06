const NavBar = ({blok}) => {
  //text-center p-3 hover:text-black cursor-pointer
    return (
      <div>
        <div className="hidden md:block">
          <div className="flex justify-between bg-blue-600 p-1 font-my-font text-white">
            <div className="flex">
              <ul className="flex flex-row">
                {blok.nav_left.map(nav => (
                  <li className="text-center p-3 hover:text-black cursor-pointer">{nav.text}</li>
                ))}
              </ul>
            </div>
            <div className="flex">
                  <ul className="flex flex-row">
                      {blok.nav_right.map(nav => (
                        <li className="text-center p-3 hover:text-black cursor-pointer">{nav.text}</li>
                      ))}
                  </ul>
            </div>
          </div>
        </div>
        <div className="md:hidden flex justify-between bg-blue-600 p-1 font-my-font text-white">
          <h1>nav mobile placeholder</h1>
        </div>
      </div>
    )
  }
  
  export default NavBar
  