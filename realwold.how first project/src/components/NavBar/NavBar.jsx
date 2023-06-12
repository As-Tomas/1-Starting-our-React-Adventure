import {Link, useMatch, useResolvedPath} from "react-router-dom"

export default function NavBar() {
  return (
    <div className="mx-5 p-4">
        <div className="flex flex-row justify-between text-4xl font-bold text-green-500 " >
        <a href="#">conduit</a>
        <div>
          <ul className="flex flex-row gap-8 text-gray-400 text-lg ">
            <li className="hover:text-gray-900 cursor-pointer">
              <CustomLink to="/1-Starting-our-React-Adventure/">Home</CustomLink> </li>
            <li className="hover:text-gray-900 cursor-pointer" >
              <CustomLink to="/1-Starting-our-React-Adventure/signin">Sign in</CustomLink> </li>
            <li className="hover:text-gray-900 cursor-pointer" >
              <CustomLink to="/1-Starting-our-React-Adventure/signup">Sign up</CustomLink> </li>
          </ul>
        </div>
      </div>
    </div>
  )
}



// eslint-disable-next-line react/prop-types
function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}