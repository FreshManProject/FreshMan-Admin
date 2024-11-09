import { useNavigate } from "react-router-dom";

const ProductMenu = ({ productSeq }: { productSeq :number}) => {
    const navigate = useNavigate();
    return (
        <div className="absolute top-full right-0 mt-2 w-32 bg-white border border-gray-200 rounded shadow-lg z-10">
            <ul className="py-1">
                <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                        navigate(`/product/${productSeq}`);
                    }}
                >
                    수정
                </li>
                <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                        alert('Edit clicked');
                    }}
                >
                    재고 변경
                </li>
                <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                        alert('Edit clicked');
                    }}
                >
                    할인 정보 수정
                </li>
            </ul>
        </div>
    );
};

export default ProductMenu;
