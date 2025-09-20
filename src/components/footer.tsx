const Footer=()=>{

return(
<footer className="bg-red-700 rounded-lg shadow-sm m-4 dark:bg-red-700">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
    <span className="text-sm text-white sm:text-center dark:text-white">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white dark:text-white sm:mt-0">
        <li>
            <a href="/about" className="hover:underline me-4 md:me-6">sobre la pagina </a>
        </li>
        <li>
            <a href="/queries-or-errors" className="hover:underline me-4 md:me-6">consultas o errores</a>
        </li>
        <li>
            <a href="/contac" className="hover:underline">Contact</a>
        </li>
    </ul>
    </div>
</footer>
)
}

export default Footer