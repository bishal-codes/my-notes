# OSI (Open System Interconnection) Model

The OSI model is a conceptual framework that standardizes the functions of a telecommunication or computing system into seven abstraction layers. It helps in understanding how data flows from one computer to another over a network.

The seven layers of the OSI model are:

1. **Physical Layer (Layer 1):**

   - The physical layer deals with the physical connection between devices.
   - It defines the hardware and transmission media used to transmit data.
   - Examples include cables, switches, and network interface cards (NICs).
     - x-base-t: x is the speed of the connection. 10, 100, 1000, 10000. Base is the encoding scheme. T is twisted pair.

2. **Data Link Layer (Layer 2):**

   - The data link layer establishes and terminates connections between devices.
   - It ensures data integrity and error detection.
   - Examples include Ethernet switches and wireless access points.

3. **Network Layer (Layer 3):**

   - The network layer routes data packets between devices on different networks.
   - It uses logical addressing (IP addresses) to identify devices.
   - Examples include routers and Layer 3 switches.

4. **Transport Layer (Layer 4):**

   - The transport layer ensures reliable data delivery between devices.
   - It provides error detection and correction mechanisms.
   - Examples include TCP and UDP protocols.

5. **Session Layer (Layer 5):**

   - The session layer establishes, maintains, and terminates connections between devices.
   - It manages sessions and dialogues between applications.
   - Examples include NetBIOS and RPC.

6. **Presentation Layer (Layer 6):**

   - The presentation layer translates data into a format that applications can understand.
   - It handles data encryption, compression, and formatting.
   - Examples include SSL and JPEG.

7. **Application Layer (Layer 7):**
   - The application layer provides network services directly to end-users.
   - It includes protocols for email, file transfer, and web browsing.
   - Examples include HTTP, SMTP, and FTP.
