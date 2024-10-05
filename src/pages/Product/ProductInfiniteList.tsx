// import { useMemo } from 'react';
// import { InfiniteData, UseInfiniteQueryResult } from '@tanstack/react-query';
// import useView from '@/hooks/observer/useView';
// import { productItemType, productListType } from '@/types/product';


// interface IProductInfiniteList {
//     result: UseInfiniteQueryResult<
//         InfiniteData<productListType, unknown>,
//         Error
//     >;
//     children: (item: productItemType) => React.ReactNode;
// }

// export default function ProductInfiniteList({
//     result,
//     children,
// }: IProductInfiniteList) {
//     const {
//         data,
//         isLoading,
//         isError,
//         hasNextPage,
//         fetchNextPage,
//         isFetchingNextPage,
//     } = result;

//     const { view, onView } = useView(
//         isFetchingNextPage,
//         fetchNextPage,
//         hasNextPage,
//     );

//     const list = useMemo(() => {
//         return data?.pages.flatMap((listData) => listData.list) || [];
//     }, [data]);

//     if (isLoading) return <div>Loading...</div>;

//     if (isError) return <div>Error...</div>;

//     return (
//         <ul className={'flex flex-wrap gap-y-10'}>
//             {list.map((item) => children(item))}
//             {view ? <p>Loading more...</p> : <div ref={onView} />}
//         </ul>
//     );
// }
