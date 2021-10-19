(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{356:function(t,e,s){t.exports=s.p+"assets/img/x2go_intro.a265543f.png"},440:function(t,e,s){t.exports=s.p+"assets/img/x2go_media.ff61d09e.png"},441:function(t,e,s){t.exports=s.p+"assets/img/mac_osx_xquartz.8b76fb6d.png"},543:function(t,e,s){"use strict";s.r(e);var o=s(28),a=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"x2go"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#x2go"}},[t._v("#")]),t._v(" X2Go")]),t._v(" "),o("p",[t._v("This guide explain how you can install and configure the "),o("a",{attrs:{href:"https://wiki.x2go.org/doku.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("X2Go"),o("OutboundLink")],1),t._v(" software to get instant and 'passwordless' access to graphical tools in your lab, such as "),o("strong",[t._v("RStudio")]),t._v(", "),o("strong",[t._v("Stata")]),t._v(", "),o("strong",[t._v("SPSS")]),t._v(" and "),o("strong",[t._v("MatLab")]),t._v(".")]),t._v(" "),o("p",[t._v("If you are connecting to the home machine in your lab, you are good to go after you have set up your local machine:")]),t._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"#set-up-your-local-machine"}},[t._v("Set up your local machine")])])]),t._v(" "),o("p",[t._v("If you want to connet to an unmanaged machine (iaas or blue) you will need to install the X2Go server before you connect:")]),t._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"#install-x2go-server-on-unmanaged-lab-machine-iaas"}},[t._v("Set up your unmanaged lab machine (iaas)")])])]),t._v(" "),o("h2",{attrs:{id:"set-up-your-local-machine"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#set-up-your-local-machine"}},[t._v("#")]),t._v(" Set up your local machine")]),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("REQUIREMENTS")]),t._v(" "),o("ul",[o("li",[t._v("A working connection to your lab machines.")]),t._v(" "),o("li",[t._v("A lab machine set up for X2Go connection (home machines are by default set up with X2Go and Rstudio).")])])]),t._v(" "),o("h3",{attrs:{id:"install-x2go-client"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#install-x2go-client"}},[t._v("#")]),t._v(" Install X2Go client")]),t._v(" "),o("p",[t._v("Install the "),o("a",{attrs:{href:"https://wiki.x2go.org/doku.php/doc:installation:x2goclient",target:"_blank",rel:"noopener noreferrer"}},[t._v("x2go client"),o("OutboundLink")],1),t._v(" on your own local machine.")]),t._v(" "),o("details",{staticClass:"custom-block details"},[o("summary",[t._v("OS X/macOS")]),t._v(" "),o("ul",[o("li",[o("p",[t._v("Use "),o("a",{attrs:{href:"https://brew.sh/",target:"_blank",rel:"noopener noreferrer"}},[t._v("brew"),o("OutboundLink")],1),t._v(" (a handy package manager for macOS) to install both XQuartz (required for X2Go) and the X2Go client:")]),t._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[t._v("brew "),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --cask xquartz\nbrew "),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --cask x2goclient\n")])])]),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[t._v("XQuartz")]),t._v(" "),o("p",[t._v("If this is your first time installing XQuartz, you "),o("strong",[t._v("must")]),t._v(" logout and log back in or restart your Mac for it to work.")])])]),t._v(" "),o("li",[o("p",[t._v("Please read the "),o("a",{attrs:{href:"https://wiki.x2go.org/doku.php/doc:installation:x2goclient#os_x",target:"_blank",rel:"noopener noreferrer"}},[t._v("X2Go installation docs"),o("OutboundLink")],1),t._v(" for handy tweaks of the X2Go client.")]),t._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[t._v("OS X 10.15 Catalina")]),t._v(" "),o("p",[t._v("In case of issues with x2goclient you can try "),o("a",{attrs:{href:"https://code.x2go.org/releases/X2GoClient_nightly_macosx/x2goclient-4.1.2.2.git20191230.1893.heuler.OSX_10_13.dmg",target:"_blank",rel:"noopener noreferrer"}},[t._v("nightly build"),o("OutboundLink")],1),t._v(" version.")])])])])]),t._v(" "),o("details",{staticClass:"custom-block details"},[o("summary",[t._v("Windows")]),t._v(" "),o("p",[t._v("Download and run the "),o("a",{attrs:{href:"https://wiki.x2go.org/doku.php/doc:installation:x2goclient#ms_windows",target:"_blank",rel:"noopener noreferrer"}},[t._v("X2Go client"),o("OutboundLink")],1),t._v(" clicking "),o("strong",[o("code",[t._v("Download X2Go for MS Windows™ and install.")])]),t._v(" and then selecting the "),o("strong",[o("code",[t._v("exe-file")])]),t._v(".")])]),t._v(" "),o("details",{staticClass:"custom-block details"},[o("summary",[t._v("Linux (Ubuntu / Debian)")]),t._v(" "),o("p",[t._v("Install x2goclient using apt:")]),t._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[o("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" update -y "),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y x2goclient\n")])])])]),t._v(" "),o("h3",{attrs:{id:"configure-the-x2go-client-for-home-machines"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configure-the-x2go-client-for-home-machines"}},[t._v("#")]),t._v(" Configure the X2Go client for home machines")]),t._v(" "),o("p",[t._v("Once installed, open X2Go and click "),o("strong",[o("code",[t._v("New session")])]),t._v(" and enter a "),o("em",[t._v("Session name")]),t._v(" that you will use to identify this connection later, e.g. "),o("em",[t._v("demolab - rstudio")])]),t._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),o("p",[t._v("The configuration below will work on "),o("RouterLink",{attrs:{to:"/faq/compute/#machine-types"}},[t._v("home")]),t._v(" machines. This configuration will -not- work on unmanaged "),o("RouterLink",{attrs:{to:"/faq/compute/#machine-types"}},[t._v("iaas and blue")]),t._v(" machines.")],1)]),t._v(" "),o("details",{staticClass:"custom-block details"},[o("summary",[t._v("Create session")]),t._v(" "),o("p",[o("img",{attrs:{src:s(356),alt:"X2GO introduction",title:"X2GO introduction"}})])]),t._v(" "),o("h4",{attrs:{id:"in-the-session-tab"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#in-the-session-tab"}},[t._v("#")]),t._v(" In the "),o("code",[t._v("Session")]),t._v(" tab")]),t._v(" "),o("details",{staticClass:"custom-block details"},[o("summary",[t._v("Server section")]),t._v(" "),o("ul",[o("li",[o("p",[o("em",[t._v("Host")]),t._v(": "),o("strong",[o("code",[t._v("10.5.5.12")])])])]),t._v(" "),o("li",[o("p",[o("em",[t._v("Login/username")]),t._v(": "),o("strong",[o("code",[t._v("<your-lab-username>")])])])]),t._v(" "),o("li",[o("p",[o("em",[t._v("SSH port")]),t._v(": "),o("strong",[o("code",[t._v("22")])])])]),t._v(" "),o("li",[o("p",[o("em",[t._v("Use RSA/DSA key for ssh connection")]),t._v(":")]),t._v(" "),o("ul",[o("li",[o("p",[t._v("For Mac and Linux:")]),t._v(" "),o("p",[t._v('Leave blank if your login is "passwordless" (key-based). If not, confer the \''),o("RouterLink",{attrs:{to:"/getting-started/how-to-connect/#simplify-your-life"}},[t._v("establish a password less login")]),t._v("' section in the installation guide.")],1)]),t._v(" "),o("li",[o("p",[t._v("For Windows:")]),t._v(" "),o("p",[t._v("You will need to save the access key to your local machine and point to this file: (1) log into your lab "),o("strong",[o("code",[t._v("home")])]),t._v(" machine, (2) print your key with "),o("strong",[o("code",[t._v("cat ~/.ssh/id_rsa")])]),t._v(", (3) open "),o("em",[t._v("Notepad")]),t._v(" on your local machine and copy the text from "),o("strong",[o("code",[t._v("-----BEGIN KEY-----")])]),t._v(" to "),o("strong",[o("code",[t._v("-----END KEY-----")])]),t._v(" (including both headers and the key between) into a file that your save on your computer. (4) link to this file in the window "),o("em",[t._v("Use RSA/DSA key for ssh connection")]),t._v(".")]),t._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),o("p",[t._v("This file is a key to your lab. Store the key somewhere in the "),o("strong",[o("code",[t._v("C:")])]),t._v(" drive on your local machine.")])])])])]),t._v(" "),o("li",[o("p",[o("em",[t._v("Try auto login")]),t._v(": "),o("strong",[o("code",[t._v("Check")])])])]),t._v(" "),o("li",[o("p",[o("em",[t._v("Use Proxy server for SSH connection")]),t._v(": "),o("strong",[o("code",[t._v("Check")])])])])])]),t._v(" "),o("details",{staticClass:"custom-block details"},[o("summary",[t._v("Proxy server section")]),t._v(" "),o("ul",[o("li",[o("em",[t._v("Proxy server type:")]),t._v(" "),o("strong",[o("code",[t._v("SSH")])])]),t._v(" "),o("li",[o("em",[t._v("Host:")]),t._v(" "),o("strong",[o("code",[t._v("<lab-ip>")])]),t._v(" "),o("ul",[o("li",[t._v("For all: This is your lab specific IP that starts with "),o("strong",[o("code",[t._v("10.42.130.")])]),t._v(". You will find the full address in the software that you use to connect to your lab.")])])]),t._v(" "),o("li",[o("em",[t._v("Port:")]),t._v(" "),o("strong",[o("code",[t._v("22")])])]),t._v(" "),o("li",[o("em",[t._v("Same login as on X2Go Sever:")]),t._v(" "),o("strong",[o("code",[t._v("Leave blank")])])]),t._v(" "),o("li",[o("em",[t._v("Login:")]),t._v(" "),o("strong",[o("code",[t._v("<your-lab-username>")])]),t._v(" "),o("ul",[o("li",[t._v("For all: This is the user name that you use to connect to your lab.")])])]),t._v(" "),o("li",[o("em",[t._v("Same password as on X2Go Server:")]),t._v(" "),o("strong",[o("code",[t._v("Leave blank")])])]),t._v(" "),o("li",[o("em",[t._v("RSA/DSA key:")]),t._v(" "),o("ul",[o("li",[t._v("For Mac and Linux: "),o("strong",[o("code",[t._v("Leave blank")])])]),t._v(" "),o("li",[t._v("For Windows: "),o("strong",[o("code",[t._v("Link to the same file that you established above")])])])])]),t._v(" "),o("li",[o("em",[t._v("ssh-agent or default ssh key:")]),t._v(" "),o("strong",[o("code",[t._v("Check")])])])])]),t._v(" "),o("details",{staticClass:"custom-block details"},[o("summary",[t._v("Session type section")]),t._v(" "),o("ul",[o("li",[t._v("Choose "),o("strong",[o("code",[t._v("Single application")])]),t._v(" from the drop down menu")]),t._v(" "),o("li",[t._v("Add "),o("strong",[o("code",[t._v("/usr/bin/xterm")])]),t._v(" in the command window")])])]),t._v(" "),o("h4",{attrs:{id:"in-the-connection-tab"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#in-the-connection-tab"}},[t._v("#")]),t._v(" In the "),o("code",[t._v("Connection")]),t._v(" tab")]),t._v(" "),o("p",[t._v("Play with the "),o("em",[t._v("Connection speed")]),t._v(" and "),o("em",[t._v("Compression")]),t._v(" methods. For office use "),o("strong",[o("code",[t._v("LAN")])]),t._v(" and "),o("strong",[o("code",[t._v("16m-png")])]),t._v(" should be fine.")]),t._v(" "),o("h4",{attrs:{id:"in-the-media-tab"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#in-the-media-tab"}},[t._v("#")]),t._v(" In the "),o("code",[t._v("Media")]),t._v(" tab")]),t._v(" "),o("p",[o("img",{attrs:{src:s(440),alt:"X2GO media",title:"X2GO media"}})]),t._v(" "),o("ul",[o("li",[t._v("Uncheck "),o("strong",[o("code",[t._v("Client side printing support")])])]),t._v(" "),o("li",[t._v("Uncheck "),o("strong",[o("code",[t._v("Enable sound support")])])])]),t._v(" "),o("p",[t._v("Hit "),o("strong",[o("code",[t._v("OK")])]),t._v(" in the lower right corner.")]),t._v(" "),o("h4",{attrs:{id:"connect-to-x2go-server"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#connect-to-x2go-server"}},[t._v("#")]),t._v(" Connect to X2Go server")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("Ensure that your HUNT Cloud VPN is running and connected.")])]),t._v(" "),o("li",[o("p",[t._v("Click on your newly saved session in X2Go to connect to your lab machine.\nIf this works you should see a terminal pop up on your screen.")])]),t._v(" "),o("li",[o("p",[t._v("Type "),o("strong",[o("code",[t._v("xclock")])]),t._v(" in the terminal to test the setup. With a little bit of luck,\nyou should now see a new window popping up with a digital clock.")])])]),t._v(" "),o("h4",{attrs:{id:"connect-to-other-software"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#connect-to-other-software"}},[t._v("#")]),t._v(" Connect to other software")]),t._v(" "),o("p",[t._v("You may use X2Go to access software with graphical interfaces.\nSuch software needs to be installed in your lab machine.")]),t._v(" "),o("p",[t._v("For your home machine, "),o("RouterLink",{attrs:{to:"/working-in-your-lab/analytical-tools/r-studio/#install-r-studio"}},[t._v("RStudio")]),t._v(" should be installed by default. To access this program, go back to your configuration and update "),o("strong",[o("code",[t._v("Session type")])]),t._v(" at the bottom of the "),o("strong",[o("code",[t._v("Session tab")])]),t._v(" from "),o("strong",[o("code",[t._v("/usr/bin/xterm/")])]),t._v(" to the location of Rstudio ("),o("strong",[o("code",[t._v("/usr/bin/rstudio")])]),t._v(") and reconnect. With a little bit of luck, you should now see Rstudio on the your screen. If so, time to celebrate with coffee! If not, time to visit the "),o("RouterLink",{attrs:{to:"/working-in-your-lab/technical-tools/x2go/#troubleshooting"}},[t._v("troubleshooting section")]),t._v(".")],1),t._v(" "),o("h3",{attrs:{id:"configure-the-x2go-client-for-unmanaged-machines"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configure-the-x2go-client-for-unmanaged-machines"}},[t._v("#")]),t._v(" Configure the X2Go client for unmanaged machines")]),t._v(" "),o("p",[t._v("Once installed, open X2Go and click "),o("strong",[o("code",[t._v("New session")])]),t._v(" and enter a "),o("em",[t._v("Session name")]),t._v(" that you will use to identify this connection later, e.g. "),o("em",[t._v("demolab - rstudio")])]),t._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),o("p",[t._v("The configuration below will only work on "),o("strong",[o("code",[t._v("iaas")])]),t._v(" or "),o("strong",[o("code",[t._v("blue")])]),t._v(" machines, and not home machines. This setup require that someone in your lab already have installed X2Go server and your software of choice on the particular machine you will be connecting to.")])]),t._v(" "),o("details",{staticClass:"custom-block details"},[o("summary",[t._v("Create session")]),t._v(" "),o("p",[o("img",{attrs:{src:s(356),alt:"X2GO introduction",title:"X2GO introduction"}})])]),t._v(" "),o("h4",{attrs:{id:"in-the-session-tab-2"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#in-the-session-tab-2"}},[t._v("#")]),t._v(" In the "),o("code",[t._v("Session")]),t._v(" tab")]),t._v(" "),o("details",{staticClass:"custom-block details"},[o("summary",[t._v("Server section")]),t._v(" "),o("ul",[o("li",[o("p",[o("em",[t._v("Host")]),t._v(": "),o("strong",[o("code",[t._v("10.5.5.<something>")])])]),t._v(" "),o("ul",[o("li",[t._v("You need to type in the IP address for the machine that is set up for X2Go. You will fine the IP by logging into the iaas machine on ssh and type "),o("strong",[o("code",[t._v("ifconfig | grep 10.5.5.")])])])])]),t._v(" "),o("li",[o("p",[o("em",[t._v("Login/username")]),t._v(": "),o("strong",[o("code",[t._v("<iaas-machine-username>")])])]),t._v(" "),o("ul",[o("li",[t._v("The default user name of iaas and blue machines is "),o("strong",[o("code",[t._v("ubuntu")])]),t._v(". It may be good to confer with your lab coordinator to learn their specific setup for the machine you plan to access.")])])]),t._v(" "),o("li",[o("p",[o("em",[t._v("SSH port")]),t._v(": "),o("strong",[o("code",[t._v("22")])])])]),t._v(" "),o("li",[o("p",[o("em",[t._v("Use RSA/DSA key for ssh connection")]),t._v(":")]),t._v(" "),o("ul",[o("li",[o("p",[t._v("For Mac and Linux:")]),t._v(" "),o("p",[t._v('Leave blank if your login is "passwordless" (key-based). If not, confer the \''),o("RouterLink",{attrs:{to:"/getting-started/how-to-connect/#simplify-your-life"}},[t._v("establish a password less login")]),t._v("' section in the installation guide.")],1)]),t._v(" "),o("li",[o("p",[t._v("For Windows:")]),t._v(" "),o("p",[t._v("You will need to save the access keys to your local machine and point to this file: (1) log into your lab "),o("strong",[o("code",[t._v("home")])]),t._v(" machine, (2) print your key with "),o("strong",[o("code",[t._v("cat ~/.ssh/id_rsa")])]),t._v(", (3) open "),o("em",[t._v("Notepad")]),t._v(" on your local machine and copy the text from "),o("strong",[o("code",[t._v("-----BEGIN KEY-----")])]),t._v(" to "),o("strong",[o("code",[t._v("-----END KEY-----")])]),t._v(" (including both headers and the key between) into a file that your save on your computer. (4) link to this file in the window "),o("em",[t._v("Use RSA/DSA key for ssh connection")]),t._v(".")])]),t._v(" "),o("li",[o("p",[t._v("On IAAS nodes:")]),t._v(" "),o("p",[t._v("In addition to the steps above, ensure that you are able to log directly into the machine from your local machine following "),o("a",{attrs:{href:"#install-x2go-server-on-unmanaged-lab-machine-iaas"}},[t._v("this guide")]),t._v(".")])])])]),t._v(" "),o("li",[o("p",[o("em",[t._v("Try auto login")]),t._v(": "),o("strong",[o("code",[t._v("Check")])])])]),t._v(" "),o("li",[o("p",[o("em",[t._v("Use Proxy server for SSH connection")]),t._v(": "),o("strong",[o("code",[t._v("Check")])])])])])]),t._v(" "),o("details",{staticClass:"custom-block details"},[o("summary",[t._v("Proxy server section")]),t._v(" "),o("ul",[o("li",[o("em",[t._v("Proxy server type:")]),t._v(" "),o("strong",[o("code",[t._v("SSH")])])]),t._v(" "),o("li",[o("em",[t._v("Host:")]),t._v(" "),o("strong",[o("code",[t._v("<lab-ip>")])]),t._v(" "),o("ul",[o("li",[t._v("This is your lab specific IP that starts with "),o("strong",[o("code",[t._v("10.42.130.")])]),t._v(". You will find the full address in the software that you use to connect to your lab.")])])]),t._v(" "),o("li",[o("em",[t._v("Port:")]),t._v(" "),o("strong",[o("code",[t._v("22")])])]),t._v(" "),o("li",[o("em",[t._v("Same login as on X2Go Sever:")]),t._v(" "),o("strong",[o("code",[t._v("Leave blank")])])]),t._v(" "),o("li",[o("em",[t._v("Login:")]),t._v(" "),o("strong",[o("code",[t._v("<your-lab-username>")])]),t._v(" "),o("ul",[o("li",[t._v("This is the user name that you use to connect to your lab.")])])]),t._v(" "),o("li",[o("em",[t._v("Same password as on X2Go Server:")]),t._v(" "),o("strong",[o("code",[t._v("Leave blank")])])]),t._v(" "),o("li",[o("em",[t._v("RSA/DSA key:")]),t._v(" "),o("ul",[o("li",[t._v("For Mac and Linux: "),o("strong",[o("code",[t._v("Leave blank")])])]),t._v(" "),o("li",[t._v("For Windows: "),o("strong",[o("code",[t._v("Link to the same file that you established above")])])])])]),t._v(" "),o("li",[o("em",[t._v("ssh-agent or default ssh key:")]),t._v(" "),o("strong",[o("code",[t._v("Check")])])])])]),t._v(" "),o("details",{staticClass:"custom-block details"},[o("summary",[t._v("Session type section")]),t._v(" "),o("ul",[o("li",[t._v("Choose "),o("strong",[o("code",[t._v("Single application")])]),t._v(" from the drop down menu")]),t._v(" "),o("li",[t._v("Add "),o("strong",[o("code",[t._v("/usr/bin/xterm")])]),t._v(" in the command window")])])]),t._v(" "),o("h4",{attrs:{id:"remaining-configuration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#remaining-configuration"}},[t._v("#")]),t._v(" Remaining configuration")]),t._v(" "),o("p",[t._v("Follow the setups outlines in the "),o("strong",[o("code",[t._v("Configure the X2Go client for home machines")])]),t._v(" for further setup, including "),o("strong",[o("code",[t._v("In the connection tab")])]),t._v(", "),o("strong",[o("code",[t._v("In the media tab")])]),t._v(", "),o("strong",[o("code",[t._v("connecting to the X2Go server")])]),t._v(" and "),o("strong",[o("code",[t._v("Connect to other software")])]),t._v(": "),o("RouterLink",{attrs:{to:"/working-in-your-lab/technical-tools/x2go/#configure-the-x2go-client-for-home-machines"}},[t._v("Start here")]),t._v(".")],1),t._v(" "),o("h2",{attrs:{id:"install-a-desktop-environment"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#install-a-desktop-environment"}},[t._v("#")]),t._v(" Install a desktop environment")]),t._v(" "),o("p",[t._v("The default X2Go setup connects directly to individual applications. This section describe how you may install a lightweight "),o("a",{attrs:{href:"https://www.xfce.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("XFCE"),o("OutboundLink")],1),t._v(" desktop environment using common settings.")]),t._v(" "),o("details",{staticClass:"custom-block details"},[o("summary",[t._v("Minimal setup of XFCE desktop")]),t._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[o("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" update -y "),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" autoremove -y\n"),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y --no-install-recommends xubuntu-desktop\n")])])])]),t._v(" "),o("h2",{attrs:{id:"tips-for-configuration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#tips-for-configuration"}},[t._v("#")]),t._v(" Tips for configuration")]),t._v(" "),o("p",[t._v("The default setup will need some care to run smoothly:")]),t._v(" "),o("details",{staticClass:"custom-block details"},[o("summary",[t._v("TAB completion")]),t._v(" "),o("ul",[o("li",[o("p",[t._v("Fixing TAB completion using shell: (1) Log into your lab machine and (2) run this code:")]),t._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[o("span",{pre:!0,attrs:{class:"token function"}},[t._v("sed")]),t._v(" -i "),o("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'s|name="\\&lt\\;Super\\&gt\\;Tab" type="string" value="switch_window_key"|name="\\&lt\\;Super\\&gt\\;Tab" type="empty"|g\'')]),t._v(" ~/.config/xfce4/xfconf/xfce-perchannel-xml/xfce4-keyboard-shortcuts.xml\n")])])])]),t._v(" "),o("li",[o("p",[t._v("Fixing TAB completion using GUI approach over x2go client.")]),t._v(" "),o("div",{staticClass:"language-md extra-class"},[o("pre",{pre:!0,attrs:{class:"language-md"}},[o("code",[o("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("1.")]),t._v(" Open the Xfce "),o("span",{pre:!0,attrs:{class:"token bold"}},[o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("**")]),o("span",{pre:!0,attrs:{class:"token content"}},[o("span",{pre:!0,attrs:{class:"token code-snippet code keyword"}},[t._v("`Application Menu`")])]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("**")])]),t._v(" > "),o("span",{pre:!0,attrs:{class:"token bold"}},[o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("**")]),o("span",{pre:!0,attrs:{class:"token content"}},[o("span",{pre:!0,attrs:{class:"token code-snippet code keyword"}},[t._v("`Settings`")])]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("**")])]),t._v(" > "),o("span",{pre:!0,attrs:{class:"token bold"}},[o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("**")]),o("span",{pre:!0,attrs:{class:"token content"}},[o("span",{pre:!0,attrs:{class:"token code-snippet code keyword"}},[t._v("`Window Manager`")])]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("**")])]),t._v("\n"),o("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("2.")]),t._v(" Click on the "),o("span",{pre:!0,attrs:{class:"token bold"}},[o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("**")]),o("span",{pre:!0,attrs:{class:"token content"}},[o("span",{pre:!0,attrs:{class:"token code-snippet code keyword"}},[t._v("`Keyboard Tab`")])]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("**")])]),t._v("\n"),o("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("3.")]),t._v(" Clear the Switch window for same application setting\n")])])])])])]),t._v(" "),o("details",{staticClass:"custom-block details"},[o("summary",[t._v("Copy-paste functionality")]),t._v(" "),o("p",[t._v("Connect to your lab machine and run this code:")]),t._v(" "),o("ul",[o("li",[o("p",[t._v("Client is connecting "),o("strong",[t._v("from macOS")])]),t._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[o("span",{pre:!0,attrs:{class:"token function"}},[t._v("touch")]),t._v(" ~/.Xresources\n"),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" u+x ~/.Xresources\n"),o("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" -e "),o("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*VT100.translations: #override Meta <KeyPress> V: insert-selection(PRIMARY, CUT_BUFFER0) '),o("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[t._v("\\n")]),t._v('"')]),t._v(" "),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" ~/.Xresources\n"),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" ~/.Xresources ~/.Xdefaults\nxrdb -merge ~/.Xresources\n")])])])]),t._v(" "),o("li",[o("p",[t._v("Client is connecting from "),o("strong",[t._v("Windows")]),t._v(" or "),o("strong",[t._v("Linux")])]),t._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[o("span",{pre:!0,attrs:{class:"token function"}},[t._v("touch")]),t._v(" ~/.Xresources\n"),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" u+x ~/.Xresources\n"),o("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" -e "),o("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*VT100.Translations: #override Ctrl Shift <Key>V: insert-selection(CLIPBOARD) '),o("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[t._v("\\n")]),t._v('"')]),t._v(" "),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" ~/.Xresources\n"),o("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" -e "),o("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*VT100.Translations: #override Ctrl Shift <Key>C: copy-selection(CLIPBOARD) '),o("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[t._v("\\n")]),t._v('"')]),t._v(" "),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" ~/.Xresources\n"),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" ~/.Xresources ~/.Xdefaults\nxrdb -merge ~/.Xresources\n")])])])])])]),t._v(" "),o("h2",{attrs:{id:"install-x2go-server-on-unmanaged-lab-machine"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#install-x2go-server-on-unmanaged-lab-machine"}},[t._v("#")]),t._v(" Install X2Go server on unmanaged lab machine")]),t._v(" "),o("p",[t._v("Connection to X2Go require the application "),o("strong",[o("code",[t._v("x2goserver")])]),t._v(" to run for connections to work.\nYou may install this on iaas and blue machines as follows:")]),t._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),o("p",[t._v("This section is for lab coordinators that want to set up their unmanaged iaas and blue machines for GUI access.")])]),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("REQUIREMENTS")]),t._v(" "),o("ul",[o("li",[t._v("Root access to your lab machine. The below configuration will not work on home machines.")])])]),t._v(" "),o("details",{staticClass:"custom-block details"},[o("summary",[t._v("Install x2goserver")]),t._v(" "),o("p",[t._v("Log into your unmanaged lab machine and install "),o("strong",[o("code",[t._v("x2goserver")])]),t._v(":")]),t._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[o("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" add-apt-repository ppa:x2go/stable\n"),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" update\n"),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" x2goserver libnss3 libasound2 -y\n")])])])]),t._v(" "),o("details",{staticClass:"custom-block details"},[o("summary",[t._v("Ensure smooth access")]),t._v(" "),o("p",[t._v("You need to make sure you and your lab colleagues can log in to the x2go machine passwordless using RSA certificates, e.g. by following these steps:")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("From your local machine, log into your lab's entry machine:")]),t._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[o("span",{pre:!0,attrs:{class:"token function"}},[t._v("ssh")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("labname"),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("-entry\n")])])])]),t._v(" "),o("li",[o("p",[t._v("Form your entry machine, copy your machine key to your iaas-machine with the running X2Go server:")]),t._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[t._v("ssh-copy-id "),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("name-of-iaas-node"),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),o("p",[o("a",{attrs:{href:"/contact"}},[t._v("Contact us")]),t._v(" if you are unable to make the above step work since a security setting may prohibit this depending on your lab setup.")])])]),t._v(" "),o("li",[o("p",[t._v("Confirm the passwordless route to your iaas machine:")]),t._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[o("span",{pre:!0,attrs:{class:"token function"}},[t._v("ssh")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("iaas-node"),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])]),t._v(" "),o("li",[o("p",[t._v("Get the IP for your IAAS machine")]),t._v(" "),o("p",[t._v("Inside your IAAS node, list the IP address for the node with "),o("strong",[o("code",[t._v("ifconfig")])]),t._v(". The IP address is listed after "),o("strong",[o("code",[t._v("inet addr:")])]),t._v(" and start with 10.5. Note this as you will use this for the X2Go setup on your local machine (steps above).")]),t._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[o("span",{pre:!0,attrs:{class:"token function"}},[t._v("hostname")]),t._v(" -I\n")])])])])])]),t._v(" "),o("h2",{attrs:{id:"troubleshooting"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[t._v("#")]),t._v(" Troubleshooting")]),t._v(" "),o("details",{staticClass:"custom-block details"},[o("summary",[t._v("Password prompts during login")]),t._v(" "),o("p",[t._v("X2Go rely either password or certificate to authenticate your connection. If the certificate do not work (or not included), your may be asked to insert your password four times before your application start. If so, try to fetch and save your certificate as described in our "),o("RouterLink",{attrs:{to:"/working-in-your-lab/technical-tools/x2go/#configure-the-x2go-client-for-home-machines"}},[t._v("X2Go configuration")]),t._v(" under "),o("strong",[o("code",[t._v("Use RSA/DSA key for ssh connection")])]),t._v(".")],1)]),t._v(" "),o("details",{staticClass:"custom-block details"},[o("summary",[t._v("Keys do not release")]),t._v(" "),o("p",[t._v("Key-buffer not receiving a key release action after a keypress is a known bug of X2GO. There does not seem to be any clear solution to this. It is possible to disable key repeating, which will cause intended key repeating to stop working (e.g. holding arrows). We recommend to check connection settings and to make sure that the best network connection available is used.\nIf this is causing too many problems, alternatives to X2GO like "),o("RouterLink",{attrs:{to:"/working-in-your-lab/technical-tools/mobaxterm/"}},[t._v("MobaXterm")]),t._v(" can be considered.")],1)]),t._v(" "),o("details",{staticClass:"custom-block details"},[o("summary",[t._v("Manually 'killing' a stuck X2Go session")]),t._v(" "),o("p",[t._v("From time to time your X2Go sessions may get stuck, such as when your software inside X2Go consumes all available memory. In such circumstances you may need to manually terminate the stuck X2Go processes using the command line in your lab machine.")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("From your local machine, connect to your lab machine over SSH, either using command line (Mac/Linux) or MobaXterm (Windows).")])]),t._v(" "),o("li",[o("p",[t._v("Once onboard your lab machine, list X2Go processes running under your user name.")]),t._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[o("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v(" aux "),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" x2go "),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token variable"}},[o("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("whoami")]),o("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\n")])])]),o("p",[t._v("A single line of your output will similar to the output below. This is from a process running the RStudio software. Your output may look different depending on the software your run:")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("demouser 22463 0.0 0.0 11300 1796 ? Ss Jul11 0:00 /bin/bash /usr/bin/x2goruncommand 50 22408 demouser-50-1563761927_stRrstudio_dp32 39401 /usr/bin/rstudio nosnd R\n")])])])]),t._v(" "),o("li",[o("p",[t._v("Identify the process ID number that you want to terminate. The unique process ID is listes in the second column in the output from Step 2. For example, the process ID for the X2Go session below is "),o("strong",[o("code",[t._v("22463")])]),t._v(" (your number will be different).")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("demouser 22463 0.0 0.0 11300 1796 ? Ss Jul11 0:00 /bin/bash /usr/bin/x2goruncommand 50 22408 demouser-50-1563761927_stRrstudio_dp32 39401 /usr/bin/rstudio nosnd R\n")])])])]),t._v(" "),o("li",[o("p",[t._v("Terminate the session ID that is stuck.")]),t._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[o("span",{pre:!0,attrs:{class:"token function"}},[t._v("kill")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("process-id"),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# e.g.: kill 22463")]),t._v("\n")])])])]),t._v(" "),o("li",[o("p",[t._v("Confirm that the process is killed by reapeating Step 2 to verify that the process ID is no longer listed. Repeat the procedure to kill additional processes if needed.")])]),t._v(" "),o("li",[o("p",[t._v("Restart X2Go.")])])])]),t._v(" "),o("details",{staticClass:"custom-block details"},[o("summary",[t._v("XQuartz in Mac")]),t._v(" "),o("p",[t._v("If XQuartz is used as X11 Server on OS X, X2Go Client has to be informed. Click on the screw-wrench in the upper left bar in order to open the settings window. If not indicated yet, select XQuartz for the X11 application and supply the right version. Make sure that you have restarted your mac after installing the XQuartz.")]),t._v(" "),o("p",[o("img",{attrs:{src:s(441),alt:"XQuartz",title:"XQuartz - Mac OS X"}})])]),t._v(" "),o("details",{staticClass:"custom-block details"},[o("summary",[t._v("Slow Firefox in x2go")]),t._v(" "),o("p",[t._v("Since version 47 Firefox became slow when using x11 rendering. Current versions should still allow setting xrender. Open new tab and write "),o("code",[t._v("about:config")]),t._v(" as a url in your firefox browser, then search for "),o("code",[t._v("gfx.xrender.enabled")]),t._v(" and set it to "),o("code",[t._v("true")]),t._v(". Restart your Firefox browser.")])]),t._v(" "),o("details",{staticClass:"custom-block details"},[o("summary",[t._v("Shared folders")]),t._v(" "),o("p",[t._v("X2Go requires sshfs to be installed in the lab in order to use Shared folders feature.")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("sudo apt update\nsudo apt install -y sshfs\n")])])])])])}),[],!1,null,null,null);e.default=a.exports}}]);