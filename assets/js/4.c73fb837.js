(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{413:function(a,s,t){a.exports=t.p+"assets/img/macFUSE-1-dmg.b59dd534.png"},414:function(a,s,t){a.exports=t.p+"assets/img/macFUSE-2-Install-guide.6691d89a.png"},415:function(a,s,t){a.exports=t.p+"assets/img/macFUSE-3-Install.66e62e62.png"},416:function(a,s,t){a.exports=t.p+"assets/img/macFUSE-4-Install.ecd5911e.png"},417:function(a,s,t){a.exports=t.p+"assets/img/macFUSE-5-Security-and-Privacy-open.610141c0.png"},418:function(a,s,t){a.exports=t.p+"assets/img/macFUSE-5-Security-and-Privacy-allow.293964f4.png"},419:function(a,s,t){a.exports=t.p+"assets/img/macFUSE-6-Install-restart.973d5a49.png"},420:function(a,s,t){a.exports=t.p+"assets/img/sshfs-1-install.64f1c9a7.png"},421:function(a,s,t){a.exports=t.p+"assets/img/sshfs-2-install-agree.a8b0bf2c.png"},422:function(a,s,t){a.exports=t.p+"assets/img/sshfs-3-install-approve.0835dda4.png"},423:function(a,s,t){a.exports=t.p+"assets/img/sshfs-4-install-finish.43029bc6.png"},515:function(a,s,t){"use strict";t.r(s);var e=t(28),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"sshfs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sshfs"}},[a._v("#")]),a._v(" SSHFS")]),a._v(" "),e("p",[a._v("This page describe how you can mount your labs file system over an encrypted connection.")]),a._v(" "),e("p",[a._v("Depending on you security model, you may mount selected part of your storage system to your client computer over VPN.")]),a._v(" "),e("h2",{attrs:{id:"install-software-packages-on-linux-debian"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install-software-packages-on-linux-debian"}},[a._v("#")]),a._v(" Install software packages on linux (Debian)")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("Install sshfs:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" sshfs\n")])])])])]),a._v(" "),e("h2",{attrs:{id:"install-software-packages-on-os-x-and-macos"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install-software-packages-on-os-x-and-macos"}},[a._v("#")]),a._v(" Install software packages on OS X and macOS")]),a._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[a._v("REQUIREMENT")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://brew.sh/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Install Homebrew package manager for macOS: brew"),e("OutboundLink")],1)])]),a._v(" "),e("ol",[e("li",[e("p",[a._v("Install macfuse:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("brew "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" --cask macfuse\n")])])])]),a._v(" "),e("li",[e("p",[a._v("Allow developer in "),e("code",[a._v("System Preferences")]),a._v(" -> "),e("code",[a._v("Security & Privacy")]),a._v(" -> "),e("code",[a._v("General")])])]),a._v(" "),e("li",[e("p",[a._v("Install sshfs:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("brew "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" sshfs\n")])])])]),a._v(" "),e("li",[e("p",[a._v("Reboot macOS before continuing")])])]),a._v(" "),e("h2",{attrs:{id:"mount-your-lab-storage-to-your-computer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mount-your-lab-storage-to-your-computer"}},[a._v("#")]),a._v(" Mount your lab storage to your computer")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("Connect your HUNT Cloud VPN")])]),a._v(" "),e("li",[e("p",[a._v("Set labname")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("labname")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("labname"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# export labname=demolab")]),a._v("\n")])])])]),a._v(" "),e("li",[e("p",[a._v("Make a folder on the local computer that is dedicated as mount point for your lab storage:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" ~/"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${labname}")]),a._v("-storage\n")])])])]),a._v(" "),e("li",[e("p",[a._v("Mount your storage using sshfs:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("sshfs "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${labname}")]),a._v("-entry: ~/"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${labname}")]),a._v("-storage -o follow_symlinks -o "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("volname")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${labname}")]),a._v("\n")])])]),e("p",[a._v("e.g. "),e("code",[a._v("sshfs demolab-entry: demolab -o volname=demolab")])])]),a._v(" "),e("li",[e("p",[a._v("You can make an alias in profile/rc config ("),e("code",[a._v("~/.bash_profile")]),a._v(", "),e("code",[a._v("~/.bashrc")]),a._v(", or "),e("code",[a._v("~/.zshrc")]),a._v(") for easier access:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"alias '),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${labname}")]),a._v("-mount=sshfs "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${labname}")]),a._v("-entry: ~/"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${labname}")]),a._v("-storage -o follow_symlinks -o volname="),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${labname}")]),a._v('"')]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v(" ~/.profile\n")])])])])]),a._v(" "),e("p",[a._v("That's it.\nWith a little bit of luck you should be able to find your lab folders in \"Finder\"...\nIf not, don't hesitate to contact us "),e("a",{attrs:{href:"/contact"}},[a._v("here")]),a._v(" so we can improve this guide together.")]),a._v(" "),e("h2",{attrs:{id:"unmount-your-lab-storage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#unmount-your-lab-storage"}},[a._v("#")]),a._v(" Unmount your lab storage")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("If you wish to stop the mount before you turn off your computer or vpn, you turn it off with this command:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("umount")]),a._v(" ~/"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${labname}")]),a._v("-storage\n")])])])])]),a._v(" "),e("h2",{attrs:{id:"troubleshooting"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[a._v("#")]),a._v(" Troubleshooting")]),a._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[a._v("Installation on macOS 11 (Big Sur)")]),a._v(" "),e("p",[a._v("Brew packages above are deprecated and if you are on new version or could not install old way download\nmacFUSE and SSHFS from "),e("a",{attrs:{href:"https://osxfuse.github.io/",target:"_blank",rel:"noopener noreferrer"}},[a._v("osxfuse.github.io"),e("OutboundLink")],1),a._v(".")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("Download and open macFUSE:")]),a._v(" "),e("p",[e("img",{attrs:{src:t(413),alt:"macFUSE-1-dmg.png"}})])]),a._v(" "),e("li",[e("p",[a._v("Start installation and confirm that you trust the developer:")]),a._v(" "),e("p",[e("img",{attrs:{src:t(414),alt:"macFUSE-2-Install-guide.png"}})])]),a._v(" "),e("li",[e("p",[a._v("Read the info, then continue:")]),a._v(" "),e("p",[e("img",{attrs:{src:t(415),alt:"macFUSE-3-Install.png"}})])]),a._v(" "),e("li",[e("p",[a._v("Approve if you want the installation to continue:")]),a._v(" "),e("p",[e("img",{attrs:{src:t(416),alt:"macFUSE-4-Install.png"}})])]),a._v(" "),e("li",[e("p",[a._v("Switch to Security and privacy in System Preferences:")]),a._v(" "),e("p",[e("img",{attrs:{src:t(417),alt:"macFUSE-5-Security-and-Privacy-open.png"}})])]),a._v(" "),e("li",[e("p",[a._v("Confirm if you want to allow software from this developer to be used in the system,\nallowing this is necessary for sshfs to work:")]),a._v(" "),e("p",[e("img",{attrs:{src:t(418),alt:"macFUSE-5-Security-and-Privacy-allow.png"}})])]),a._v(" "),e("li",[e("p",[a._v("Restart the system immediately if you plan to install sshfs:")]),a._v(" "),e("p",[e("img",{attrs:{src:t(419),alt:"macFUSE-6-Install-restart.png"}})])])]),a._v(" "),e("p",[a._v("After restarting the system, when necessary drivers are loaded, you can continue installing sshfs.")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("Download and open sshfs:")]),a._v(" "),e("p",[e("img",{attrs:{src:t(420),alt:"sshfs-1-install.png"}})])]),a._v(" "),e("li",[e("p",[a._v("Confirm if you agree with license agreement:")]),a._v(" "),e("p",[e("img",{attrs:{src:t(421),alt:"sshfs-2-install-agree.png"}})])]),a._v(" "),e("li",[e("p",[a._v("Approve if you want the installation to continue:")]),a._v(" "),e("p",[e("img",{attrs:{src:t(422),alt:"sshfs-3-install-approve.png"}})])]),a._v(" "),e("li",[e("p",[a._v("Finish:")]),a._v(" "),e("p",[e("img",{attrs:{src:t(423),alt:"sshfs-4-install-finish.png"}})])])])])])}),[],!1,null,null,null);s.default=n.exports}}]);