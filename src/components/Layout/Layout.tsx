import React from 'react';
import Header from "@/src/components/Header/Header";

const Layout = ({children} : any) => {
    // лайаут для хедара
    return (
        <div>
            <Header />
            {children}
        </div>
    );
};

export default Layout;