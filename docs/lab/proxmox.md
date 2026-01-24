# 🛡️ Proxmox Virtualization Environment

This is the "brain" of my homelab. I use Proxmox VE to host everything from core network services to experimental Python environments.

---

## 🖥️ The Hardware
I currently run 2 proxmox nodes (not in a cluster). One is mainly for hosting my virtualized firewall, the second is for Ubuntu/Rocky linux VMs and Docker/Podman containers.

* **Primary Host:** Intel Core i5-13600K
* **Resources:** 128GB DDR5
* **Storage:** Local LVM pool for VM disks + Synology NFS share for backups
* **Secondary Host:** Custom build: Intel N150; Rack Mounted Case;
* **Resources:** 16GB DDR4
* **Storage:** Local LVM pool for VM disks + Synology NFS share for backups

---

## 🐳 Docker Consolidation Project
I recently optimized my container strategy. Originally, I was spread across three separate Ubuntu VM Docker hosts. To reduce overhead and simplify management, I consolidated down to a **2-node Docker cluster**.

* **Runtime:** Docker Engine (I used to use Portainer, but now I just manage containers through the terminal mainly)
* **Storage:** Persistent data is mapped via NFS shares to my TrueNAS/Synology instances.
* **Key Services:**
    * **n8n:** Handling all my Telegram-to-Google Calendar automations.
    * **Home Assistant:** Smart home orchestration.
    * **Pi-hole:** Network-wide DNS filtering.

---

## 🌐 Networking & VLANs
The Proxmox host is trunked to my **UniFi switch**, allowing me to assign specific VMs to isolated VLANs.

| VLAN ID | Name | Purpose |
| :--- | :--- | :--- |
| 10 | Home | All end user devices go here
| 20 | Malware | Cybersecurity playground, test Kali Linux and other pentest tools |
| 30 | Lab | Test different operating systems |
| 40 | Servers | All Ubuntu/Rocky Linux VMs live here |
| 50 | IoT | All smart devices go here
| 99 | Management | Proxmox GUI, Switch, and AP access |
| 999 | Native | Sink hole VLAN instead of VLAN 1

---

## 🛠️ Current Projects & "To-Do"
* [ ] Implement **Terraform** to spin up/down Ubuntu VMs automatically.
* [ ] Automate Proxmox backups to an offsite S3 bucket.

---

> **Note:** Documentation is a living breathing thing. As I scale from 2 Docker hosts to more (or less!), I update these specs to reflect the current state of "The Subnet."
