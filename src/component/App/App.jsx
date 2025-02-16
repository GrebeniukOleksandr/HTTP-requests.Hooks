import { useState, useEffect } from "react";
import { fetchImages } from "../../api";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMassage/ErrorMassage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";

export default function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!query) return;

    const controller = new AbortController();
    setLoading(true);
    setError(null);

    fetchImages(query, page, controller.signal)
      .then((data) => {
        if (page === 1) {
          setImages(data);
        } else {
          setImages((prev) => [...prev, ...data]);
        }
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          setError("Failed to fetch images");
        }
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [query, page]);

  const handleSearch = (newQuery) => {
    if (query === newQuery) return;
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={setSelectedImage} />
      {loading && <Loader loading={loading} />}
      {images.length > 0 && !loading && images.length % 12 === 0 && (
        <LoadMoreBtn onClick={() => setPage((prev) => prev + 1)} />
      )}
      <ImageModal isOpen={!!selectedImage} onClose={() => setSelectedImage(null)} image={selectedImage} />
    </div>
  );
}
