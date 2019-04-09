import stringRaw from 'string-raw';

// https://github.com/tuchk4/storybook-readme/commit/3af9f9138e5446e46eaacada548e5ac26d1103c8#diff-2a5485d256409e789a0a713a3f90b4a9
export default stringRaw`
/**	
 * prism.js default theme for JavaScript, CSS and HTML	
 * Based on dabblet (http://dabblet.com)	
 * @author Lea Verou	
 */	
  code[class*="language-"],	
 pre[class*="language-"] {	
   color: black;	
   background: none;	
   text-shadow: 0 1px white;	
    /* font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;	*/
   font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;
   text-align: left;	
   white-space: pre;	
   word-spacing: normal;	
   word-break: normal;	
   word-wrap: normal;	
   line-height: 1.5;	
    -moz-tab-size: 4;	
   -o-tab-size: 4;	
   tab-size: 4;	
    -webkit-hyphens: none;	
   -moz-hyphens: none;	
   -ms-hyphens: none;	
   hyphens: none;	
 }	
  pre[class*="language-"]::-moz-selection, pre[class*="language-"] ::-moz-selection,	
 code[class*="language-"]::-moz-selection, code[class*="language-"] ::-moz-selection {	
   text-shadow: none;	
   background: #b3d4fc;	
 }	
  pre[class*="language-"]::selection, pre[class*="language-"] ::selection,	
 code[class*="language-"]::selection, code[class*="language-"] ::selection {	
   text-shadow: none;	
   background: #b3d4fc;	
 }	
  @media print {	
 code[class*="language-"],	
 pre[class*="language-"] {	
       text-shadow: none;	
   }	
 }	
  /* Code blocks */	
 pre[class*="language-"] {	
   padding: 1em;	
   margin: .5em 0;	
   overflow: auto;	
 }	
  :not(pre) > code[class*="language-"],	
 pre[class*="language-"] {	
 background: #f6f8fa;	
 }	
  /* Inline code */	
 :not(pre) > code[class*="language-"] {	
   padding: .1em;	
   border-radius: .3em;	
   white-space: normal;	
 }	
  .token.comment,	
 .token.prolog,	
 .token.doctype,	
 .token.cdata {	
   color: slategray;	
 }	
  .token.punctuation {	
   color: #24292e;	
 }	
  .tag .token.punctuation {	
   color: #d73a49;	
 }	
  .namespace {	
   opacity: .7;	
 }	
  .token.property,	
 .token.tag,	
 .token.boolean,	
 .token.number,	
 .token.constant,	
 .token.symbol,	
 .token.deleted {	
   color: #24292e;	
 }	
  .tag .token.selector,	
 .tag .token.attr-name,	
 .tag .token.string,	
 .tag .token.char,	
 .tag .token.builtin,	
 .tag .token.inserted {	
   color: #4f57a0;	
 }	
  .token.string {	
   color: #005cc5;	
 }	
  .token.operator,	
 .token.entity,	
 .token.url,	
 .language-css .token.string,	
 .style .token.string {	
   color: #d73a49;	
 }	
  .token.atrule,	
 .token.attr-value,	
 .token.keyword {	
   color: #d73a49;	
 }	
  .token.function {	
   color: #6f42c1;	
 }	
  .token.regex,	
 .token.important,	
 .token.variable {	
   color: #e90;	
 }	
  .token.important,	
 .token.bold {	
   font-weight: bold;	
 }	
 .token.italic {	
   font-style: italic;	
 }	
  .token.entity {	
   cursor: help;	
 }
  
  
`;