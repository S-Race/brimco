import Head from "next/head"

import LoginForm from "../components/LoginForm";
import LoginTilt from "../components/LoginTilt";

const Login = () => {
    return (
        <div className="bg-stone-100 dark:bg-stone-800 sm:bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-cyan-600
            dark:to-blue-600 opacity-[.99] relative">
            <Head>
                <title>Brimco - Login</title>
                <meta name="description" content="Login to Brimco" />
            </Head>
            <main className="h-screen flex flex-col lg:flex-row lg:justify-between items-center w-5/6 mx-auto
                space-y-8 pt-16 lg:pt-0 lg:space-y-0">
                <img src="/images/mobile_login.svg" alt=" " className="lg:hidden block w-48"/>
                <img src="/images/login.svg" alt=" " className="hidden lg:block lg:w-72 lg:w-96"/>
                <LoginForm/>
            </main>
            <LoginTilt/>
        </div>
    )
}

export default Login;