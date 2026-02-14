import React from 'react'
import windowWrapper from '#hoc/windowWrapper'
import { socials } from "#constants";  
import { WindowControls } from '#components';


const Contact = () => {
  return (
    <>
        <div id="window-header">
            <WindowControls target="contact"/>
            <h2>Contact Me</h2>
        </div>

        <div className='p-5 space-y-5'>
            <img src="/images/sih.jpeg" className='w-20 rounded-full' alt="JJ" />
            <h3>Let’s Connect</h3>
            <p>
            Have a problem that refuses to be solved? Perfect - I like those.  
            Whether it’s building scalable systems, exploring AI, or turning “this might work” into “this works”, I’m always in.  
            Bonus points if it feels impossible - those are my favorite.
            </p>

            <ul>
                {socials.map(({id, bg, link,icon,text}) => (
                    <li key={id} style={{backgroundColor :bg}}>
                        <a href={link} target='_blank' rel='noopener noreferrer' title={text}>
                           <img src={icon} alt={text} className='size-5' />
                           <p>{text}</p> 
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    </>
  )
}

const ContactWindow = windowWrapper(Contact, 'contact')

export default ContactWindow
