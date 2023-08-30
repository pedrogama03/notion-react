import { useState } from 'react'
import { Editor } from './components/Editor'
import { list } from 'postcss'
import {
  RxMagnifyingGlass,
  RxClock,
  RxGear,
  RxPlus,
} from 'react-icons/rx'


function App() {

  return (
    <div className="min-h-screen p-8 text-zinc-900 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">

    <div className="bg-white w-[1100px] mx-auto rounded-xl min-h-[720px] shadow-sm border-black/20 overflow-hidden grid grid-cols-[16rem_1fr]">

    <aside className="bg-zinc-50 border-r-zinc-100 p-4" 

    >

    <div className="flex-gap-2 group">
    <button className="w-3 h-3 rounded-full bg-zinc-300 hover:bg-red-400"></button> 
    <button className="w-3 h-3 rounded-full bg-zinc-300 hover:bg-yellow-400"></button> 
    <button className="w-3 h-3 rounded-full bg-zinc-300 hover:bg-green-400"></button>
    </div>
    <div className="space-y-4 py-2  grid grid-cols-[16rem_1fr]">
    <ul>
        <li className="flex items-center gap-2 p-1 rounded min-w-[280p] 
               'line-through text-gray-500"> <button><RxMagnifyingGlass/></button>Search</li>
        <li className="flex items-center gap-2 p-1 rounded min-w-[280p] 
               'line-through text-gray-500"><button><RxClock/></button>Updates</ li>
        <li className="flex items-center gap-2 p-1 rounded min-w-[280p] 
              'line-through text-gray-500"><button><RxGear/></button>Settings e members</li>
        <li className="flex items-center gap-2 p-1 rounded min-w-[280p] 
              'line-through text-gray-500"><button><RxPlus/></button>New page</li>

    </ul>
    </div>
   


    </aside>
    <main className="p-4">
      
      <Editor />
    </main>
        
          
    </div>
      
    </div>
  )
}

export default App
