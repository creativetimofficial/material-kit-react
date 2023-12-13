
import Link from "next/link";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PortraitIcon from '@mui/icons-material/Portrait';
import LogoutIcon from '@mui/icons-material/Logout';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';

export default function UserLogin(params) {
    return (
      <>
        <Link href="/view/users">
          <PortraitIcon />
          Ver perfiles
        </Link>
        <Link href="/view/activities">
          <FavoriteRoundedIcon />
          Parejas
        </Link>
        <Link href="/view/profile/{id}">
          <AccountCircleIcon />
          Mi perfil
        </Link>
        <Link href="/">
          <LogoutIcon />
          Cerrar sesión
        </Link>
      </>
    );
}