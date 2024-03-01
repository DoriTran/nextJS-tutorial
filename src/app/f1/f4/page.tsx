import Link from "next/link";

export default function F4() {
  return (
    <div style={{ display: "flex", gap: 15 }}>
      <h1>F4</h1>
      <Link href="/f1">to F1 (not working)</Link>
      <Link href="/f1/f2">to F2</Link>
      <Link href="/f1/f3">to F3</Link>
      <Link href="/about">to About</Link>
    </div>
  );
}
