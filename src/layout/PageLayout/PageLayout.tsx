import React from "react";
import {PageContainer } from "./styles";

import BodyLayout from "../BodyLayout/BodyLayout";
import Navbar from "../../components/Navbar/Navbar";

interface PageLayoutProps {};

const PageLayout:React.FC<PageLayoutProps> = (props) => {
    return (
        <PageContainer>
            <Navbar/>
           <BodyLayout></BodyLayout>
        </PageContainer>
    );
};

export default PageLayout;