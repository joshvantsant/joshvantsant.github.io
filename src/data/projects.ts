import type { Project } from '@/types';

// ─── TYPE NOTE ────────────────────────────────────────────────────────────────
// You may need to extend your Project type to include the new `skills` field:
//
//   skills?: string[];
//   client?: string;
//   notes?: string;
//   link?: { label: string; url: string };
//
// ─────────────────────────────────────────────────────────────────────────────

export const projects: Project[] = [

  // ── 1. MASTER THESIS ────────────────────────────────────────────────────────
  {
    id: '1',
    title: 'Compliant Chronograph Mechanism',
    category: 'thesis',
    year: 'Master',
    slug: 'compliant-chronograph',
    coverImage: '/images/compliant_thesis/Flexous.png',
    client: 'Flexous Mechanisms · TU Delft',
    location: 'Delft, Netherlands',
    skills: [
      'Compliant mechanism design',
      'FEA (ANSYS APDL)',
      'SolidWorks CAD',
      'MATLAB optimisation',
      'Additive manufacturing',
      'Mechanical testing',
      'Precision engineering',
    ],
    notes: 'Full thesis results are under a company embargo until October 2025. This page describes the work and methodology without disclosing proprietary results.',
    description: `For my master thesis I worked with Flexous Mechanisms, a company specialising in compliant mechanism design for precision applications. The project focused on designing and optimising a compliant horizontal clutch and braking system for a mechanical watch chronograph.

Compliant mechanisms achieve motion through controlled elastic deformation of flexible members rather than traditional rigid joints and bearings. This makes them ideal for precision instruments where backlash, friction, and lubrication are critical concerns.

The project followed a complete engineering workflow: candidate mechanism geometries were developed in SolidWorks based on functional requirements, then structurally and kinematically analysed using ANSYS APDL and MATLAB to iterate on geometry and meet stiffness and deflection targets. Physical prototypes were produced via 3D printing and mechanically tested to verify real-world behaviour against simulation predictions.`,
    link: {
      label: 'Flexous Mechanisms',
      url: 'https://flexous.com',
    },
    images: [
      {
        id: '1-1',
        src: '/images/compliant_thesis/Patent.png',
        alt: 'Existing patent from Flexous',
        aspectRatio: 'landscape',
      },
    ],
  },

  // ── 4. SOFT ROBOTIC SPACE GRIPPER ────────────────────────────────────────────
  {
    id: '4',
    title: 'Soft Robotic Space Gripper',
    category: 'research project',
    year: 'Master',
    slug: 'soft-space-gripper',
    // TODO: Replace with an actual project photo
    coverImage: '/images/BioMorphicLab/SMA_overview.jpg',
    client: 'TU Delft',
    location: 'Delft, Netherlands',
    skills: [
      'Soft robotics',
      'Silicone moulding',
      'Smart material actuation',
      'Finite element analysis',
      'Space mechanism design',
      'Prototype testing',
    ],
    description: `Supervised by Prof. Salua Hamaza and Dr. Fernando Ruiz Vinceria, I am currently contributing to the development of bio-inspired robotic systems for future space applications at the BioMorphic Intelligence Lab. My work focuses on shape memory alloy (SMA) actuated soft robotic grippers designed for lightweight, adaptable, and compliant interaction in extraterrestrial environments.
Current research investigates the performance of SMA actuation and heat dissipation behaviour under vacuum conditions, with ongoing work contributing toward multiple research publications. This includes the design, fabrication, and experimental testing of functional prototypes within vacuum and thermal chamber environments to better understand actuation efficiency and thermal response in space-like conditions.
Alongside this research, I am independently leading the development of a soft robotic rock gripper for interplanetary sampling applications, for which I will be first author on the resulting publication. The gripper incorporates integrated micro-hook structures within a compliant 3D printed architecture, enabling secure and adaptive grasping across irregular rock geometries while maintaining a lightweight and mechanically simple design.
This project has provided extensive experience across the full research and development pipeline, including CAD design, iterative prototyping, experimental validation, vacuum testing, and the integration of compliant actuation systems for extreme environments.`,
    images: [
      {
        id: '4-1',
        // TODO: Replace with real project image
        src: '/images/BioMorphicLab/SMA_detail.jpg',
        alt: 'Phase shift of the shape memory alloy',
        aspectRatio: 'landscape',
      },
      {
        id: '4-2',
        src: '/images/BioMorphicLab/space_gripper.png',
        alt: 'Solidworkd CAD render of gripper',
        aspectRatio: 'landscape',
      },
    ],
  },

  // ── 5. JIP (JOINT INDUSTRY PROJECT) ─────────────────────────────────────────
  {
    id: '5',
    title: 'Sustainable Medical Device Manufacturing in Uganda',
    category: 'master project',
    year: 'Master',
    slug: 'joint-industry-project',
    // TODO: Replace with an actual project photo
    coverImage: '/images/JIP/vela.png',
    // TODO: Fill in the company / consortium name
    client: 'Layco · TU Delft',
    location: 'Uganda · Delft, Netherlands',
    skills: [
      // TODO: Add skills relevant to your JIP
      'Mechanical Design',
      'FEA (ANSYS)',
      'Interdisciplinary collaboration',
      'Feasibility studies',
      'Sustainable design',
    ],
    notes:
    'This interdisciplinary research project investigated the feasibility of manufacturing reusable medical device components from recycled plastic within a local Ugandan supply chain.',
    
    description: `This joint interdisciplinary project was completed in collaboration with Layco Medical Devices and TU Delft to investigate sustainable manufacturing approaches for reusable medical devices in low- and middle-income countries (LMICs). The project focused on the vela®, an affordable vacuum extractor designed to reduce disparities in maternal healthcare by improving access to safe obstetric equipment in resource-limited settings. The research explored the feasibility of manufacturing part of the vela® handle from locally recycled polypropylene in Uganda. An interdisciplinary team conducted both laboratory and field-based research, including a field visit to Uganda to better understand the local manufacturing ecosystem and evaluate the viability of collaborating with Eco Brixs, a local plastic recycling company. Recycled plastic samples were produced and mechanically tested to assess whether the material could satisfy the performance requirements of a reusable medical device. Mechanical tensile testing and sorption testing were completed to evaluate structural performance, disinfectant resistance, and sterilisation resilience. The findings indicated that recycled polypropylene showed promising mechanical behaviour and chemical resilience for the intended application, provided that further design optimisation and manufacturing improvements are implemented. The project combined engineering analysis, sustainability, healthcare accessibility, and real-world manufacturing considerations, while highlighting the challenges and opportunities associated with circular medical manufacturing systems in LMICs.`,
  
    link: {
      label: 'Layco Medical Devices',
      url: 'https://laycomedical.com',
    },
    images: [
      {
        id: '5-1',
        // TODO: Replace with real project image
        src: '/images/JIP/Vela_components.JPG',
        alt: 'Overview of the different components of the Vela medical device',
        aspectRatio: 'landscape',
      },
      {
        id: '5-2',
        // TODO: Replace with real project image
        src: '/images/JIP/Concept1-2.jpg',
        alt: 'Concept for using locally sourced recycled plastic pellets',
        aspectRatio: 'landscape',
      },
      {
        id: '5-3',
        // TODO: Replace with real project image
        src: '/images/JIP/Stress_FEM.JPG',
        alt: 'FEM analysis of the stress on the medical device with the recycled plastic',
        aspectRatio: 'square',
      },
      {
        id: '5-4',
        // TODO: Replace with real project image
        src: '/images/JIP/Deformation_FEM.JPG',
        alt: 'FEM analysis of the deformation on the Vela with the recycled plastic',
        aspectRatio: 'square',
      },
    ],
  },

  // ── 6. MASTER BIOMECHATRONICS DESIGN PROJECT ─────────────────────────────────────────────────
  {
    id: '6',
    title: 'BioMechatronics Design Project',
    category: 'Biomechatronics / Medical Device Design',
    year: 'Master',
    slug: 'master-design-project-biomechatronics',
    
    coverImage: '/images/Lower_Limb_design/CAD_Model.jpg',
    
    location: 'Delft, Netherlands',
    client: "TU Delft",
    skills: [
      'Medical Device Prototyping',
      'SolidWorks',
      'Concept Design Generation',
    ],
    description: `This master’s-level BioMechatronics project explored assistive solutions for toddlers with lower-limb gait deficiencies during early walking development. Working in a team of two, we investigated how sensory feedback systems could support balance, coordination, and gait learning in young prosthesis users.
Following an initial research phase into developmental gait challenges and existing prosthetic limitations, three conceptual solutions were generated and evaluated through a structured concept selection process. 

The final concept proposed a wearable insole system incorporating pressure sensors, Bluetooth communication, and vibration feedback to provide real-time haptic cues during walking. My primary contribution focused on the CAD development of the final concept using SolidWorks, alongside collaborative concept generation and system development throughout the project.`,
    images: [
      {
        id: '6-2',
        src: '/images/Lower_Limb_design/Concept1.jpg',
        alt: 'Example of different concepts explored during BioMechatronics Design Project',
        aspectRatio: 'landscape',
      },
      {
        id: '6-3',
        src: '/images/Lower_Limb_design/concept2_true.JPEG',
        alt: 'Example of different concepts explored during BioMechatronics Design Project',
        aspectRatio: 'landscape',
      },
      {
        id: '6-4',
        src: '/images/Lower_Limb_design/concept3-2.JPG',
        alt: 'Example of different concepts explored during BioMechatronics Design Project',
        aspectRatio: 'landscape',
      },
    ],
  },

  // ── 7. HONOURS PROJECT ───────────────────────────────────────────────────────
  {
    id: '7',
    title: 'Honours Research Project',
    category: 'research project',
    year: 'Master',
    slug: 'honours-project',
    // TODO: Replace with an actual project photo
    coverImage: '/images/Honours/honours.webp',
    location: 'Delft, Netherlands',
    skills: [
      // TODO: Add skills from your honours project
      'Independent Research',
      'Mechanical Design',
      'FEM Analysis',
      'Concept Design Generation',
    ],
    description: `During my masters programme, I took on an independent honours programme to explore how mechanical design methodologies differ across engineering disciplines. I also wanted to research how emerging technologies such as artificial intelligence could be used to augment this mechanical engineering design process.
    
    The programme consisted of three interdisciplinary group design projects completed across different mechanical engineering departments at TU Delft. The first project focused on bio-inspired design, investigating how natural systems and biological mechanisms can inspire innovative engineering solutions. The second project, completed in collaboration with ASML, involved the design of a highly precise mechanism for use in lithography systems. Working within both a sub-team and a larger multidisciplinary team structure, I additionally took on the role of systems engineer to coordinate integration between multiple design groups. The project culminated in presenting the final design solution to engineers and stakeholders at ASML, alongside a visit to the ASML workshop facilities.
    
    The final project introduced the design and fabrication of MEMS-scale systems, focusing on the development of a silicon-based tensile testing device capable of operating with micrometre precision. Alongside the technical design projectprojects, the programme also explored the ethical and practical implications of integrating artificial intelligence into engineering design workflows.`,

    images: [
      {
        id: '7-1',
        src: '/images/Honours/Final_design.jpg',
        alt: 'Final Design of Bio Inspired Design project',
        aspectRatio: 'landscape',
      },
      {
        id: '7-2',
        src: '/images/Honours/Int model temp.png',
        alt: 'FEM of temperature causing the chevron actuator to move',
        aspectRatio: 'landscape',
      },
      {
        id: '7-3',
        src: '/images/Honours/electric_field.png',
        alt: 'FEM of electric field gradient over our capacitive sensor',
        aspectRatio: 'square',
      },
      {
        id: '7-4',
        src: '/images/Honours/temp100.png',
        alt: 'FEM close-up of the temperature over the chevron actuator',
        aspectRatio: 'landscape',
      },
      {
        id: '7-5',
        src: '/images/Honours/overall_CAD.png',
        alt: 'Final CAD image of the micro-and nano design',
        aspectRatio: 'landscape',
      },
      {
        id: '7-6',
        src: '/images/Honours/Topo_optimisation_precision.png',
        alt: 'Topological optimisation of the frame for the ASML precision design',
        aspectRatio: 'landscape',
      },
      {
        id: '7-7',
        src: '/images/Honours/Final assembly.jpg',
        alt: 'Full CAD assembly of the ASML precision design',
        aspectRatio: 'landscape',
      },
    ],
  },
  
  // ── 3. ROBOCUP ───────────────────────────────────────────────────────────────
  {
    id: '3',
    title: 'RoboCup — Autonomous Arena Robot',
    category: 'student project',
    year: 'Bachelor',
    slug: 'robocup',
    coverImage: '/images/RoboCup.jpg',
    location: 'University of Canterbury',
    skills: [
      'Arduino C++',
      'Embedded systems',
      'Custom PCB design',
      'Multi-sensor integration',
      'SolidWorks CAD',
      'Chassis fabrication',
      'Control logic',
    ],
    description: `As part of a team of three, I designed and built a fully autonomous robot for a RoboCup-style arena competition. The robot navigated an arena independently to locate and collect small metallic weights, requiring tight integration of hardware, electronics, and software.

A custom PCB was designed and fabricated to integrate the sensors, actuators, and Arduino microcontroller into a single purpose-built board. The navigation and collection logic was implemented in Arduino C++, handling the full autonomous control loop. The chassis was designed in CAD, then physically assembled and iteratively tested against arena conditions.`,
    images: [
      {
        id: '3-1',
        src: '/images/RoboCup.jpg',
        alt: 'Finished autonomous competition robot',
        aspectRatio: 'portrait',
      },
      {
        id: '3-2',
        src: '/images/Embedded_hardware_Robo.png',
        alt: 'Schematic of embedded hardware controlled via Arduino',
        aspectRatio: 'landscape',
      },
      {
        id: '3-3',
        src: '/images/Solidworks drawing of RoboCup.PNG',
        alt: 'SolidWorks CAD render of the robot chassis',
        aspectRatio: 'square',
      },
      {
        id: '3-4',
        src: '/images/PCB.png',
        alt: 'Custom PCB schematic for robot electronics',
        aspectRatio: 'landscape',
      },
    ],
  },

// ── 2. INTERNSHIP ────────────────────────────────────────────────────────────
  {
    id: '2',
    title: 'Uniweld — Workshop Internship',
    category: 'internship',
    year: 'Bachelor',
    slug: 'uniweld',
    coverImage: '/images/Uniweld/Uniweld.jpg',
    location: 'Christchurch, New Zealand',
    skills: [
      'MIG/TIG welding',
      'Sheet metal fabrication',
      'Pipe bending & fitting',
      'Hydraulic press operation',
      'Spot welding',
      'Manufacturing tolerances',
      'Workshop safety',
    ],
    description: `Practical skills are an essential asset to every mechanical design engineer, providing real-world experience that reinforces classroom learning and builds familiarity with the tools and processes required in manufacturing. My summer internship at a local mechanics shop let me develop these core skills directly.

My primary role involved the fabrication and installation of custom automotive exhaust systems — cutting, bending, fitting, and welding steel pipework to specification using a range of workshop equipment.

Alongside this I manufactured custom wire racking products: cutting heavy-gauge wire, forming components using hydraulic bending equipment, spot-welding assemblies, and applying protective plastic coatings to finished products.`,
    images: [
      {
        id: '2-1',
        src: '/images/Uniweld/muffler_system.jpeg',
        alt: 'Finished custom exhaust muffler system',
        aspectRatio: 'portrait',
        size: 'medium',
      },
      {
        id: '2-2',
        src: '/images/Uniweld/hydraulic_press.jpg',
        alt: 'Hydraulic press used for wire bending',
        aspectRatio: 'portrait',
      },
      {
        id: '2-3',
        src: '/images/Uniweld/spot_welding.jpg',
        alt: 'Spot welding wire racking components',
        aspectRatio: 'square',
        size: 'medium',
      },
      {
        id: '2-4',
        src: '/images/Uniweld/wire_bending.jpg',
        alt: 'Finished wire bend product',
        aspectRatio: 'portrait',
        size: 'medium',
      },
    ],
  },

  // ── HBDHB Project Management Work ────────────────────────────
  {
    id: '8',
    title: 'Healthcare Infrastructure & Hospital Upgrades',
    category: 'industry',
    year: '2020–2022',
    slug: 'hawkes-bay-healthcare-project-management',
    coverImage: '/images/HBDHB/helicopter.jpeg',
    client: 'Health New Zealand | Te Whatu Ora Te Matau a Māui',
    location: 'Hastings, New Zealand',
  
    skills: [
      'Project management',
      'Construction coordination',
      'Stakeholder communication',
      'Contractor coordination',
      'Quality control',
      'Risk management',
      'Interdisciplinary collaboration',
    ],
  
    description: `I initially joined the Hawke’s Bay Hospital as an engineering consultant before transitioning into a full-time project manager within the hospital engineering facilities and operations team. The role involved coordinating and delivering a wide range of hospital infrastructure, maintenance, and upgrade projects while ensuring minimal disruption to critical healthcare operations. This included working closely with contractors, hospital staff, engineers, and external stakeholders to manage project timelines, oversee quality control, and coordinate construction activities within live clinical environments.
    
    A major highlight of the role was contributing to the national COVID-19 response through the development and upgrading of hospital rehabilitation and treatment spaces during the pandemic. Additional projects included large-scale mechanical and building infrastructure upgrades, pipework replacements, asbestos remediation coordination, and facility improvement works across the hospital campus.The position provided extensive experience working within highly regulated operational environments where safety, communication, logistics, and coordination were critical to successful project delivery.`,
  
    images: [
      {
        id: '8-1',
        src: '/images/HBDHB/helicopter.jpeg',
        alt: 'Helicopter lifting equipment during hospital infrastructure works',
        aspectRatio: 'landscape',
      },
      {
        id: '8-2',
        src: '/images/HBDHB/Pipework.jpeg',
        alt: 'Example of new pipework installation',
        aspectRatio: 'portrait',
      },
      {
        id: '8-3',
        src: '/images/HBDHB/men.jpeg',
        alt: 'Example of some renovation works',
        aspectRatio: 'landscape',
      },
      {
        id: '8-4',
        src: '/images/HBDHB/Stairwell.jpeg',
        alt: 'Overall of new stairwell installation',
        aspectRatio: 'landscape',
      },
      {
        id: '8-5',
        src: '/images/HBDHB/Stairwell_weld.jpeg',
        alt: 'Close-up of welding for stairwell',
        aspectRatio: 'landscape',
      },
    ],
  },

  // ── HBDHB Project Management Work ────────────────────────────
  {
    id: '9',
    title: 'Mechanical Engineering Consultant at BVT',
    category: 'industry',
    year: '2018–2020',
    slug: 'bvt-mechanical-engineering',
    coverImage: '/images/BVT/Construction.jpeg',
    client: 'BVT Engineering',
    location: 'Christchurch, New Zealand',
  
    skills: [
      'Mechanical Design',
      'Finite Element Anlysis',
      'Construction monitoring',
      'Stakeholder communication',
      'Interdisciplinary collaboration',
    ],
  
    description: `I began my professional engineering career through the graduate programme at BVT Engineering before progressing into a consulting engineer role working across a broad range of commercial and healthcare infrastructure projects throughout New Zealand. 
    
    The role involved designing and analysing mechanical components and restraint systems for non-structural building elements, alongside construction monitoring, technical coordination, and client communication within fast-paced commercial construction environments. Projects ranged from hospitals and logistics facilities to heritage redevelopments and large-scale retail developments, including Grey Base Hospital, MOVE Logistics, The Arts Centre Te Matatiki Toi Ora, and New World Wānaka. 
    
    Working closely with architects, structural engineers, fire engineers, and contractors, I developed experience delivering technically compliant and commercially viable engineering solutions while coordinating projects from concept through to site execution. The position also provided extensive exposure to construction-phase problem solving, responding to technical queries, and translating complex engineering concepts for both technical and non-technical stakeholders. Alongside project delivery, I also contributed to internal process development by mentoring a team of final-year engineering students on a technical project aimed at improving BVT’s automation workflows.`,
  
    images: [
      {
        id: '9-1',
        src: '/images/BVT/Monitoring.jpeg',
        alt: '3D Scanning of construction sites',
        aspectRatio: 'landscape',
      },
      {
        id: '9-2',
        src: '/images/BVT/Axis_VM.jpeg',
        alt: 'Example of Axis VM FEM software',
        aspectRatio: 'portrait',
      },
      {
        id: '9-3',
        src: '/images/BVT/Roof.jpeg',
        alt: 'Inspection of roof safety equipment',
        aspectRatio: 'landscape',
      },
      {
        id: '9-4',
        src: '/images/BVT/Standard_verification.png',
        alt: 'Example of verification form for a mechanical project',
        aspectRatio: 'landscape',
      },
      {
        id: '9-5',
        src: '/images/BVT/producer_statement.png',
        alt: 'Example of verification producer statement form for a mechanical project',
        aspectRatio: 'landscape',
      },
    ],
  },

  // ── 10. MEDICAL DEVICE PROTOTYPING ────────────────────────────────────────────
  {
    id: '10',
    title: 'Medical Device Prototyping',
    category: 'project',
    year: 'Master',
    slug: 'medical-device-prototyping',
    coverImage: '/images/MDP/annotated.png',
    client: 'TU Delft',
    location: 'Delft, Netherlands',
    skills: [
      'Medical device design',
      'CAD (SolidWorks)',
      'Vibration & harmonic analysis',
      'Prototype fabrication',
      'Experimental validation',
      'Biomechanics',
      'Sustainability assessment',
    ],
    description: `Total hip revisions are a growing surgical challenge with the conventional removal techniques such as using slap hammers and chisels risking excessive bone loss, blood loss, and fracture, particularly for well-fixated stems. Therefore, alongside 3 other master students, I completed a medical device prototyping project to design a minimally invasive alternative capable of removing a hip implant in under 15 minutes. The approach centred on impact vibration: a handheld, electrically powered device that transmits controlled vibrations through a force-clamping connector and connecting arm directly to the implant. The design process began with harmonic response analysis of the bone-implant interface to identify an optimal frequency range, which informed the final prototype geometry. Validation was carried out using a foam block with a fixed hip implant, comparing static and experimental performance against a conventional slap hammer. Results showed the device could successfully remove the implant with minimal impulse and comparable effectiveness, while addressing the limitations of current surgical technique.`,
    images: [
      {
        id: '10-1',
        src: '/images/MDP/Render.jpg',
        alt: 'SolidWorks CAD render of the handheld vibration removal device',
        aspectRatio: 'landscape',
      },
      {
        id: '10-2',
        src: '/images/MDP/annotated.png',  // ← swap in your filename
        alt: 'Annotated side profile showing key components of the device',
        aspectRatio: 'landscape',
      },
      {
        id: '10-3',
        src: '/images/MDP/concepts.png',
        alt: 'Early concept sketches showing three design variants (A, B, C)',
        aspectRatio: 'portrait',
      },
      {
        id: '10-4',
        src: '/images/MDP/harmonic_analysis.png',
        alt: 'Harmonic response analysis showing resonance peak at 32 Hz for medial and lateral bone-implant interface nodes',
        aspectRatio: 'landscape',
      },
      {
        id: '10-5',
        src: '/images/MDP/Complete_device.png',
        alt: 'Physical prototype of the completed device held in hand',
        aspectRatio: 'landscape',
      },
    ],
  },
];
// ─── HELPER FUNCTIONS ─────────────────────────────────────────────────────────

export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);

export const getProjectsByCategory = (category: string): Project[] => {
  if (category === 'all') return projects;
  return projects.filter((p) => p.category === category);
};

// Returns the first N projects for a featured section
export const getFeaturedProjects = (count = 4): Project[] =>
  projects.slice(0, count);

export const getAdjacentProjects = (
  currentSlug: string,
): { prev: Project | null; next: Project | null } => {
  const idx = projects.findIndex((p) => p.slug === currentSlug);
  return {
    prev: idx > 0 ? projects[idx - 1] : null,
    next: idx < projects.length - 1 ? projects[idx + 1] : null,
  };
};

// Returns all unique categories present in the data (useful for filter tabs)
export const getCategories = (): string[] => [
  'all',
  ...Array.from(new Set(projects.map((p) => p.category))),
]; 
