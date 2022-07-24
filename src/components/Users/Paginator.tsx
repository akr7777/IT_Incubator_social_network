import React from 'react';
import s from './users.module.css';

const pagesWide = 10;

type PaginatorPropsType = {
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    onPageChanged: (p: number) => void
}

const Paginator = (props: PaginatorPropsType) => {

    /*const backButton = () => {
        if (props.currentPage > 1) props.onPageChanged(props.currentPage - 1);
        else
    }*/

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages: Array<number> = [];
    const startPageIndex = (props.currentPage - pagesWide) < 1
        ? 1
        : props.currentPage - pagesWide;
    const endPageIndex = (props.currentPage + pagesWide) > pagesCount
        ? pagesCount
        : props.currentPage + pagesWide;
    for (let i = startPageIndex; i <= endPageIndex; i++) {
        pages.push(i);
    }

    return <div>

        <button
            disabled={props.currentPage === 1}
            onClick={() => props.onPageChanged(props.currentPage - 1)}
        >
            Back
        </button>

        {
            pages.map((p) => {
                return <span key={p}
                             className={props.currentPage === p ? s.selected_page : s.non_selected_page}
                             onClick={() => props.onPageChanged(p)}
                >{p}</span>
            })
        }

        <button
            disabled={props.currentPage === pagesCount}
            onClick={() => props.onPageChanged(props.currentPage + 1)}
        >
            Furth
        </button>

    </div>
}
export default Paginator;