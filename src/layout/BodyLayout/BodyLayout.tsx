import React from "react";
import HeadlinesLayout from "../HeadlinesLayout/HeadlinesLayout";
import { mockedHeadlines } from "../../mockData/MockHeadlines";
import GraphsLayout from "../GraphsContainer/GraphsLayout";
import { mockedAreaGraphData, mockedPieGraphData } from "../../mockData/MockGraphs";
import { FiltersBar } from "../FiltersBar/FiltersBar";
import { mockedDropdowns } from "../../mockData/MockDropdowns";
import { BodyContainer, DataLayout, HeadlinesTitle } from "./styles";

interface BodyLayoutProps {

};

const headlinesTitle = "Top Headlines in Israel";

const BodyLayout:React.FC<BodyLayoutProps> = (props) => {
    return (
        <BodyContainer>
            <FiltersBar dropdowns={mockedDropdowns}/>
            <HeadlinesTitle>{headlinesTitle}</HeadlinesTitle>
            <DataLayout>
                <HeadlinesLayout headlines={mockedHeadlines}/>
                <GraphsLayout 
                    pieData={mockedPieGraphData} pieTitle='Sources' pieLabel='sum'
                    areaData={mockedAreaGraphData} areaTitle='Dates'/>
            </DataLayout>
        </BodyContainer>
    );
};

export default BodyLayout;