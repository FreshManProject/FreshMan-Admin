import { useMemo, useState, useEffect } from 'react';
import { InfiniteData, UseInfiniteQueryResult } from '@tanstack/react-query';
import useView from '@/hooks/observer/useView';
import { productListType } from '@/types/product';

import { Checkbox } from '@/components/ui/checkbox';
import { CheckedState } from '@radix-ui/react-checkbox';
import { ProductItem } from '.';
import { Button } from '@/components/ui/button';
import { useDeleteProduct } from '@/hooks/query/product';

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

    const { mutateDeleteProduct } = useDeleteProduct();

    const { view, onView } = useView(
        isFetchingNextPage,
        fetchNextPage,
        hasNextPage,
    );

    const list = useMemo(() => {
        return data?.pages.flatMap((listData) => listData.list) || [];
    }, [data]);

    const totalCount = useMemo(() => {
        return (
            data?.pages.reduce((acc, page) => acc + (page.count || 0), 0) || 0
        );
    }, [data]);

    const [checkList, setCheckList] = useState<boolean[]>([]);
    const [isAllChecked, setIsAllChecked] = useState(false);
    const [countSelected, setCountSelected] = useState(0);

    // Update checkList and isAllChecked when totalCount changes
    useEffect(() => {
        if (totalCount > 0) {
            setCheckList(new Array(totalCount).fill(false));
            setIsAllChecked(false);
            setCountSelected(0);
        }
    }, [totalCount]);

    const onAllCheckedChange = async (checked: CheckedState) => {
        const newCheckedState = !!checked;
        setIsAllChecked(newCheckedState);
        setCountSelected(newCheckedState ? totalCount : 0);
        setCheckList(new Array(totalCount).fill(newCheckedState));
    };

    const handleCheckItem = (i: number) => {
        const newCheckList = [...checkList];
        const newCheck = !newCheckList[i];
        newCheckList[i] = newCheck;
        setCheckList(newCheckList);
        console.log(newCheckList);

        setCountSelected((prev) => (newCheck ? prev + 1 : prev - 1));
        setIsAllChecked(newCheckList.every((checked) => checked));
    };

    if (isLoading) return <div>Loading...</div>;

    if (isError) return <div>Error...</div>;

    const handleDeleteProducts = () => {
        const selectedProductSeqList = list
            .map((item, i) => (checkList[i] ? item.productSeq : null))
            .filter((productSeq) => productSeq !== null) as number[];

        let success = true;
        selectedProductSeqList.forEach((productSeq) => {
            mutateDeleteProduct(productSeq, {
                onError: (error) => {
                    alert(`${productSeq} 상품 삭제를 실패했습니다.`);
                    success = false;
                },
            });
        });

        if (success) {
            alert('상품이 삭제되었습니다.');
        }

    };

    return (
        <div className="w-full">
            {/* Table Header */}
            <ul className="w-full">
                <li className="flex bg-gray-200 font-bold w-full p-4 border-b border-gray-300">
                    <div className="flex items-center justify-center p-1 w-1/12 text-start gap-x-2">
                        <Checkbox
                            disabled={totalCount === 0}
                            checked={isAllChecked}
                            onCheckedChange={onAllCheckedChange}
                        />
                        No.
                    </div>
                    <div className="flex items-center p-1 px-3 w-4/12 text-start">
                        상품명
                    </div>
                    <div className="flex items-center p-1 px-3 w-2/12 text-start">
                        브랜드
                    </div>
                    <div className="flex items-center p-1 w-1/12 text-start">
                        할인 기간
                    </div>
                    <div className="flex items-center p-1 px-3 w-2/12 text-start">
                        판매가
                    </div>
                    <div className="flex items-center p-1 w-1/12 text-start">
                        재고
                    </div>
                    <div className="flex items-center justify-center p-1 w-1/12">
                        {countSelected > 0 && (
                            <Button
                                variant="destructive"
                                onClick={handleDeleteProducts}
                            >
                                삭제
                            </Button>
                        )}
                    </div>
                </li>
                {list.length === 0 && <p>아직 등록된 상품이 없습니다.</p>}
                {list.map((item, i) => (
                    <ProductItem
                        key={item.productSeq}
                        checked={checkList[i]}
                        handleCheckItem={() => {
                            handleCheckItem(i);
                        }}
                        {...item}
                    />
                ))}
                {view ? <p>Loading more...</p> : <div ref={onView} />}
            </ul>
        </div>
    );
}
