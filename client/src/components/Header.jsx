import { Avatar, Button, Dropdown, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/theme/themeSlice";

export default function Header() {
  const dispatch = useDispatch();
  //useLocation is to see which element is active
  const path = useLocation().pathname;
  const { currentUser } = useSelector(state=>state.user);

  //we need to know what theme we have by getting the theme
  const { theme } = useSelector((state)=>state.theme);
  return (
    <Navbar className="border-b-2">
      <Link to="/" className="self-center whitespace-nowrap text-sm font-semibold dark:text-white sm:text-xl">
        <span className="px-4 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          Jam&apos;s
        </span>
        <span>Blog</span>
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        />
        <Button className="w-12 h-10 flex justify-center items-center lg:hidden" color='gray'>
          <AiOutlineSearch/>
        </Button>
      </form>
      <div className="flex gap-2 md:order-2">
        <Button className="w-12 h-10 hidden lg:inline" color="gray" pill onClick={()=>dispatch(toggleTheme())}>
          {theme === 'light' ? <FaSun/> : <FaMoon/>}
        </Button>
        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt='user'
                image={currentUser.profilePicture}
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">@{currentUser.username}</span>
              <span className="block text-sm font-medium truncate">{currentUser.email}</span>
            </Dropdown.Header>
            <Link to={'/dashboard?tab=profile'}>
              <Dropdown.Item>Profile</Dropdown.Item>
            </Link>
            <Dropdown.Divider/>
            <Dropdown.Item>Sign Out</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to="/sign-in">
            <Button gradientDuoTone='purpleToBlue' outline>
              Sign In
            </Button>
        </Link>
        )}
        <Navbar.Toggle/>
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={'div'}>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as={'div'}>
          <Link to="/about">About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/resources"} as={'div'}>
          <Link to="/resources">Resources</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}
