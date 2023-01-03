import Link from "next/link";

export default function HomePage() {
    return (
        <div>
            <p>This is the Home Page</p>
            <Link href={"/working"}>Link to /working, where styles apply</Link>
            <p>If the style applies when coming back from /working, refresh the page to reload styles</p>
        </div>
    )
}