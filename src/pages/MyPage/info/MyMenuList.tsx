import { BasicAlert } from '@/components/common/Alert';
import { ACCESSTOKEN, USER_AUTH_STORAGE } from '@/constants/token';
import { useDeleteMember } from '@/hooks/query/user';
import { IoIosArrowForward } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';

export default function MyMenuList() {
    const { mutateDeleteMember } = useDeleteMember();
    const navigate = useNavigate();
    const handleMemberOut = () => {
        mutateDeleteMember();
        localStorage.removeItem(ACCESSTOKEN);
        localStorage.removeItem(USER_AUTH_STORAGE);
    };

    const handleLogout = () => {
        localStorage.removeItem(ACCESSTOKEN);
        localStorage.removeItem(USER_AUTH_STORAGE);
        navigate('/login');
    };

    const menus = [
        {
            category: '문의',
            list: [
                {
                    id: 1,
                    name: '문의 내역',
                    path: '/',
                    link: true,
                },
            ],
        },
        {
            category: '내 정보',
            list: [
                {
                    id: 1,
                    name: '내 정보 수정',
                    path: 'edit',
                    link: true,
                },
                {
                    id: 2,
                    name: '회원탈퇴',
                    path: '/',
                    link: false,
                    data: {
                        message: '정말로 탈퇴하시겠습니까?',
                        action: handleMemberOut,
                    },
                },
                {
                    id: 3,
                    name: '로그아웃',
                    path: '/',
                    link: false,
                    data: {
                        message: '로그아웃 하시겠습니까?',
                        action: handleLogout,
                    },
                },
            ],
        },
    ];

    return (
        <div className="mt-5 flex flex-col gap-5">
            {menus.map((menu) => {
                return (
                    <section key={menu.category} className="px-5">
                        <h3 className="mb-2 text-body3 text-gray400">
                            {menu.category}
                        </h3>
                        <ul className="flex flex-col gap-4">
                            {menu.list.map((item) => (
                                <li className="text-body2" key={item.id}>
                                    {item.link ? (
                                        <Link
                                            to={item.path}
                                            className="flex w-full items-center justify-between text-body2"
                                        >
                                            {item.name}
                                            <IoIosArrowForward className="text-gray400" />
                                        </Link>
                                    ) : (
                                        item.data && (
                                            <BasicAlert
                                                headerTitle={item.data?.message}
                                                onClick={item.data?.action}
                                                buttonComponent={
                                                    <button type="button">
                                                        {item.name}
                                                    </button>
                                                }
                                            />
                                        )
                                    )}
                                </li>
                            ))}
                        </ul>
                    </section>
                );
            })}
        </div>
    );
}
