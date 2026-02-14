---
title: Local AI Coding Agent (Ollama + Aider)
description: Deployment and configuration of a fully localized AI coding assistant using Ollama and Aider on Proxmox.
tags:
  - AI
  - Homelab
  - Ubuntu
  - Proxmox
---

# Local AI Coding Agent Project (Ollama + Aider)

## Project Overview
This project documents the design, deployment, and configuration of a fully localized AI coding assistant using Ollama as the inference engine and Aider as the command-line interface (CLI) agent, hosted on a dedicated Ubuntu Virtual Machine within the homelab environment.

## Executive Summary
Successfully migrated from cloud-dependent AI coding assistants (e.g., GitHub Copilot, OpenAI API) to a private, self-hosted LLM architecture. By provisioning an Ubuntu VM running Ollama and connecting it to Aider, this implementation achieves zero-cost inference, absolute code privacy, and a seamless terminal-based AI pair programming experience. 

---

## System Architecture

### Interactive Topology
```mermaid
graph LR
    %% Workstation
    subgraph DevEnv["VLAN 10 - Home"]
        Aider["Aider CLI Agent<br/>(Developer Workstation)"]
        Git["Local Git Repo"]
    end
    
    %% Homelab
    subgraph LabEnv["VLAN 30 - Homelab"]
        subgraph UbuntuVM["Ubuntu Server VM (10.30.X.50)"]
            Ollama["Ollama API<br/>(Port 11434)"]
            Models[("Local LLMs<br/>(DeepSeek, Qwen)")]
        end
    end

    %% Connections
    Aider <-->|Code Context / Prompts| Ollama
    Aider <-->|Reads/Edits/Commits| Git
    Ollama <-->|Loads| Models

    %% Styling
    classDef vlan fill:#121212,stroke:#4fd1c5,stroke-dasharray: 5 5,color:#eeeeee
    classDef device fill:#234e52,stroke:#4fd1c5,stroke-width:2px,color:#e6fffa
    classDef service fill:#44337a,stroke:#b794f4,stroke-width:2px,color:#faf5ff
    classDef storage fill:#5f370e,stroke:#f6ad55,stroke-width:2px,color:#ffffff
    
    class DevEnv,LabEnv vlan
    class Aider,Git,UbuntuVM device
    class Ollama service
    class Models storage
