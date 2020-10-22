import {useState} from 'react';

interface IPagination {
    offset: number;
    limit: number;
}
const usePagination = ():[IPagination, () => void] => {
    const [pagination, setPagination] = useState<IPagination>({offset: 0, limit: 24})

    const nextPagination = () => {
        setPagination({offset: pagination.limit, limit: pagination.limit + 24})
    }
    return [pagination, nextPagination]
}

export default usePagination