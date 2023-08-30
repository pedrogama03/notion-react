import { EditorContent, useEditor, BubbleMenu, FloatingMenu} from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import CodeBlockLowLight from '@tiptap/extension-code-block-lowlight'
import { inicialContent } from "./InicialContent"
import { lowlight } from "lowlight"
import js from 'highlight.js/lib/languages/javascript'
import {
    RxFontBold,
    RxFontItalic,
    RxStrikethrough,
    RxCode,
    RxChevronDown,
    RxChatBubble,
} from 'react-icons/rx'

import 'highlight.js/styles/tomorrow-night-blue.css'
import { BubbleButton } from "./BubbleButton"

lowlight.registerLanguage('js', js)

export function Editor(){
    const editor = useEditor({
        extensions: [
            StarterKit,
            CodeBlockLowLight.configure({
                lowlight,
            }),
        ],
    content: inicialContent,
    editorProps: {
        attributes: {
           class: 'outline-none',
        }
    }
    
    })

    return (
       <>
        <EditorContent 
        className="max-w-[700px] mx-auto pt-16 prose prose-zinc p-10" editor={editor}
       />
     
     {editor && (
        <FloatingMenu  
        
        editor={editor}
        className="bg-zinc-300  py-2 px-1 shadow-xl border gap-1 border-zinc-600 shadouw-black/20 rounded-lg overflow-hidden flex flex-col "
        shouldShow={({ state }) => {

            const { $from } = state.selection

            const currentLineText = $from.nodeBefore?.textContent

            return currentLineText === '/'
      }}>
            <button 
            className="flex items-center gap-2 p-1 rounded min-w-[280p] hover:bg-zinc-50"
            >
            <img 
                src="https://www.notion.so/images/blocks/text/en-US.png" 
                alt="Text"
                className="w-8 border border-zinc-600 rounded"
                />
            <div className="flex flex-col text-left">
                    <span className="text-sm ">Text</span>
                    <span className="text-xs text-zinc-600">Just start writing with plain text.</span>

                </div>
            </button>
            
            <button 
            className="flex items-center gap-2 p-1 rounded min-w-[280p] hover:bg-zinc-50"
            onClick={() => editor.chain().focus().toggleHeading({level: 1}).run()}
            >
                <img 
                src="https://www.notion.so/images/blocks/header.57a7576a.png" 
                alt="Text"
                className="w-8 border border-zinc-600 rounded"
                />
                <div className="flex flex-col text-left">
                    <span className="text-sm ">Heading 1</span>
                    <span className="text-xs text-zinc-600">Big section heading.</span>
                </div>
            </button>
            
            <button 
            className="flex items-center gap-2 p-1 rounded min-w-[280p] hover:bg-zinc-50"
            onClick={() => editor.chain().focus().toggleHeading({level: 1}).run()}
            >
                <img 
                src="https://www.notion.so/images/blocks/page.83b0bf31.png" 
                alt="Page"
                className="w-8 border border-zinc-600 rounded"
                />
                <div className="flex flex-col text-left">
                    <span className="text-sm ">Page</span>
                    <span className="text-xs text-zinc-600">Embed a sub-page inside this page.</span>
                </div>
            </button>
            
            <button 
            className="flex items-center gap-2 p-1 rounded min-w-[280p] hover:bg-zinc-50"
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            >
                <img 
                src="https://www.notion.so/images/blocks/to-do.f8d20542.png" 
                alt="Page"
                className="w-8 border border-zinc-600 rounded"
                />
                <div className="flex flex-col text-left">
                    <span className="text-sm ">To-do list</span>
                    <span className="text-xs text-zinc-600">Track tasks with a to-do list.</span>
                </div>
            </button>
            
        </FloatingMenu>
     )}
     
     { editor &&  (
        <BubbleMenu className="bg-white shadow-xl border border-zinc-600 shadow-black/20  rounded-lg overflow-hidden flex divide-x divide-x-zinc-600 " editor={editor}>
                
                <BubbleButton>
                    <RxChevronDown className="w-4 h-4"/>Text
                </BubbleButton>
                
                <BubbleButton>
                    <RxChatBubble className="w-4 h-4"/>Comment
                </BubbleButton>
                
                <div className="flex items-center">
            <BubbleButton onClick= {() => editor.chain().focus().toggleBold().run()}
            data-active={editor.isActive('bold')}
            >
                   
                 <RxFontBold className="w-4 h-4"/>
            
            </BubbleButton>
            
            <BubbleButton onClick= {() => editor.chain().focus().toggleItalic().run()}
            data-active={editor.isActive('italic')}>
               
                <RxFontItalic className="w-4 h-4"/>

            </BubbleButton>

            <BubbleButton onClick= {() => editor.chain().focus().toggleStrike().run()}
            data-active={editor.isActive('strikethrough')}>
                
                
                <RxStrikethrough className="w-4 h-4"/>
            
            </BubbleButton>
            
            <BubbleButton onClick= {() => editor.chain().focus().toggleCode().run()}
            data-active={editor.isActive('code')}>
                

                <RxCode className="w-4 h-4"/>
            
            </BubbleButton>
            </div>
            
        </BubbleMenu>
     
     )}

   
       </>
    )
}