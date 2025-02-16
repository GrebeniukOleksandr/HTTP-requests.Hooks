import css from './ImageCard.module.css';

export default function ImageCard({ src, alt }) {
  return (
    <div className={css.container}>
      <img src={src} alt={alt} className={css.image}/>
    </div>
  );
};
