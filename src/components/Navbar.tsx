import { Link } from "react-router-dom";
import logo from "../assets/asset 0.png";
import electron from "../assets/asset 1.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faArrowRight, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

export default function Navbar() {
    const [menu, setMenu] = useState<boolean>(false);

    function handleMenu(): void {
        setMenu(!menu);
    }

    return (
        <nav className="flex p-3 bg-white items-center justify-between font-display">
            <Link to='/' className="flex gap-2 items-center">
                <img src={logo} alt="logo" className="object-cover max-w-12 max-h-12"/>
                <span className="text-lg font-medium">DoDesktop</span>
            </Link>
            <div className="hidden lg:flex gap-12">
                <Link to='/' className="font-medium hover:text-primary">Pricing</Link>
                <Link to='/' className="font-medium hover:text-primary">Docs</Link>
                <Link to='/' className="font-medium hover:text-primary">Changelog</Link>
                <Link to='/' className="font-medium hover:text-primary">Blogs</Link>
                <Link to='/' className="font-medium hover:text-primary">Login</Link>
            </div>
            <button className="hidden lg:flex gap-2 items-center border border-1 border-gray-400 hover:border-gray-600 px-6 py-2 rounded-lg">
                <img src={electron} alt="electron" />
                <span className="font-display">Electron Developers</span>
                <FontAwesomeIcon icon={faArrowRight} />
            </button>
            <button className="p-2 lg:hidden" onClick={handleMenu}>
                <FontAwesomeIcon icon={faBars} className="text-gray-600 "/>
            </button>
                
            {/* Mobile Menu */}

            <div onClick={handleMenu} className={`fixed bg-white inset-0 p-3 z-10 lg:hidden ${menu ? '' : 'hidden'}`}
            >
                <div className="flex justify-between">
                    <Link to='/' className="flex gap-2 items-center">
                        <img src={logo} alt="logo" className="object-cover max-w-12 max-h-12"/>
                        <span className="text-lg font-medium font-display">DoDesktop</span>
                    </Link>

                    <button className="p-2 lg:hidden" onClick={handleMenu}>
                        <FontAwesomeIcon icon={faXmark} className="text-gray-600 "/>
                    </button>
                </div>
                <div className="mt-6">
                    <Link to='/' className="font-medium hover:text-primary p-3 m-3 hover:bg-gray-100 block rounded-lg">Pricing</Link>
                    <Link to='/' className="font-medium hover:text-primary p-3 m-3 hover:bg-gray-100 block rounded-lg">Docs</Link>
                    <Link to='/' className="font-medium hover:text-primary p-3 m-3 hover:bg-gray-100 block rounded-lg">Changelog</Link>
                    <Link to='/' className="font-medium hover:text-primary p-3 m-3 hover:bg-gray-100 block rounded-lg">Blogs</Link>
                    <Link to='/' className="font-medium hover:text-primary p-3 m-3 hover:bg-gray-100 block rounded-lg">Login</Link>
                </div>

                <div className="h-[1px] bg-gray-300"></div>

                <button className="w-full mt-3 flex gap-2 items-center p-4 m-3 hover:bg-gray-100 rounded-lg">
                    <img src={electron} alt="electron" />
                    <span>Electron Developers</span>
                </button>
            </div>
        </nav>
    )
}