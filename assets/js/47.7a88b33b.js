(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{376:function(t,e,o){"use strict";o.r(e);var s=o(19),a=Object(s.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"git"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#git"}},[t._v("#")]),t._v(" Git")]),t._v(" "),o("p",[o("a",{attrs:{href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git"),o("OutboundLink")],1),t._v(" is a handy version control system for tracking changes in files and coordinate work across your lab.")]),t._v(" "),o("p"),o("div",{staticClass:"table-of-contents"},[o("ul",[o("li",[o("a",{attrs:{href:"#remote-git-repositories-on-hunt-cloud"}},[t._v("Remote Git repositories on HUNT Cloud")]),o("ul",[o("li",[o("a",{attrs:{href:"#how-to-access-github"}},[t._v("How to access GitHub")])]),o("li",[o("a",{attrs:{href:"#how-to-access-gitlab"}},[t._v("How to access GitLab")])])])]),o("li",[o("a",{attrs:{href:"#set-up"}},[t._v("Set up")]),o("ul",[o("li",[o("a",{attrs:{href:"#generate-a-new-ssh-key-for-the-connection"}},[t._v("Generate a new SSH key for the connection")])]),o("li",[o("a",{attrs:{href:"#add-your-new-key"}},[t._v("Add your new key")])]),o("li",[o("a",{attrs:{href:"#test-your-connection"}},[t._v("Test your connection")])])])])])]),o("p"),t._v(" "),o("h2",{attrs:{id:"remote-git-repositories-on-hunt-cloud"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#remote-git-repositories-on-hunt-cloud"}},[t._v("#")]),t._v(" Remote Git repositories on HUNT Cloud")]),t._v(" "),o("p",[t._v("Depending on your lab's security tier, your data controller may allow access to hosted git repository managers such as "),o("a",{attrs:{href:"https://gitlab.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitLab"),o("OutboundLink")],1),t._v(" and "),o("a",{attrs:{href:"https://github.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub"),o("OutboundLink")],1),t._v(".\nIf so, you will be able to clone remote repositories, for example:")]),t._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[o("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/samtools/htslib.git\n")])])]),o("p",[t._v("However, you may notice things do not work when using the "),o("code",[t._v("git@github.com:")]),t._v(" format, for example:")]),t._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[o("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone git@github.com:samtools/htslib.git\n")])])]),o("p",[t._v("This does not work because Git is using SSH on port "),o("code",[t._v("22")]),t._v(" which is blocked by default by the firewalls on HUNT Cloud.")]),t._v(" "),o("p",[t._v("Luckily we can tell Git to use a different port, such as port "),o("code",[t._v("443")]),t._v(", which is open by default. See below how to do this for your favorite hosted git repositories.")]),t._v(" "),o("h3",{attrs:{id:"how-to-access-github"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-to-access-github"}},[t._v("#")]),t._v(" How to access GitHub")]),t._v(" "),o("p",[t._v("Add the following lines to your SSH configuration file "),o("code",[t._v("~/.ssh/config")]),t._v(" on your "),o("code",[t._v("home")]),t._v(" machine on HUNT Cloud:")]),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),o("p",[t._v("If the SSH configuration file "),o("code",[t._v("~/.ssh/config")]),t._v(" does not exist, you have to create it.")])]),t._v(" "),o("div",{staticClass:"language-ini extra-class"},[o("pre",{pre:!0,attrs:{class:"language-ini"}},[o("code",[t._v("Host github.com\n  Hostname ssh.github.com\n  Port 443\n")])])]),o("p",[t._v("See GitHub's "),o("a",{attrs:{href:"https://help.github.com/en/articles/using-ssh-over-the-https-port",target:"_blank",rel:"noopener noreferrer"}},[t._v("Using SSH over the HTTPS port"),o("OutboundLink")],1),t._v(" article for more details")]),t._v(" "),o("h3",{attrs:{id:"how-to-access-gitlab"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-to-access-gitlab"}},[t._v("#")]),t._v(" How to access GitLab")]),t._v(" "),o("p",[t._v("Add the following lines to your SSH configuration file "),o("code",[t._v("~/.ssh/config")]),t._v(" on your "),o("code",[t._v("home")]),t._v(" machine on HUNT Cloud:")]),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),o("p",[t._v("If the SSH configuration file "),o("code",[t._v("~/.ssh/config")]),t._v(" does not exist, you have to create it.")])]),t._v(" "),o("div",{staticClass:"language-ini extra-class"},[o("pre",{pre:!0,attrs:{class:"language-ini"}},[o("code",[t._v("Host gitlab.com\n  Hostname altssh.gitlab.com\n  User git\n  Port 443\n  PreferredAuthentications publickey\n  IdentityFile ~/.ssh/git\n")])])]),o("p",[t._v("See GitLab's "),o("a",{attrs:{href:"https://about.gitlab.com/2016/02/18/gitlab-dot-com-now-supports-an-alternate-git-plus-ssh-port/",target:"_blank",rel:"noopener noreferrer"}},[t._v("article"),o("OutboundLink")],1),t._v(" for more details.")]),t._v(" "),o("h2",{attrs:{id:"set-up"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#set-up"}},[t._v("#")]),t._v(" Set up")]),t._v(" "),o("h3",{attrs:{id:"generate-a-new-ssh-key-for-the-connection"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#generate-a-new-ssh-key-for-the-connection"}},[t._v("#")]),t._v(" Generate a new SSH key for the connection")]),t._v(" "),o("ul",[o("li",[t._v("From your lab-home, generate a new key to be used with your git-repository manager: "),o("code",[t._v("ssh-keygen -f ~/.ssh/git")]),t._v(". You may change the key-name, "),o("em",[t._v("git")]),t._v(" in this example, to whatever you like.")]),t._v(" "),o("li",[t._v("View the content of your new public key, and copy the content to your clipboard: "),o("code",[t._v("cat ~/.ssh/git.pub")])])]),t._v(" "),o("h3",{attrs:{id:"add-your-new-key"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#add-your-new-key"}},[t._v("#")]),t._v(" Add your new key")]),t._v(" "),o("ul",[o("li",[t._v("In GitHub, attach the content of the file to your account "),o("a",{attrs:{href:"https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/",target:"_blank",rel:"noopener noreferrer"}},[t._v("as described here"),o("OutboundLink")],1),t._v(".")]),t._v(" "),o("li",[t._v("In GitLab, attach the content of the file to your account "),o("a",{attrs:{href:"https://docs.gitlab.com/ee/gitlab-basics/create-your-ssh-keys.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("as described here"),o("OutboundLink")],1)])]),t._v(" "),o("h3",{attrs:{id:"test-your-connection"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#test-your-connection"}},[t._v("#")]),t._v(" Test your connection")]),t._v(" "),o("ul",[o("li",[t._v("In GitHub, test if you are allowed to connect to GitHub from port 443 ("),o("code",[t._v("ssh -T -p 443 git@ssh.github.com -i ~/.ssh/git")]),t._v("). GitHub should greet you if successful, if not, you need to talk to your lab technical contact to learn about the network restrictions of your lab.")]),t._v(" "),o("li",[t._v("In GitLab, test if you are allowed to connect to GitLab from port 443 ("),o("code",[t._v("ssh -T -p 443 git@altssh.gitlab.com -i ~/.ssh/git")]),t._v("). GitLab should greet you if successful, if not, you need to talk to your lab technical contact to learn about the network restrictions of your lab.")]),t._v(" "),o("li",[t._v("In GitHub, test your new connection with "),o("code",[t._v("ssh -T git@github.com")]),t._v(". You should see a greeting.")]),t._v(" "),o("li",[t._v("In GitLab, test your new connection with "),o("code",[t._v("ssh -T git@gitlab.com")]),t._v(". You should see a greeting.")])])])}),[],!1,null,null,null);e.default=a.exports}}]);