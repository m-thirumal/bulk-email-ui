import Link from "next/link";
import headerStyles from "./header.module.css";

export default function Header() {
    return (
        <>
            <div className={headerStyles.navbar}>
                <Link href="/">Home</Link>
                <Link href="/project">Project</Link>
                <Link href="/about">About</Link>
            </div>
        </>
    );
}