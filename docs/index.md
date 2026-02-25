# :material-guitar-electric: :material-home-lightning-bolt-outline: Welcome to Mosh The Subnet

<div data-aos="zoom-in" data-aos-duration="800" align="center">
  <img src="assets/github_profile.png" alt="Skyler King" width="350" style="border-radius: 50%; margin: 30px 0; border: 4px solid #b84fff; box-shadow: 0 8px 24px rgba(184,79,255,0.4);">
</div>

<p>I'm <strong>Skyler King</strong>–a Cloud/Network Engineering student, homelab enthusiast, and emo/punk rock fan.</p>

<p>I document my journey from "it works on my machine" to enterprise-grade network engineering here. Whether it's breaking OSPF in the lab or fixing critical infrastructure in production, this is where I write it down.</p>

---

## ⚡ Current Status

**Role:** Pursuing Entry-Level Networking Roles  
**Focus:** Cisco Enterprise Networking, Automation, & Network Security  
**School:** WGU (B.S. Cisco, Cloud & Network Engineering)

---

## 🏆 Recent Wins

*Real-world problems I've solved:*

* **🚑 Critical Infrastructure Rescue:** Saved ~$15k in operational delays by diagnosing and fixing a critical IPsec VPN tunnel failure that had downed a production licensing server.
* **🛡️ Enterprise Network Segmentation:** Improved network performance by **30%** and eliminated VLAN 1 security vulnerabilities by migrating from a flat network to a secure, 7-VLAN architecture with dedicated management VLAN.
* **🚀 Rapid Site Deployment:** Built the IT infrastructure for a newly acquired office (25 workstations + conferencing) from zero to full operation in just **48 hours**.

---

## 🗒️ Certifications

*Validated skills. No paper tigers here.*

<div class="certifications-table" markdown>

| Badge | Certification | Date |
| :--- | :--- | :--- |
| **CLOUD+** | CompTIA Cloud+ | Dec 2025 |
| **CBROPS** | CCNA Cybersecurity | Jun 2025 |
| **CCNA** | Cisco Certified Network Associate | Feb 2025 |
| **ITIL 4** | ITIL Foundation | Jun 2024 |
| **LPI** | Linux Essentials | May 2024 |
| **A+** | CompTIA A+ | Mar 2024 |

</div>

---

## 🛠️ The Stack (Lab & Prod)

* **Hardware:** Cisco (Routers/Switches), Ubiquiti Unifi, Custom Proxmox Nodes
* **Software:** OPNsense, Docker, Splunk, Wireshark
* **Automation:** Python, Ansible, Terraform

---

