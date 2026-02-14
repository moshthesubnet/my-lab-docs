# :material-guitar-electric: :material-home-lightning-bolt-outline: Welcome to Mosh The Subnet 

<div align="center">
  <img src="assets/github_profile.png" alt="Skyler King" width="350" style="border-radius: 50%; margin: 30px 0; border: 4px solid #b84fff; box-shadow: 0 8px 24px rgba(184,79,255,0.4);">
</div>

I'm **Skyler King**—a Network Support Specialist, homelab enthusiast, and emo/punk rock fan.

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
graph TB
    %% Internet and Edge
    Internet([Internet])
    
    %% Proxmox Host containing OPNsense
    subgraph ProxmoxNode1["Proxmox Node 1"]
        OPNsense["OPNsense VM<br/>Firewall/Router"]
    end
    
    %% Main Switch
    MainSwitch["USW Pro Max 16 PoE"]
    
    %% VLANs
    subgraph VLANs["Network Segmentation"]
        VLAN10["VLAN 10 - Home"]
        VLAN20["VLAN 20 - Homelab"]
        VLAN30["VLAN 30 - Servers"]
        VLAN40["VLAN 40 - IoT"]
        VLAN50["VLAN 50 - Malware Analysis"]
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
    
    %% Styling - Internet and Edge
    style Internet fill:#4a90e2,stroke:#2e5f8a,color:#fff
    
    %% Styling - Proxmox Nodes
    style ProxmoxNode1 fill:#f5f5f5,stroke:#999,color:#333
    style OPNsense fill:#ff6b6b,stroke:#cc5555,color:#fff
    
    style ProxmoxNode2 fill:#f5f5f5,stroke:#999,color:#333
    
    %% Styling - VLANs
    style VLANs fill:#fff9e6,stroke:#e6d699,color:#333
    style VLAN10 fill:#e3f2fd,stroke:#90caf9,color:#333
    style VLAN20 fill:#e3f2fd,stroke:#90caf9,color:#333
    style VLAN30 fill:#e3f2fd,stroke:#90caf9,color:#333
    style VLAN40 fill:#e3f2fd,stroke:#90caf9,color:#333
    style VLAN50 fill:#e3f2fd,stroke:#90caf9,color:#333
    style VLAN99 fill:#e3f2fd,stroke:#90caf9,color:#333
    style VLAN999 fill:#e3f2fd,stroke:#90caf9,color:#333
    
    %% Styling - Switches
    style MainSwitch fill:#80deea,stroke:#4dd0e1,color:#333
    style LabSwitch fill:#80deea,stroke:#4dd0e1,color:#333
    
    %% Styling - Physical Devices
    style AP fill:#37474f,stroke:#263238,color:#fff
    style PC fill:#37474f,stroke:#263238,color:#fff
    style NAS fill:#37474f,stroke:#263238,color:#fff
    style RP fill:#37474f,stroke:#263238,color:#fff
    
    %% Styling - VMs and LXCs
    style Pihole2 fill:#e8eaf6,stroke:#9fa8da,color:#333
    style TwinGate fill:#e8eaf6,stroke:#9fa8da,color:#333
    style BookstackVM fill:#e8eaf6,stroke:#9fa8da,color:#333
    style MkDocsVM fill:#e8eaf6,stroke:#9fa8da,color:#333
    style TrueNAS fill:#e8eaf6,stroke:#9fa8da,color:#333
    style Dockerhost1 fill:#e8eaf6,stroke:#9fa8da,color:#333
    style Dockerhost2 fill:#e8eaf6,stroke:#9fa8da,color:#333
    style Dockerhost3 fill:#e8eaf6,stroke:#9fa8da,color:#333
    style Win11 fill:#e8eaf6,stroke:#9fa8da,color:#333
    style HomeAssistant fill:#e8eaf6,stroke:#9fa8da,color:#333
    style Netbox fill:#e8eaf6,stroke:#9fa8da,color:#333
    style CML fill:#e8eaf6,stroke:#9fa8da,color:#333
    style Ollama fill:#e8eaf6,stroke:#9fa8da,color:#333
    style Kali fill:#e8eaf6,stroke:#9fa8da,color:#333
    style Parrot fill:#e8eaf6,stroke:#9fa8da,color:#333
    style SecurityOnion fill:#e8eaf6,stroke:#9fa8da,color:#333
    style Podmanhost1 fill:#e8eaf6,stroke:#9fa8da,color:#333
```

</div>

---

## 🔥 Featured Project

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
