import { Checkbox } from '@/components/ui/checkbox';
import { productItemType } from '@/types/product';
import { formatNumber } from '@/util/formatData';
import { Label } from '@radix-ui/react-label';
import { useState } from 'react';
import { MoreHorizontal } from 'lucide-react';
import { ProductMenu } from './';

interface IProductItemProps extends productItemType {
    checked?: boolean;
    handleCheckItem: () => void;
}

export default function ProductItem({
    checked,
    handleCheckItem,
    ...items
}: IProductItemProps) {
    const { productSeq, name, brand, price, sale, image } = items;
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible((prev) => !prev);
    };
    return (
        <li className="flex items-center w-full p-4 border-b border-gray-200">
            {/* Selection Checkbox */}
            <div className="w-1/12 flex gap-x-2 items-center justify-center">
                <Checkbox checked={checked} onCheckedChange={handleCheckItem} />
                <Label>{productSeq}</Label>
            </div>
            {/* Product Image and Name */}
            <div className="px-3 w-4/12 flex items-center gap-x-3">
                <figure className="p-1 aspect-[1] h-24">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover rounded-md"
                    />
                </figure>
                <p className="line-clamp-2 text-body2 leading-tight">{name}</p>
            </div>
            {/* Brand */}
            <div className="flex  w-2/12 text-start px-3 ">
                <span className="text-body4_b">{brand}</span>
            </div>
            <div className="flex  w-1/12 text-start px-3 ">
                <span className="text-body4_b">{brand}</span>
            </div>
            {/* Price */}
            <div className="flex  w-2/12 text-start px-3">
                {sale && (
                    <>
                        <del className="block text-body4 text-gray-400">
                            {formatNumber(sale?.salePrice)}원
                        </del>
                        <em className="mr-2 text-body2_b not-italic text-pointRed">
                            {sale?.saleRate}%
                        </em>
                    </>
                )}
                <em className="text-body2_b not-italic">
                    {formatNumber(price)}원
                </em>
            </div>
            {/* Stock */}
            <div className="flex p-1 w-1/12 text-start">
                <em className="text-body2_b not-italic">{50}</em>
            </div>
            <div className="flex p-1 w-1/12 justify-center items-center relative">
                <button onClick={toggleMenu} className="text-center">
                    <MoreHorizontal />
                </button>
                {menuVisible && <ProductMenu />}
            </div>
        </li>
    );
}
