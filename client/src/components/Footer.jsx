import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble } from "react-icons/bs"; 

export default function FooterCom() {
  return (
    <Footer container className="border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link 
              to="/" 
              className="self-center whitespace-nowrap text-lg font-semibold dark:text-white sm:text-xl">
              <span className="px-4 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                Jam&apos;s
              </span>
              <span>Blog</span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title='About'/>
              <Footer.LinkGroup col>
                <Footer.Link 
                  href="'https://www.facebook.com" 
                  target='_blank' 
                  rel='noopener noreferrer'
                >
                  100 JS Projects
                </Footer.Link>
                <Footer.Link 
                  href="/about" 
                  target='_blank' 
                  rel='noopener noreferrer'
                >
                  Jam&apos;s Blog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Follow Us'/>
              <Footer.LinkGroup col>
                <Footer.Link 
                  href="https://www.github.com/jamltg" 
                  target='_blank' 
                  rel='noopener noreferrer'
                >
                  GitHub
                </Footer.Link>
                <Footer.Link 
                  href="#" 
                >
                  LinkedIn
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Legal'/>
              <Footer.LinkGroup col>
                <Footer.Link 
                  href="https://www.github.com/jamltg" 
                >
                  Privacy Policy
                </Footer.Link>
                <Footer.Link 
                  href="#" 
                >
                  Terms &amp; Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider/>
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href='#' by="Jam Letigio" year={new Date().getFullYear()}/>
          <div className="flex gap-6 mt-4 sm:mt-0 sm:justify-center">
            <Footer.Icon href='https://www.github.com/jamltg' icon={BsFacebook}/>
            <Footer.Icon href='https://www.github.com/jamltg' icon={BsTwitter}/>
            <Footer.Icon href='https://www.github.com/jamltg' icon={BsInstagram}/>
            <Footer.Icon href='https://www.github.com/jamltg' icon={BsGithub}/>
            <Footer.Icon href='https://www.github.com/jamltg' icon={BsDribbble}/>
          </div>
        </div>
      </div>
    </Footer>
  )
}
