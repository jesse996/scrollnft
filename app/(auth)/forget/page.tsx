import Link from "next/link";

export default function ForgetPage() {
    return (
        <div>
            <h1>忘记密码</h1>
            <Link href="/login">
                Go to login
            </Link>
        </div>
    );
}