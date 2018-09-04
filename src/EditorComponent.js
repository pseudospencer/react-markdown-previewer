import React from 'react';
import "./EditorComponent.css"

function Editor(props) {
    return (
        <div className="editor-container">
            <label htmlFor="editor"><h3 className="section-label">Raw Markdown (feel free to edit!):</h3></label>
            <textarea
                autoFocus
                id="editor"
                name="raw_markdown"
                onChange={props.handleChange}
                value={props.value}
                >
            </textarea>
        </div>
    )
}

export default Editor;
