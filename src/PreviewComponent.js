import React from 'react';

function Preview(props) {
    const dangerousHtml = {__html: props.value};
    return (
        <div className="preview-container">
            <h3 className="section-label">Result:</h3>
            <hr />
            <div
                id="preview"
                dangerouslySetInnerHTML={dangerousHtml}
                >
            </div>
        </div>
    )
}

export default Preview;
