# Networking Protocols

- sets of rules and conventions that govern communication between devices on a network.

Examples:

    - TCP/IP (Transmission Control Protocol/Internet Protocol),
    - UDP (User Datagram Protocol),
    - SMTP: Simple Mail Transfer Protocol is used for sending email messages between mail servers,
    - HTTP (Hypertext Transfer Protocol): used for web communication, enabling the transfer of HTML pages, images, and other resources.,
    - HTTPS (HTTP Secure), FTP (File Transfer Protocol): encrypted version of HTTP that adds a layer of security through SSL/TLS encryption,
    - DNS (Domain Name System): is responsible for resolving domain names to IP addresses,
    - FTP: File Transfer Protocol is used for transferring files between hosts on a network,qw and
    - ICMP (Internet Control Message Protocol).

`Hands-on Lab`: Set up a simple TCP/IP-based client-server communication using sockets in a programming language like Python or Java.

## TCP/IP

- foundational protocol suite of the internet and
- consists of multiple protocols, such as IP, TCP, and UDP, that handle tasks such as addressing, routing, and reliable data delivery.

### IP Addressing

An IP address is a `unique numerical identifier` assigned to each device connected to a network.
IP addresses can be of two types:

        - IPv4 (32-bit) and
        - IPv6 (128-bit).

However, IPv4 is still predominantly used. An IPv4 address is typically represented in `dotted-decimal notation` (e.g., 192.168.0.1).

- IPv6 addresses have a longer, hexadecimal representation (e.g.,2001:0db8:85a3:0000:0000:8a2e:0370:7334).
- Private IP addresses are reserved for internal networks (e.g., 192.168.x.x).
- Public IP addresses are used for devices accessible over the internet.

IP addresses are divided into `network and host portions`. The network portion identifies the network, while the host portion identifies the specific device on that network.
For example, consider the IP address 192.168.1.10. Here, 192.168.1 represents the network portion, and 10 represents the host portion.

`Hands-on Lab`: Configure IP addresses for different devices in a small network and ensure they can communicate with each other.

## Subnetting:

`Subnetting` is the process of dividing a network into smaller subnetworks or subnets.

- It allows efficient utilization of IP addresses and enables better network management and security.
- Subnetting involves borrowing bits from the host portion of an IP address to create subnets

For example, by subnetting a network with a 24-bit subnet mask, you can create smaller subnets with different network addresses within that larger network.

`Hands-on Lab`: Subnet a network into multiple subnets and configure appropriate subnet masks on devices to enable communication between subnets.

## Network Devices:

Network devices are hardware or software components that facilitate communication and connectivity in a network.

- `Routers` connect multiple networks together and determine the optimal path for data transmission.
- `Switches` connect devices within a local network and facilitate data exchange at the data-link layer (Layer 2).
- `Hubs`, although less common today, are simple devices that pass incoming data packets to all connected devices on a network.
- `Firewalls` enforce security policies by controlling network traffic and filtering out unauthorized access attempts.
- `Load balancers` distribute network traffic across multiple servers or resources to optimize performance and ensure high availability.

`Hands-on Lab`: Set up a network using routers, switches, and firewalls, configure IP addresses on devices, and establish connectivity between them.

## Hands-on-Lab

- Set up a server on vmware.

  - Grab a free copy of windows server 2022 iso on Microsoft. It's good for 180 days.
  - Rename the server to DC whatever you want. DC means domain controller.
  - Install Active directory on roles and features.
  - Configure DNS Server role
  - Add DHCP service
  - Enable remote desktop
  - Restart your computer

- Next. Get a copy of windows 10 iso for free through Microsoft. Throw that iso on another vm using vmware.
- Join that pc to the domain.

You now created a work environment.

- Create a bunch of users accounts on active directory.
- Create a few organizational units on the active directory.
- Login as a user on windows 10.
- Create a shared folder and mapped the drive to xyz user.

Replicate Real life tech issues.

- Go to group policy and change the account threshold.
- Replicate a user locked out scenario. Replicate password reset. Replicate adding someone to a security group.

You now learned about active directory, account creation, password reset, unlocking accounts and troubleshoot share folder issues.

- Grab servicenow or Jira online for free.
- Create troubleshoot tickets like a user and learn how to close tickets.

- Grab office 365 using office365 developer program and create user accounts.
- Install windows 10 on the worker/employee workstation.
- Learn office 365 products like word, excel, outlook, powerpoint.
- Learn how to troubleshoot add ins and how to open files in safe mode.
- Learn how to recover missing documents.
- Learn how to create mailboxes on office 365 admin console.
- Learn how to make distribution groups.

## Hands-on Lab-1:

To gain practical experience in networking basics, you can set up a simple network using virtualization software like VirtualBox and create virtual machines to simulate devices. Here's a hands-on lab example:

Set up three virtual machines (VMs) using VirtualBox: VM1, VM2, and VM3.

Configure the network adapter settings of each VM to use the "Bridged Adapter" mode, enabling them to have their own IP addresses and network connectivity.

Assign IP addresses to each VM:

    - VM1: IP address 192.168.1.10, subnet mask 255.255.255.0
    - VM2: IP address 192.168.1.20, subnet mask 255.255.255.0
    - VM3: IP address 192.168.1.30, subnet mask 255.255.255.0

Ping the IP addresses of VM2 and VM3 from VM1 to test connectivity using the ICMP protocol:

On VM1, open a terminal or command prompt and type: ping 192.168.1.20 and ping 192.168.1.30. You should receive successful responses if the connectivity is established.
Experiment with subnetting by creating smaller subnets within the network:

Change the subnet mask on VM1 to 255.255.255.128 (which creates a subnet with two host addresses).
Adjust the IP addresses and subnet masks of VM2 and VM3 accordingly to fit within the new subnet.

## Hands-on Lab-2

**Objective:** Configure a small network with subnetting and test connectivity between devices.

Requirements:

- Routers
- Switches
- Ethernet cables
- PCs or laptops

Steps:

- Plan your network topology, including the number of subnets and devices required.
- Configure IP addresses and subnet masks for each subnet on the routers.
- Connect the devices using switches and cables according to the planned topology.
- Verify connectivity between devices within the same subnet and between different subnets.
- Test connectivity with ping or other network diagnostic tools.
- Troubleshoot and resolve any connectivity issues.

## Subnetting Lab:

`Objective:` Practice subnetting a network into smaller subnets.

Steps:

- Take a network address, e.g., 192.168.0.0/24, and determine the number of subnets and hosts required.
- Calculate the subnet mask length required based on the number of subnets and hosts.
- Divide the network into subnets by applying the subnet mask to the IP address range.
- Assign IP addresses to devices in each subnet and ensure they fall within the subnet range.

## Hands-on Lab - Packet Capture and Analysis:

`Objective:` Capture and analyze network traffic using a packet capture tool like Wireshark.

- Use packet capture tools like Wireshark or tcpdump to capture network traffic.
- Analyze captured packets to understand protocols, examine source and destination IP addresses, observe packet payloads, and identify potential network issues or security vulnerabilities.
- Hands-on Lab: Capture and analyze network packets in a test environment to observe various network protocols, analyze IP addresses, and gain insights into network traffic patterns.

Steps:

- Install Wireshark on your computer.
- Start a packet capture on a network interface (e.g., Wi-Fi or Ethernet).
- Perform various actions, such as visiting a website or pinging another device, while the capture is active.
- Stop the capture and analyze the captured packets to understand the underlying network protocols, source, and destination addresses, and other relevant information.
