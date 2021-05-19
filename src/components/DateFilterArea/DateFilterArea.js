import React, { useState } from "react";
import { DateFilter, DateFilterHelpers } from "@gooddata/sdk-ui-filters";
import { LineChart } from "@gooddata/sdk-ui-charts";
//import { CustomComponent } from "../DateFilterArea/CustomComponent/CustomComponent";
import { DateDatasets, DateMonth, Revenue, Product } from "../../ldm/full";

let dateFrom = new Date();
const dateFilterOptions = {
    allTime: {
        localIdentifier: "ALL_TIME",
        type: "allTime",
        name: "",
        visible: true,
    },
    absoluteForm: {
        localIdentifier: "ABSOLUTE_FORM",
        type: "absoluteForm",
        from: dateFrom.toISOString().substr(0, 10), // "YYYY-MM-DD"
        to: new Date().toISOString().substr(0, 10), // "YYYY-MM-DD"
        name: "",
        visible: true,
    },
    absolutePreset: [
        {
            from: "2020-01-01",
            to: "2020-12-31",
            name: "Year 2020",
            localIdentifier: "year2020",
            visible: true,
            type: "absolutePreset",
        },
        {
            from: "2019-01-01",
            to: "2019-12-31",
            name: "Year 2019",
            localIdentifier: "year2019",
            visible: true,
            type: "absolutePreset",
        },
        {
            from: "2018-01-01",
            to: "2018-12-31",
            name: "Year 2018",
            localIdentifier: "year2018",
            visible: true,
            type: "absolutePreset",
        },
    ],

    relativePreset: {
        "GDC.time.year": [
            {
                from: -3,
                to: -3,
                granularity: "GDC.time.year",
                localIdentifier: "threeYearsAgo",
                type: "relativePreset",
                visible: true,
                name: "3 years ago",
            },

            {
                from: -4,
                to: -4,
                granularity: "GDC.time.year",
                localIdentifier: "fourYearsAgo",
                type: "relativePreset",
                visible: true,
                name: "4 years ago",
            },

            {
                from: -5,
                to: -5,
                granularity: "GDC.time.year",
                localIdentifier: "fiveYearsAgo",
                type: "relativePreset",
                visible: true,
                name: "5 years ago",
            },
        ],
    },
};

const dateFilterContainerStyle = { width: 200 };
const lineChartContainerStyle = { height: 400 };

export const DateFilterComponentExample = () => {
    const [state, setState] = useState({
        selectedFilterOption: dateFilterOptions.allTime,
        excludeCurrentPeriod: false,
    });

    const onApply = (selectedFilterOption, excludeCurrentPeriod) => {
        setState({
            selectedFilterOption,
            excludeCurrentPeriod,
        });
    };

    const dateFilter = DateFilterHelpers.mapOptionToAfm(
        // @ts-ignore
        state.selectedFilterOption,
        DateDatasets.Date.ref,
        state.excludeCurrentPeriod,
    );

    return (
        <div>
            <h2>My Dashboard {state.selectedFilterOption.name}</h2>
            <div style={dateFilterContainerStyle}>
                <DateFilter
                    excludeCurrentPeriod={state.excludeCurrentPeriod}
                    // @ts-ignore
                    selectedFilterOption={state.selectedFilterOption}
                    // @ts-ignore
                    filterOptions={dateFilterOptions}
                    customFilterName="Selected date range"
                    dateFilterMode="active"
                    onApply={onApply}
                />
            </div>
            <div /*style={{ display: "flex" }}*/>
                <div style={lineChartContainerStyle}>
                    <LineChart
                        measures={[Revenue]}
                        trendBy={DateMonth.Short}
                        segmentBy={Product.Default}
                        filters={dateFilter ? [dateFilter] : []}
                    />
                </div>
                <div>{/* <CustomComponent /> */}</div>
            </div>
        </div>
    );
};
