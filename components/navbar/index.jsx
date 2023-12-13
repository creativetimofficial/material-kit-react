import "./styles.css"
import Link from "next/link";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InstallMobileIcon from '@mui/icons-material/InstallMobile';
import InfoIcon from '@mui/icons-material/Info';

export default function Navbar(){
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
              <Link href="/login">
                <AccountCircleIcon />
                Inicia sesión
              </Link>
              <Link href="/about">
                <InfoIcon />
                Acerca de
              </Link>
              <Link href="/contact">
                <InstallMobileIcon />
                Instala la app
              </Link>
            </div>
          </div>
        </nav>
      </>
    );
}