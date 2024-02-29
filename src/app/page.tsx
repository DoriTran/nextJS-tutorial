import Link from "next/link";

export default function Home() {
    return (
        <div style={{ display: "flex", flexDirection: 'column', gap: 10}}>
            <h1>Welcome home!</h1>
            <Link href="/blog">Blog</Link>
            <Link href="/products">Products</Link>
        </div>
    );
}