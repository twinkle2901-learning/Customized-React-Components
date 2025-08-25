import React from "react";

import CButton from "./buttons/button";
import CrLayout from "./layout/layout";
import CDropdown from "./dropdown/dropdown";
// import CDropdown from "./dropdown/dropdown";

function ComponentsCall() {
    return (
        <>
            {/* Component Title */}
            <CrLayout
                title="Component Title"
                body={
                    <>
                        <CDropdown />
                    </>
                }
            />
        </>
    );
}

export default ComponentsCall;
