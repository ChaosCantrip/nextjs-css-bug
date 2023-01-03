import Link from "next/link";

import styles from "../Header.module.css";

export default function WorkingPage() {
    return (
        <div>
            <p>This is the Working Page</p>
            <Link href={"/"}>Link back to home (broken styles)</Link>
        </div>
    )
}