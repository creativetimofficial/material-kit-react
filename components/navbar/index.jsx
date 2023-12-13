import Link from "next/link";
import "./styles.css"

export default function Navbar(){
    return (
        <nav className="navbar">
            <Link href={"/"}>
                <h1>CodeMate</h1>
            </Link>
            <ul>
                <li>
                    <Link href="/">hola</Link>
                </li>
            </ul>
        </nav>
    );
}