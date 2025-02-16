import ImageCard from "../ImageCard/ImageCard";
import css from './ImageGallery.module.css'
export default function ImageGallery({ images, onImageClick }) {
  if (!images.length) return null;
  return (
    <ul className={css.items}>
      {images.map((image) => (
        <li key={image.id} onClick={() => onImageClick(image)} className={css.item}>
          <ImageCard src={image.urls.small} alt={image.alt_description} />
        </li>
      ))}
    </ul>
  );
}
