import React from "react";
import { Kpi } from "@gooddata/sdk-ui";
import * as Ldm from "../../../ldm/full";
import { AttributeFilter } from "@gooddata/sdk-ui-filters";
import { newPositiveAttributeFilter } from "@gooddata/sdk-model";

export const CustomComponent = () => {
    const onApply = (...params) => {
        // eslint-disable-next-line no-console
        console.log("AttributeFilterComponentExample onApply", ...params);
    };
    return (
        <>
            <div className="my-kpi">
                {/* <style jsx>{`
                    .my-kpi {
                        margin: 10px 0;
                        font-size: 50px;
                        white-space: nowrap;
                        vertical-align: bottom;
                        text-align: center;
                        min-width: 300px;
                        line-height: 1.2em;
                        font-weight: 700;
                        width: 300px;
                    }
                    .my-select {
                        margin: 10px 0;
                        text-align: center;
                    }
                `}</style> */}
                <Kpi
                    measure={Ldm.OrderAmount}
                    //filters={[newPositiveAttributeFilter(Ldm.Product.Hyperlink, ["Skirt"])]}
                />
            </div>
            <div className="my-select">
                <div>Selected product</div>
                <AttributeFilter
                    filter={newPositiveAttributeFilter(Ldm.Product.Default, [])}
                    fullscreenOnMobile={false}
                    onApply={onApply}
                />
            </div>
        </>
    );
};
