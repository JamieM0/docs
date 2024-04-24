"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8667],{7724:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var i=t(4848),r=t(8453);const s={sidebar_position:1},o="Encryption in SEP",l={id:"sep/AES/encryption",title:"Encryption in SEP",description:"Method Name: FileEncrypt",source:"@site/docs/sep/AES/encryption.md",sourceDirName:"sep/AES",slug:"/sep/AES/encryption",permalink:"/docs/sep/AES/encryption",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/sep/AES/encryption.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sep",previous:{title:"Simple Encryption Program",permalink:"/docs/sep/intro"},next:{title:"Decryption in SEP",permalink:"/docs/sep/AES/decryption"}},a={},d=[{value:"Method Name: FileEncrypt",id:"method-name-fileencrypt",level:2},{value:"Summary:",id:"summary",level:3},{value:"Syntax:",id:"syntax",level:3},{value:"Parameters:",id:"parameters",level:3},{value:"Description:",id:"description",level:3},{value:"Returns:",id:"returns",level:3},{value:"Exceptions:",id:"exceptions",level:3},{value:"Remarks:",id:"remarks",level:3},{value:"Further Information",id:"further-information",level:2}];function c(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"encryption-in-sep",children:"Encryption in SEP"}),"\n",(0,i.jsx)(n.h2,{id:"method-name-fileencrypt",children:"Method Name: FileEncrypt"}),"\n",(0,i.jsx)(n.h3,{id:"summary",children:"Summary:"}),"\n",(0,i.jsx)(n.p,{children:"This method encrypts a file using the Rijndael symmetric encryption algorithm."}),"\n",(0,i.jsx)(n.h3,{id:"syntax",children:"Syntax:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"public static void FileEncrypt(string inputFile, string outputFile, string password)\n"})}),"\n",(0,i.jsx)(n.h3,{id:"parameters",children:"Parameters:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"inputFile"}),"\xa0(string): The path of the file to be encrypted."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"outputFile"}),"\xa0(string): The path where the encrypted file will be saved."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"password"}),"\xa0(string): The password used for encryption."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"description",children:"Description:"}),"\n",(0,i.jsxs)(n.p,{children:["The\xa0",(0,i.jsx)(n.code,{children:"FileEncrypt"}),"\xa0method performs the following steps:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Generates a random salt."}),"\n",(0,i.jsx)(n.li,{children:"Creates an output file with the specified name."}),"\n",(0,i.jsx)(n.li,{children:"Converts the password string to a byte array."}),"\n",(0,i.jsx)(n.li,{children:"Sets up the Rijndael symmetric encryption algorithm with a key size of 256 bits, a block size of 128 bits, and PKCS7 padding."}),"\n",(0,i.jsxs)(n.li,{children:["Uses the\xa0",(0,i.jsx)(n.code,{children:"Rfc2898DeriveBytes"}),"\xa0class to generate a key and an initialization vector (IV) for AES encryption from the password and the salt."]}),"\n",(0,i.jsx)(n.li,{children:"Sets the cipher mode to CFB (Cipher Feedback)."}),"\n",(0,i.jsx)(n.li,{children:"Writes the salt to the beginning of the output file."}),"\n",(0,i.jsxs)(n.li,{children:["Creates a\xa0",(0,i.jsx)(n.code,{children:"CryptoStream"}),"\xa0that will write to the output file using the AES encryptor."]}),"\n",(0,i.jsx)(n.li,{children:"Opens the input file and creates a 1MB buffer."}),"\n",(0,i.jsxs)(n.li,{children:["Reads from the input file into the buffer, then writes from the buffer to the\xa0",(0,i.jsx)(n.code,{children:"CryptoStream"}),", effectively encrypting the file."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"If an exception occurs during reading or writing, it prints out an error message and closes all open streams."}),"\n",(0,i.jsx)(n.h3,{id:"returns",children:"Returns:"}),"\n",(0,i.jsx)(n.p,{children:"This method does not return a value."}),"\n",(0,i.jsx)(n.h3,{id:"exceptions",children:"Exceptions:"}),"\n",(0,i.jsxs)(n.p,{children:["This method catches and handles general\xa0",(0,i.jsx)(n.code,{children:"Exception"}),". If an exception is caught, an error message is printed to the console."]}),"\n",(0,i.jsx)(n.h3,{id:"remarks",children:"Remarks:"}),"\n",(0,i.jsx)(n.p,{children:"This method overwrites any existing file with the same name as your output file. Also, it\u2019s important to remember that encryption doesn\u2019t inherently delete or modify your original file, so if you want to secure your data, you should delete the original file after encryption (and ensure it\u2019s not recoverable)."}),"\n",(0,i.jsx)(n.h2,{id:"further-information",children:"Further Information"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"AES - Advanced Encryption Standard (AES)"}),' or "Rijndael". With a key size of 256 bits, this can be considered ',(0,i.jsx)(n.em,{children:"military-grade"})," encryption."]}),"\n",(0,i.jsx)(n.p,{children:"Encrypt File Function:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Generate Random Salt"}),": A random salt is generated for use in password hashing."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Check for Password Library ID"}),": If the ",(0,i.jsx)(n.code,{children:"currentID"})," contains a \u201c\u2300\u201d, it extracts the password library ID."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Create Output File Name"}),": Depending on whether Multi-Factor Authentication (MFA) is being used, it creates an output file name with different extensions.\nIf MFA is being used, the output file is created in the same directory as the input file with an extension of \u201c.mfa\u201d or \u201c.lib\u201d followed by the password library ID.\nIf MFA is not being used, the output file is created with an extension of \u201c.aes\u201d or \u201c.lib\u201d followed by the password library ID."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Set Encryption Algorithm"}),": The Rijndael symmetric encryption algorithm (the algorithm behind AES) is set up with a key size of 256 bits, a block size of 128 bits, and PKCS7 padding."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Generate Key and IV"}),": The password is hashed along with the salt to generate the key and initialization vector (IV) for the AES encryption."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Write Salt to Output File"}),": The salt is written to the beginning of the output file."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Encrypt File"}),": A buffer is created and data from the input file is read into this buffer, encrypted, and then written to the output file. This process continues until all data from the input file has been encrypted and written to the output file."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Handle Errors and Clean Up"}),": Any errors that occur during the encryption process are caught and logged, and finally, all open streams are closed."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var i=t(6540);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);