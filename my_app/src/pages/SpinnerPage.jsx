import React from "react";
export function SpinnerPage() {

    return (
        <>
            <br /><br />
            <div className="spinner-border text-dark" role="status">

                <span className="visually-hidden">Loading...</span>
            </div>
        </>

    )
}
export default SpinnerPage;