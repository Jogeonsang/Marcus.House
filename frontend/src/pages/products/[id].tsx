import Link from 'next/link';
import {NextPage} from 'next';
import {useRouter} from 'next/router';

const ProductDetailPage: NextPage<{}> = () => {
    const router = useRouter();

    return (
        <>
            <Link href="/">
                <a>홈으로</a>
            </Link>
            <div> Product ID: {router.query.id}</div>
        </>
    )
};

export default ProductDetailPage;
