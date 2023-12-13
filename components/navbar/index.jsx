
import "./styles.css"
import Link from "next/link";
import UserLogin from "./userlogin";
import Visitant from "./visitant";

export default function Navbar(){
    const userLogged = false;
    return (
      <>
        <nav className="fixed top-0 w-full bg-red-500 p-4 z-10 text-white">
          <div className="container mx-auto flex items-center justify-between">
            <div className=" text-xl font-bold">
                <Link href="/">
                    Logo
                </Link>
            </div>
            <div className="flex space-x-4">
              {userLogged ? <UserLogin /> : <Visitant />}
            </div>
          </div>
        </nav>
      </>
    );
}