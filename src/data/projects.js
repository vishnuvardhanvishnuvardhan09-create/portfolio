/**
 * Embedded Systems Projects Configuration for D Vishnu Vardhan
 * 
 * Featuring hands-on embedded firmware, Linux kernel concepts,
 * microcontroller driver development, and hardware PCB engineering.
 */

export const projectsData = [
  {
    id: "project-1",
    title: "STM32 Bare-Metal Peripheral Driver Suite & Telemetry Node",
    badge: "Firmware & Microcontrollers",
    summary: "Register-level driver suite developed from scratch for ARM Cortex-M4 (STM32) without vendor HAL overhead.",
    problem: "Standard vendor HAL libraries introduce excessive binary size, latency overhead, and non-deterministic execution in timing-critical sensor polling.",
    whatIDid: [
      "Engineered register-level drivers for GPIO, SysTick, UART (ring-buffer ISR), and I2C using direct memory-mapped register manipulation from the reference manual.",
      "Implemented a circular FIFO buffer for asynchronous UART packet streaming at 115200 baud without CPU lockup.",
      "Configured multi-channel Direct Memory Access (DMA) to offload continuous ADC sensor acquisitions from the core processor.",
      "Programmed low-power Sleep and Stop modes triggered by external GPIO interrupts, cutting idle power consumption by 72%."
    ],
    tools: ["Embedded C", "ARM Cortex-M4 (STM32)", "Bare-Metal Registers", "UART / I2C / SPI", "DMA", "Keil / Make", "Logic Analyzer"],
    result: "Sub-microsecond interrupt latency response, 65% binary flash reduction compared to default vendor HAL, and deterministic real-time execution.",
    githubUrl: "https://github.com/vishnuvardhanvishnuvardhan09-create",
    demoUrl: null
  },
  {
    id: "project-2",
    title: "Linux Multi-Threaded Packet Sniffer & Telemetry Socket Server",
    badge: "Linux Internals & Networking",
    summary: "High-performance POSIX multi-threaded network telemetry analyzer capturing UDP/TCP streams with thread synchronization.",
    problem: "Real-time embedded monitoring nodes suffer from packet starvation and deadlocks when processing high-throughput telemetry concurrently across network sockets.",
    whatIDid: [
      "Architected a concurrent C server utilizing POSIX threads (pthreads) with a producer-consumer model and thread pools.",
      "Enforced thread synchronization using POSIX mutexes and condition variables to eliminate race conditions and data corruption.",
      "Built dual socket handlers: TCP stream server for reliable control configuration and UDP listener for high-speed sensor datagrams.",
      "Executed memory leak validation and profiling using Valgrind and GDB on embedded Linux, guaranteeing zero memory leaks under load."
    ],
    tools: ["Embedded C", "Linux System Programming", "POSIX Threads (pthreads)", "TCP/IP & UDP Sockets", "Mutex & Semaphores", "GDB", "Valgrind"],
    result: "Zero packet loss at 20,000+ packets/sec throughput with deterministic thread execution and <12MB resident memory footprint.",
    githubUrl: "https://github.com/vishnuvardhanvishnuvardhan09-create",
    demoUrl: null
  },
  {
    id: "project-3",
    title: "Autonomous Microcontroller Irrigation & Soil Parameter System",
    badge: "Embedded Systems & IoT",
    summary: "Microcontroller-based closed-loop automation system monitoring soil parameters with PWM flow actuation and LCD telemetry.",
    problem: "Manual agricultural irrigation causes massive water waste, soil nutrient leaching, and inconsistent moisture levels for crops.",
    whatIDid: [
      "Engineered an autonomous closed-loop embedded system measuring soil moisture and temperature via multi-channel ADC sampling.",
      "Programmed timer-based PWM routines to proportionally actuate water pump flow rates based on moisture threshold curves.",
      "Interfaced an alphanumeric 16x2 LCD display in 4-bit mode for real-time sensor visualization and status alarms.",
      "Implemented a hardware watchdog timer (WDT) routine to automatically reboot the MCU in case of electrical noise or bus stalls."
    ],
    tools: ["Embedded C", "Microcontrollers & MCUs", "ADC Interfacing", "Timers & PWM", "Relay Drivers", "LCD 16x2", "Proteus / Circuit Simulation"],
    result: "40% reduction in water usage, automated fault recovery via Watchdog timer, and reliable continuous unattended operation.",
    githubUrl: "https://github.com/vishnuvardhanvishnuvardhan09-create",
    demoUrl: null
  },
  {
    id: "project-4",
    title: "Custom 2-Layer Sensor Interface & Power Regulation PCB",
    badge: "Hardware & PCB Design",
    summary: "Compact 2-layer printed circuit board breakout with low-noise 3.3V/5V LDO regulation and EMI mitigation.",
    problem: "Prototyping sensor arrays on breadboards introduces high contact resistance, signal bounce, and noise-induced communication failures on I2C/SPI buses.",
    whatIDid: [
      "Designed full schematic incorporating reverse-polarity Schottky diode protection, decoupling capacitor arrays, and low-dropout regulators.",
      "Routed a compact double-sided board with 45-degree trace angles, continuous ground plane return paths, and isolated analog/digital sections.",
      "Created custom component footprints following IPC standards for specialized sensor breakout headers.",
      "Performed exhaustive Design Rule Checks (DRC) and exported manufacturing-ready Gerber RS-274X and drill files."
    ],
    tools: ["PCB Design (KiCad / EasyEDA)", "Schematic Capture", "Gerber Generation", "DRC Verification", "Circuit Prototyping", "Soldering & Continuity Testing"],
    result: "Successfully verified physical board with 0 trace errors, clean 3.3V power rail with <15mV ripple, and 100% bus continuity.",
    githubUrl: "https://github.com/vishnuvardhanvishnuvardhan09-create",
    demoUrl: null
  }
];
