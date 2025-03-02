import Link from "next/link"

// const routes = [
//     {
//         label: 'Home',
//         route: '/',
//     },
//     {
//         label: 'SignIn',
//         route: '/signin',
//     },
//     {
//         label: 'Login',
//         route: '/login',
//     },
//     {
//         label: 'payment',
//         route: '/payment',
//     },
// ];

export const Navigation = () => {
    return(
        <header>
            <nav>
                <ul>
                    <li>
                        <Link href='/'>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href='/signin'>
                            SignIn
                        </Link>
                    </li>
                    <li>
                        <Link href='/login'>
                            Login
                        </Link>
                    </li>
                </ul> 
            </nav>
        </header>
    )
}