```mermaid
graph TD
    Internet((Internet)) -->|WAN| PVE1
    
    subgraph PVE1 [Proxmox Node 1]
        OPNsense[OPNsense VM <br> Firewall/Router]
        DNS1[DNS 1]
    end

    Internet --> OPNsense
    OPNsense -.->|VLANs via Trunk| NetworkSegmentation
    
    subgraph NetworkSegmentation [Network Segmentation]
        VLAN10[VLAN 10 - Home]
        VLAN20[VLAN 20 - Malware]
        VLAN30[VLAN 30 - Lab]
        VLAN40[VLAN 40 - Servers]
        VLAN50[VLAN 50 - IoT]
        VLAN99[VLAN 99 - Management]
        VLAN999[VLAN 999 - Native]
    end

    OPNsense -->|Trunk Port <br> VLAN 999| CoreSwitch

    CoreSwitch[USW Pro Max 16 PoE <br> Distribution Switch]
    
    CoreSwitch -->|Trunk| PVE2
    
    subgraph PVE2 [Proxmox Node 2]
        DNS2[DNS 2 - LXC]
        Twingate[Twingate - LXC]
        Bookstack[Bookstack - LXC]
        MkDocs[MkDocs - LXC]
        TrueNAS[TrueNAS - VM]
        Docker1[Docker Host 1 - VM]
        Docker2[Docker Host 2 - VM]
        Docker3[Docker Host 3 - VM]
        Win11[Windows 11 - VM]
        HomeAssistant[Home Assistant - VM]
        Netbox[Netbox - VM]
        CML[Cisco CML - VM]
        Ollama[Ollama - VM]
        Kali[Kali Linux - VM]
        Parrot[Parrot OS - VM]
        SecurityOnion[Security Onion - VM]
        Podman[Podman Host - VM]
    end

    CoreSwitch --> CiscoSwitch[Cisco Catalyst 2960X]
    CiscoSwitch --> Pi[Raspberry Pi]
    
    CoreSwitch --> UnifiAP[Unifi AP]
    UnifiAP --> WiFi10((Routers of Rohan <br> VLAN 10))
    UnifiAP --> WiFi50((IoT <br> VLAN 50))

    CoreSwitch --> Workstation[Workstation]
    CoreSwitch --> NAS[NAS <br> Backup]

    %% Styling
    classDef firewall fill:#e51400,stroke:#B20000,stroke-width:2px,color:#fff;
    classDef switch fill:#fa6800,stroke:#C73500,stroke-width:2px;
    classDef cisco fill:#e51400,stroke:#B20000,stroke-width:2px,color:#fff;
    classDef proxmox fill:#f8f9fa,stroke:#333,stroke-width:2px,stroke-dasharray: 5 5;
    classDef pve2 fill:#1ba1e2,stroke:#006EAF,stroke-width:2px,color:#fff;
    classDef ap fill:#e1d5e7,stroke:#9673a6,stroke-width:2px;
    classDef vlan fill:#60a917,stroke:#2D7600,stroke-width:2px,color:#fff;
    classDef device fill:#cce5ff,stroke:#36393d,stroke-width:2px;
    classDef nas fill:#cdeb8b,stroke:#36393d,stroke-width:2px;
    classDef internet fill:#FFF9B2,stroke:#d6b656,stroke-width:2px;

    class OPNsense firewall;
    class CoreSwitch switch;
    class CiscoSwitch cisco;
    class PVE1,PVE2 proxmox;
    class DNS2,Twingate,Bookstack,MkDocs,TrueNAS,Docker1,Docker2,Docker3,Win11,HomeAssistant,Netbox,CML,Ollama,Kali,Parrot,SecurityOnion,Podman pve2;
    class UnifiAP ap;
    class NetworkSegmentation,VLAN10,VLAN20,VLAN30,VLAN40,VLAN50,VLAN99,VLAN999 vlan;
    class Workstation,Pi device;
    class NAS nas;
    class Internet internet;
```
---

## 🔥 Featured Projects

### Local AI Coding Agent (Ollama + Aider)

Deployed a fully localized, privacy-first AI coding assistant using Ollama and Aider to eliminate external API dependencies and subscription costs.

**Key Achievements:**

- Achieved 100% code privacy with an air-gapped, zero-cost LLM inference engine
- Provisioned a dedicated Ubuntu VM for resource-isolated AI workloads
- Integrated Aider CLI for seamless, terminal-based AI pair programming and automated Git commits
- Established secure API access controls across isolated network VLANs

[View Full Documentation →](projects/Local_AI_Coding_Agent.md){ .md-button .md-button--primary }

---

### VLAN Segmentation & Security Hardening

Redesigned my homelab network from an insecure flat configuration to a properly segmented architecture following industry best practices.

**Key Achievements:**

- Eliminated VLAN 1 security vulnerabilities
- Implemented secure native VLAN (999) to prevent VLAN hopping attacks
- Created dedicated management network (VLAN 99) for administrative access
- Deployed 7-VLAN architecture isolating home, malware analysis, homelab, servers, IoT, and management traffic

[View Full Documentation →](projects/VLAN_segmentation.md){ .md-button .md-button--primary }

---

[Read My Full Story](./bio.md){ .md-button .md-button--primary }
[Explore The Lab](./lab/overview.md){ .md-button }
[View All Projects](./projects/projects.md){ .md-button }

---

**Connect:**
[:fontawesome-brands-instagram: Instagram](https://instagram.com/moshthesubnet) · 
[:fontawesome-brands-linkedin: LinkedIn](https://www.linkedin.com/in/skylerkingnetwork) · 
[:fontawesome-brands-github: GitHub](https://github.com/moshthesubnet)
