import React, { ReactNode } from 'react';

interface ColumnProps {
    children: ReactNode;
}

const Column: React.FC<ColumnProps> = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default Column;