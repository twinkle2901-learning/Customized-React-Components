import React from "react";

import CButton from "./buttons/button";
import CrLayout from "./layout/layout";
// import CDropdown from "./dropdown/dropdown";

function ComponentsCall() {
    return (
        <>
            {/* Component Title */}
            <CrLayout
                title="Component Title"
                body={
                    <>
                        <CButton label="Test Button" />
                    </>
                }
            />
        </>
    );
}

export default ComponentsCall;
