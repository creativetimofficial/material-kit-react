
import Link from "next/link";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PortraitIcon from '@mui/icons-material/Portrait';
import LogoutIcon from '@mui/icons-material/Logout';

export default function UserLogin(params) {
    return (
      <>
        <Link href="/login">
          <PortraitIcon />
          Ver perfiles
        </Link>
        <Link href="/about">
          <AccountCircleIcon />
          Mi perfil
        </Link>
        <Link href="/contact">
          <LogoutIcon />
          Cerrar sesión
        </Link>
      </>
    );
}