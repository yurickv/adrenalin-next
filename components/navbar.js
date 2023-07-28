import Link from "next/link";


const Navbar = () => {

    return(
        <div>
            <Link href="/">Головна</Link>
            <Link href='/post/first-post'>Post</Link>
        </div>
    )
};

export default Navbar;