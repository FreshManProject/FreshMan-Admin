import { useMemo } from 'react';
import { InfiniteData, UseInfiniteQueryResult } from '@tanstack/react-query';
import useView from '@/hooks/observer/useView';
import { productListType } from '@/types/product';
import ProductItem from './ProductItem';

interface IProductInfiniteList {
    result: UseInfiniteQueryResult<
        InfiniteData<productListType, unknown>,
        Error
    >;
}

export default function ProductInfiniteList({ result }: IProductInfiniteList) {
    const {
        data,
        isLoading,
        isError,
        hasNextPage,
        fetchNextPage,
        isFetchingNextPage,
    } = result;

    const { view, onView } = useView(
        isFetchingNextPage,
        fetchNextPage,
        hasNextPage,
    );

    const list = useMemo(() => {
        return data?.pages.flatMap((listData) => listData.list) || [];
    }, [data]);

    if (isLoading) return <div>Loading...</div>;

    if (isError) return <div>Error...</div>;

    return (
        <div className="w-full">
            {/* Table Header */}
            <ul className="w-full">
                <li className="flex bg-gray-200 font-bold w-full p-4 border-b border-gray-300">
                    <div className="flex items-center p-1 w-1/12 text-start">
                        상품 번호
                    </div>
                    <div className="flex items-center p-1 px-3 w-5/12 text-start">
                        상품명
                    </div>
                    <div className="flex items-center p-1 px-3 w-2/12 text-start">
                        브랜드
                    </div>
                    <div className="flex items-center p-1 px-3 w-2/12 text-start">
                        판매가
                    </div>
                    <div className="flex items-center p-1 w-1/12 text-start">
                        재고
                    </div>
                </li>
                {list.length === 0 && <p>아직 등록된 상품이 없습니다.</p>}
                {list.map((item) => (
                    <ProductItem key={item.productSeq} {...item} />
                ))}
                {view ? <p>Loading more...</p> : <div ref={onView} />}
            </ul>
        </div>
    );
}
