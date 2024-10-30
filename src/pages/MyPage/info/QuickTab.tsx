import { TbTruckDelivery } from 'react-icons/tb';
import { MdOutlineRateReview } from 'react-icons/md';
import { FaHeart } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

export default function QuickTab() {
    const tabs = [
        {
            id: 1,
            name: '배송지 관리',
            path: 'edit/address',
            icon: <TbTruckDelivery className="text-2xl text-black" />,
        },
        {
            id: 2,
            name: '나의 리뷰',
            path: 'review',
            icon: <MdOutlineRateReview className="text-2xl text-black" />,
        },
        {
            id: 3,
            name: '찜',
            path: 'like',
            icon: <FaHeart className="text-2xl text-bk" />,
        },
    ];
    return (
        <ul className="mt-4 flex">
            {tabs.map((tab) => (
                <li
                    key={tab.id}
                    className="relative flex-1 after:absolute after:right-0 after:top-1/2 after:h-5 after:w-[1px] after:-translate-y-1/2 after:bg-gray-100 after:content-[''] after:last:hidden"
                >
                    <Link
                        to={tab.path}
                        className="flex flex-col items-center justify-center gap-2"
                    >
                        {tab.icon}
                        <p className="text-body2">{tab.name}</p>
                        <em className="text-body3_b not-italic text-primary">
                            보기
                        </em>
                    </Link>
                </li>
            ))}
        </ul>
    );
}
