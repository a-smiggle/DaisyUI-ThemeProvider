# DaisyUIThemeProvider
Easy to use Next.js DaisyUI Theme provider.

## Install

```bash
$ npm i daisyui-themeprovider
# or
$ yarn add daisyui-themeprovider
```

## Usage

## Setup
Edit your _app file.
```ts
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import DaisyUIThemeProvider from 'daisyui-themeprovider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DaisyUIThemeProvider>
        <Component {...pageProps} />
    </DaisyUIThemeProvider>

  )
}

export default MyApp
```

### Toggle

updateTheme function is provided by useThemeContext.  The below example shows and easy dropdown menu of availablle themes.

```ts
import type { NextPage } from 'next';
import { useThemeContext } from  'daisyui-themeprovider';
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

```

### System Theme

To use the system theme edit your _app file to look like.
```ts
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import DaisyUIThemeProvider from 'daisyui-themeprovider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DaisyUIThemeProvider useSystem={true}>
        <Component {...pageProps} />
    </DaisyUIThemeProvider>

  )
}

export default MyApp
```
NOTE: If custom theme already stored cusotm theme will be used. If light or dark stored system theme will be used.


## Prerequirements
Ensure you have installed and configured daisyUI. Follow these:

### DaisyUI Installation
https://daisyui.com/docs/install/

#### Theme setup
https://daisyui.com/docs/themes/

Add the themes you will require. 

For example add this to  your tailwind.config.js:
```js
daisyui: {
    themes: ["cupcake", "dark", "cmyk"],
}
```