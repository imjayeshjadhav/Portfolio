import { dockApps } from '#constants';
import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react'
import  {Tooltip} from 'react-tooltip'
import gsap from 'gsap';
import {useWindowStore} from '#store/window';
 
const Dock = () => { 

  const {openWindow, closeWindow, windows} = useWindowStore()
  const dockRef = useRef(null);

  useGSAP(() => {
    const dock = dockRef.current;
    if (!dock) return;

    const icons = dock.querySelectorAll(".dock-icon");

    icons.forEach((icon) => {
      const handleEnter = () => {
        gsap.to(icon, {
          scale: 1.25,
          y: -8,
          duration: 0.2,
          ease: "power1.out"
        });
      };

      const handleLeave = () => {
        gsap.to(icon, {
          scale: 1,
          y: 0,
          duration: 0.3,
          ease: "power1.out"
        });
      };

      icon.addEventListener("mouseenter", handleEnter);
      icon.addEventListener("mouseleave", handleLeave);

      return () => {
        icon.removeEventListener("mouseenter", handleEnter);
        icon.removeEventListener("mouseleave", handleLeave);
      };
    });
  });

  const toggleApp = (app) => {
    if(!app.canOpen) return;
    
    const window = windows[app.id];

    if(!window) {
      console.error(`Window not found for app: ${app.id}`)
      return
    }
    
    if(window.isOpen) {
      closeWindow(app.id)
    } else {
      openWindow(app.id)
    }

  }
  return (
    <section id="dock">
      <div ref ={dockRef} className='dock-container'>
        {
          dockApps.map(({id, name, icon, canOpen}) => (
            <div key={id} className='relative flex justify-center'>
              <button 
                type='button' 
                className='dock-icon' 
                aria-label={name} 
                data-tooltip-id="dock-tooltip" 
                data-tooltip-content = {name}
                data-tooltip-delay-show ={150}
                disabled ={!canOpen}
                onClick ={() => toggleApp({id, canOpen})}
              >
                <img 
                  src={`/images/${icon}`} 
                  alt={name}
                  loading='lazy'
                  className={canOpen ? "" : "opacity-60"}
                />
              </button>
            </div>
          ))
        }
        <Tooltip id='dock-tooltip' place= "top" className='tooltip' />
      </div>
    </section>
  )
}

export default Dock
