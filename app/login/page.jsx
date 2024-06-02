import {options} from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function LoginPage() {
    const session = await getServerSession(options)

    if(!session) {
        redirect('/api/auth/signin?callbackUrl=/login')
    }

    return (
        <h1>Oui Oui</h1>
    )
}