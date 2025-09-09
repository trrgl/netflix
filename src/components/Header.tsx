import React from 'react'
import Link from 'next/link';

function Header() {
    return (
        <header className="bg-black flex items-center justify-between p-6 fixed w-full top z-10 top-0">
            <a href="/">
                <img src="/logo.png" className="w-36" />
            </a>
            <nav>
            <ul className="flex space-x-6">
                <li className="hover:text-gray-800"><Link href="/">Нүүр Хуудас</Link></li>
                <li className="hover:text-gray-800"><Link href="/">Кино сан</Link></li>
                <li className="hover:text-gray-800"><Link href="/">ТВ шоу</Link></li>
                <li className="hover:text-gray-800"><Link href="/">Миний жагсаалт</Link></li>
            </ul>
            </nav>
        </header>
    );
}

export default Header