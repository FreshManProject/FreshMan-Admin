import { HeaderTitle } from '@/components/common';
import { useNavigate } from 'react-router';

export default function ProductPage() {
    const navigate = useNavigate();

    return (
        <>
            <HeaderTitle
                title="상품"
                onSubmit={() => {
                    navigate('/product/registration');
                }}
            />
            <section>아직 등록된 상품이 없습니다.</section>
        </>
    );
}
