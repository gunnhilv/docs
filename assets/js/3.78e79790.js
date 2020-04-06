(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{204:function(t,n,e){t.exports=e.p+"assets/img/tunnel_1.71969884.png"},205:function(t,n,e){t.exports=e.p+"assets/img/tunnel_2.6f6306f2.png"},206:function(t,n,e){t.exports=e.p+"assets/img/tunnel_3.0718c302.png"},207:function(t,n,e){t.exports=e.p+"assets/img/sync_1.8332e34f.png"},208:function(t,n,e){t.exports=e.p+"assets/img/sync_2.a7caad2d.png"},209:function(t,n,e){t.exports=e.p+"assets/img/sync_3.e8a24586.png"},210:function(t,n,e){t.exports=e.p+"assets/img/sync_4.f4375532.png"},257:function(t,n,e){"use strict";e.r(n);var o=e(17),s=Object(o.a)({},(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"winscp"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#winscp"}},[t._v("#")]),t._v(" WinSCP")]),t._v(" "),o("p",[o("a",{attrs:{href:"https://winscp.net/",target:"_blank",rel:"noopener noreferrer"}},[t._v("WinSCP"),o("OutboundLink")],1),t._v(" is an open source data transfer client for Windows that work with commonly used transfer protocols including SFTP, S3 and SCP. If your host organization allows, you can use WinSCP for file transfers and synchronization of folders between your local machine and your lab machines.")]),t._v(" "),o("p"),o("div",{staticClass:"table-of-contents"},[o("ul",[o("li",[o("a",{attrs:{href:"#install"}},[t._v("Install")])]),o("li",[o("a",{attrs:{href:"#configure"}},[t._v("Configure")])]),o("li",[o("a",{attrs:{href:"#synchronize"}},[t._v("Synchronize")])])])]),o("p"),t._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[t._v("Requirement")]),t._v(" "),o("ul",[o("li",[t._v("Windows operating system.")]),t._v(" "),o("li",[t._v("A "),o("RouterLink",{attrs:{to:"/getting-started/"}},[t._v("working connection")]),t._v(" to your lab.")],1)])]),t._v(" "),o("h2",{attrs:{id:"install"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[t._v("#")]),t._v(" Install")]),t._v(" "),o("p",[t._v("Download WinSCP from "),o("a",{attrs:{href:"https://winscp.net/eng/download.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("winscp.net"),o("OutboundLink")],1),t._v(" and install the software. This may required administrator privileges.")]),t._v(" "),o("h2",{attrs:{id:"configure"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configure"}},[t._v("#")]),t._v(" Configure")]),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),o("p",[t._v("This section configures WinSCP to connect your local machine to your "),o("RouterLink",{attrs:{to:"/faq/compute/#machine-types"}},[t._v("home machine")]),t._v(". Additional configurations will be needed for connections to iaas and blue machines.")],1)]),t._v(" "),o("p",[t._v("You will see the "),o("strong",[o("code",[t._v("Login")])]),t._v(" screen when you start WinSCP for the first time.")]),t._v(" "),o("p",[o("img",{attrs:{src:e(204),alt:"SSH Tunnel - Step 1",title:"SSH Tunnel - Step 1"}})]),t._v(" "),o("p",[t._v("In this "),o("strong",[o("code",[t._v("Session tab")])]),t._v(" insert:")]),t._v(" "),o("ul",[o("li",[t._v("File protocol: "),o("strong",[o("code",[t._v("SFTP")])])]),t._v(" "),o("li",[t._v("Host name: "),o("strong",[o("code",[t._v("10.5.5.12")])])]),t._v(" "),o("li",[t._v("Protocol: "),o("strong",[o("code",[t._v("22")])])]),t._v(" "),o("li",[t._v("User name: "),o("strong",[o("code",[t._v("<your-username>")])])]),t._v(" "),o("li",[t._v("Password: "),o("strong",[o("code",[t._v("<your-ssh-password>")])])])]),t._v(" "),o("p",[t._v("Click "),o("strong",[o("code",[t._v("Advanced")])]),t._v(" and select "),o("strong",[o("code",[t._v("Tunnel")])]),t._v(":")]),t._v(" "),o("p",[o("img",{attrs:{src:e(205),alt:"SSH Tunnel - Step 2",title:"SSH Tunnel - Step 2"}})]),t._v(" "),o("p",[t._v("In the "),o("strong",[o("code",[t._v("Tunnel tab")])]),t._v(" insert:")]),t._v(" "),o("ul",[o("li",[t._v("Connect through SSH tunnel: "),o("strong",[o("code",[t._v("Check")])])]),t._v(" "),o("li",[t._v("Host name: "),o("strong",[o("code",[t._v("<your-lab-IP>")])]),t._v(" (usually starts with 10.42.130-something)")]),t._v(" "),o("li",[t._v("Protocol: "),o("strong",[o("code",[t._v("22")])])]),t._v(" "),o("li",[t._v("User name: "),o("strong",[o("code",[t._v("<your-username>")])])]),t._v(" "),o("li",[t._v("Password: "),o("strong",[o("code",[t._v("<your-ssh-password>")])])])]),t._v(" "),o("p",[t._v("Click "),o("strong",[o("code",[t._v("Ok")])]),t._v(" when completed.")]),t._v(" "),o("p",[t._v("Once you have confirmed the advanced settings you will get back to previous window. Hit "),o("strong",[o("code",[t._v("Login")])]),t._v(".")]),t._v(" "),o("p",[o("img",{attrs:{src:e(206),alt:"SSH Tunnel - Step 4",title:"SSH Tunnel - Step 4"}})]),t._v(" "),o("p",[t._v("With a little bit of luck, you should be able to see the files in your lab on the right side of your screen.")]),t._v(" "),o("h2",{attrs:{id:"synchronize"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#synchronize"}},[t._v("#")]),t._v(" Synchronize")]),t._v(" "),o("p",[o("a",{attrs:{href:"https://winscp.net/eng/docs/task_synchronize",target:"_blank",rel:"noopener noreferrer"}},[t._v("Synchronization"),o("OutboundLink")],1),t._v(" is an additional feature that provides advanced copying. For example, when only a subset of updated files or only a new files have to be copied a lot of time can be saved compared to normal copy in WinSCP, which transfers all of the files every time your transfer a folder.")]),t._v(" "),o("p",[t._v("When selected the folder to be synchronized this option can be found in "),o("strong",[o("code",[t._v("Commands")])]),t._v(" menu as "),o("strong",[o("code",[t._v("Synchronize...")])]),t._v(" (Ctrl+S).")]),t._v(" "),o("p",[o("img",{attrs:{src:e(207),alt:"Synchronization - Step 1",title:"Synchronization - Step 1"}})]),t._v(" "),o("p",[t._v("Synchronization allows multiple adjustments such as synchronization towards target, but also both ways. Whether one wants to synchronize deleted files or what comparison criteria one would like to use.")]),t._v(" "),o("p",[o("img",{attrs:{src:e(208),alt:"Synchronization - Step 2",title:"Synchronization - Step 2"}})]),t._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[t._v("Be careful!")]),t._v(" "),o("p",[t._v("Selecting "),o("strong",[o("code",[t._v("Both")])]),t._v(" or "),o("strong",[o("code",[t._v("Local")])]),t._v(" targets will download data from your lab to your local machine. It is your responsibility to only use this configuration for folders in your lab that contains non-sensitive data that you can keep on your local machine.")])]),t._v(" "),o("p",[t._v("When confirmed, a file comparison is done by WinSCP, where one can choose files to be synchronized. Click "),o("strong",[o("code",[t._v("Ok")])]),t._v(" to confirm.")]),t._v(" "),o("p",[o("img",{attrs:{src:e(209),alt:"Synchronization - Step 3",title:"Synchronization - Step 3"}})]),t._v(" "),o("p",[t._v("You will get a confirmation status when your synchronization is completed.")]),t._v(" "),o("p",[o("img",{attrs:{src:e(210),alt:"Synchronization - Step 4",title:"Synchronization - Step 4"}})])])}),[],!1,null,null,null);n.default=s.exports}}]);