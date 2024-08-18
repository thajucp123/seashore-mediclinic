import { useState } from "react";
import styles from "./gallery.module.css";

const Gallery = () => {

    const [loadedImages, setLoadedImages] = useState ({}); // to keep track of images that have been loaded
    const [loadComplete, setLoadComplete] = useState(false); // to keep track of whether both original and placeholder images have been loaded
    const [loadCount, setLoadCount] = useState(0); // to keep track of the number of images that have been loaded

    const images = [
        {id: 1, src: "/images/gallery/pic-01.jpg", title: "Reception"},
        {id: 2, src: "/images/gallery/pic-02.jpg", title: "Outside"},
        {id: 3, src: "/images/gallery/pic-03.jpg", title: "Front Entrance"},
        {id: 4, src: "/images/gallery/pic-01.jpg", title: "Image Title"},
        {id: 5, src: "/images/gallery/pic-0d1.jpg", title: "Image Title"},
        {id: 6, src: "/images/gallery/pic-01.jpg", title: "Image Title"},
    ]

    return(
        <section  className={styles.gallery}>
        <h3>A Glimpse into Our Clinic</h3>
        <h2 className={styles.mainTitle}>Gallery</h2>
        <div className={styles.separator}></div>
            <div className={styles.galleryContainer}>
                {images.map((image) => {
                    return(
                    <div className={styles.galleryItem} key={image.id}>
                    <img src={loadedImages[image.id] ? image.src : "/images/gallery/placeholder.png"} 
                    alt={image.title} className={styles.image} 
                    loading="lazy"
                    onLoad={() =>{
                        setLoadCount(loadCount + 1);
                        loadCount == 2 ? setLoadComplete(!loadComplete): null;
                        setLoadedImages((prevStates) => {
                            return {
                                ...prevStates,
                                [image.id]: true //adds the loaded image to the state object
                            }
                        })
                    }}
                    onError={(e) => {
    console.error(`Error loading image ${image.id}`);
    e.target.src = "/images/gallery/placeholder.png";
  }}
                    />
                    {!loadComplete && (
            <div className={styles.imgplaceholder}>
              <div className={styles.imgloader}></div>
              {console.log("loader section", image.id)}
            </div>
          )}
                    <div className={styles.overlay}>
                    <p className={styles.overlayText}>{image.title}</p>
                    </div>
                    </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Gallery;