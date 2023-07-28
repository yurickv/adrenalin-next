import Link from "next/link";
import Navbar from "./navbar";


const Header = () => (
    <header>
        <Link href="/">ADRENALIN gym</Link>
        <Navbar/>
    </header>
);

export default Header;