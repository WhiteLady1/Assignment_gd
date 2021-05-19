import React from "react";

import Page from "../components/Page";
import "@gooddata/sdk-ui-charts/styles/css/main.css";
import { DateFilterComponentExample } from "../components/DateFilterArea/DateFilterArea";

const Home = () => {
    return (
        <Page>
            <DateFilterComponentExample />
        </Page>
    );
};

export default Home;
