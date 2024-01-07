import AuthPage from "@/pages/AuthPage";

export default async function Register() {
    return(
        <section className="flex justify-center">
            <AuthPage isRegister={true}/>
        </section>
    )
}