import Link from "next/link";


const Navbar = () => {

    return(
        <div>
            <Link href="/">Головна</Link>
            <Link href="/services">Послуги</Link>
            <Link href="/calculators">Калькулятори</Link>
            <Link href="/blog">Блог</Link>
            <Link href="/contacts">Контакти</Link>
        </div>
    )
};

export default Navbar;