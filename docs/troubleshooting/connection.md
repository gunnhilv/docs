---
title: Connection
category: Troubleshooting
permalink: /troubleshooting/connection
sidebarDepth: 1
description: Your lab connection is encrypted over a virtual private network (VPN) to ensure the confidentiality of the information. We have listed some of the solutions in case you meet any troubles connecting.
---

# Troubleshooting lab connections

[[toc]]

## VPN

Your lab connection is encrypted over a virtual private network (VPN) to ensure the confidentiality of the information. We have listed some of the things that may cause you trouble:

### Access whitelist

We allow connection from known IP addresses only. This means that your VPN connection may be blocked if you connect from a (for us) unknown network outside Norway. Please look up your IP address ([ip4.me](http://ip4.me)) and [forward your IP to us](/contact) if you think this is the case. We are happy to open for new connections.

::: tip For NTNU users

You can access your lab over the Cisco Anyconnect VPN from NTNU worldwide on Windows and Linux: (1) Connect the NTNU VPN using this exact address: **`vpn.ntnu.no/HUNT`**, (2) connect the HUNT Cloud VPN, and (3) connect to your lab.

:::

### Cannot connect due to local firewalls

Some organizations and companies have local firewalls which prohibit your computer from connecting to the HUNT Cloud VPN. Blocked network connections will typically give an error such as `The VPN failed because the connection attempt timed out`. Please contact your local IT department for assistance with the network requirements below if you think this may be the case. Feel free to [include us](/contact) in the communication if you need assistance.

##### Network requirements for HUNT Cloud
```
IP: 129.241.176.121
Port: 1194
Protocol: UDP
```

### Administrator rights

Windows users needs administrator rights on their local computer to successfully install OpenVPN. You will need to contact your local IT personnel for this installation if you do not hold such rights. See this page for details: [Installing OpenVPN on Windows without administrator rights](/getting-started/configure-vpn/#_2-1-install-the-vpn-software).

### Lost or missing VPN passphrase

Your **`VPN passphrase`** is stored on your local computer and used to decrypt your VPN certificate before connection. From time to time your local password keychain may update or otherwise render this passphrase inaccessible. You will need a new VPN certificate from us and then [reconfigure your VPN](/getting-started/configure-vpn/#_2-2-setup-the-vpn-profile)  if this happens. [Contact us](/contact) on mail for such a request and allow a few days in shipping.

### Broken VPN connection

Your VPN session will reset after 12 hours. This will cause your connection to break. For examples, connections left running over night will not work the next morning. You will need to turn off your VPN and then initiate a new connection to get back into your lab.

### Conflict with existing VPN

Already running VPN services on your local machine may cause conflicts when connecting to our HUNT Cloud VPN. Try to disconnect the already running VPN service and reconnect to the HUNT Cloud VPN. NTNU users on Windows and Linux operating systems may connect to both NTNU VPN and the HUNT Cloud VPN using a [tailored NTNU VPN address](/troubleshooting/connection/#access-whitelist).

::: tip For UiB users

You cannot access your HUNT Cloud lab while using the default Cisco Anyconnect VPN from UiB. In order to connect to your lab with the UiB VPN activated, use split tunneling as described [here](https://hjelp.uib.no/tas/public/ssp/content/search?q=KI%200881). Using the split tunneling will allow you to access UiB services, e.g. mail, while connected to your lab.

:::

### No internet while connected to VPN

If you use OpenVPN on Linux and cannot access the rest of the internet while connected to the HUNT Cloud VPN, then please double check that you selected the **`Use this connection only for resources on its network`** in the final steps of [Setup the VPN profile](/getting-started/configure-vpn/#_2-2-setup-the-vpn-profile) in the Getting Started section.

### Wrong password

If your VPN login suddenly stops working, and you are pretty sure your user name and mobile code are both correct, try to sync Google Authenticator's time settings: Start Google authenticator on your phone, tap the tree dots in the corner (menu button) and go to **`Settings`** > **`Time correction for codes`** and hit **`Sync now`**. Now, try to log in again. If this do not work, [contact us](/contact) for further investigation.


### Deactivated account

Inactive accounts are deactivate after about 180 days. This will cause your login to fail if you have not visited your lab in such a time frame. [Send us](/contact) a new [user agreement](/agreements/downloads/#user-agreement) if you need your account reactivated.

### New local machine

We are happy to hear that! If you have a new local machine you will need to install a new VPN certificate on all machines that you will connect from. [Contact us](/contact) on mail with a request for a new VPN certificate, allow a few days for shipping, and then head over to the [Connect to the VPN](/getting-started/configure-vpn/#_2-2-setup-the-vpn-profile) guide to get going.

### New VPN certificate

You will need to remove your old VPN certificate and passwords before you install a new one. On Windows, (1) right click on the OpenVPN icon in the task bar in the lower right corner of your screen and select **`Clear Saved Passwords`**, and (2) open your file explorer and manually remove the folder with the old OpenVPN configurations. It's usually located here: **`C:\Users\<MYUSERNAME>\OpenVPN\config\<folder-with-username-that-you-should-remove>`**. Now, right click on the OpenVPN icon once more and "import from file" from the [Connect to the VPN](/getting-started/configure-vpn/#_2-2-setup-the-vpn-profile) section of our Getting started guide.

## Phone

### New phone

You will need a new Google authenticator code from us to connect your VPN again. [Contact us](/contact) on mail with a request for a new code and allow a few days for shipping. Follow this [guide](/getting-started/collect-your-keys/#_1-3-one-time-verification-codes) for installation.

### No phone

Unfortunately, you do need a phone to connect to your lab. You will use this both for your two-step verification each time you access your lab, and we use your phone registration as part of our user identification process.

### Phone without internet connection

You will need to connect your phone to the internet to install Signal, Google authenticator and to receive your keys, either over wifi or roaming.

### Signal is unavailable for my phone

We are aware that Signal may be unavailable on some phones. Steps to resolve this will vary by phone model and OS. Start with this [troubleshooting guide](https://support.signal.org/hc/en-us/articles/360007318711-Troubleshooting-Notifications) on the official Signal pages as a starting point. [Contact us](/contact) if this do not resolve your issue.

## SSH

### Connection timeout

The most common causes of **`Connection timed out`** responses are: (1) that your VPN connection is not working as intended ([troubleshoot VPN](/troubleshooting/connection/#vpn)), (2) that you typed a wrong SSH password three (3) times in a row causing a 15 minute ban on further logins to your lab. If your VPN is working correctly, aim for a 15 minute coffee break before your retry. [Contact us](/contact) for further troubleshooting if you are still unable to connect.

### Forgotten passwords

After the initial onboarding, you will need your password to install software using the **`sudo apt install <software>`** command. If you have forgotten your password, [contact us](/contact) for a reset, and allow for a few days for effectuation. Another alternative is to ask if some of your lab colleagues may install the software for you using their own user account.

### Broken connection

Your SSH connection is transferred inside your VPN connection. You will therefore experience a sudden drop in your SSH connection if your VPN connection break, for example due to our [12 hour timeout](/troubleshooting/connection/#vpn), a [broken internet connection](/troubleshooting/connection/#broken-vpn-connection) etc. You will also experience a broken connection if your lab machine becomes unresponsive, for example due to an [out of memory killer](/troubleshooting/connection/#unresponsive-machine-oom-killer) or other related issues (see below), and when your internet connection temporarily drops. For such cases, see our [terminal multiplexer guide](/working-in-your-lab/technical-tools/terminal-multiplexers/) on how to keep your environment stable during broken connections.

### Unresponsive machine (OOM Killer)

Your lab machines may become unresponsive. You will notice this as a lost connection. A typical reason for this is that one or more a processes inside your machine consumed all the memory, initiating a [Out Of Memory Killer](https://www.memset.com/docs/additional-information/oom-killer/) (OOM Killer). You will be unable to log onto your lab if an OOM Killer is triggered on your **`home`** machine. You will be able to log into your lab, although unable to log into the affected **`iaas`** or **`blue`** machines, if an OOM Killer is triggered on other machines in your lab. Your data will not be affected of OOM Killers. [Contact us](/contact) us for a machine restart.

### WARNING: Remote host identification has changed

You might get this warning message the first time you connect to a new machine inside your lab:

```bash
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
IT IS POSSIBLE THAT SOMEONE IS DOING SOMETHING NASTY!
Someone could be eavesdropping on you right now (man-in-the-middle attack)!
It is also possible that a host key has just been changed.
The fingerprint for the ECDSA key sent by the remote host is
Please contact your system administrator.
Add correct host key in /home/<username>/.ssh/known_hosts to get rid of this message.
Offending ECDSA key in /home/<username>/.ssh/known_hosts:<number>
  remove with:
  ssh-keygen -f "/home/<username>/.ssh/known_hosts" -R <machine-name>
ECDSA host key for <machine-name> has changed and you have requested strict checking.
```

The warning tells you that such a discrepancy between the expected and observed key might be due to an attack. **You may ignore this message inside your lab.** The reason for the warning is that your RSA key has changed when the machine was rebuilt.

You can remove such messages by running the command that are stated at the bottom in the screen message, for example:

```bash
ssh-keygen -f "/home/<username>/.ssh/known_hosts" -R <machine-name>
```

Your message will be slightly different as the **`username`** and **`machine-name`** will be unique to you and your lab.

::: warning
If you see this message any other time, please [contact us](/contact) for further investigations.
:::
