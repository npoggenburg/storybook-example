import React, { ReactNode } from 'react';

interface GridProps {
    columns: number | {
        sm?: string,
        md?: string,
        lg?: string,
        xl?: string,
        xxl?: string
    };
    children: ReactNode;
}

// @Tailwind: used classes
const gridcols = [
    "grid-cols-1",
    "grid-cols-2",
    "grid-cols-3",
    "grid-cols-4",
    "grid-cols-5",
    "grid-cols-6",
    "grid-cols-7",
    "grid-cols-8",
    "grid-cols-9",
    "grid-cols-10",
    "grid-cols-11",
    "grid-cols-12",
    "sm:grid-cols-1",
    "sm:grid-cols-2",
    "sm:grid-cols-3",
    "sm:grid-cols-4",
    "sm:grid-cols-5",
    "sm:grid-cols-6",
    "sm:grid-cols-7",
    "sm:grid-cols-8",
    "sm:grid-cols-9",
    "sm:grid-cols-10",
    "sm:grid-cols-11",
    "sm:grid-cols-12",
    "md:grid-cols-1",
    "md:grid-cols-2",
    "md:grid-cols-3",
    "md:grid-cols-4",
    "md:grid-cols-5",
    "md:grid-cols-6",
    "md:grid-cols-7",
    "md:grid-cols-8",
    "md:grid-cols-9",
    "md:grid-cols-10",
    "md:grid-cols-11",
    "md:grid-cols-12",
    "lg:grid-cols-1",
    "lg:grid-cols-2",
    "lg:grid-cols-3",
    "lg:grid-cols-4",
    "lg:grid-cols-5",
    "lg:grid-cols-6",
    "lg:grid-cols-7",
    "lg:grid-cols-8",
    "lg:grid-cols-9",
    "lg:grid-cols-10",
    "lg:grid-cols-11",
    "lg:grid-cols-12",
    "xl:grid-cols-1",
    "xl:grid-cols-2",
    "xl:grid-cols-3",
    "xl:grid-cols-4",
    "xl:grid-cols-5",
    "xl:grid-cols-6",
    "xl:grid-cols-7",
    "xl:grid-cols-8",
    "xl:grid-cols-9",
    "xl:grid-cols-10",
    "xl:grid-cols-11",
    "xl:grid-cols-12",
    "2xl:grid-cols-1",
    "2xl:grid-cols-2",
    "2xl:grid-cols-3",
    "2xl:grid-cols-4",
    "2xl:grid-cols-5",
    "2xl:grid-cols-6",
    "2xl:grid-cols-7",
    "2xl:grid-cols-8",
    "2xl:grid-cols-9",
    "2xl:grid-cols-10",
    "2xl:grid-cols-11",
    "2xl:grid-cols-12",
];

const Grid: React.FC<GridProps> = ({ columns, children }) => {
    const classes:any[] = [];

    classes.push('grid gap-6');
    if (Number.isInteger(columns)) {
        classes.push('grid-cols-' + columns);
    }
    if (columns.sm) {
        classes.push('sm:grid-cols-' + columns.sm);
    }
    if (columns.md) {
        classes.push('md:grid-cols-' + columns.md);
    }
    if (columns.lg) {
        classes.push('lg:grid-cols-' + columns.lg);
    }
    if (columns.xl) {
        classes.push('xl:grid-cols-' + columns.xl);
    }
    if (columns.xxl) {
        classes.push('2xl:grid-cols-' + columns.xxl);
    }

    return (
        <div className={classes.join(' ')}>
            {children}
        </div>
    );
};

export default Grid;