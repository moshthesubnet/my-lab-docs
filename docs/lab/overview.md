# 🗺️ Lab Overview

Welcome to the heart of **The Subnet**. My homelab is a hybrid environment designed for high-availability services, network experimentation, and professional development.

The primary goal of this lab is to mirror enterprise-grade networking and virtualization in a residential setting, providing a safe "sandbox" to test configurations before they ever reach a production environment.

---

## 🏗️ High-Level Architecture
My lab is built on three core pillars:

1. **Virtualization:** A Proxmox VE 2 node setup managing compute resources.
2. **Infrastructure:** A OPNsense and UniFi-powered backbone with dedicated VLAN segmentation.
3. **Automation:** A "self-healing" mindset using n8n, Python and Bash to handle repetitive tasks.

---

## 🔌 Hardware Inventory
| Component | Device | Role |
| :--- | :--- | :--- |
| **Gateway** | OPNsense VM | Main Router & Firewall |
| **Switching** | UniFi Managed Switch | Layer 2/3 Backbone |
| **Wireless** | UniFi U7 Pro | High-speed Wi-Fi 7 Connectivity |
| **Compute** | Proxmox Node(s) | Hosting VMs and Docker Clusters |
| **Storage** | TrueNAS Scale/Synology | Centralized Data & Backups |

---

## 📡 Networking Philosophy

I treat my home network like a mini-enterprise. This means:

* **Zero-Trust (Mostly):** I isolate IoT and Lab devices from my "Trusted" personal data to reduce the attack surface.
* **Static Everything:** Core infrastructure (Servers, Switches, APs) is assigned static IPs outside of the DHCP pool for reliability.
* **Documentation First:** If it isn't documented here, it doesn't exist.

---

## 🛠️ Current Tech Stack

These are the tools I am currently "moshing" with:

* **Languages:** Python (Learning/Scripting), YAML (Automation)
* **Platforms:** n8n, Docker, Proxmox, Podman
* **Network Protocols:** OSPF, VLAN (802.1Q), DHCP, DNS
* **Monitoring:** Uptime Kuma
  
---

## 📈 Recent Updates
* **Jan 2026:** Fully adopted the **U7 Pro** Access Point for Wi-Fi 7 testing.
* **Jan 2026:** Migrated and consolidated Docker infrastructure for better resource management.
* **Dec 2025:** Completed the "3-Part Subnetting" educational series for Instagram.

---

> "The lab is never finished. It only evolves."
