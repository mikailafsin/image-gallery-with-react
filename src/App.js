const App = () => {
    return (
        <div className="max-w-sm overflow-hidden rounded shadow-lg">
            <img src="https://source.unsplash.com/random" alt="" className="w-full" />
            <div className="px-8 py-4">
                <h1 className="mb-2 text-2xl font-bold text-orange-600">Photo by Jane Doe</h1>
                <ul className="mb-6">
                    <li>
                        <span className="font-semibold">Views: </span>
                        <span>4000</span>
                    </li>
                    <li>
                        <span className="font-semibold">Downloads: </span>
                        <span>300</span>
                    </li>
                    <li>
                        <span className="font-semibold">Likes: </span>
                        <span>150</span>
                    </li>
                </ul>
                <div className="flex gap-2">
                    <span className="rounded-full bg-gray-200 px-4 py-1 text-sm font-medium text-gray-700">
                        #tag1
                    </span>
                    <span className="rounded-full bg-gray-200 px-4 py-1 text-sm font-medium text-gray-700">
                        #tag2
                    </span>
                    <span className="rounded-full bg-gray-200 px-4 py-1 text-sm font-medium text-gray-700">
                        #tag3
                    </span>
                </div>
            </div>
        </div>
    );
};

export default App;
