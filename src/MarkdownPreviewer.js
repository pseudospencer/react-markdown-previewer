import React, {Component} from 'react';
import './MarkdownPreviewer.css';
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Editor from "./EditorComponent";
import Preview from "./PreviewComponent";

import marked from "marked";

import sampleMarkdown from "./sampleMarkdown";

class MarkdownPreviewer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editorInput: sampleMarkdown,
            previewContents: marked(sampleMarkdown),
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        const input = event.target.value;
        const output = marked(input);
        console.log("handleChange", input, output);
        this.setState({
            ...this.state,
            editorInput: input,
            previewContents: output,
        });
    }
    render() {
        return (<div id="MarkdownPreviewer">
            <header><Header/></header>
            <main>
                <Editor
                    handleChange={this.handleChange}
                    value={this.state.editorInput}
                />
                <Preview
                    value={this.state.previewContents}
                />
            </main>
            <footer><Footer/></footer>
        </div>);
    }
}

export default MarkdownPreviewer;
