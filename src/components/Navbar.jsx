import dayjs from 'dayjs'
import { navLinks } from '#constants'
import { useWindowStore } from '#store/window'

const Navbar = () => {
    const {openWindow} = useWindowStore();
  return (
    <nav>
        <div>
            <img src="/logo.svg" alt="logo" />
            <p className='font-bold'>Jayesh's Portfolio</p>

            <ul>
                {navLinks.map(({id,name, type}) =>(
                    <li key={id} onClick={() => openWindow(type)}>
                        <p>{name}</p>
                    </li>
                ))}
            </ul>
        </div>
        <div>
            <time>{dayjs().format("dddd · MMM D · h:mm A")}</time>
        </div>
    </nav>
  )
}

export default Navbar
