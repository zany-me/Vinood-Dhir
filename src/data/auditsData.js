export const auditsData = {
  categories: [
    {
      id: "automotive",
      name: "Automotive & OEM Standards",
      description: "Tier-1 & Tier-2 OEM compliance, customer-specific requirements, and global automotive certifications.",
      standards: [
        {
          code: "IATF 16949:2016",
          title: "International Automotive Task Force Quality Standard",
          durationMonths: "4 - 6 Months",
          costWithDoc: 170000,
          costWithoutDoc: 120000,
          description: "End-to-end implementation including Gap Analysis, SOP/WI, Control Plan overhaul, APQP/PPAP alignment, and Stage 1 & 2 audit readiness.",
          deliverables: ["Gap Analysis Report", "Documented Procedures & Work Instructions", "Staff & Internal Auditor Training", "Stage 1 & 2 Certification Support"]
        },
        {
          code: "MACE Audit (Tier 1 & 2)",
          title: "Maruti Centre for Excellence System & Sustenance",
          durationMonths: "4 Months",
          costMonthly: 20000,
          costWithDoc: 170000,
          costWithoutDoc: 120000,
          description: "Achieve and sustain Green status in Maruti Suzuki Centre for Excellence audits with proven scoring methodologies.",
          deliverables: ["MACE Audit Sheet Scoring", "Root-cause 4M & CAPA preparation", "Safety & Kaizen implementation", "Sustenance audit monitoring"]
        },
        {
          code: "VDA 6.3 Process Audit",
          title: "German Automotive Industry Quality Standard",
          durationMonths: "3 Months",
          costMonthly: 20000,
          costWithDoc: 170000,
          costWithoutDoc: 120000,
          description: "Comprehensive process-based audit preparation according to VDA 6.3 guidelines for European automotive supply chains (Volkswagen, Mercedes, BMW, Valeo).",
          deliverables: ["Process Risk Assessment", "Potential Analysis (P1-P7)", "Evaluation of Special Processes", "NC Closure & Action Plans"]
        },
        {
          code: "CQI-27 Special Process",
          title: "Castings System Assessment (AIAG)",
          durationDays: "4 Days Intensive",
          costTotal: 60000,
          description: "Specialized assessment for Aluminium & Zinc Die Casting (HPDC, GDC, Sand Casting) covering molten metal processing, thermal control, and tool life.",
          deliverables: ["CQI-27 Self-Assessment", "Gap Identification", "Defect Containment Strategy", "Audit Documentation"]
        }
      ]
    },
    {
      id: "iso",
      name: "ISO Management Systems",
      description: "Globally recognized management systems for Quality, Environment, and Occupational Health & Safety.",
      standards: [
        {
          code: "ISO 9001:2015",
          title: "Quality Management System (QMS)",
          durationMonths: "2 - 4 Months",
          costWithDoc: 100000,
          costWithoutDoc: 50000,
          packageCost: 65000,
          description: "Foundational process-oriented management system to consistently meet client expectations and regulatory obligations.",
          deliverables: ["Quality Manual & Policy", "SOPs & Work Instructions", "Risk Register & KPI Dashboards", "Internal Audit & MRM Prep"]
        },
        {
          code: "ISO 14001:2015",
          title: "Environmental Management System (EMS)",
          durationMonths: "2 - 4 Months",
          costWithDoc: 100000,
          costWithoutDoc: 50000,
          packageCost: 65000,
          description: "Identify environmental aspects, control emissions, effluent, hazardous wastes, and ensure statutory environmental compliance.",
          deliverables: ["Aspect-Impact Assessment", "Legal Compliance Register", "Emergency Preparedness Drill", "Waste Stream Controls"]
        },
        {
          code: "ISO 45001:2018",
          title: "Occupational Health & Safety (OH&S)",
          durationMonths: "2 - 4 Months",
          costWithDoc: 100000,
          costWithoutDoc: 50000,
          packageCost: 65000,
          description: "Hazard identification and risk assessment (HIRA) to eliminate workplace hazards and build a zero-accident manufacturing safety culture.",
          deliverables: ["HIRA Register", "PPE & Ergonomic Standards", "Incident Reporting Protocols", "Safety Committee Alignment"]
        },
        {
          code: "BIS Licensing",
          title: "Bureau of Indian Standards Portal & Compliance",
          durationMonths: "2 - 3 Months",
          description: "Complete testing guidance, portal documentation, test lab verification, and inspection coordination for BIS certification.",
          deliverables: ["Product Specification Matrix", "Test Lab Verification Support", "Portal Filing & Documentation", "Factory Audit Escort"]
        }
      ]
    },
    {
      id: "shopfloor",
      name: "Shopfloor Excellence & Lean",
      description: "Direct shopfloor productivity improvement, waste elimination, and zero-defect quality systems.",
      standards: [
        {
          code: "5S & Visual Management",
          title: "Sort, Set, Shine, Standardize, Sustain",
          description: "Transform factories into spotless, visually disciplined, and safe manufacturing plants with 5S audits and red-tagging systems.",
          deliverables: ["Floor Zoning & Visual Layouts", "Shadow Boards & Red Tag Registry", "5S Audit Scoring System", "Daily Gemba Checklists"]
        },
        {
          code: "4M Change Management",
          title: "Man, Machine, Material, Method Control",
          description: "Systematic control protocols whenever any 4M condition changes to prevent customer escapes and line stoppages.",
          deliverables: ["4M Matrix & Matrix Triggers", "Abnormality Reaction Plans", "Operator Skill Mapping", "Customer Notification Templates"]
        },
        {
          code: "Poka-Yoke & Zero Defect",
          title: "Mistake Proofing & Error Containment",
          description: "Design and implement low-cost physical and electrical mistake-proofing devices across machining, assembly, and inspection.",
          deliverables: ["Process FMEA Risk Highlighting", "Poka-Yoke Sensor & Jig Design", "Verification Checklists", "Effectiveness Audits"]
        },
        {
          code: "COPQ & Rejection Reduction",
          title: "Cost of Poor Quality Elimination",
          description: "Pareto analysis, 8D problem solving, Ishikawa root-cause finding, and scrap/rework reduction campaigns.",
          deliverables: ["Scrap Loss Financial Ledger", "8D & CAPA Formats", "Process Capability (Cpk/Ppk)", "SPC Implementation"]
        }
      ]
    }
  ]
};
