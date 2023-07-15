import { AppProps } from "next/app";
import React, { Component, useState } from "react";
import '../styles/global.css'
import {ReduxProvider} from "@/src/redux/reduxProvider";
const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <ReduxProvider>
            <Component {...pageProps} />
        </ReduxProvider>
    );
};

export default MyApp;