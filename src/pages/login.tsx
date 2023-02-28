import { Load } from "@/components/Load";
import { api } from "@/services/api";
import { Container } from "@/styles/Login";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [load, setLoad] = useState(false)
    const router = useRouter()

    async function login(event: any) {
        event.preventDefault();
        setLoad(true)
        const data = {
            email, password
        };

        try {
            const response = await api.post('/Autoriza/Login', data);
            localStorage.setItem('email', email);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('expiration', response.data.expiration);
            router.push("/")
            setLoad(false)


        } catch (error) {
            setLoad(false)
            alert('O login falhou ' + error)
        }
    }
    return (
        <Container
            load={load}
        >
            <Load
                load={load}
            />
            <section>
                <form onSubmit={login}>
                    <input type="email" placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input type="password" placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <button type="submit">Login</button>
                </form>
            </section>
        </Container>
    )
}