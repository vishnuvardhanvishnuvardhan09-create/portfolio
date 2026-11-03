/**
 * High-End Futuristic Holographic 3D Cyber-Silicon Quantum Core
 * For D Vishnu Vardhan - Embedded Systems Engineer Portfolio
 * 
 * Features:
 * - Floating 32-bit Silicon MCU Core with laser-etched circuits and emissive die glow
 * - 3 Concentric Gyroscopic Orbital Data Rings rotating with harmonic physics
 * - Satellite Peripheral Registers (GPIO, UART, SPI, DMA, I2C) orbiting in 3D space
 * - Volumetric Particle Cloud simulating real-time embedded data flow (300+ particles)
 * - Interactive Mouse Tilt & Orbit with smooth damping
 * - Interactive Click Shockwave Pulse: Spawns glowing energy ripples on mouse click!
 * - Automatic visibility pause, reduced-motion compliance, and mobile optimization
 */

import * as THREE from 'three';

export class PCBScene {
  constructor(containerElement, loadingElement) {
    this.container = containerElement;
    this.loader = loadingElement;
    this.animationFrameId = null;
    this.isTabVisible = true;
    this.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.isMobile = window.innerWidth < 768;

    this.mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    this.time = 0;
    this.shockwaves = [];

    this.init();
  }

