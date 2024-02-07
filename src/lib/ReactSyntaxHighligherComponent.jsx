/**
 * File: ReactSyntaxHighligherComponent.jsx
 * Author: Joseph Koh
 * Description: Component for syntax highlighting using Prism with Darcula theme
 */

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";

export const ReactSyntaxHighligherComponent = ({ language, code }) => {
  return (
    <>
      {/* Syntax highlighter */}
      <SyntaxHighlighter language={language} style={darcula}>
        {code}
      </SyntaxHighlighter>
    </>
  );
};
