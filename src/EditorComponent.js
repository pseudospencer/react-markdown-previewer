import React from 'react';

function Editor(props) {
    return (
        <div className="editor-container">
            <label htmlFor="editor">Raw Markdown:</label>
            <textarea
                id="editor"
                name="raw_markdown"
                // defaultValue={props.defaultText}
                onChange={props.handleChange}
                value={props.value}
                >
            </textarea>
        </div>
    )
}

export default Editor;
