import React from 'react'
import windowWrapper from '#hoc/windowWrapper'
import { techStack } from '#constants'
import { Check, Flag } from 'lucide-react'
import { WindowControls } from '#components'

const Terminal = () => {
  return <>
    <div id='window-header'>
        <WindowControls target="terminal"/>
        <h2>Tech Stack</h2>
    </div>

    <div className="techstack">
        <p>
            <span>@JJ % </span>
            show tech stack
        </p>
        <div className="grid grid-cols-[200px_1fr] gap-4 mt-7">
            <p>Category</p>
            <p>Technologies</p>
        </div>

        <ul className="content">
  {techStack.map(({ category, items }) => (
    <li key={category} className="grid grid-cols-[200px_1fr] gap-4 items-start">
      
      <div className="flex items-center gap-2">
        <Check className="check" size={20} />
        <h3>{category}</h3>
      </div>

      <ul className="flex flex-wrap gap-3">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

    </li>
  ))}
</ul>


        <div className='footnote'>
            <p>
                <Check size={20} /> 5 of 5 stacks loaded successfully
                (100%)
            </p>
            <p className='text-black'>
                <Flag size={15} fill='black'/>
                Render time: 6ms
            </p>
        </div>
    </div>
  </>
}

const TerminalWindow = windowWrapper(Terminal, 'terminal')

export default TerminalWindow
