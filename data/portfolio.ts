export interface Project {
  id: string;
  title: string;
  category: 'Power BI' | 'Excel' | 'SQL' | 'Python' | 'Tableau';
  shortDescription: string;
  fullDescription: string;
  problem: string;
  datasetInfo: string;
  tools: string[];
  keyInsights: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  process: {
    collect: string;
    clean: string;
    analyze: string;
    visualize: string;
    insights: string;
    recommendations: string;
  };
  metrics: { label: string; value: string; trend?: string }[];
  businessImpact: string;
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    level: number; // 0-100
    iconName: string;
    description: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  responsibilities: string[];
  achievements: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialUrl: string;
  badgeColor: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
}

export interface SampleDatasetRow {
  month: string;
  revenue: number;
  expenses: number;
  customers: number;
  profit: number;
  category: string;
}

export const PORTFOLIO_DATA = {
  client: {
    name: "Chinaza Okafor",
    title: "Data Analyst | Business Intelligence & Data Visualization Specialist",
    tagline: "Turning Raw Data Into Actionable Business Insights",
    bio: "I transform complex datasets into clear insights, interactive dashboards, and data-driven strategies that help businesses make smarter decisions, optimize revenue, and improve operational efficiency.",
    email: "chinazaokafor946@gmail.com",
    phone: "+234 8074 678 946",
    whatsappNumber: "+2348074678946",
    whatsappMessage: "Hello Chinaza, I came across your data analyst portfolio and would like to discuss a project.",
    linkedinUrl: "https://linkedin.com/in/chinaza-okafor-data",
    instagramUrl: "https://instagram.com/chinaza_data_analyst",
    githubUrl: "https://github.com/chinaza-okafor",
    excelUrl: "/resume.pdf",
    location: "Enugu, Nigeria (Available Globally / Remote)",
    resumeUrl: "/resume.pdf"
  },

  heroMetrics: [
    { label: "Revenue Growth Identified", value: "+24.8%", change: "+4.2% YoY", isPositive: true },
    { label: "Data Accuracy", value: "98.7%", change: "High Precision", isPositive: true },
    { label: "Projects Completed", value: "10+", change: "Across 4 Industries", isPositive: true },
    { label: "Insights Generated", value: "50+", change: "Actionable Decisions", isPositive: true }
  ],

  aboutMetrics: [
    { label: "Years Experience", value: 2, suffix: "+" },
    { label: "Projects Delivered", value: 10, suffix: "+" },
    { label: "Dashboards Built", value: 15, suffix: "+" },
    { label: "Business Insights Uncovered", value: 10, suffix: "+" }
  ],

  skillsCategories: [
    {
      title: "Data Analysis",
      skills: [
        { name: "SQL (PostgreSQL / MySQL)", level: 92, iconName: "Database", description: "Complex CTEs, window functions, query optimization, join indexing" },
        { name: "Excel & Advanced Formulas", level: 98, iconName: "FileSpreadsheet", description: "Power Query, VBA macros, XLOOKUP, Pivot Tables, dynamic arrays" },
        // { name: "Python (Pandas & NumPy)", level: 85, iconName: "Code", description: "Data wrangling, statistical modeling, automated data pipelines" }
      ]
    },
    {
      title: "Data Visualization",
      skills: [
        { name: "Power BI", level: 95, iconName: "BarChart3", description: "DAX measures, interactive tooltips, row-level security, data modeling" },
        { name: "Excel Dashboards", level: 96, iconName: "LayoutGrid", description: "Dynamic executive cockpits, conditional KPI heatmaps, slicers" },
        // { name: "Tableau", level: 88, iconName: "PieChart", description: "Calculated fields, visual storytelling, parameter controls" }
      ]
    },
    {
      title: "Data & Analytics Competencies",
      skills: [
        { name: "Data Cleaning & Preprocessing", level: 95, iconName: "Zap", description: "Anomaly detection, missing value imputation, schema normalization" },
        { name: "Exploratory Data Analysis (EDA)", level: 94, iconName: "Search", description: "Distribution analysis, correlation matrices, outlier treatment" },
        { name: "Statistical & Trend Analysis", level: 90, iconName: "TrendingUp", description: "Regression, hypothesis testing, seasonal forecasting" },
        { name: "KPI & Performance Tracking", level: 96, iconName: "Target", description: "Executive scorecard design, benchmark tracking, variance analysis" },
        { name: "Business Intelligence", level: 92, iconName: "BrainCircuit", description: "Cross-functional reporting, stakeholder alignment, metric definitions" },
        { name: "Predictive & Churn Modeling", level: 86, iconName: "LineChart", description: "Customer lifetime value calculation, attrition prediction" }
      ]
    }
  ] as SkillCategory[],

  projects: [
    {
      id: "sales-performance-dashboard",
      title: "Car Brand Sales Performance & Quartly Revenue Dashboard",
      category: "Power BI",
      shortDescription: "An interactive Power BI dashboard designed to analyze global sales performance, track monthly revenue trends, monitor target KPIs, and uncover underperforming sales months or years.",
      fullDescription: "A comprehensive Business Intelligence solution deployed for a high-growth retail client to aggregate multi-channel sales data, optimize discount structures, and realign sales team targets.",
      problem: "The client lacked real-time visibility into brands sales performance, leading to misallocated marketing budgets and delayed decision-making on inventory replenishment.",
      datasetInfo: "Over 250,000 transaction records containing product SKUs, store locations, regional customer demographics, order dates, list prices, discounts, and net revenue metrics.",
      tools: ["Power BI", "SQL", "Excel", "DAX"],
      keyInsights: [
        "+24.8% revenue growth opportunity identified through regional rebalancing",
        "18% margin improvement by eliminating unprofitable discount tiers",
        "Identified top 5 high-converting SKUs driving 62% of total net profits"
      ],
      image: "/images/Car_dashboard.JPG",
      liveUrl: "https://app.powerbi.com",
      githubUrl: "https://github.com/chinaza-okafor/sales-performance-analytics",
      process: {
        collect: "Extracted multi-table sales schema from PostgreSQL relational database.",
        clean: "Normalised currency formats, handled missing region tags, and removed duplicate transaction records using SQL CTEs.",
        analyze: "Performed cohort analysis and calculated month-over-month (MoM) growth rates using DAX time intelligence functions.",
        visualize: "Built an interactive 3-page Power BI dashboard featuring dynamic slicers, drill-through paths, and KPI cards.",
        insights: "Discovered that 28% of promotional discounts were yielding negative net profit margins in Q3.",
        recommendations: "Recommended capping promotional discount ceilings to 15% and reallocating $45K marketing spend to high-performing urban zones."
      },
      metrics: [
        { label: "Revenue Lift", value: "+$1.4M", trend: "Upward" },
        { label: "Margin Recovery", value: "+18%", trend: "Positive" },
        { label: "Data Latency", value: "< 5 mins", trend: "Real-time" }
      ],
      businessImpact: "Empowered the executive team to reduce weekly reporting preparation time from 12 hours to 0 hours via automated refresh, boosting operational efficiency."
    },
    {
      id: "Royal Hotel-retention-analysis",
      title: "Customer Churn Risk & Retention Intelligence Dashboard",
      category: "SQL",
      shortDescription: "End-to-end data analytics project combining SQL risk queries and interactive visual dashboards to predict customer attrition and increase customer retention.",
      fullDescription: "Analyzed user engagement logs, customer support tickets, and billing histories to segment user churn risk levels and enable proactive customer success interventions.",
      problem: "The subscription SaaS provider suffered from an escalating quarterly churn rate of 7.2%, with no early-warning indicators for customer account risk.",
      datasetInfo: "14,250 customer profiles with subscription tiers, login frequency, support ticket volume, payment gateway logs, and monthly recurring revenue (MRR).",
      tools: [ "Power BI", "Excel"],
      keyInsights: [
        "Identified 942 high-risk accounts representing $185K ARR prior to contract expiration",
        "Customers with >3 unresolved support tickets churned at 4.2x the average rate",
        "Targeted retention campaigns reduced 90-day churn by 22%"
      ],
      image: "/images/Royal_dashboard.JPG",
      liveUrl: "https://app.powerbi.com",
      githubUrl: "https://github.com/chinaza-okafor/customer-churn-retention-sql",
      process: {
        collect: "Queried data warehouses containing customer demographic and product usage event streams.",
        clean: "Standardized tenure fields, imputed null log dates, and created aggregated RFM (Recency, Frequency, Monetary) scores.",
        analyze: "Ran logistic regression and SQL window functions to rank accounts by churn probability score.",
        visualize: "Created cohort retention heatmaps and churn driver breakdown charts.",
        insights: "Onboarding drop-off in week 2 was the single largest predictor of churn.",
        recommendations: "Introduced an automated 14-day interactive onboarding email sequence and prioritized high-ticket support routing."
      },
      metrics: [
        { label: "ARR Saved", value: "$185,000", trend: "Protected" },
        { label: "Churn Reduction", value: "-22%", trend: "Positive" },
        { label: "Prediction Accuracy", value: "91.4%", trend: "High Precision" }
      ],
      businessImpact: "Prevented over $185,000 in lost Annual Recurring Revenue in the first 6 months following deployment."
    },
    {
      id: "financial-forecasting-model",
      title: "Corporate Financial Forecasting & Profitability Model",
      category: "Excel",
      shortDescription: "Advanced Excel financial cockpit with automated scenario modeling (Base, Best, Worst Case), dynamic cost allocation, and 12-month revenue projections.",
      fullDescription: "Created an executive-level financial model featuring dynamic scenario selectors, sensitivity tables, gross profit margin breakdown, and automated P&L statements.",
      problem: "The enterprise client relied on static, error-prone spreadsheets that took days to update during quarterly budget planning sessions.",
      datasetInfo: "Historical 3-year P&L datasets across 6 business divisions, operating expenditure logs, payroll schedules, and seasonal demand factors.",
      tools: ["Excel Dashboards", "Power Query", "VBA Macros"],
      keyInsights: [
        "Uncovered 14% unnecessary operating expenditure overhead in administrative logistics",
        "Automated financial forecasting reduced scenario modeling turnarounds from 3 days to 15 minutes",
        "Forecasted cash flow bottleneck in Q4, enabling proactive credit line securing"
      ],
      image: "/images/Sales_dashboard.JPG",
      liveUrl: "https://office.com",
      githubUrl: "https://github.com/chinaza-okafor/excel-financial-forecasting",
      process: {
        collect: "Merged trial balances from 6 disparate SAP financial export files.",
        clean: "Cleaned chart of accounts hierarchy using Power Query, eliminating manual copy-paste errors.",
        analyze: "Constructed dynamic multi-variable scenario models using INDEX/MATCH, OFFSET, and Data Tables.",
        visualize: "Designed an executive dashboard featuring summary KPI cards, quarterly line projections, and expense pie slices.",
        insights: "Identified overhead cost growth rate outstripping net profit growth rate by 1.8x.",
        recommendations: "Renegotiated vendor SLAs and streamlined administrative approval workflows."
      },
      metrics: [
        { label: "Modeling Speed", value: "12x Faster", trend: "Efficiency" },
        { label: "Cost Savings", value: "₦18.5M", trend: "Optimized" },
        { label: "Forecast Margin Error", value: "< 2.1%", trend: "Accurate" }
      ],
      businessImpact: "Enabled C-suite executives to make data-backed annual budgeting decisions 12x faster while reducing operational expenditures by 14%."
    },
    {
      id: "supply-chain-inventory-optimization",
      title: "Supply Chain Operations & Inventory Logistics Analytics",
      category: "Excel",
      shortDescription: "Data analytics solution tracking warehouse lead times, order fulfillment rates, stock turnover ratios, and inventory reorder point optimization.",
      fullDescription: "Analyzed supply chain bottlenecks across 4 fulfillment hubs to decrease order fulfillment lead times and reduce warehouse holding costs.",
      problem: "Frequent inventory stockouts on top-selling items caused an estimated 12% loss in potential fulfillment revenue.",
      datasetInfo: "18,742 purchase orders, warehouse inventory logs, shipping carrier lead times, and SKU stock turnover metrics.",
      tools: ["Excel", "Power BI"],
      keyInsights: [
        "Optimized safety stock levels, reducing inventory carrying costs by 16%",
        "Identified supplier lead time variance as primary cause of stockouts",
        "Improved order fulfillment rate from 86% to 94.8%"
      ],
      image: "/images/Car_dataset.JPG",
      liveUrl: "https://app.powerbi.com",
      githubUrl: "https://github.com/chinaza-okafor/supply-chain-analytics",
      process: {
        collect: "Extracted warehouse ERP inventory tables and shipping API logs.",
        clean: "Standardized carrier status codes, resolved timestamp discrepancies, and calculated lead time deltas.",
        analyze: "Calculated Economic Order Quantity (EOQ) and optimal reorder points per SKU group.",
        visualize: "Created dynamic gauge meters, lead time distribution plots, and inventory heatmaps.",
        insights: "Warehouse Hub B experienced 2.3 days higher lead times due to manual sorting delays.",
        recommendations: "Automated SKU sorting queues and re-routed 25% order volume to Hub A during peak demand."
      },
      metrics: [
        { label: "Fulfillment Rate", value: "94.8%", trend: "Up from 86%" },
        { label: "Lead Time Reduction", value: "-1.8 Days", trend: "Faster" },
        { label: "Stockout Decrease", value: "-68%", trend: "Positive" }
      ],
      businessImpact: "Increased overall order fulfillment rates to 94.8% and reduced inventory carrying costs by 16% annually."
    }
  ] as Project[],

  experience: [
    {
      id: "exp-1",
      role: "Junior Data Analyst",
      company: "Genesystech hub",
      location: "Enugu, Nigeria",
      period: "2026 — Present",
      description: "Leading data analytics initiatives, executive dashboard deployment, and cross-functional business strategy for enterprise retail and fintech clients.",
      responsibilities: [
        "Design, build, and maintain interactive Power BI dashboards serving over 50 executive stakeholders.",
        "Author complex SQL queries, window functions, and stored procedures to clean and aggregate raw transactional data.",
        "Collaborate with marketing and finance teams to define key performance indicators and build automated reporting pipelines."
      ],
      achievements: [
        "Uncovered revenue growth opportunities generating ₦45M+ in incremental client business revenue.",
        "Reduced manual executive reporting hours by 85% through automated Power Query and DAX data models."
      ]
    },
    {
      id: "exp-2",
      role: "Data Analyst & BI Specialist",
      company: "Lextech Company",
      location: "Enugu, Nigeria",
      period: "2025 — 2026",
      description: "Spearheaded exploratory data analysis, market basket analysis, and customer segmentation for mid-market clients.",
      responsibilities: [
        "Analyzed large customer purchase datasets in Excel and SQL to evaluate promotional campaign performance.",
        "Developed custom financial modeling tools in Excel for variance tracking and cash flow forecasting.",
        "Conducted training sessions for junior staff on SQL query optimization and visualization best practices."
      ],
      achievements: [
        "Built customer churn risk scorecards that successfully preserved over $120,000 in annual client ARR.",
        "Standardized reporting templates across 4 business departments, enhancing reporting consistency."
      ]
    },
    // {
    //   id: "exp-3",
    //   role: "Junior Data Analyst",
    //   company: "Insight Analytics Hub",
    //   location: "Lagos, Nigeria",
    //   period: "2021 — 2022",
    //   description: "Handled data cleaning, statistical analysis, and baseline reporting for client consulting engagements.",
    //   responsibilities: [
    //     "Cleaned and preprocessed unstructured client survey and sales datasets using Excel and Python.",
    //     "Built monthly sales summary reports and visual charts for internal account managers."
    //   ],
    //   achievements: [
    //     "Successfully cleaned and ingested 100K+ historic legacy records with zero data loss."
    //   ]
    // }
  ] as ExperienceItem[],

  certifications: [
    {
      title: "Genesystech hub Upskill",
      issuer: "Genesystech hub",
      date: "Issued 2026",
      credentialUrl: "https://learn.microsoft.com",
      badgeColor: "#10b981"
    },
    {
      title: "Google Data Analytics Professional Certificate",
      issuer: "Google",
      date: "Issued 2026",
      credentialUrl: "https://coursera.org",
      badgeColor: "#22c55e"
    },
    // {
    //   title: "Advanced SQL & Database Design for Analytics",
    //   issuer: "DataCamp",
    //   date: "Issued 2023",
    //   credentialUrl: "https://datacamp.com",
    //   badgeColor: "#059669"
    // },
    // {
    //   title: "Financial Modeling & Valuation Analyst (FMVA)",
    //   issuer: "CFI Institute",
    //   date: "Issued 2022",
    //   credentialUrl: "https://corporatefinanceinstitute.com",
    //   badgeColor: "#34d399"
    // }
  ] as Certification[],

  methodology: [
    {
      number: "01",
      title: "Collect",
      subtitle: "Gather & Extract",
      description: "Gather relevant unstructured or structured data from databases, APIs, legacy spreadsheets, and operational logs.",
      icon: "Database"
    },
    {
      number: "02",
      title: "Clean",
      subtitle: "Preprocess & Sanitize",
      description: "Remove duplicate records, normalize schemas, handle missing values, and validate data integrity using SQL and Python.",
      icon: "Zap"
    },
    {
      number: "03",
      title: "Analyze",
      subtitle: "Discover & Pattern Match",
      description: "Perform statistical checks, exploratory analysis, correlation analysis, and predictive modeling to identify hidden trends.",
      icon: "Search"
    },
    {
      number: "04",
      title: "Visualize",
      subtitle: "Dashboard & Storytelling",
      description: "Transform complex raw analytical numbers into clear, intuitive Power BI & Excel interactive dashboards.",
      icon: "BarChart3"
    },
    {
      number: "05",
      title: "Recommend",
      subtitle: "Strategy & Action",
      description: "Turn technical insights into plain-language business recommendations that drive revenue growth and efficiency.",
      icon: "Lightbulb"
    }
  ],

  testimonials: [
    {
      quote: "Chinaza transformed our chaotic sales data into a streamlined Power BI dashboard. Her insights directly helped us uncover a ₦24M regional revenue expansion opportunity within 2 months!",
      author: "Emeka Nwosu",
      role: "Vice President of Sales",
      company: "Lextech",
      avatar: "EN"
    },
    {
      quote: "Working with Chinaza on our financial forecasting model was a game-changer. What used to take our finance team 3 full days now takes 15 minutes with flawless accuracy.",
      author: "Aisha Mohammed",
      role: "Chief Financial Officer",
      company: "Lextech company",
      avatar: "AM"
    },
    {
      quote: "Her analytical rigor and ability to explain complex statistical models to non-technical executives is outstanding. Highly recommended for any data intelligence project!",
      author: "David Lawson",
      role: "Director of Operations",
      company: "Genesystechhub",
      avatar: "DL"
    }
  ] as Testimonial[],

  sampleDataset: [
    { month: "Jan", revenue: 450000, expenses: 210000, customers: 120, profit: 240000, category: "Retail" },
    { month: "Feb", revenue: 520000, expenses: 230000, customers: 145, profit: 290000, category: "Retail" },
    { month: "Mar", revenue: 610000, expenses: 250000, customers: 170, profit: 360000, category: "E-Commerce" },
    { month: "Apr", revenue: 580000, expenses: 240000, customers: 160, profit: 340000, category: "E-Commerce" },
    { month: "May", revenue: 730000, expenses: 280000, customers: 210, profit: 450000, category: "SaaS" },
    { month: "Jun", revenue: 820000, expenses: 310000, customers: 250, profit: 510000, category: "SaaS" },
    { month: "Jul", revenue: 790000, expenses: 295000, customers: 240, profit: 495000, category: "Retail" },
    { month: "Aug", revenue: 910000, expenses: 340000, customers: 285, profit: 570000, category: "E-Commerce" },
    { month: "Sep", revenue: 880000, expenses: 330000, customers: 270, profit: 550000, category: "SaaS" },
    { month: "Oct", revenue: 950000, expenses: 350000, customers: 300, profit: 600000, category: "Retail" },
    { month: "Nov", revenue: 1100000, expenses: 400000, customers: 345, profit: 700000, category: "E-Commerce" },
    { month: "Dec", revenue: 1250000, expenses: 430000, customers: 390, profit: 820000, category: "SaaS" }
  ] as SampleDatasetRow[]
};
