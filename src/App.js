import React from "react";

import Badge from "react-bootstrap/Badge";

import { marked } from "marked";

//let marked = require("marked");

<script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>;

const placeholder = `# Bem-vindo ao meu React Markdown Previewer!
## Este é um subtítulo...
[title](https://www.example.com)
\`code\`
\`\`\`
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
\`\`\`
- First item
- Second item
- Third item

> blockquote

![alt text](image.jpg)

**Fim**
`;

marked.setOptions({
  breaks: true
})

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: placeholder,
    };
  }

  updateMarkdown(markdown) {
    this.setState({ markdown });
  }

  render() {
    var inputStyle = {
      width: "400px",
      height: "50vh",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "10px",
    };

    var outputStyle = {
      width: "400px",
      height: "100vh",
      backgroundColor: "#DCDCDC",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "10px",
    };

    return (
      <div className="App">
        <div className="container ">
          <div className="row mt-4">
            <div className="col text-center">
              <h1>
                <Badge className="text-align-center bg-dark" variant="light">
                  Markdown Previewer
                </Badge>
              </h1>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-md-6">
              <div className="col text-center">
                <h4>
                  <Badge className="text-align-center bg-info" variant="secondary">
                    Markdown Input
                  </Badge>
                </h4>
                
                <div className="mark-input">
                  
                  <textarea
                    id="editor"
                   // placeholder={placeholder}
                    type="text"
                    className="input"
                    style={inputStyle}
                    value={this.state.markdown}
                    onChange={(e) => {
                      this.updateMarkdown(e.target.value);
                    }}
                  >
                   
                    {console.log(placeholder)}
                    
                   
                  </textarea>
                
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="col text-center">
             
                <h4>
                  <Badge className="text-align-center bg-success" variant="secondary">
                    Preview
                  </Badge>
                </h4>
              </div>

              <div
              id="preview"
                style={outputStyle}
                dangerouslySetInnerHTML={{
                  __html: marked(this.state.markdown),
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