  init() {
    // 1. Scene setup
    this.scene = new THREE.Scene();

    // 2. Camera setup
    const width = this.container.clientWidth || window.innerWidth;
    const height = this.container.clientHeight || window.innerHeight;
    this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    this.camera.position.set(0, 0, 16);

    // 3. Renderer setup
    this.renderer = new THREE.WebGLRenderer({
      antialias: !this.isMobile,
      alpha: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.35;

    this.container.appendChild(this.renderer.domElement);

    // 4. Main Object Group
    this.mainGroup = new THREE.Group();
    this.scene.add(this.mainGroup);

    // 5. Lighting Setup
    this.setupLighting();

    // 6. Geometries
    this.buildSiliconCore();
    this.buildOrbitalRings();
    this.buildPeripheralNodes();
    this.buildParticleCloud();
    this.buildHolographicGrid();

    // 7. Event listeners
    this.setupEventListeners();

    // 8. Dismiss loader smoothly
    if (this.loader) {
      this.loader.classList.add('loaded');
      setTimeout(() => {
        if (this.loader && this.loader.parentNode) {
          this.loader.parentNode.removeChild(this.loader);
        }
      }, 500);
    }

    // 9. Start render loop
    this.animate = this.animate.bind(this);
    this.animate();
  }

  setupLighting() {
    // Ambient dark navy glow
    const ambientLight = new THREE.AmbientLight(0x0a1628, 2.0);
    this.scene.add(ambientLight);

    // Cyan core point light
    this.corePointLight = new THREE.PointLight(0x35e0ff, 5.0, 25);
    this.corePointLight.position.set(0, 0, 0);
    this.mainGroup.add(this.corePointLight);

    // Amber secondary rim light
    this.amberLight = new THREE.PointLight(0xffb454, 3.5, 20);
    this.amberLight.position.set(6, 4, 5);
    this.scene.add(this.amberLight);

    // Violet accent light for high-tech cyberpunk depth
    const violetLight = new THREE.PointLight(0x8b5cf6, 3.0, 20);
    violetLight.position.set(-6, -4, 4);
    this.scene.add(violetLight);

    // Key Directional Light
    const dirLight = new THREE.DirectionalLight(0xdcf8ff, 2.0);
    dirLight.position.set(5, 10, 8);
    this.scene.add(dirLight);
  }

  buildSiliconCore() {
    this.coreGroup = new THREE.Group();

    // 1. Central Microprocessor Die (Beveled Octagonal Box)
    const coreGeo = new THREE.BoxGeometry(3.4, 3.4, 0.9);
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: 0x08101e,
      roughness: 0.15,
      metalness: 0.85,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      reflectivity: 0.9
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    this.coreGroup.add(coreMesh);

    // 2. Laser-Embossed Canvas Texture on top and bottom face
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    // Dark silicon base
    ctx.fillStyle = '#060d19';
    ctx.fillRect(0, 0, 512, 512);

    // Golden Circuit Borders
    ctx.strokeStyle = '#ffb454';
    ctx.lineWidth = 5;
    ctx.strokeRect(30, 30, 452, 452);

    // Cyan Inner Circuit Ring
    ctx.strokeStyle = '#35e0ff';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(256, 256, 170, 0, Math.PI * 2);
    ctx.stroke();

    // Corner Alignment Marks
    ctx.fillStyle = '#ffb454';
    ctx.fillRect(40, 40, 24, 24);
    ctx.fillRect(448, 40, 24, 24);
    ctx.fillRect(40, 448, 24, 24);
    ctx.fillRect(448, 448, 24, 24);

    // Die Labels
    ctx.textAlign = 'center';
    ctx.fillStyle = '#35e0ff';
    ctx.font = 'bold 36px monospace';
    ctx.fillText('DV-EMBEDDED', 256, 175);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 44px sans-serif';
    ctx.fillText('ARM CORTEX-M4', 256, 240);

    ctx.fillStyle = '#ffb454';
    ctx.font = '22px monospace';
    ctx.fillText('32-BIT RISC • 168MHz', 256, 300);
    ctx.fillStyle = '#8ea4c8';
    ctx.fillText('VISHNU VARDHAN CORE', 256, 345);

    const dieTexture = new THREE.CanvasTexture(canvas);
    dieTexture.colorSpace = THREE.SRGBColorSpace;

    const labelGeo = new THREE.PlaneGeometry(3.2, 3.2);
    const labelMat = new THREE.MeshStandardMaterial({
      map: dieTexture,
      roughness: 0.2,
      metalness: 0.7,
      emissive: 0x112845,
      emissiveIntensity: 0.4
    });

    // Front label
    const frontLabel = new THREE.Mesh(labelGeo, labelMat);
    frontLabel.position.z = 0.46;
    this.coreGroup.add(frontLabel);

    // Back label
    const backLabel = frontLabel.clone();
    backLabel.rotation.y = Math.PI;
    backLabel.position.z = -0.46;
    this.coreGroup.add(backLabel);

    // 3. Metallic Gull-Wing Pins on 4 sides (QFP Package)
    const pinsPerSide = 8;
    const pinGeo = new THREE.BoxGeometry(0.12, 0.08, 0.4);
    const pinMat = new THREE.MeshStandardMaterial({
      color: 0xd4e4f5,
      metalness: 0.95,
      roughness: 0.1
    });

    const spacing = 3.0 / (pinsPerSide + 1);
    for (let side = 0; side < 4; side++) {
      for (let i = 1; i <= pinsPerSide; i++) {
        const pin = new THREE.Mesh(pinGeo, pinMat);
        const offset = -1.5 + i * spacing;

        if (side === 0) { // Top
          pin.position.set(offset, 1.85, 0);
          pin.rotation.z = Math.PI / 2;
        } else if (side === 1) { // Bottom
          pin.position.set(offset, -1.85, 0);
          pin.rotation.z = Math.PI / 2;
        } else if (side === 2) { // Right
          pin.position.set(1.85, offset, 0);
        } else { // Left
          pin.position.set(-1.85, offset, 0);
        }

        this.coreGroup.add(pin);
      }
    }

    // 4. Glowing Cyan Wireframe Cage around chip core
    const wireGeo = new THREE.BoxGeometry(3.45, 3.45, 0.95);
    const wireEdges = new THREE.EdgesGeometry(wireGeo);
    const wireMat = new THREE.LineBasicMaterial({
      color: 0x35e0ff,
      transparent: true,
      opacity: 0.8
    });
    const wireframe = new THREE.LineSegments(wireEdges, wireMat);
    this.coreGroup.add(wireframe);

    this.mainGroup.add(this.coreGroup);
  }

  buildOrbitalRings() {
    this.rings = [];

    const ringConfigs = [
      { radius: 3.2, tube: 0.035, color: 0x35e0ff, speedX: 0.008, speedY: 0.015, speedZ: 0.005, opacity: 0.85 },
      { radius: 4.2, tube: 0.030, color: 0xffb454, speedX: -0.012, speedY: 0.008, speedZ: 0.010, opacity: 0.8 },
      { radius: 5.3, tube: 0.040, color: 0x35e0ff, speedX: 0.006, speedY: -0.014, speedZ: 0.007, opacity: 0.9 }
    ];

    ringConfigs.forEach(cfg => {
      const ringGroup = new THREE.Group();

      // Torus ring
      const ringGeo = new THREE.TorusGeometry(cfg.radius, cfg.tube, 16, 100);
      const ringMat = new THREE.MeshStandardMaterial({
        color: cfg.color,
        emissive: cfg.color,
        emissiveIntensity: 0.6,
        roughness: 0.3,
        metalness: 0.8,
        transparent: true,
        opacity: cfg.opacity
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringGroup.add(ringMesh);

      // Orbital bus tick marks (like silicon bus lines)
      const ticksCount = 18;
      const tickGeo = new THREE.BoxGeometry(0.18, 0.06, 0.06);
      const tickMat = new THREE.MeshBasicMaterial({ color: cfg.color });

      for (let t = 0; t < ticksCount; t++) {
        const theta = (t / ticksCount) * Math.PI * 2;
        const tick = new THREE.Mesh(tickGeo, tickMat);
        tick.position.set(Math.cos(theta) * cfg.radius, Math.sin(theta) * cfg.radius, 0);
        tick.rotation.z = theta;
        ringGroup.add(tick);
      }

      this.mainGroup.add(ringGroup);
      this.rings.push({ group: ringGroup, ...cfg });
    });
  }

  buildPeripheralNodes() {
    this.nodes = [];

    const nodeLabels = [
      { name: 'UART_RX/TX', angle: 0, distance: 4.2, color: 0x35e0ff },
      { name: 'SPI_BUS', angle: Math.PI * 0.4, distance: 4.2, color: 0xffb454 },
      { name: 'I2C_SDA/SCL', angle: Math.PI * 0.8, distance: 4.2, color: 0x35e0ff },
      { name: 'GPIO_ISR', angle: Math.PI * 1.2, distance: 4.2, color: 0xffb454 },
      { name: 'DMA_CORE', angle: Math.PI * 1.6, distance: 4.2, color: 0x35e0ff }
    ];

    const nodeGeo = new THREE.BoxGeometry(0.4, 0.25, 0.25);

    nodeLabels.forEach(node => {
      const nodeMat = new THREE.MeshStandardMaterial({
        color: 0x081528,
        emissive: node.color,
        emissiveIntensity: 0.7,
        roughness: 0.3,
        metalness: 0.8
      });
      const mesh = new THREE.Mesh(nodeGeo, nodeMat);

      // Glowing outline
      const wireEdges = new THREE.EdgesGeometry(nodeGeo);
      const wireMat = new THREE.LineBasicMaterial({ color: node.color });
      const wire = new THREE.LineSegments(wireEdges, wireMat);
      mesh.add(wire);

      // Pulsing connector line from core to node
      const lineGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(
          Math.cos(node.angle) * node.distance,
          Math.sin(node.angle) * node.distance,
          0
        )
      ]);
      const lineMat = new THREE.LineBasicMaterial({
        color: node.color,
        transparent: true,
        opacity: 0.35
      });
      const line = new THREE.Line(lineGeo, lineMat);
      this.mainGroup.add(line);

      this.mainGroup.add(mesh);
      this.nodes.push({ mesh, line, ...node });
    });
  }

  buildParticleCloud() {
    const particleCount = this.isMobile ? 120 : 280;
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const cyan = new THREE.Color(0x35e0ff);
    const amber = new THREE.Color(0xffb454);

    for (let i = 0; i < particleCount; i++) {
      const r = 2.5 + Math.random() * 5.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI;

      positions[i * 3] = r * Math.cos(theta) * Math.cos(phi);
      positions[i * 3 + 1] = r * Math.sin(theta) * Math.cos(phi);
      positions[i * 3 + 2] = r * Math.sin(phi);

      const chosenColor = Math.random() > 0.35 ? cyan : amber;
      colors[i * 3] = chosenColor.r;
      colors[i * 3 + 1] = chosenColor.g;
      colors[i * 3 + 2] = chosenColor.b;
    }

    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const mat = new THREE.PointsMaterial({
      size: 0.12,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending
    });

    this.particles = new THREE.Points(geo, mat);
    this.mainGroup.add(this.particles);
  }

  buildHolographicGrid() {
    // Subtle background cyber grid plane
    const grid = new THREE.GridHelper(24, 24, 0x18345c, 0x0e1f38);
    grid.position.z = -4;
    grid.rotation.x = Math.PI / 2;
    this.scene.add(grid);
  }

  /**
   * Spawns a glowing expanding shockwave ring on user click!
   */
  triggerShockwave(originX = 0, originY = 0) {
    const shockGeo = new THREE.RingGeometry(0.1, 0.25, 48);
    const shockMat = new THREE.MeshBasicMaterial({
      color: Math.random() > 0.5 ? 0x35e0ff : 0xffb454,
      transparent: true,
      opacity: 1.0,
      side: THREE.DoubleSide
    });
    const shockMesh = new THREE.Mesh(shockGeo, shockMat);
    shockMesh.position.set(originX, originY, 0.5);
    this.scene.add(shockMesh);

    this.shockwaves.push({
      mesh: shockMesh,
      scale: 1.0,
      maxScale: 14.0,
      speed: 0.35,
      opacity: 1.0
    });
  }

  setupEventListeners() {
    // Mouse movement tilt
    window.addEventListener('mousemove', (e) => {
      this.mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      this.mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    }, { passive: true });

    // Click on canvas triggers interactive quantum energy burst
    if (this.container) {
      this.container.addEventListener('click', (e) => {
        const rect = this.container.getBoundingClientRect();
        const clickX = ((e.clientX - rect.left) / rect.width) * 6 - 3;
        const clickY = -(((e.clientY - rect.top) / rect.height) * 6 - 3);
        this.triggerShockwave(clickX, clickY);
      });
    }

    // Touch support for mobile
    window.addEventListener('touchmove', (e) => {
      if (e.touches.length > 0) {
        this.mouse.targetX = (e.touches[0].clientX / window.innerWidth) * 2 - 1;
        this.mouse.targetY = -(e.touches[0].clientY / window.innerHeight) * 2 + 1;
      }
    }, { passive: true });

    // Responsive resize
    window.addEventListener('resize', () => {
      if (!this.container) return;
      const width = this.container.clientWidth;
      const height = this.container.clientHeight;
      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(width, height);
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      this.isMobile = window.innerWidth < 768;
    });

    // Visibility API pause
    document.addEventListener('visibilitychange', () => {
      this.isTabVisible = !document.hidden;
      if (this.isTabVisible && !this.animationFrameId) {
        this.animate();
      }
    });

    // Reduced motion media query
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    motionQuery.addEventListener('change', (e) => {
      this.prefersReducedMotion = e.matches;
    });
  }

  animate() {
    if (!this.isTabVisible) {
      this.animationFrameId = null;
      return;
    }

    this.animationFrameId = requestAnimationFrame(this.animate);
    this.time += 0.018;

    // Smooth lerp mouse tracking
    this.mouse.x += (this.mouse.targetX - this.mouse.x) * 0.06;
    this.mouse.y += (this.mouse.targetY - this.mouse.y) * 0.06;

    if (!this.prefersReducedMotion) {
      // 1. Core rotation & gentle floating
      this.coreGroup.rotation.y = this.time * 0.5 + this.mouse.x * 0.8;
      this.coreGroup.rotation.x = Math.sin(this.time * 0.4) * 0.25 - this.mouse.y * 0.6;
      this.coreGroup.position.y = Math.sin(this.time * 1.2) * 0.15;

      // 2. Gyroscopic Orbital Rings rotation
      this.rings.forEach(ring => {
        ring.group.rotation.x += ring.speedX;
        ring.group.rotation.y += ring.speedY;
        ring.group.rotation.z += ring.speedZ;
      });

      // 3. Orbiting Peripheral Nodes
      this.nodes.forEach((node, i) => {
        const currentAngle = node.angle + this.time * 0.4 * (i % 2 === 0 ? 1 : -1);
        const nx = Math.cos(currentAngle) * node.distance;
        const ny = Math.sin(currentAngle) * node.distance;
        const nz = Math.sin(this.time * 1.5 + i) * 0.8;

        node.mesh.position.set(nx, ny, nz);
        node.mesh.rotation.y += 0.02;

        // Update connector line
        const positions = node.line.geometry.attributes.position.array;
        positions[3] = nx;
        positions[4] = ny;
        positions[5] = nz;
        node.line.geometry.attributes.position.needsUpdate = true;
      });

      // 4. Particle Cloud Rotation
      if (this.particles) {
        this.particles.rotation.y = this.time * 0.12;
        this.particles.rotation.x = this.time * 0.06;
      }
    }

    // 5. Core light pulsing
    if (this.corePointLight) {
      this.corePointLight.intensity = 4.0 + Math.sin(this.time * 3.0) * 1.5;
    }

    // 6. Animate interactive shockwaves
    for (let i = this.shockwaves.length - 1; i >= 0; i--) {
      const sw = this.shockwaves[i];
      sw.scale += sw.speed;
      sw.mesh.scale.set(sw.scale, sw.scale, sw.scale);
      sw.opacity -= 0.025;
      sw.mesh.material.opacity = Math.max(sw.opacity, 0);

      if (sw.opacity <= 0 || sw.scale >= sw.maxScale) {
        this.scene.remove(sw.mesh);
        sw.mesh.geometry.dispose();
        sw.mesh.material.dispose();
        this.shockwaves.splice(i, 1);
      }
    }

    this.renderer.render(this.scene, this.camera);
  }

  destroy() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
    if (this.renderer && this.renderer.domElement && this.renderer.domElement.parentNode) {
      this.renderer.domElement.parentNode.removeChild(this.renderer.domElement);
    }
    this.scene.clear();
  }
}
