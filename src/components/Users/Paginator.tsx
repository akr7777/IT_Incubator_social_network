import React from 'react';
import s from './users.module.css';

type PaginatorPropsType = {
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    onPageChanged: (p: number) => void
}

const Paginator = (props:PaginatorPropsType) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages: Array<number> = [];
    const startPageIndex = (props.currentPage - 10) < 1
        ? 1
        : props.currentPage - 10;
    const endPageIndex = (props.currentPage + 10) > pagesCount
        ? pagesCount
        : props.currentPage + 10;
    for (let i = startPageIndex; i <= endPageIndex; i++) {
        pages.push(i);
    }

    return <div>
        {
            pages.map((p) => {
                return <span key={p}
                    className={props.currentPage === p ? s.selected_page : s.non_selected_page}
                    onClick={() => props.onPageChanged(p)}
                >{p}</span>
            })
        }
        </div>
}
export default Paginator;