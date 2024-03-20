const ImageTag = ({ tag }) => {
    return (
        <span className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-gray-200 px-2 py-1 text-sm font-medium text-gray-700 lg:px-4">
            #{tag}
        </span>
    );
};

export default ImageTag;
