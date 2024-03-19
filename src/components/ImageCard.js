import ImageTag from "./ImageTag";

const ImageCard = ({ image }) => {
    const tags = image.tags.split(",");

    return (
        <div className="w-[calc(33.333%-1rem)] overflow-hidden rounded shadow-lg">
            <img src={image.webformatURL} alt="" className="w-full" />
            <div className="px-8 py-4">
                <h1 className="mb-2 text-2xl font-bold text-orange-600">Photo by {image.user}</h1>
                <ul className="mb-6">
                    <li>
                        <span className="font-semibold">Views: </span>
                        <span>{image.views}</span>
                    </li>
                    <li>
                        <span className="font-semibold">Downloads: </span>
                        <span>{image.downloads}</span>
                    </li>
                    <li>
                        <span className="font-semibold">Likes: </span>
                        <span>{image.likes}</span>
                    </li>
                </ul>
                <div className="flex gap-2">
                    {tags.map((tag, index) => (
                        <ImageTag key={index} tag={tag} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ImageCard;
