import type { NextPage } from 'next';
import { useThemeContext } from '@providers/DaisyUIThemeProvider';
import {daisyui} from 'tailwind.config';

const Settings: NextPage = () => {
  const {theme, updateTheme} = useThemeContext();
  function setTheme(event:any){
    if(event.target.value) updateTheme(event.target.value);
  }
  return (
    <>
    <select value={theme} onChange={setTheme} className="select select-bordered w-full max-w-xs">
      {daisyui.themes.map(item => <option key={item}>{item}</option>)}
    </select>
    </>
    
  )
}

export default Settings;
