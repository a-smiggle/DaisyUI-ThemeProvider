import type { NextPage } from 'next'
import { useThemeContext } from  'daisyui-themeprovider';

import {daisyui} from 'tailwind.config';


const Home: NextPage = () => {
  const {theme, updateTheme} = useThemeContext();
  function setTheme(event:any){
    if(event.target.value) updateTheme(event.target.value);
  }
  return (
    <div className="drawer bg-neutral text-primary">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
      <div className="drawer-content flex flex-col">
        <div className="w-full navbar bg-base-300">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
          </div> 
          <div className="flex-1 px-2 mx-2 text-2xl">daisyUI Theme Provider</div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
              <li><a className='text-secondary'>Navbar Item 1</a></li>
              <li><a className='text-accent'>Navbar Item 2</a></li>
            </ul>
          </div>
        </div>
        <div className='m-2 text-xl'>
          Select Theme
        </div>
        
        <select value={theme} onChange={setTheme} className=" m-2 select select-bordered w-full max-w-xs">
          {daisyui.themes.map(item => <option key={item}>{item}</option>)}
        </select>
      </div> 
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label> 
        <ul className="menu p-4 overflow-y-auto w-60 md:w-80 bg-base-100">
          <li><a>Sidebar Item 1</a></li>
          <li><a>Sidebar Item 2</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Home
