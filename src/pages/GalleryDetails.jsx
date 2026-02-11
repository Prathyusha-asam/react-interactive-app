import { useParams, Link } from "react-router-dom";
import { imageCollection } from "./gallery";

function GalleryDetails() {
  const { imageId } = useParams();
  const image = imageCollection[imageId];

  if (!image) {
    return <h2>Image not found</h2>;
  }

  return (
    <div className="gallery-page">
      <Link to="/gallery" >⬅ Back to Gallery</Link>

      <div className="image-details">
        <h3>Image Details</h3>
        <img src={image.url} alt="Selected" className="image-large" />
        <p className="image-description">{image.description}</p>
      </div>
    </div>
  );
}

export default GalleryDetails;
