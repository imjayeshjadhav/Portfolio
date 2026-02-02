import dayjs from 'dayjs'
import { navLinks } from '#constants'

const Navbar = () => {
  return (
    <nav>
        <div>
            <img src="/logo.svg" alt="logo" />
            <p className='font-bold'>Jayesh's Portfolio</p>

            <ul>
                {navLinks.map(({id,name}) =>(
                    <li key={id}>
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
