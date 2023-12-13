
import Link from "next/link";
import InstallMobileIcon from '@mui/icons-material/InstallMobile';
import InfoIcon from '@mui/icons-material/Info';
import LoginIcon from '@mui/icons-material/Login';

export default function Visitant(params) {
    return (
      <>
        <Link href="/login">
          <LoginIcon />
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
      </>
    );
}