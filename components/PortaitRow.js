import Link from "next/link";
import Image from "next/image";

export default function PortraitRow({ thumbnail, title, author }) {
  return (
    <div>
      <Image
        priority
        src={thumbnail}
        width={171}
        height={192}
        layout="responsive"
        alt="charts"
      />
      <h3>{title}</h3>
      <p>{author}</p>
    </div>
  );
}
