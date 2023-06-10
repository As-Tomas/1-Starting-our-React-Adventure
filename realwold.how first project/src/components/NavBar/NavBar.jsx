

const NavBar = () => {
  return (
    <div className="mx-5 p-4">
        <div className="flex flex-row justify-between text-4xl font-bold text-green-500 " >
        <a href="#">conduit</a>
        <div>
          <ul className="flex flex-row gap-8 text-gray-400 text-lg ">
            <li className="hover:text-gray-900 cursor-pointer">Home</li>
            <li className="hover:text-gray-900 cursor-pointer" >Sing in</li>
            <li className="hover:text-gray-900 cursor-pointer" >Sign up</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavBar