import { useRouter } from "next/router";
import ModalArt from "../../components/ModalArt";
export default function GalleryPage() {
  const router = useRouter();
  //   const { modalArtwork } = router.query.id;

  return (
    <div>
      <ModalArt />
    </div>
  );
}
