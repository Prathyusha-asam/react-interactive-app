import { Link } from "react-router-dom";

const imageCollection = [
  { 
    url: "https://www.cheatsheet.com/wp-content/uploads/2021/10/E2FC778F-E707-4016-8DB5-C51FAF983DBE.jpeg?w=1200&h=610",
    description: "The Demogorgon is a deadly creature from the Upside Down that hunts silently and feeds on fear."
  },
  { 
    url: "https://comicbook.com/wp-content/uploads/sites/4/2025/11/Vecna-in-Hawkins-in-Stranger-Things-Season-5-Episode-4.jpg?resize=300",
    description: "Vecna emerges from the Upside Down, ready to unleash his final terror on Hawkins."
  },
  { 
    url: "https://www.whats-on-netflix.com/wp-content/uploads/2024/09/stranger-things-season-5-preview-everything-we-know-so-far.jpg",
    description: "Vecna confronts Will face-to-face, delivering a chilling warning that the end has already begun."
  },
  { 
    url: "https://i2-prod.mirror.co.uk/article36317247.ece/ALTERNATES/s1200/0_Vecna-Stranger-Things-5.jpg",
    description: "Vecna stands in the flames, unshaken and unstoppable, as destruction unfolds around him."
  },
  { 
    url: "https://tbreak.com/content/images/size/w1920/2025/11/Stranger-Things-5-Review.jpg",
    description: "As the sky turns blood-red and Vecna’s presence looms above Hawkins, the group rides toward a battle they can’t avoid."
  },
  { 
    url: "https://www.thenews.com.pk/assets/uploads/updates/2022-12-03/1016347_024354_updates.jpg",
    description: "Together they face the storm, knowing the final fight for Hawkins has already begun."
  }
];

function Gallery() {
  return (
    <div className="gallery-page">
      <h3>Stranger Things Gallery</h3>

      <div className="gallery">
        {imageCollection.map((img, index) => (
          <Link key={index} to={`/gallery/${index}`}>
            <img src={img.url} alt={`Image ${index}`} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Gallery;

export { imageCollection }; 
