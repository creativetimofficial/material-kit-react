import Video from "@/components/video";
import Link from "next/link";
export default function HomePage(){
    return (
      <Video>
        <h1 className="text-4xl font-bold mb-4">Conoce: Gente</h1>
        <Link
          href="/login"
          className="bg-red-500 text-white px-4 py-2 rounded-full"
        >
          Inicia sesión
        </Link>
      </Video>
    );
}