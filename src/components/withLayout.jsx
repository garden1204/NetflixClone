import React from "react";
import Header from "./Header";

const withLayout = Page => {
    return () => {
        return (
            <>
                <Header></Header>
                <Page />
            </>
        );
    };
};
export default withLayout;