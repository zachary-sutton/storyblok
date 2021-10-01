const NavBar = ({blok}) => {
    return (
      <div>
        <div className="hidden md:block">
          <div className="flex justify-between bg-blue-600 p-1 font-my-font text-white">
            <div className="flex">
              <img src={blok.navlogo.filename} width="4%" style={{borderRadius: "50%"}} />
              <p className="text-center p-3 hover:text-black cursor-pointer">{blok.navleft1}</p>
              <p className="text-center p-3 hover:text-black cursor-pointer">{blok.navleft3}</p>
              <p className="text-center p-3 hover:text-black cursor-pointer">{blok.navleft4}</p>
              <p className="text-center p-3 hover:text-black cursor-pointer">{blok.navleft5}</p>
              <p className="text-center p-3 hover:text-black cursor-pointer">{blok.navleft6}</p>
              <p className="text-center p-3 hover:text-black cursor-pointer">{blok.navleft7}</p>
              <p className="text-center p-3 hover:text-black cursor-pointer">{blok.navleft2}</p>
            </div>
            <div className="flex">
              <p className="p-3 hover:text-black cursor-pointer">{blok.navright1}</p>
              <p className="p-3 hover:text-black cursor-pointer">{blok.navright2}</p>
              <p className="p-3 hover:text-black cursor-pointer">{blok.navright3}</p>
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
  