!!! info "Official Resources"
    Before you start, it's always best to check the source. Here are the official docs:

    * [Official Pi-hole Website](https://pi-hole.net/)
    * [LXC Installation Guide](https://docs.pi-hole.net/main/basic-install/)
    * [Troubleshooting FAQ](https://docs.pi-hole.net/main/post-install/)

## 🛡️ Service Spotlight: Pi-hole (LXC Deployment)
Pi-hole is a network-wide ad blocker that acts as a DNS sinkhole. By intercepting DNS requests for known ad servers and trackers, it prevents them from ever reaching your devices.

1. Prerequisites
Proxmox VE installed and reachable.

Static IP Address reserved (e.g., 192.168.1.5).

Debian 12 or Ubuntu 24.04 Standard CT Template.

2. Create the LXC Container
Log in to your Proxmox Web UI and click Create CT.

General: Set Hostname (e.g., pihole-01) and a root password.

Template: Select your Linux distribution template.

Root Disk: 8GB is plenty.

CPU: 1 Core (Pi-hole is extremely lightweight).

Memory: 512MB RAM (256MB Swap).

Network: * Set IPv4 to Static.

IPv4/CIDR: 192.168.1.5/24 (Adjust to your network).

Gateway: 192.168.1.1 (Your router).

DNS: Use host settings.

3. Automated Installation
Start the container, open the Console, and log in as root. Run the following command:

Bash
# Update and install curl
apt update && apt upgrade -y
apt install curl -y

# Run the official Pi-hole installer
curl -sSL https://install.pi-hole.net | bash

4. Configuration Wizard
Follow the on-screen prompts:

Interface: eth0

Upstream DNS: Select your preferred provider (Cloudflare, Google, etc.).

Blocklists: Keep the default StevenBlack list (you can add more later).

Protocols: Enable both IPv4 and IPv6 if applicable.

Web Interface: Enable.

Logging: Enable (Crucial for seeing what’s being blocked).

5. Network Integration
To apply the "Mosh" to your whole network, you must tell your devices to use the Pi-hole for DNS.

Log in to your Router Admin Interface.

Find the DHCP Settings.

Change the Primary DNS Server to the Static IP of your Pi-hole LXC (192.168.1.5).

(Optional) Set Secondary DNS to 1.1.1.1 for a fallback if your lab goes down.
