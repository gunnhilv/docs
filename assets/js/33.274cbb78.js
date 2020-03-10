(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{259:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"fsl"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#fsl"}},[t._v("#")]),t._v(" FSL")]),t._v(" "),n("p",[t._v("FSL is a comprehensive library of image analysis and statistical tools\nfor fMRI, MRI and DTI brain imaging data. The suite consists of various\ncommand line tools, as well as simple GUIs for its core analysis pipelines.\nAmong others, FSL offers implementations of standard GLM analysis,\nwhite matter tractography, tissue segmentation, affine and non-linear\nco-registration, and independent component analysis "),n("a",{attrs:{href:"http://neuro.debian.net/pkgs/fsl-complete.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("(Source: Neurodebian)"),n("OutboundLink")],1),t._v(".")]),t._v(" "),n("h2",{attrs:{id:"installation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),n("p",[t._v("Our tutorial only briefly summarises the installation, therefore we recommend to read up\nin official "),n("a",{attrs:{href:"https://fsl.fmrib.ox.ac.uk/fsl/fslwiki/FslInstallation/Linux",target:"_blank",rel:"noopener noreferrer"}},[t._v("FSL installation"),n("OutboundLink")],1),t._v(".")]),t._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[t._v("REQUIREMENT")]),t._v(" "),n("p",[t._v("Python 2")])]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://gist.github.com/cffe4e955249bdde6985d4232a618ab8.git ~/fslinstaller\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p /mnt/work/software/FSL\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p /mnt/scratch/tmp\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("chown")]),t._v(" ubuntu:ubuntu /mnt/scratch/tmp/\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("TMP")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/mnt/scratch/tmp/\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /mnt/work/software/FSL "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("TMP")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$TMP")]),t._v(" python ~/fslinstaller/fslinstaller.py\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" -rf ~/fslinstaller\n")])])]),n("details",{staticClass:"custom-block details"},[n("summary",[t._v("Output log from installation")]),n("p"),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("--- FSL Installer - Version 3.0.15 ---\nWhen asked a question, the default answer is given in square brackets.\nHit the Enter key to accept this default answer.\nWhere would you like the FSL install to be (including the FSL folder name)? [/usr/local/fsl]: /mnt/work/software/FSL/fsl\nDownloading...\nChecking FSL package\n[OK] File downloaded\nInstalling FSL software version 6.0.1...\n[OK] FSL software installed.\nPerforming post install tasks\nStage 1\nBy installing this python distribution you agree to the license terms in\n/mnt/work/software/FSL/fsl/fslpython/LICENSE.txt\n100%\nStage 2\n100%\n/tmp/fslpythonYBC3/fslpython_miniconda_installer.log\n100%\nPost install setup complete\n[OK] Post installation setup complete\n")])])]),n("p")]),n("h2",{attrs:{id:"configuration"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),n("p",[t._v("Based on "),n("a",{attrs:{href:"https://fsl.fmrib.ox.ac.uk/fsl/fslwiki/FslInstallation/ShellSetup",target:"_blank",rel:"noopener noreferrer"}},[t._v("shell setup"),n("OutboundLink")],1),t._v("\nin "),n("code",[t._v(".profile")]),t._v(" or "),n("code",[t._v(".bashrc")]),t._v(" add following:")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('PATH="$PATH:/mnt/work/software/fsl/bin"\nexport FSLDIR=/mnt/work/software/fsl\nsource "${FSLDIR}/etc/fslconf/fsl.sh"\n')])])])])}),[],!1,null,null,null);s.default=e.exports}}]);