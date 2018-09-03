import React from 'react';
import "./EditorComponent.css"

function Editor(props) {
    return (
        <div className="editor-container">
            <label htmlFor="editor"><h3 className="section-label">Raw Markdown:</h3></label>
            <textarea
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
