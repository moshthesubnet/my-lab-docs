# :material-guitar-electric: :material-home-lightning-bolt-outline: Welcome to Mosh The Subnet 

<div align="center">
  <img src="assets/github_profile.png" alt="Skyler King" width="350" style="border-radius: 50%; margin: 30px 0; border: 4px solid #b84fff; box-shadow: 0 8px 24px rgba(184,79,255,0.4);">
</div>

I'm **Skyler King**—a Cloud/Network Engineering student, homelab enthusiast, and emo/punk rock fan.

I document my journey from "it works on my machine" to enterprise-grade network engineering here. Whether it's breaking OSPF in the lab or fixing critical infrastructure in production, this is where I write it down.

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

## 📜 Certifications

*Validated skills. No paper tigers here.*

| Badge | Certification | Date |
| :--- | :--- | :--- |
| **CLOUD+** | CompTIA Cloud+ | Dec 2025 |
| **CBROPS** | CCNA Cybersecurity | Jun 2025 |
| **CCNA** | Cisco Certified Network Associate | Feb 2025 |
| **ITIL 4** | ITIL Foundation | Jun 2024 |
| **LPI** | Linux Essentials | May 2024 |
| **A+** | CompTIA A+ | Mar 2024 |

---

## 🛠️ The Stack (Lab & Prod)

* **Hardware:** Cisco (Routers/Switches), Ubiquiti Unifi, Custom Proxmox Nodes
* **Software:** OPNsense, Docker, Splunk, Wireshark
* **Automation:** Python, Ansible, Terraform


<div class="mermaid-container" markdown="block">
  
```mermaid
%%{init: {'themeVariables': { 'fontSize': '18px'}}}%%
graph TB
    %% Internet and Edge
    Internet([Internet])
    
    %% Proxmox Host containing OPNsense
    subgraph ProxmoxNode1["Proxmox Node 1"]
        OPNsense["OPNsense VM<br/>Firewall/Router"]
        Pihole1["DNS 1"]
    end
    
    %% Main Switch
    MainSwitch["USW Pro Max 16 PoE"]
    
    %% VLANs
    subgraph VLANs["Network Segmentation"]
        VLAN10["VLAN 10 - Home"]
        VLAN20["VLAN 20 - Malware"]
        VLAN30["VLAN 30 - Lab"]
        VLAN40["VLAN 40 - Servers"]
        VLAN50["VLAN 50 - IoT"]
        VLAN99["VLAN 99 - Management"]
        VLAN999["VLAN 999 - Native"]
    end
    
    %% Trunk Connection
    LabSwitch["Cisco Catalyst 2960X"]
    
    %% Physical Devices
    AP["Unifi AP"]
    PC["Workstation"]
    NAS["NAS"]
    RP["Raspberry Pi"]
    
    %% Proxmox Node 2 with VMs/LXCs
    subgraph ProxmoxNode2["Proxmox Node 2"]
        Pihole2["DNS 2 - LXC"]
        TwinGate["Twingate - LXC"]
        BookstackVM["Bookstack - LXC"]
        MkDocsVM["MkDocs - LXC"]
        TrueNAS["TrueNAS - VM"]
        Dockerhost1["Docker Host 1 - VM"]
        Dockerhost2["Docker Host 2 - VM"]
        Dockerhost3["Docker Host 3 - VM"]
        Win11["Windows 11 - VM"]
        HomeAssistant["Home Assistant - VM"]
        Netbox["Netbox - VM"]
        CML["Cisco CML - VM"]
        Ollama["Ollama - VM"]
        Kali["Kali Linux - VM"]
        Parrot["Parrot OS - VM"]
        SecurityOnion["Security Onion - VM"]
        Podmanhost1["Podman Host - VM"]
    end
    
    %% Connections Flow
    Internet --> OPNsense
    OPNsense --> MainSwitch
    MainSwitch -.->|Carries All VLANs| VLANs
    MainSwitch -->|Trunk Port| LabSwitch
    
    %% Device Connections
    MainSwitch --> AP
    MainSwitch --> PC
    MainSwitch --> NAS
    MainSwitch --> ProxmoxNode2
    LabSwitch --> RP

    %% ==========================================
    %% DARK THEME STYLING
    %% ==========================================

    %% Class Definitions
    classDef internet fill:#1a365d,stroke:#63b3ed,stroke-width:2px,color:#ffffff
    classDef firewall fill:#742a2a,stroke:#fc8181,stroke-width:2px,color:#ffffff
    classDef switch fill:#276749,stroke:#68d391,stroke-width:2px,color:#ffffff
    classDef vlanbox fill:#234e52,stroke:#4fd1c5,stroke-width:1px,color:#e6fffa
    classDef device fill:#5f370e,stroke:#f6ad55,stroke-width:2px,color:#ffffff
    classDef virtual fill:#44337a,stroke:#b794f4,stroke-width:1px,color:#faf5ff

    %% Apply Classes to Nodes
    class Internet internet
    class OPNsense,Pihole1 firewall
    class MainSwitch,LabSwitch switch
    class VLAN10,VLAN20,VLAN30,VLAN40,VLAN50,VLAN99,VLAN999 vlanbox
    class AP,PC,NAS,RP device
    class Pihole2,TwinGate,BookstackVM,MkDocsVM,TrueNAS,Dockerhost1,Dockerhost2,Dockerhost3,Win11,HomeAssistant,Netbox,CML,Ollama,Kali,Parrot,SecurityOnion,Podmanhost1 virtual

    %% Subgraph (Container) Styling
    style ProxmoxNode1 fill:#1e1e1e,stroke:#555555,color:#eeeeee,stroke-dasharray: 5 5
    style ProxmoxNode2 fill:#1e1e1e,stroke:#555555,color:#eeeeee,stroke-dasharray: 5 5
    style VLANs fill:#121212,stroke:#4fd1c5,color:#eeeeee,stroke-dasharray: 5 5
```

</div>

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
