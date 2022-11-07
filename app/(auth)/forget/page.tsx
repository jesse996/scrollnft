import Link from "next/link";
// import { Text } from "../../mantine";
import { Text } from "@/app/mantine";

export default function ForgetPage() {
    return (
        <div>
            <Text>忘记密码</Text>
            <Link href="/login">
                Go to login
            </Link>
        </div>
    );
}