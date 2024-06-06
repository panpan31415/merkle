import { MdKeyboardArrowDown } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import "./Header.scss"
export default function Header() {
    return <header className='header'>
        <a href='https://www.merkle.com/' rel="noreferrer" target="_blank">
            <img className='logo'
                src="https://s7d1.scene7.com/is/content/merkle/full-logo-lt?ts=1714055905590&dpr=off"
                alt="logo" />
        </a>
        <div className="helper-tools">
            <button className="helper-tools--subscribe-btn">Subscribe</button>
            <button className="helper-tools--language-btn">En <MdKeyboardArrowDown size={20} /></button>
            <button className='helper-tools--search-btn'
                title='I will do nothing...'>
                <FiSearch />
            </button>
        </div>
    </header>
}