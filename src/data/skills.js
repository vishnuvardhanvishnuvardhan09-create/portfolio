/**
 * Technical Skills Configuration for D Vishnu Vardhan
 * 
 * Edit this file to add or update technical skills, categories,
 * proficiency notes, or tags without touching layout or 3D rendering code.
 */

export const skillsData = [
  {
    id: "programming",
    category: "Programming",
    icon: "code",
    summary: "Foundational low-level systems programming and efficient data organization.",
    skills: [
      {
        name: "Embedded C",
        detail: "Memory management, bit manipulation, pointers, register-level hardware access, volatile qualifiers, and bare-metal programming.",
        level: "Core Focus"
      },
      {
        name: "Data Structures & Algorithms",
        detail: "Linked lists, circular buffers, stacks, queues, hash maps, sorting algorithms, and time/space complexity optimization.",
        level: "Foundational"
      }
    ],
    accent: "#35e0ff"
  },
  {
    id: "linux-internals",
    category: "Linux Internals",
    icon: "terminal",
    summary: "Operating system principles, kernel-space interfaces, and multitasking concurrency.",
    skills: [
      {
        name: "Processes & IPC",
        detail: "Process lifecycle (fork, exec, wait), signals, pipes, FIFOs, and shared memory communication.",
        level: "Intermediate"
      },
      {
        name: "POSIX Threads (pthreads)",
        detail: "Multi-threaded programming, thread lifecycle management, scheduling, and thread pools.",
        level: "Intermediate"
      },
      {
        name: "Synchronization Primitives",
        detail: "Mutexes, condition variables, semaphores, deadlock avoidance, and race condition mitigation.",
        level: "Intermediate"
      }
    ],
    accent: "#35e0ff"
  },
  {
    id: "networking",
    category: "Networking",
    icon: "network",
    summary: "Network protocol stacks, communication sockets, and embedded transmission.",
    skills: [
      {
        name: "TCP/IP Protocol Suite",
        detail: "Reliable stream sockets, 3-way handshake, flow control, congestion handling, and client-server architecture.",
        level: "Core"
      },
      {
        name: "UDP Protocol",
        detail: "Low-latency connectionless datagram sockets for real-time telemetry and streaming transmission.",
        level: "Core"
      }
    ],
    accent: "#35e0ff"
  },
  {
    id: "architecture",
    category: "Architecture",
    icon: "cpu",
    summary: "Hardware organization, computational execution units, and peripheral interfacing.",
    skills: [
      {
        name: "Computer Architecture",
        detail: "Instruction cycle, pipelining, cache memory hierarchies, interrupt handling, and bus protocols (I2C, SPI, UART).",
        level: "Advanced"
      },
      {
        name: "Microprocessors & MCUs",
        detail: "8085/8086 architectures, ARM Cortex basics, timer/counter subsystems, ADC/DAC interfacing, and GPIO manipulation.",
        level: "Core"
      }
    ],
    accent: "#ffb454"
  },
  {
    id: "hardware",
    category: "Hardware",
    icon: "pcb",
    summary: "Circuit board design, physical layout constraints, and hardware prototyping.",
    skills: [
      {
        name: "PCB Design",
        detail: "Schematic design, component footprints, track routing, ground planes, DRC checks, and Gerber generation for manufacture.",
        level: "Hands-on Workshop"
      }
    ],
    accent: "#ffb454"
  }
];
