import { productItemType } from '@/types/product';
import { formatNumber } from '@/util/formatData';

interface IProductItemProps extends productItemType {
    className?: '';
}

export default function ProductItem({
    name,
    brand,
    price,
    image,
    sale,
    className,
}: IProductItemProps) {
    return (
        <li
            className={`basis-1/3 md:basis-1/4 lg:basis-1/6 h-full ${className}`}
        >
            <img
                src={image}
                alt={name}
                className="h-full w-full object-cover"
            />
            <div className={'px-2.5'}>
                <div className={'mb-1 flex items-center justify-between'}>
                    <span className={'text-body4_b'}>{brand}</span>
                </div>
                <p className={'line-clamp-2 text-body2 leading-tight'}>
                    {name}
                </p>

                <div className={'mt-3'}>
                    {sale && (
                        <>
                            <del className={'block text-body4 text-gray-400'}>
                                {formatNumber(sale?.salePrice)}원
                            </del>
                            <em
                                className={
                                    'mr-2 text-body2_b not-italic text-pointRed'
                                }
                            >
                                {sale?.saleRate}%
                            </em>
                        </>
                    )}

                    <em className={'text-body2_b not-italic'}>
                        {formatNumber(price)}원
                    </em>
                </div>
            </div>
        </li>
    );
}
