const ImageTag = ({ tag }) => {
    return (
        <span className="inline-flex items-center justify-center rounded-full bg-gray-200 px-4 py-1 text-sm font-medium text-gray-700">
            #{tag}
        </span>
    );
};

export default ImageTag;
