<div className="flex justify-center mx-auto">
    <div
        className={`relative w-[200px] h-[300px] transform-style-3d transition-transform duration-500 ${
            isFlipped ? 'rotate-y-180' : ''
        }`}
    >
        <div className="w-full h-full transform-style-3d relative">
            <div className="absolute w-full h-full bg-green-100 text-green-500 backface-hidden flex items-center justify-center">
                <div className="p-5 text-center">{cardFront}</div>
                <button
                    className="w-[100px] mt-2 px-4 py-2 text-lg bg-purple-200 rounded cursor-pointer"
                    onClick={handleFlip}
                >
                    Flip
                </button>
            </div>
            <div className="absolute w-full h-full bg-pink-200 text-blue-500 rotate-y-180 backface-hidden flex items-center justify-center">
                <div className="p-5 text-center">{cardBack}</div>
                <button
                    className="w-[100px] mt-2 px-4 py-2 text-lg bg-purple-200 rounded cursor-pointer"
                    onClick={handleFlip}
                >
                    Flip
                </button>
            </div>
        </div>
    </div>
</div>;
