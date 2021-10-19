(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{522:function(t,a,e){"use strict";e.r(a);var s=e(28),o=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"matlab"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#matlab"}},[t._v("#")]),t._v(" Matlab")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.mathworks.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Matlab"),e("OutboundLink")],1),t._v(" is a computing environment developed by MatWorks for efficient matrix manipulations and other handy computing tools.")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("These steps guide the installation of Matlab on unmanaged "),e("RouterLink",{attrs:{to:"/faq/compute/#machine-types"}},[t._v("iaas or blue")]),t._v(" machines. "),e("a",{attrs:{href:"/contat"}},[t._v("Contact us")]),t._v(" for installations on your "),e("RouterLink",{attrs:{to:"/faq/compute/#machine-types"}},[t._v("home machine")]),t._v(".")],1)]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("Dependencies")]),t._v(" "),e("ul",[e("li",[t._v("An unmanaged iaas or blue machine where you have root access.")]),t._v(" "),e("li",[t._v("Installation of "),e("RouterLink",{attrs:{to:"/working-in-your-lab/technical-tools/x2go/"}},[t._v("X2Go server")]),t._v(" on this machine.")],1),t._v(" "),e("li",[t._v("Access to Matlab software binaries for Linux from your organizaton.")]),t._v(" "),e("li",[t._v("Access to a Matlab license for the users in your lab.")])])]),t._v(" "),e("h2",{attrs:{id:"download"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#download"}},[t._v("#")]),t._v(" Download")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("Download the Matlab software on your local computer (client).")]),t._v(" "),e("p",[t._v("For NTNU users, log into "),e("a",{attrs:{href:"https://software.ntnu.no/ntnu/Matlab",target:"_blank",rel:"noopener noreferrer"}},[t._v("NTNU's software repository for Matlab"),e("OutboundLink")],1),t._v(",\nchoose your desired version in the top right corner and download on your local computer.\nWe recommend that you skip the latest version (alpha) and choose one of the stable versions\n(e.g. 2019b) to ensure a reliable installation.")])]),t._v(" "),e("li",[e("p",[t._v("Transfer Matlab to your preferred folder in your lab machine (for example "),e("code",[t._v("/mnt/scratch/matlab/")]),t._v(")")])]),t._v(" "),e("li",[e("p",[t._v("Unpack the zip file in your folder.")]),t._v(" "),e("p",[t._v("Install dependencies:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("unzip")]),t._v(" libnss3\n")])])]),e("p",[t._v("Unzip Matlab installer:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("unzip")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("matlabfile.zip"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])]),t._v(" "),e("li",[e("p",[t._v("Make all files in folder executables: "),e("code",[t._v("chmod -R 777 <matlab-folder>")]),t._v(" (e.g. /mnt/scratch/matlab/).\nThis is a simple fix for you to be able to run the files within subfolders as required by Matlab.")])])]),t._v(" "),e("h2",{attrs:{id:"activate-license"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#activate-license"}},[t._v("#")]),t._v(" Activate license")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("For NTNU users, the exact content of this files is described in "),e("a",{attrs:{href:"https://software.ntnu.no/ntnu/Matlab",target:"_blank",rel:"noopener noreferrer"}},[t._v("NTNU's repository for Matlab"),e("OutboundLink")],1),t._v(".")])]),t._v(" "),e("ul",[e("li",[t._v("Create a file named "),e("code",[t._v("license.dat")]),t._v(" with your license information. The content of this file is dependent on your organizations license. The example below will need you to replace "),e("code",[t._v("<license-server-address>")]),t._v(", "),e("code",[t._v("<key1>")]),t._v(" and "),e("code",[t._v("<key2>")]),t._v(" with an url-address and strings provided by your host institutions license page.:")])]),t._v(" "),e("div",{staticClass:"language-ini extra-class"},[e("pre",{pre:!0,attrs:{class:"language-ini"}},[e("code",[t._v("SERVER <license-server-address> <key1> <key2>\nUSE_SERVER\n\n")])])]),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v('Make sure you add a new/empty line after "USE_SERVER".')])]),t._v(" "),e("h2",{attrs:{id:"install"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[t._v("#")]),t._v(" Install")]),t._v(" "),e("p",[t._v("The below steps require the code to be run in "),e("code",[t._v("xterm")]),t._v(" started from X2GO on the machine holding the Matlab files downloaded in the above steps.")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("Prepare target directory:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("mkdir -p /mnt/work/software/matlab_r2019b\nmkdir -p /mnt/scratch/tmp\n")])])])]),t._v(" "),e("li",[e("p",[t._v("Go to your Matlab installation folder (e.g. /mnt/scratch/software/matlab_r2019b) and run the installer:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("bash ./install -downloadFolder /mnt/scratch/software/matlab_r2019b -tmpdir /mnt/scratch/tmp -destinationFolder /mnt/work/software/matlab_r2019b\n")])])])]),t._v(" "),e("li",[e("p",[t._v("During the installation choose: "),e("code",[t._v("Use a File Installation Key")])])]),t._v(" "),e("li",[e("p",[t._v("Choose "),e("code",[t._v("I have the File Installation Key for my license")]),t._v(" and enter the key (these are found on you software repository)")])]),t._v(" "),e("li",[e("p",[t._v("Follow the installer and choose the packages you want.")])]),t._v(" "),e("li",[e("p",[t._v("When the installer asks for your product activation, choose the "),e("code",[t._v("non internet")]),t._v(" option and provide the location of the "),e("code",[t._v("license.dat")]),t._v(" file previously generated.")])]),t._v(" "),e("li",[e("p",[t._v("If successful, your should see "),e("code",[t._v("product activation message")]),t._v(".")])])]),t._v(" "),e("h2",{attrs:{id:"run"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#run"}},[t._v("#")]),t._v(" Run")]),t._v(" "),e("ul",[e("li",[t._v("If you're fine with command lines, run "),e("code",[t._v("Matlab")]),t._v(" directly in your shell.")]),t._v(" "),e("li",[t._v("If you prefer Matlab's graphical interface, run "),e("code",[t._v("Matlab")]),t._v(" in your terminal ("),e("code",[t._v("xterm")]),t._v(") started in X2GO."),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("/usr/bin/xterm -e matlab\n")])])]),t._v("or with full path e.g.:"),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("/usr/bin/xterm -e /mnt/work/software/matlab2019b/bin/matlab\n")])])])])]),t._v(" "),e("p",[t._v("With a little bit of luck, it's now time to celebrate with fresh coffee running your favourite test code on the fresh Matlab. If not, here's some of our known issues:")]),t._v(" "),e("h2",{attrs:{id:"troubleshooting"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[t._v("#")]),t._v(" Troubleshooting")]),t._v(" "),e("h3",{attrs:{id:"why-can-t-matlab-find-the-packages-i-choose-to-install"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#why-can-t-matlab-find-the-packages-i-choose-to-install"}},[t._v("#")]),t._v(" Why can't Matlab find the packages I choose to install?")]),t._v(" "),e("p",[t._v("One known issue is that sometimes the latest Matlab version compiled by some universities do miss some packages. Try to install a slightly older version. "),e("a",{attrs:{href:"/contact"}},[t._v("Contact us")]),t._v(" for assistance if this do not work.")]),t._v(" "),e("h3",{attrs:{id:"can-i-install-the-code-without-sudo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#can-i-install-the-code-without-sudo"}},[t._v("#")]),t._v(" Can I install the code without sudo?")]),t._v(" "),e("p",[t._v("No, not in an easy way. Thus, either we have to install on "),e("code",[t._v("home")]),t._v(" machines, or your can install these yourself on unmanaged iaas and blue machines where you get root. "),e("a",{attrs:{href:"/contact"}},[t._v("Contact us")]),t._v(" if you need Matlab on your home machine.")]),t._v(" "),e("h3",{attrs:{id:"my-product-activation-do-not-seem-to-work"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#my-product-activation-do-not-seem-to-work"}},[t._v("#")]),t._v(" My product activation do not seem to work?")]),t._v(" "),e("p",[t._v("We need to open for traffic from your lab to your organization's license server. "),e("a",{attrs:{href:"/contact"}},[t._v("Contact us")]),t._v(" for network openings.")]),t._v(" "),e("h3",{attrs:{id:"why-is-live-editor-not-working"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#why-is-live-editor-not-working"}},[t._v("#")]),t._v(" Why is live editor not working?")]),t._v(" "),e("p",[t._v("If Matlab complains that Live editor is unable to run in the current system configuration it is important to check if libnss3 is installed.")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("dpkg -s libnss3\n# If not installed run\nsudo apt install libnss3\n")])])]),e("h3",{attrs:{id:"why-is-my-matlab-installation-stuck"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#why-is-my-matlab-installation-stuck"}},[t._v("#")]),t._v(" Why is my Matlab installation stuck?")]),t._v(" "),e("p",[t._v("If the installation was progressing and then stuck at some point it is important to check\ndisk space "),e("code",[t._v("df -h")]),t._v(". In some cases "),e("code",[t._v("/tmp")]),t._v(" directory may get filled up. We usually recommend\nsetting alternative tmp before running install:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("mkdir -p /mnt/scratch/tmp\nexport TMP=/mnt/scratch/tmp\nexport TEMP_DIR=/mnt/scratch/tmp\n")])])])])}),[],!1,null,null,null);a.default=o.exports}}]);