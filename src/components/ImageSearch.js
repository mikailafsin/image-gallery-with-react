import { useState } from "react";

const ImageSearch = ({ searchText }) => {
    const [text, setText] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        searchText(text);
        setText("");
    };

    return (
        <div className="mx-auto mb-8 max-w-sm">
            <form onSubmit={onSubmit} className="flex overflow-hidden rounded-sm">
                <input
                    onChange={(e) => setText(e.target.value)}
                    type="text"
                    value={text}
                    className="w-full bg-gray-200 px-4 py-2 text-gray-800 outline-none placeholder:text-gray-800"
                    placeholder="Search for images"
                />
                <button type="submit" className="bg-orange-600 px-4 py-2 font-bold text-white">
                    Search
                </button>
            </form>
        </div>
    );
};

export default ImageSearch;
