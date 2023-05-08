
import Link from "next/link";
import Head from "next/head";

export default function MainLayout({children, title, description}: any) {
  return (
    <div className="container mx-auto">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description}/>
        <meta name="description" content={description}/>
      </Head>

      <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54"
               xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/>
          </svg>
          <span className="font-semibold text-xl tracking-tight">School App</span>
        </div>

        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <Link href="/students"
                  className="block mt-4 lg:inline-block lg:mt-0 text-yellow-200 hover:text-white mr-4">
              Estudiantes
            </Link>

            <Link href="/grades" className="block mt-4 lg:inline-block lg:mt-0 text-yellow-200 hover:text-white mr-4">
              Grados
            </Link>

            <Link href="/subjects" className="block mt-4 lg:inline-block lg:mt-0 text-yellow-200 hover:text-white">
              Asignaturas
            </Link>
          </div>
        </div>
      </nav>

      <div className="my-5 p-5">
        {children}
      </div>

      <footer className="bg-white rounded-lg shadow my-4 dark:bg-gray-800 mx-5">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023
              &nbsp;
              <a href="https://www.instagram.com/programamosescuela" className="hover:underline">
                Escuela Programamos™
              </a>.
              Todos los derechos reservados.
            </span>
          <ul
            className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">¿Quiénes somos?</a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">Política de privacidad</a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">Casos de éxito</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Contáctenos</a>
            </li>
          </ul>
        </div>
      </footer>

    </div>
  );
}

MainLayout.defaultProps = {
  title: "School App",
  description: "App front web de aplicación de gestión de colegio"
}