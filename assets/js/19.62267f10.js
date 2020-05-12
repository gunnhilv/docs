(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{348:function(e,t,s){"use strict";s.r(t);var o=s(19),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"step-3-configure-your-ssh"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-3-configure-your-ssh"}},[e._v("#")]),e._v(" Step 3. Configure your SSH")]),e._v(" "),s("p",[e._v("These steps will configure your SSH connection to and from your local machine and your lab. You will first configure a machine used for security purposes that we call "),s("strong",[s("code",[e._v("entry")])]),e._v(", and then one machine that we call "),s("strong",[s("code",[e._v("home")])]),e._v(" were you will do your scientific computing.")]),e._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[e._v("Requirement")]),e._v(" "),s("ul",[s("li",[e._v("A running VPN connection (successful implementation of "),s("RouterLink",{attrs:{to:"/getting-started/configure-vpn/#_2-4-verify-your-vpn-connection"}},[e._v("Step 2")]),e._v(").")],1)])]),e._v(" "),s("h2",{attrs:{id:"_3-1-identify-required-info"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-identify-required-info"}},[e._v("#")]),e._v(" 3.1 Identify required info")]),e._v(" "),s("p",[e._v("Open the "),s("strong",[s("code",[e._v("ssh-config.txt")])]),e._v(" file that you collected in Step 1 using your favourite text editor.")]),e._v(" "),s("p",[e._v("This file contains the necessary information for your SSH configuration. Take note of your "),s("strong",[s("code",[e._v("lab-name")])]),e._v(", your "),s("strong",[s("code",[e._v("lab-IP")])]),e._v(" and your "),s("strong",[s("code",[e._v("username")])]),e._v(".")]),e._v(" "),s("p",[e._v("Example contents of "),s("strong",[s("code",[e._v("ssh-config.txt")])]),e._v(":")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("Host "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("your-lab-name"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("-entry\n    HostName "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("your-lab-IP"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n    User "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("your-username"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[e._v("Expected info")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("`your-lab-name'")]),e._v(" - the name of your lab")]),e._v(" "),s("li",[s("strong",[e._v("`your-lab-IP'")]),e._v(" - the IP address of your lab")]),e._v(" "),s("li",[s("strong",[e._v("`your-username'")]),e._v(" - your username in your lab")])])]),e._v(" "),s("h2",{attrs:{id:"_3-2-design-a-passphrase"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-design-a-passphrase"}},[e._v("#")]),e._v(" 3.2 Design a passphrase")]),e._v(" "),s("p",[e._v("You will need to update your "),s("strong",[s("code",[e._v("SSH temporary key")])]),e._v(" in the steps below. We prefer that you design a "),s("strong",[s("code",[e._v("passphrase")])]),e._v(" instead of a password. A passphrase is a series of words that creates a phrase. It should be:")]),e._v(" "),s("ul",[s("li",[e._v("long enough to be hard to guess")]),e._v(" "),s("li",[e._v("not a famous quotation from the literature (but could be pretty close)")]),e._v(" "),s("li",[e._v("hard to guess by intuition (even by someone who knows you well)")]),e._v(" "),s("li",[e._v("easy to remember")])]),e._v(" "),s("p",[e._v("Oh, and, it should be unique to this site only (not to mention at least\n"),s("em",[e._v("12 characters")]),e._v(" long and include both "),s("em",[e._v("lower")]),e._v(" and "),s("em",[e._v("upper")]),e._v(" cases).")]),e._v(" "),s("p",[e._v("Making a good passphrase is great fun and good security hygiene. Here's one to get you going:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("AnalysingPokemon4FunInTheMorning\n")])])]),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[e._v("Expected outcome")]),e._v(" "),s("p",[e._v("A unique "),s("strong",[s("code",[e._v("passphrase")])]),e._v(" of minimum 12 characters containing both lower and upper cases.")])]),e._v(" "),s("h2",{attrs:{id:"_3-3-configure-entry"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-configure-entry"}},[e._v("#")]),e._v(" 3.3 Configure entry")]),e._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[e._v("Windows")]),s("p",[s("ol",[s("li",[s("p",[e._v("Download and save the "),s("strong",[s("code",[e._v("Putty")])]),e._v(" SSH client from "),s("a",{attrs:{href:"https://the.earth.li/~sgtatham/putty/latest/w64/putty.exe",target:"_blank",rel:"noopener noreferrer"}},[e._v("this link"),s("OutboundLink")],1),e._v(".")])]),e._v(" "),s("li",[s("p",[e._v("Click on the "),s("strong",[s("code",[e._v("putty.exe")])]),e._v(" file that your save your local machine to start the client.")])]),e._v(" "),s("li",[s("p",[e._v("Type "),s("strong",[s("code",[e._v("<your-username>@<your-lab-IP>")])]),e._v(' in the "'),s("em",[e._v("Host Name (or IP address)")]),e._v('" field and click "'),s("em",[e._v("Open")]),e._v('".')])]),e._v(" "),s("li",[s("p",[e._v("Enter your "),s("strong",[s("code",[e._v("SSH temporary key")])]),e._v(" collected in Step 1 in the terminal window that appear when asked for a password. You will not see anything on the screen when you type your password.")])]),e._v(" "),s("li",[s("p",[e._v("Type the same "),s("strong",[s("code",[e._v("SSH temporary key")])]),e._v(" "),s("em",[e._v("one more time")]),e._v(" when asked.")])]),e._v(" "),s("li",[s("p",[e._v("Enter your new "),s("strong",[s("code",[e._v("passphrase")])]),e._v(" from above.")])]),e._v(" "),s("li",[s("p",[e._v("Retype your "),s("strong",[s("code",[e._v("passphrase")])]),e._v(" for verification. You will now be kicked out of the entry machine connection.")])]),e._v(" "),s("li",[s("p",[e._v("Repeat Step 2 and 3 to verify your passphrase update. Type your "),s("strong",[s("code",[e._v("passphrase")])]),e._v(" when asked for a password. You should now be logged into your entry machine.")])])])])]),s("details",{staticClass:"custom-block details"},[s("summary",[e._v("OS X and macOS")]),s("p",[s("ol",[s("li",[s("p",[e._v("Start "),s("strong",[s("code",[e._v("Terminal")])]),e._v(' (Command + Space, type "Terminal").')])]),e._v(" "),s("li",[s("p",[e._v("Type "),s("strong",[s("code",[e._v("ssh <your-username>@<your-lab-IP>")])])])]),e._v(" "),s("li",[s("p",[e._v("You should then be prompted to enter a password "),s("strong",[s("code",[e._v("<your-username>@<your-lab-IP>'s password:")])])])]),e._v(" "),s("li",[s("p",[e._v("Enter your "),s("strong",[s("code",[e._v("SSH temporary key")])]),e._v(" colelcted in Step 1 "),s("em",[e._v("two")]),e._v(" times.")])]),e._v(" "),s("li",[s("p",[e._v("Enter your new "),s("strong",[s("code",[e._v("passphrase")])]),e._v(" and retype for verification. You will be kicked off the entry machine by completion.")])]),e._v(" "),s("li",[s("p",[e._v("Repeat step 2. and 3. to verify your passphrase update. Type your "),s("strong",[s("code",[e._v("passphrase")])]),e._v(" when asked for a password. You should now be logged into your entry machine.")])])])])]),s("details",{staticClass:"custom-block details"},[s("summary",[e._v("Ubuntu Linux")]),s("p",[s("ol",[s("li",[s("p",[e._v("Start "),s("strong",[s("code",[e._v("Gnome Terminal")])]),e._v(" (Ctrl + Alt + T).")])]),e._v(" "),s("li",[s("p",[e._v("Type "),s("strong",[s("code",[e._v("ssh <your-username>@<your-lab-IP>")])])])]),e._v(" "),s("li",[s("p",[e._v("You should then be prompted to enter a password "),s("strong",[s("code",[e._v("<your-username>@<your-lab-IP>'s password:")])])])]),e._v(" "),s("li",[s("p",[e._v("Enter your "),s("strong",[s("code",[e._v("SSH temporary key")])]),e._v(" collected in Step 1 "),s("em",[e._v("two")]),e._v(" times.")])]),e._v(" "),s("li",[s("p",[e._v("Enter your new "),s("strong",[s("code",[e._v("passphrase")])]),e._v(" and retype for verification. You will be kicked off the entry machine by completion.")])]),e._v(" "),s("li",[s("p",[e._v("Repeat step 2. and 3. to verify your passphrase update. Type your "),s("strong",[s("code",[e._v("passphrase")])]),e._v(" when asked for a password. You should now be logged into your entry machine.")])])])])]),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[e._v("Expected result")]),e._v(" "),s("p",[e._v("By completion your should be logged into your "),s("strong",[e._v("entry machine")]),e._v(" and see a terminal window that looks about the same as this:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("\nWelcome to Ubuntu "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("16.04")]),e._v(".3 LTS "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("GNU/Linux "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("4.4")]),e._v(".0-174-generic x86_64"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\n * Documentation:  https://help.ubuntu.com\n * Management:     https://landscape.canonical.com\n * Support:        https://ubuntu.com/advantage\n\n  Get cloud support with Ubuntu Advantage Cloud Guest:\n    http://www.ubuntu.com/business/services/cloud\n\n"),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" packages can be updated.\n"),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" update is a security update.\n\nWelcome to YOUR-LABNAME.\n\nFor the record, "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" you shouldn't be here - please\nleave and report the incident to cloud@hunt.ntnu.no.\n\nLast login: Mon Jul  "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("17")]),e._v(":40:16 "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2018")]),e._v(" from "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("10.10")]),e._v(".10.10\nyour-username@your-labname-"),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")]),e._v("entry"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")])]),e._v(":~$ \n\n")])])])]),e._v(" "),s("h2",{attrs:{id:"_3-4-configure-home"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-configure-home"}},[e._v("#")]),e._v(" 3.4 Configure home")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("When logged into your entry machine (see expected result above), connect to your home server by typing "),s("strong",[s("code",[e._v("ssh home")])]),e._v(" in your terminal window.")])]),e._v(" "),s("li",[s("p",[e._v("You will be prompted to type your "),s("strong",[s("code",[e._v("SSH temporary key")])]),e._v(" "),s("em",[e._v("one time")]),e._v(".")])]),e._v(" "),s("li",[s("p",[e._v("Similar to above, you will be asked for a new password. Type your "),s("strong",[s("code",[e._v("passphrase")])]),e._v(" "),s("em",[e._v("two times")]),e._v(".")])]),e._v(" "),s("li",[s("p",[e._v("Similar to above, you will be kicked out of your home machine and back to your entry machine by completion.")])]),e._v(" "),s("li",[s("p",[e._v("Similar to above, verify a successful passphrase update by logging into your home machine typing "),s("strong",[s("code",[e._v("ssh home")])]),e._v(" once more.")])])]),e._v(" "),s("p",[e._v("6 With a tiny bit of luck, you should now be logged into your lab!")]),e._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[e._v("Expected result")]),e._v(" "),s("p",[e._v("By completion your should see a terminal window that looks similar to the text below. You may differentiate between your entry and home  machine by looking at the machine name at the bottom. This one should say "),s("strong",[e._v("-home")]),e._v(":")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("Welcome to Ubuntu "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("16.04")]),e._v(".3 LTS "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("GNU/Linux "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("4.4")]),e._v(".0-98-generic x86_64"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\n * Documentation:  https://help.ubuntu.com\n * Management:     https://landscape.canonical.com\n * Support:        https://ubuntu.com/advantage\n\n  Get cloud support with Ubuntu Advantage Cloud Guest:\n    http://www.ubuntu.com/business/services/cloud\n\n"),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("66")]),e._v(" packages can be updated.\n"),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" updates are security updates.\n\nWelcome to YOUR-LABNAME.\n\nFor the record, "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" you shouldn't be here - please\nleave and report the incident to cloud@hunt.ntnu.no.\n\nLast login: Sun Dec  "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("12")]),e._v(":29:28 "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2017")]),e._v(" from "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("10.10")]),e._v(".10.10\nyour-username@your-labname-"),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")]),e._v("home"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")])]),e._v(":~$\n")])])])]),e._v(" "),s("h2",{attrs:{id:"_3-5-simplify-your-life"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-simplify-your-life"}},[e._v("#")]),e._v(" 3.5 Simplify your life")]),e._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),s("p",[s("strong",[e._v("Do not skip this section...")])])]),e._v(" "),s("p",[e._v("We hope that you will log into your lab a lot over the coming months and years, so please invest some time to make sure you simplify that process as much as possible!")]),e._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[e._v("Windows")]),s("p",[s("ol",[s("li",[s("p",[s("a",{attrs:{href:"/working-in-your-lab/technical-tools/mobaxterm"}},[e._v("Configure MobaXterm")]),e._v(' for simple and "password less" access directly to your home machine, as well as click-based file transfers between your local machine and your home machine.')])]),e._v(" "),s("li",[s("p",[s("RouterLink",{attrs:{to:"/working-in-your-lab/technical-tools/x2go/#set-up-your-local-machine"}},[e._v("Configure X2Go")]),e._v(' for "password less" one-click access to graphical software in your lab, such as RStudio.')],1)])])])]),s("details",{staticClass:"custom-block details"},[s("summary",[e._v("OS X, MacOS and Ubuntu Linux")]),s("p"),s("p",[e._v('When completed, the steps below should allow you to log "password less" directly into your home machine by typing:')]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("ssh")]),e._v(" your-lab-name\n")])])]),s("h3",{attrs:{id:"establish-a-ssh-alias"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#establish-a-ssh-alias"}},[e._v("#")]),e._v(" Establish a SSH alias")]),e._v(" "),s("p",[e._v("This will allow you to log directly into your lab without the need to remember your user name or your lab's IP address:")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("On your local machine, open the "),s("strong",[s("code",[e._v("ssh-config.txt")])]),e._v(" file from "),s("RouterLink",{attrs:{to:"/getting-started/collect-your-keys/#_1-2-secrets-on-your-email"}},[e._v("Step 1.2")]),e._v(".")],1)]),e._v(" "),s("li",[s("p",[e._v("On your local machine, add the content from the "),s("strong",[s("code",[e._v("ssh-config.txt")])]),e._v(" to the file named "),s("strong",[s("code",[e._v("config")])]),e._v(" in the hidden ssh-folder in your home directory ("),s("strong",[s("code",[e._v("~/.ssh/config")])]),e._v(") using your favorite file editor. You may need to generate this file if it is your first ssh-configuration.")])]),e._v(" "),s("li",[s("p",[e._v("Test your new setup by typing "),s("strong",[s("code",[e._v("ssh <your-lab-name>-entry")])]),e._v(" in your terminal. For example:")])])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("ssh demolab-entry\n")])])]),s("p",[e._v("You should now be prompted your passphrase and then be logged into your entry-machine. Exit your entry machine and return to your local machine by typing "),s("strong",[s("code",[e._v("exit")])]),e._v(".")]),e._v(" "),s("h3",{attrs:{id:"establish-a-password-less-login"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#establish-a-password-less-login"}},[e._v("#")]),e._v(" Establish a password-less login")]),e._v(" "),s("p",[e._v("This will allow you to log directly into your lab without the need to remember your passphrase.")]),e._v(" "),s("blockquote",[s("p",[e._v("If you already have a RSA certificate on your local computer that you would like to use, start from step 3.")])]),e._v(" "),s("ol",[s("li",[e._v("In your local computer, open a terminal.")]),e._v(" "),s("li",[e._v("Generate a new RSA certificate by typing "),s("strong",[s("code",[e._v("ssh-keygen")])]),e._v(". Hint enter "),s("em",[e._v("three times")]),e._v(". When this finishes:")]),e._v(" "),s("li",[e._v("Type "),s("strong",[s("code",[e._v("ssh-copy-id <your-lab-name>-entry")])]),e._v(" to add your new certificate to your entry machine. Enter your "),s("strong",[s("code",[e._v("passphrase")])]),e._v(" when prompted for a password.")]),e._v(" "),s("li",[e._v("Enter "),s("strong",[s("code",[e._v("ssh-add")])]),e._v(" to add the certificate to the ssh-agent. If you don't have a running ssh-agent you may see an error message. In such a case, first enter "),s("strong",[s("code",[e._v('eval "$(ssh-agent -s)"')])]),e._v(" and next enter "),s("strong",[s("code",[e._v("ssh-add")])]),e._v(".")])]),e._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[e._v("Expected result")]),e._v(" "),s("p",[e._v("Simple and secure, you should now be able to directly enter your home node with this command:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("ssh")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("your-lab-name"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),s("p",[e._v("for example,")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("ssh")]),e._v(" demolab\n")])])]),s("p",[e._v("Voilà!")])]),e._v(" "),s("p")]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("Time for coffee!")])])])}),[],!1,null,null,null);t.default=a.exports}}]);