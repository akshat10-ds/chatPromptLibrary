import { Prompt } from './types';

export const prompts: Prompt[] = [
  // ========== RISK ANALYSIS ==========
  {
    id: 'risk-liability-scanner',
    title: 'Liability Risk Scanner',
    description: 'Instantly surface hidden liabilities and indemnification risks that could expose your organization to significant financial harm.',
    valueProp: 'Catch costly exposure before you sign',
    bestFor: ['Legal Teams', 'Risk Officers', 'Executives'],
    timeToComplete: '3-5 minutes',
    tools: ['docusign-ai', 'claude'],
    outputType: 'risk-report',
    difficulty: 'intermediate',
    category: 'risk-analysis',
    tags: ['liability', 'indemnification', 'risk', 'legal-review'],
    author: 'Docusign AI Team',
    createdAt: '2024-12-01',
    content: `Analyze the following agreement for liability and indemnification risks:

**Agreement Type:** [Contract type, e.g., SaaS Agreement, NDA, MSA]
**Your Role:** [Are you the service provider or customer?]
**Industry:** [Your industry for context]

---
[PASTE YOUR AGREEMENT TEXT HERE]
---

Please provide a comprehensive risk analysis including:

**1. LIABILITY EXPOSURE SUMMARY**
- Overall risk level (High/Medium/Low) with rationale
- Estimated potential exposure if quantifiable

**2. INDEMNIFICATION ANALYSIS**
- Indemnification obligations you're taking on
- Indemnification protections you're receiving
- Gaps in mutual indemnification
- Carve-outs and exceptions to note

**3. LIMITATION OF LIABILITY REVIEW**
- Cap amounts and calculations
- Excluded damages (consequential, punitive, etc.)
- Carve-outs to liability caps
- Comparison to industry standards

**4. INSURANCE REQUIREMENTS**
- Required coverage types and amounts
- Whether requirements are reasonable for your organization

**5. RED FLAGS**
- Unlimited liability provisions
- One-sided indemnification
- Missing standard protections
- Unusual or aggressive terms

**6. RECOMMENDED ACTIONS**
- Must-fix items before signing
- Nice-to-have improvements
- Suggested redline language`,
  },
  {
    id: 'risk-termination-analysis',
    title: 'Termination Rights Analyzer',
    description: 'Understand exactly when and how either party can exit the agreement before any surprises arise down the line.',
    valueProp: 'Know your exit options upfront',
    bestFor: ['Contract Managers', 'Procurement', 'Legal Teams'],
    timeToComplete: '2-4 minutes',
    tools: ['docusign-ai', 'claude', 'chatgpt'],
    outputType: 'risk-report',
    difficulty: 'beginner',
    category: 'risk-analysis',
    tags: ['termination', 'exit-rights', 'contract-duration', 'notice'],
    author: 'Docusign AI Team',
    createdAt: '2024-11-28',
    content: `Review the termination provisions in this agreement:

**Agreement Type:** [e.g., Service Agreement, Lease, Employment Contract]
**Contract Duration:** [Initial term if known]

---
[PASTE YOUR AGREEMENT TEXT HERE]
---

Analyze and summarize:

**1. TERMINATION TRIGGERS**
- For-cause termination events (list each)
- For-convenience termination rights
- Automatic termination conditions
- Material breach definitions

**2. NOTICE REQUIREMENTS**
- Required notice periods by termination type
- Notice delivery methods required
- Cure periods available

**3. POST-TERMINATION OBLIGATIONS**
- Survival clauses (what continues after termination)
- Transition assistance requirements
- Data return/destruction requirements
- Final payment obligations

**4. FINANCIAL IMPLICATIONS**
- Early termination fees or penalties
- Refund provisions
- Accrued obligations

**5. BALANCE ASSESSMENT**
- Are termination rights balanced between parties?
- Missing protections to negotiate
- Recommended additions`,
  },

  // ========== CLAUSE EXTRACTION ==========
  {
    id: 'clause-payment-terms',
    title: 'Payment Terms Extractor',
    description: 'Pull every payment obligation, deadline, and fee structure from complex agreements in seconds flat.',
    valueProp: 'Never miss a payment deadline again',
    bestFor: ['Finance Teams', 'Accounts Payable', 'Contract Managers'],
    timeToComplete: '2-3 minutes',
    tools: ['docusign-ai', 'claude', 'chatgpt'],
    outputType: 'clause-list',
    difficulty: 'beginner',
    category: 'clause-extraction',
    tags: ['payment', 'finance', 'deadlines', 'fees'],
    author: 'Docusign AI Team',
    createdAt: '2024-12-05',
    content: `Extract all payment-related terms from this agreement:

---
[PASTE YOUR AGREEMENT TEXT HERE]
---

Please identify and organize:

**1. PAYMENT SCHEDULE**
- Payment amounts and frequencies
- Due dates and triggers
- Milestone-based payments (if any)

**2. PAYMENT TERMS**
- Net payment terms (Net 30, etc.)
- Accepted payment methods
- Currency requirements
- Invoice requirements

**3. FEES & CHARGES**
- Base fees/pricing
- Variable fees
- One-time charges
- Expense reimbursement terms

**4. ADJUSTMENTS**
- Price escalation clauses
- CPI or inflation adjustments
- True-up provisions
- Volume discounts or tiers

**5. PENALTIES & INTEREST**
- Late payment penalties
- Interest on overdue amounts
- Collection costs

**6. KEY DATES CALENDAR**
Create a simple calendar of all payment-related dates and deadlines.`,
  },
  {
    id: 'clause-ip-rights',
    title: 'IP Rights Identifier',
    description: 'Map exactly who owns what intellectual property before, during, and after the contract ends.',
    valueProp: 'Protect your most valuable assets',
    bestFor: ['Legal Teams', 'Product Teams', 'Executives'],
    timeToComplete: '3-5 minutes',
    tools: ['docusign-ai', 'claude'],
    outputType: 'clause-list',
    difficulty: 'intermediate',
    category: 'clause-extraction',
    tags: ['intellectual-property', 'ip-rights', 'licensing', 'ownership'],
    author: 'Docusign AI Team',
    createdAt: '2024-11-20',
    content: `Analyze all intellectual property provisions in this agreement:

**Your Company Name:** [For context in ownership analysis]
**Agreement Type:** [e.g., Software License, Development Agreement, Partnership]

---
[PASTE YOUR AGREEMENT TEXT HERE]
---

Provide detailed analysis of:

**1. BACKGROUND IP**
- Each party's pre-existing IP
- Licenses granted to background IP
- Restrictions on background IP use

**2. FOREGROUND IP (Newly Created)**
- Who owns new IP created during the agreement?
- Work-for-hire provisions
- Joint ownership arrangements
- Assignment clauses

**3. LICENSES GRANTED**
- Scope (exclusive vs. non-exclusive)
- Territory limitations
- Field of use restrictions
- Sublicensing rights
- Duration

**4. IP PROTECTION OBLIGATIONS**
- Confidentiality requirements
- Security measures
- Notification requirements for breaches

**5. POST-TERMINATION IP RIGHTS**
- What happens to licenses upon termination?
- Rights to continue using developed IP
- Return or destruction requirements

**6. RISK ASSESSMENT**
- Potential gaps in IP protection
- Recommended clarifications`,
  },

  // ========== COMPLIANCE REVIEW ==========
  {
    id: 'compliance-gdpr-check',
    title: 'GDPR Compliance Checker',
    description: 'Verify your agreement meets all GDPR requirements before processing any EU personal data.',
    valueProp: 'Avoid costly GDPR violations',
    bestFor: ['Privacy Officers', 'Legal Teams', 'DPOs'],
    timeToComplete: '4-6 minutes',
    tools: ['docusign-ai', 'claude'],
    outputType: 'compliance-checklist',
    difficulty: 'advanced',
    category: 'compliance-review',
    tags: ['gdpr', 'privacy', 'data-protection', 'eu-compliance'],
    author: 'Docusign AI Team',
    createdAt: '2024-12-08',
    content: `Review this agreement for GDPR compliance:

**Data Processing Role:** [Are you Controller, Processor, or Joint Controller?]
**Types of Personal Data:** [Categories of data being processed]
**Data Subjects:** [Whose data - employees, customers, etc.]

---
[PASTE YOUR AGREEMENT TEXT HERE]
---

Evaluate against GDPR requirements:

**1. REQUIRED CLAUSES CHECKLIST**
- [ ] Subject matter and duration of processing
- [ ] Nature and purpose of processing
- [ ] Type of personal data processed
- [ ] Categories of data subjects
- [ ] Controller's obligations and rights

**2. PROCESSOR OBLIGATIONS (Article 28)**
- [ ] Process only on documented instructions
- [ ] Confidentiality commitments
- [ ] Security measures (Article 32)
- [ ] Sub-processor restrictions and flow-down
- [ ] Assist with data subject rights
- [ ] Assist with security and breach notification
- [ ] Data deletion/return upon termination
- [ ] Audit rights

**3. INTERNATIONAL TRANSFERS**
- Transfer mechanisms in place (SCCs, BCRs, etc.)
- Adequacy of protections
- Required supplementary measures

**4. SECURITY REQUIREMENTS**
- Technical measures specified
- Organizational measures specified
- Incident response procedures

**5. COMPLIANCE GAPS**
- Missing required provisions
- Provisions needing strengthening
- Recommended additional language

**6. OVERALL ASSESSMENT**
- Compliant / Partially Compliant / Non-Compliant
- Priority remediation items`,
  },
  {
    id: 'compliance-soc2-vendor',
    title: 'SOC 2 Vendor Assessment',
    description: 'Evaluate whether your vendor agreements meet SOC 2 security requirements and trust service criteria.',
    valueProp: 'Maintain your security posture through vendors',
    bestFor: ['Security Teams', 'Vendor Management', 'Compliance Officers'],
    timeToComplete: '5-7 minutes',
    tools: ['docusign-ai', 'claude'],
    outputType: 'compliance-checklist',
    difficulty: 'advanced',
    category: 'compliance-review',
    tags: ['soc2', 'security', 'vendor-management', 'audit'],
    author: 'Docusign AI Team',
    createdAt: '2024-11-15',
    content: `Assess this vendor agreement against SOC 2 Trust Service Criteria:

**Vendor Type:** [SaaS, Cloud Infrastructure, Professional Services, etc.]
**Data Handled:** [What data will vendor access?]
**Your SOC 2 Scope:** [Which Trust Service Criteria apply to you?]

---
[PASTE VENDOR AGREEMENT TEXT HERE]
---

Evaluate the agreement against:

**1. SECURITY (CC Series)**
- Access control provisions
- Encryption requirements
- Network security
- Vulnerability management
- Incident response

**2. AVAILABILITY (A Series)**
- Uptime commitments/SLAs
- Disaster recovery requirements
- Business continuity
- Backup requirements

**3. CONFIDENTIALITY (C Series)**
- Data classification handling
- Confidentiality commitments
- Data handling procedures
- Need-to-know restrictions

**4. PROCESSING INTEGRITY (PI Series)**
- Quality assurance requirements
- Error handling
- Processing accuracy

**5. VENDOR MANAGEMENT REQUIREMENTS**
- Right to audit
- SOC 2 report requirements
- Security questionnaire rights
- Subcontractor flow-down

**6. GAP ANALYSIS**
| Requirement | Status | Gap | Recommended Language |
|-------------|--------|-----|---------------------|

**7. RISK RATING**
Overall vendor risk: High/Medium/Low
Recommended actions before signing`,
  },

  // ========== CONTRACT COMPARISON ==========
  {
    id: 'compare-version-diff',
    title: 'Version Comparison Analyzer',
    description: 'Instantly identify every change between contract versions so nothing slips through the cracks.',
    valueProp: 'Catch every change, every time',
    bestFor: ['Legal Teams', 'Contract Managers', 'Negotiators'],
    timeToComplete: '3-5 minutes',
    tools: ['docusign-ai', 'claude', 'chatgpt'],
    outputType: 'comparison-matrix',
    difficulty: 'beginner',
    category: 'contract-comparison',
    tags: ['version-control', 'redlines', 'changes', 'negotiation'],
    author: 'Docusign AI Team',
    createdAt: '2024-12-03',
    content: `Compare these two versions of the agreement and identify all changes:

**ORIGINAL VERSION:**
---
[PASTE ORIGINAL AGREEMENT TEXT HERE]
---

**REVISED VERSION:**
---
[PASTE REVISED AGREEMENT TEXT HERE]
---

Provide a comprehensive comparison:

**1. CHANGE SUMMARY**
- Total number of changes
- Changes by type (additions, deletions, modifications)
- Most significant changes (top 5)

**2. DETAILED CHANGE LOG**
For each change:
| Section | Original Text | New Text | Impact Assessment |
|---------|---------------|----------|-------------------|

**3. RISK ASSESSMENT OF CHANGES**
- Changes that increase your risk
- Changes that decrease your risk
- Neutral changes

**4. FINANCIAL IMPACT**
- Changes affecting pricing or payments
- Changes affecting liability caps
- Changes affecting penalties

**5. TIMELINE IMPACTS**
- Changes to dates or deadlines
- Changes to notice periods
- Changes to term length

**6. RECOMMENDED RESPONSE**
- Accept as-is
- Request further revision
- Reject and counter-propose`,
  },
  {
    id: 'compare-standard-deviation',
    title: 'Standard Terms Deviation Report',
    description: 'See exactly how a proposed contract differs from your standard template or industry norms.',
    valueProp: 'Negotiate from a position of knowledge',
    bestFor: ['Legal Teams', 'Procurement', 'Sales Operations'],
    timeToComplete: '4-6 minutes',
    tools: ['docusign-ai', 'claude'],
    outputType: 'comparison-matrix',
    difficulty: 'intermediate',
    category: 'contract-comparison',
    tags: ['standards', 'deviations', 'templates', 'negotiation'],
    author: 'Docusign AI Team',
    createdAt: '2024-11-25',
    content: `Compare this proposed agreement against standard terms:

**YOUR STANDARD TEMPLATE (or describe standard terms):**
---
[PASTE YOUR STANDARD TEMPLATE OR DESCRIBE YOUR STANDARD POSITIONS]
---

**PROPOSED/COUNTERPARTY AGREEMENT:**
---
[PASTE THE PROPOSED AGREEMENT]
---

Generate a deviation analysis:

**1. EXECUTIVE SUMMARY**
- Overall deviation level (Minor/Moderate/Significant)
- Key areas of concern
- Recommended approach

**2. DEVIATION TABLE**
| Provision | Your Standard | Proposed Terms | Deviation Risk | Recommendation |
|-----------|---------------|----------------|----------------|----------------|

**3. HIGH-RISK DEVIATIONS**
Detailed analysis of each significant deviation:
- What's different
- Why it matters
- Potential consequences
- Negotiation recommendation

**4. MODERATE-RISK DEVIATIONS**
[Similar format, less detail]

**5. ACCEPTABLE DEVIATIONS**
Deviations that are reasonable or market-standard

**6. NEGOTIATION PLAYBOOK**
- Must-have positions (non-negotiable)
- Should-have positions (push for)
- Nice-to-have positions (trade away if needed)
- Suggested compromise language`,
  },

  // ========== SUMMARY & INSIGHTS ==========
  {
    id: 'summary-executive-brief',
    title: 'Executive Summary Generator',
    description: 'Transform complex agreements into clear, actionable executive summaries that leadership can digest in minutes.',
    valueProp: 'Brief leadership without the legalese',
    bestFor: ['Executives', 'Deal Teams', 'Board Presentations'],
    timeToComplete: '2-3 minutes',
    tools: ['docusign-ai', 'claude', 'chatgpt', 'gemini'],
    outputType: 'executive-summary',
    difficulty: 'beginner',
    category: 'summary-insights',
    tags: ['executive-summary', 'leadership', 'deal-review', 'overview'],
    author: 'Docusign AI Team',
    createdAt: '2024-12-10',
    content: `Create an executive summary of this agreement:

**Agreement Type:** [e.g., Partnership Agreement, Acquisition, SaaS Contract]
**Audience:** [Who will read this summary?]
**Key Concerns:** [Any specific areas to highlight?]

---
[PASTE YOUR AGREEMENT TEXT HERE]
---

Generate an executive-ready summary:

**DEAL AT A GLANCE**
- Parties:
- Agreement Type:
- Effective Date:
- Term:
- Total Value:

**KEY TERMS (5-7 bullets)**
The most important things decision-makers need to know

**FINANCIAL SUMMARY**
- Pricing structure
- Payment terms
- Financial exposure/caps

**RIGHTS & OBLIGATIONS**
What we're committing to:
- [Key obligations]

What we're receiving:
- [Key rights]

**RISK SNAPSHOT**
- High Risk:
- Medium Risk:
- Mitigated:

**CRITICAL DATES**
| Date | Milestone/Deadline |
|------|-------------------|

**RECOMMENDATION**
[Approve / Approve with Conditions / Request Changes / Reject]

Rationale: [2-3 sentences]`,
  },
  {
    id: 'summary-obligation-tracker',
    title: 'Obligations & Deadlines Mapper',
    description: 'Extract every obligation and deadline into a trackable action list your team can actually execute on.',
    valueProp: 'Never miss a contractual commitment',
    bestFor: ['Contract Managers', 'Project Managers', 'Operations'],
    timeToComplete: '3-4 minutes',
    tools: ['docusign-ai', 'claude', 'chatgpt'],
    outputType: 'executive-summary',
    difficulty: 'beginner',
    category: 'summary-insights',
    tags: ['obligations', 'deadlines', 'tracking', 'compliance'],
    author: 'Docusign AI Team',
    createdAt: '2024-11-22',
    content: `Extract all obligations and deadlines from this agreement:

**Your Company Name:** [For identifying your obligations]

---
[PASTE YOUR AGREEMENT TEXT HERE]
---

Create a comprehensive obligations map:

**1. YOUR OBLIGATIONS**
| Obligation | Section | Deadline/Frequency | Owner (Suggested) | Status |
|------------|---------|-------------------|-------------------|--------|

**2. COUNTERPARTY OBLIGATIONS**
| Obligation | Section | Deadline/Frequency | How to Verify |
|------------|---------|-------------------|---------------|

**3. MUTUAL OBLIGATIONS**
| Obligation | Section | Deadline/Frequency |
|------------|---------|-------------------|

**4. CRITICAL DEADLINES**
| Date | Action Required | Consequence of Missing |
|------|-----------------|----------------------|

**5. RECURRING OBLIGATIONS**
| Obligation | Frequency | Next Due |
|------------|-----------|----------|

**6. NOTIFICATION REQUIREMENTS**
| Event | Notice Period | Method | To Whom |
|-------|---------------|--------|---------|

**7. SUGGESTED CALENDAR REMINDERS**
Actionable list of calendar entries to create`,
  },

  // ========== NEGOTIATION SUPPORT ==========
  {
    id: 'negotiate-redline-generator',
    title: 'Smart Redline Generator',
    description: 'Get AI-powered revision suggestions with alternative language ready to propose to the other party.',
    valueProp: 'Negotiate smarter, close faster',
    bestFor: ['Legal Teams', 'Negotiators', 'Deal Teams'],
    timeToComplete: '5-8 minutes',
    tools: ['docusign-ai', 'claude'],
    outputType: 'negotiation-brief',
    difficulty: 'intermediate',
    category: 'negotiation-support',
    tags: ['redlines', 'negotiation', 'revisions', 'deal-strategy'],
    author: 'Docusign AI Team',
    createdAt: '2024-12-06',
    content: `Generate strategic redlines for this agreement:

**Your Position:** [Service Provider / Customer / Partner]
**Negotiation Priority:** [Speed to close / Maximum protection / Balanced]
**Known Constraints:** [Any non-negotiable requirements from your side?]

---
[PASTE YOUR AGREEMENT TEXT HERE]
---

Provide negotiation-ready redlines:

**1. PRIORITY REDLINES (Must Have)**
For each critical revision:
- Current Language: "[Quote current text]"
- Issue: [What's wrong with this]
- Proposed Revision: "[Your suggested language]"
- Rationale: [Talking points for negotiation]
- Fallback Position: [Minimum acceptable alternative]

**2. IMPORTANT REDLINES (Should Have)**
[Same format]

**3. NICE-TO-HAVE REDLINES**
[Same format]

**4. PROVISIONS TO ACCEPT**
List of provisions that are acceptable as-is (builds goodwill)

**5. TRADING STRATEGY**
- Provisions you can concede on
- What to ask for in return
- Suggested package deals

**6. NEGOTIATION TALKING POINTS**
Key arguments to support your positions

**7. RISK OF WALKING AWAY**
What you lose if negotiations fail`,
  },
  {
    id: 'negotiate-leverage-finder',
    title: 'Leverage Point Identifier',
    description: 'Discover hidden negotiation advantages and weaknesses in any contract position before you engage.',
    valueProp: 'Find your edge in every negotiation',
    bestFor: ['Negotiators', 'Legal Teams', 'Executives'],
    timeToComplete: '4-6 minutes',
    tools: ['docusign-ai', 'claude'],
    outputType: 'negotiation-brief',
    difficulty: 'advanced',
    category: 'negotiation-support',
    tags: ['leverage', 'strategy', 'negotiation', 'deal-making'],
    author: 'Docusign AI Team',
    createdAt: '2024-11-30',
    content: `Analyze this agreement for negotiation leverage:

**Context:**
- Your Role: [Buyer/Seller/Partner]
- Deal Importance: [Critical/Important/Routine]
- Alternatives: [Do you have other options?]
- Timeline Pressure: [Who needs this deal more urgently?]

---
[PASTE YOUR AGREEMENT TEXT HERE]
---

Identify negotiation leverage:

**1. YOUR LEVERAGE POINTS**
Advantages in your position:
- [Leverage point 1]: How to use it
- [Leverage point 2]: How to use it

**2. COUNTERPARTY'S LEVERAGE**
Where they have the upper hand:
- [Their advantage 1]: How to mitigate
- [Their advantage 2]: How to mitigate

**3. IMBALANCED PROVISIONS**
Terms that favor one party disproportionately:
| Provision | Favors | Rebalancing Strategy |
|-----------|--------|---------------------|

**4. MARKET COMPARISON**
How terms compare to industry standard:
- Above market (your favor)
- At market
- Below market (their favor)

**5. HIDDEN VALUE**
Provisions that could be modified for mutual benefit

**6. STRATEGIC RECOMMENDATIONS**
- Opening position
- Target outcome
- Walk-away point
- Sequence of asks

**7. POWER DYNAMICS**
Assessment of overall negotiating position: Strong/Balanced/Weak`,
  },
];
