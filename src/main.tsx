import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ThemeProvider } from '@material-tailwind/react'
import { RouterProvider } from 'react-router-dom'
import router from './routes/route.tsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'
import { Toaster } from 'sonner'

//  text-[#1B3048]
// bg-[#1B3048]
//  hover:bg-[#275fa0]

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
       <Provider store={store}>
     <ThemeProvider>
      <RouterProvider router={router}/>
    </ThemeProvider>
    <Toaster/>
    </Provider>
  </React.StrictMode>,
)
