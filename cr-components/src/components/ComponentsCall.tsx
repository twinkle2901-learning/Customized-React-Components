import React from "react";

import CrLayout from "./layout/layout";
// import CDropdown from "./dropdown/dropdown";

function ComponentsCall() {
    return (
        <>
            {/* Component Title */}
            <CrLayout
                title="Component Name: Button"
                body={
                    <>
                        <CButton label="Button Label" />
                    </>
                }
            />
        </>
    );
}

export default ComponentsCall;
