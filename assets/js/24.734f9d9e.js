(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{405:function(t,a,e){"use strict";e.r(a);var s=e(25),o=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"internal-kista"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#internal-kista"}},[t._v("#")]),t._v(" Internal kista")]),t._v(" "),e("p",[t._v("Internal kistas provide labs with a simple and controlled way to transfer data between two labs inside HUNT Cloud. In short, internal kistas are short-lived and hardened "),e("a",{attrs:{href:"https://en.wikipedia.org/wiki/SSH_File_Transfer_Protocol",target:"_blank",rel:"noopener noreferrer"}},[t._v("SFTP"),e("OutboundLink")],1),t._v(" servers dedicated to one data transaction between two labs.")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[t._v("This page describes the practical aspects of kista transfers. Head over to our "),e("RouterLink",{attrs:{to:"/faq/internal-transfer/"}},[t._v("internal transfer")]),t._v(" section in the FAQ for more information on the service itself.")],1)]),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#order"}},[t._v("Order")])]),e("li",[e("a",{attrs:{href:"#connect"}},[t._v("Connect")])]),e("li",[e("a",{attrs:{href:"#upload"}},[t._v("Upload")])]),e("li",[e("a",{attrs:{href:"#download"}},[t._v("Download")])])])]),e("p"),t._v(" "),e("h2",{attrs:{id:"order"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#order"}},[t._v("#")]),t._v(" Order")]),t._v(" "),e("p",[t._v("Internal kistas are ordered by the uploader Lab leader or Lab coordinator using the "),e("RouterLink",{attrs:{to:"/agreements/download/#internal-kista-transfer-form"}},[t._v("Internal kista transfer order")]),t._v(". Forward the order "),e("a",{attrs:{href:"/contact"}},[t._v("to us")]),t._v(" for deployment.")],1),t._v(" "),e("p",[t._v("The kista order defines two roles that we will use in this document:")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Uploader")]),t._v(". This is the lab user in the Lab that has ordered the Kista and that will provide (upload) data.")]),t._v(" "),e("li",[e("strong",[t._v("Downloader")]),t._v(". This the lab user in the lab that will receive (download) data.")])]),t._v(" "),e("h2",{attrs:{id:"connect"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#connect"}},[t._v("#")]),t._v(" Connect")]),t._v(" "),e("p",[t._v("We wil notify you when your kista is deployed. You can then collect your account information directly from your home machine:")]),t._v(" "),e("ol",[e("li",[t._v("Log into your home machine")]),t._v(" "),e("li",[t._v("Collect your account information from the "),e("strong",[e("code",[t._v("/opt/hunt-cloud/kista/")])]),t._v(" folder:")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -- List kista account information files")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" /opt/hunt-cloud/kista/\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -- Principle example to see account information")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("less")]),t._v(" /opt/hunt-cloud/kista/*"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("number"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("*\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -- Practical example to see account information")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("less")]),t._v(" /opt/hunt-cloud/kista/*5623*\n")])])]),e("p",[t._v("The account information will look similar to this:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("### SFTP account information")]),t._v("\nProtocol: "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sftp")]),t._v("\nServer: "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10.42")]),t._v(".132."),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("number"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\nPort: "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),t._v("\nUsername: "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("username"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("-upload\n")])])]),e("p",[e("em",[t._v("Note. The information above is for illustration and will not work for your connection. Your account information will contain different Server and Username information.")])]),t._v(" "),e("p",[t._v("Next, connect to your kista using the SFTP protocol. This may seem unfamiliar at first, however its simple to use once you get going:")]),t._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[t._v("From your home machine, connect to the kista over SFTP using your account information collected above.")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -- Principal example")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sftp")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("usernam"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("-upload@10.42.132."),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("number"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -- Demo example")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sftp")]),t._v(" demouser-upload@10.42.132.118\n")])])]),e("p",[t._v("When successfully connected, you should see the following message in your terminal:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Connected to 10.42.132.<number>.\nsftp>\n")])])]),e("h2",{attrs:{id:"upload"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#upload"}},[t._v("#")]),t._v(" Upload")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("This section is aimed at the lab user that will "),e("strong",[t._v("upload")]),t._v(" data to a kista. See the "),e("a",{attrs:{href:"#download"}},[t._v("download section")]),t._v(" if you plan to download data to your lab.")])]),t._v(" "),e("ol",[e("li",[t._v("Once inside your kista, move to the "),e("strong",[e("code",[t._v("upload")])]),t._v(" folder.")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" upload\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[t._v("Upload a file or folder by specifying its local path on your home machine.")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -- Upload individual file")]),t._v("\nput /mnt/cargo/example-file1.txt\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -- Upload folder")]),t._v("\nput -r /mnt/cargo/example-directory/\n")])])]),e("ol",{attrs:{start:"3"}},[e("li",[t._v("List files the current directory to verify the transfer")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" -lah\n")])])]),e("ol",{attrs:{start:"4"}},[e("li",[t._v("Disconnect from your the SFTP-server")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("quit\n")])])]),e("p",[t._v("For large uploads, "),e("RouterLink",{attrs:{to:"/working-in-your-lab/technical-tools/terminal-multiplexers/#gnu-screen"}},[t._v("terminal multiplexers")]),t._v(" can be a handy tool allowing for the transfer to continue even when you log off from your home machine.")],1),t._v(" "),e("p",[t._v("You can resume an upload with this command:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("reput /mnt/cargo/example-file1.txt\n")])])]),e("h2",{attrs:{id:"download"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#download"}},[t._v("#")]),t._v(" Download")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("This section is aimed at the lab user that will "),e("strong",[t._v("download")]),t._v(" data from a kista.")])]),t._v(" "),e("ol",[e("li",[t._v("Once inside your kista, move to the "),e("strong",[e("code",[t._v("upload")])]),t._v(" folder.")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" upload\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[t._v("List files in the current directory.")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" -lah\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[t._v("Download a file or folder by specifying the file or folder name and the local path that you want to download to.")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -- Principal example")]),t._v("\nget "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("sftp-file"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("home-machine-folder"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -- Download individual file")]),t._v("\nget example-filename1.txt /mnt/cargo/\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -- Download folder")]),t._v("\nget -r example-directory /mnt/cargo/\n")])])]),e("ol",{attrs:{start:"3"}},[e("li",[t._v("Disconnect from your the SFTP-server")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("quit\n")])])]),e("p",[t._v("For large downloads, "),e("RouterLink",{attrs:{to:"/working-in-your-lab/technical-tools/terminal-multiplexers/#gnu-screen"}},[t._v("terminal multiplexers")]),t._v(" can be a handy tool allowing for the transfer to continue even when you log off from your home machine.")],1),t._v(" "),e("p",[t._v("You can resume a download with this command:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("reget /mnt/cargo/example-file1.txt\n")])])])])}),[],!1,null,null,null);a.default=o.exports}}]);