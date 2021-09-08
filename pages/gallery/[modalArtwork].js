import { useRouter } from "next/router";

export default function GalleryPage() {
  const router = useRouter();
  const { modalArtwork } = router.query;

  return <div>I am {modalArtwork}</div>;
}
