import AuthPage from "@/pages/AuthPage";

export default async function Login() {
    return(
        <section className="flex justify-center">
            <AuthPage isRegister={false} />
        </section>
    )
}