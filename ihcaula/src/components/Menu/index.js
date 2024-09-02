import style from './menu.module.css'
import  Link  from 'next/link'

export default function Menu(){
    return(
        <nav>
            <ul className={style.menu}>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/pages/contato">Contato</Link>
                </li>
                <li>
                    <Link href="/pages/galeria">Galeria</Link>
                </li>
            </ul>
        </nav>
    )
}