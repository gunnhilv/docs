(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{409:function(a,e,t){"use strict";t.r(e);var s=t(25),r=Object(s.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"install-epacts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-epacts"}},[a._v("#")]),a._v(" Install EPACTS")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/statgen/EPACTS",target:"_blank",rel:"noopener noreferrer"}},[a._v("EPACTS"),t("OutboundLink")],1),a._v(" is a software pipeline\nto perform various statistical tests for identifying genome-wide\nassociation from gwas and sequence data.")]),a._v(" "),t("p",[a._v("Please contact Hyun Min Kang (hmkang@umich.edu) at the University of Michigan\nor join the "),t("a",{attrs:{href:"http://groups.google.com/group/epacts",target:"_blank",rel:"noopener noreferrer"}},[a._v("EPACTS Google group"),t("OutboundLink")],1),a._v("\nto ask questions about EPACTS.")]),a._v(" "),t("p",[t("code",[a._v("This page describes specific steps setting up EPACTS in your Ubuntu lab on HUNT Cloud.")])]),a._v(" "),t("h2",{attrs:{id:"install-required-packages"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-required-packages"}},[a._v("#")]),a._v(" Install required packages")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("sudo apt update -y && sudo apt-get install -y \\\n         build-essential \\\n         ghostscript \\\n         groff \\\n         gnuplot \\\n         zlib1g-dev \\\n         r-base-core\n")])])]),t("h2",{attrs:{id:"link-to-software-alternatively-clone-the-git-repo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#link-to-software-alternatively-clone-the-git-repo"}},[a._v("#")]),a._v(" Link to software (alternatively, clone the git repo)")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('software="http://csg.sph.umich.edu/kang/epacts/download/EPACTS-3.2.6.tar.gz"\n')])])]),t("h2",{attrs:{id:"define-where-to-store-the-software"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#define-where-to-store-the-software"}},[a._v("#")]),a._v(" Define where to store the software.")]),a._v(" "),t("p",[a._v("Below is a suggestion that you may change.")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('softwaredir="/mnt/work/software/epacts/"\nmkdir -p $softwaredir\n')])])]),t("h2",{attrs:{id:"download-the-code-unpack-and-clean-up"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#download-the-code-unpack-and-clean-up"}},[a._v("#")]),a._v(" Download the code, unpack and clean up")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("wget $software -O $softwaredir/software.tgz\ntar -xvzf $softwaredir/software.tgz  -C $softwaredir/\nmv -v $softwaredir/EPACTS-3.2.6/* $softwaredir/\nrm -rf $softwaredir/EPACTS-3.2.6/\nrm $softwaredir/software.tgz\n")])])]),t("h2",{attrs:{id:"compile-using-make-and-make-install"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#compile-using-make-and-make-install"}},[a._v("#")]),a._v(" Compile using make and make install")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("cd $softwaredir\n./configure --prefix=$softwaredir\nmake\nmake install\n")])])]),t("h2",{attrs:{id:"download-reference-fasta-files-from-1000-genomes-ftp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#download-reference-fasta-files-from-1000-genomes-ftp"}},[a._v("#")]),a._v(" Download reference FASTA files from 1000 Genomes FTP")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$softwaredir/bin/epacts download\n")])])]),t("h2",{attrs:{id:"run"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#run"}},[a._v("#")]),a._v(" Run")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$softwaredir/bin/epacts\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);