(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{401:function(t,a,e){"use strict";e.r(a);var s=e(25),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"troubleshooting-machine-issues"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting-machine-issues"}},[t._v("#")]),t._v(" Troubleshooting machine issues")]),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#software-installation"}},[t._v("Software installation")]),e("ul",[e("li",[e("a",{attrs:{href:"#permission-denied"}},[t._v("Permission denied")])])])]),e("li",[e("a",{attrs:{href:"#third-party-software"}},[t._v("Third-party software")]),e("ul",[e("li",[e("a",{attrs:{href:"#matlab"}},[t._v("Matlab")])]),e("li",[e("a",{attrs:{href:"#stata"}},[t._v("Stata")])])])]),e("li",[e("a",{attrs:{href:"#setting-locales-failed"}},[t._v("Setting locales failed")])])])]),e("p"),t._v(" "),e("h2",{attrs:{id:"software-installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#software-installation"}},[t._v("#")]),t._v(" Software installation")]),t._v(" "),e("h3",{attrs:{id:"permission-denied"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#permission-denied"}},[t._v("#")]),t._v(" Permission denied")]),t._v(" "),e("p",[t._v("You will need to use the "),e("strong",[e("code",[t._v("sudo")])]),t._v(" command when you "),e("RouterLink",{attrs:{to:"/faq/compute/#software"}},[t._v("install software")]),t._v(" with the "),e("strong",[e("code",[t._v("sudo apt install <package>")])]),t._v(" command. If forgotten, apt will return an error message like this:")],1),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("E: Could not open lock file /var/lib/dpkg/lock-frontend - open (13: Permission denied)\n")])])]),e("p",[t._v("Rerun your command with sudo. "),e("a",{attrs:{href:"/contact"}},[t._v("Contact us")]),t._v(" if this doesn't solve your issue.")]),t._v(" "),e("h2",{attrs:{id:"third-party-software"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#third-party-software"}},[t._v("#")]),t._v(" Third-party software")]),t._v(" "),e("h3",{attrs:{id:"matlab"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#matlab"}},[t._v("#")]),t._v(" Matlab")]),t._v(" "),e("p",[t._v("See our "),e("RouterLink",{attrs:{to:"/working-in-your-lab/analytical-tools/Matlab/#activate-license"}},[t._v("Matlab troubleshooting section")]),t._v(".")],1),t._v(" "),e("h3",{attrs:{id:"stata"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#stata"}},[t._v("#")]),t._v(" Stata")]),t._v(" "),e("p",[t._v("See our "),e("RouterLink",{attrs:{to:"/working-in-your-lab/analytical-tools/stata/#troubleshooting"}},[t._v("Stata troubleshooting section")]),t._v(".")],1),t._v(" "),e("h2",{attrs:{id:"setting-locales-failed"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setting-locales-failed"}},[t._v("#")]),t._v(" Setting locales failed")]),t._v(" "),e("p",[t._v("Example of such an issue:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('During startup - Warning message:Setting LC_CTYPE failed, using "C"\n')])])]),e("ol",[e("li",[t._v("Check if locale settings are missing")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('> locale\nLANG=\nLC_COLLATE="C"\nLC_CTYPE="UTF-8"\nLC_MESSAGES="C"\nLC_MONETARY="C"\nLC_NUMERIC="C"\nLC_TIME="C"\nLC_ALL=\n')])])]),e("ol",{attrs:{start:"2"}},[e("li",[t._v("Edit "),e("code",[t._v("~/.profile")]),t._v(" or "),e("code",[t._v("~/.bashrc")]),t._v(":")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("export LANG=en_US.UTF-8\nexport LC_ALL=en_US.UTF-8\n")])])]),e("ol",{attrs:{start:"3"}},[e("li",[e("p",[t._v("Run "),e("code",[t._v(". ~/.profile")]),t._v(" or "),e("code",[t._v(". ~/.bashrc")]),t._v(" to read from the file.")])]),t._v(" "),e("li",[e("p",[t._v("Open a new terminal window and check that the locales are properly set:")])])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('> locale\nLANG="en_US.UTF-8"\nLC_COLLATE="en_US.UTF-8"\nLC_CTYPE="en_US.UTF-8"\nLC_MESSAGES="en_US.UTF-8"\nLC_MONETARY="en_US.UTF-8"\nLC_NUMERIC="en_US.UTF-8"\nLC_TIME="en_US.UTF-8"\nLC_ALL="en_US.UTF-8"\n')])])])])}),[],!1,null,null,null);a.default=r.exports}}]);