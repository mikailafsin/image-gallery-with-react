import { useState, useEffect } from "react";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";

const App = () => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [term, setTerm] = useState("");

    useEffect(() => {
        fetch(
            `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
        )
            .then((res) => res.json())
            .then((data) => {
                setImages(data.hits);
                setIsLoading(false);
            })
            .catch((err) => console.erorr(err));
    }, [term]);

    return (
        <div className="container relative mx-auto min-h-screen p-4">
            <ImageSearch searchText={(text) => setTerm(text)} />

            {!isLoading && images.length === 0 && (
                <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-5xl">
                    No Images Found
                </h1>
            )}

            {isLoading ? (
                <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-9xl">
                    Loading...
                </h1>
            ) : (
                <div className="flex flex-wrap justify-center gap-4">
                    {images.map((image) => (
                        <ImageCard key={image.id} image={image} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default App;
