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

  // ========== NEW PROMPTS - RISK ANALYSIS ==========
  {
    id: 'risk-force-majeure',
    title: 'Force Majeure Analyzer',
    description: 'Analyze force majeure clauses to understand your business continuity risks and rights when extraordinary events occur.',
    valueProp: 'Be prepared for the unexpected',
    bestFor: ['Legal Teams', 'Risk Officers', 'Operations'],
    timeToComplete: '3-4 minutes',
    tools: ['docusign-ai', 'claude'],
    outputType: 'risk-report',
    difficulty: 'intermediate',
    category: 'risk-analysis',
    tags: ['force-majeure', 'business-continuity', 'risk', 'pandemic'],
    author: 'Docusign AI Team',
    createdAt: '2024-12-15',
    content: `Analyze the force majeure provisions in this agreement:

**Agreement Type:** [e.g., Supply Agreement, Service Contract, Lease]
**Your Role:** [Which party are you?]
**Critical Dependencies:** [What business functions depend on this agreement?]

---
[PASTE YOUR AGREEMENT TEXT HERE]
---

Provide a comprehensive force majeure analysis:

**1. TRIGGERING EVENTS**
- Events explicitly listed as force majeure
- Events implicitly covered
- Events notably excluded
- Is pandemic/epidemic covered?
- Are government actions covered?

**2. NOTICE REQUIREMENTS**
- How quickly must you notify the other party?
- What form must notice take?
- What information must be included?
- Consequences of late notification

**3. PERFORMANCE IMPLICATIONS**
- Is performance suspended or excused?
- Duration limits on suspension
- Obligation to mitigate
- Partial performance requirements

**4. TERMINATION RIGHTS**
- When can either party terminate?
- Notice period for termination
- Financial consequences of termination
- Wind-down obligations

**5. RISK ASSESSMENT**
| Scenario | Coverage Status | Your Risk Level |
|----------|-----------------|-----------------|
| Pandemic | | |
| Natural disaster | | |
| Government action | | |
| Supply chain disruption | | |
| Cyber attack | | |

**6. GAP ANALYSIS**
- Missing protections
- Ambiguous language
- Recommended additions

**7. BUSINESS CONTINUITY RECOMMENDATIONS**
- Steps to take before an event occurs
- Response plan if force majeure is invoked`,
  },
  {
    id: 'risk-auto-renewal',
    title: 'Auto-Renewal Trap Detector',
    description: 'Spot auto-renewal and evergreen clauses that could lock you into unwanted long-term commitments.',
    valueProp: 'Avoid getting locked in',
    bestFor: ['Procurement', 'Finance Teams', 'Contract Managers'],
    timeToComplete: '2-3 minutes',
    tools: ['docusign-ai', 'claude', 'chatgpt'],
    outputType: 'risk-report',
    difficulty: 'beginner',
    category: 'risk-analysis',
    tags: ['auto-renewal', 'evergreen', 'cancellation', 'deadlines'],
    author: 'Docusign AI Team',
    createdAt: '2024-12-15',
    content: `Analyze this agreement for auto-renewal and evergreen provisions:

**Agreement Type:** [e.g., SaaS Subscription, Service Agreement, Lease]
**Current Date:** [Today's date for deadline calculations]

---
[PASTE YOUR AGREEMENT TEXT HERE]
---

Identify renewal traps and key dates:

**1. INITIAL TERM**
- Start date:
- End date:
- Initial term length:

**2. RENEWAL MECHANICS**
- Does the contract auto-renew? Yes/No
- Renewal term length:
- Number of allowed renewals:
- Price changes upon renewal:

**3. OPT-OUT REQUIREMENTS**
- Notice period required to cancel:
- Exact deadline to cancel (calculate from dates):
- Required notice method (email, certified mail, etc.):
- Who must receive notice:

**4. CANCELLATION RESTRICTIONS**
- Can you cancel mid-term?
- Early termination penalties:
- Conditions that allow early exit:

**5. FINANCIAL IMPLICATIONS**
- Cost if you miss the cancellation window:
- Total commitment if auto-renewed:
- Price escalation clauses:

**6. RED FLAGS**
- Unreasonably long renewal terms
- Excessive notice periods (>90 days)
- Silent renewal (no reminder obligation)
- Penalty clauses
- Missing cancellation procedures

**7. CALENDAR REMINDERS TO SET**
| Reminder | Date | Action Required |
|----------|------|-----------------|
| First warning | [90 days before deadline] | Begin cancellation evaluation |
| Final warning | [30 days before deadline] | Send cancellation notice |
| Deadline | [Exact date] | Last day to cancel |

**8. RECOMMENDED NEGOTIATION POINTS**
- Suggested modifications to renewal terms
- Alternative language to propose`,
  },

  // ========== NEW PROMPTS - CLAUSE EXTRACTION ==========
  {
    id: 'clause-confidentiality',
    title: 'Confidentiality & NDA Scope Extractor',
    description: 'Extract and analyze all confidentiality provisions including definitions, exceptions, duration, and permitted disclosures.',
    valueProp: 'Understand exactly what you must protect',
    bestFor: ['Legal Teams', 'Business Development', 'Product Teams'],
    timeToComplete: '3-4 minutes',
    tools: ['docusign-ai', 'claude'],
    outputType: 'clause-list',
    difficulty: 'intermediate',
    category: 'clause-extraction',
    tags: ['confidentiality', 'nda', 'trade-secrets', 'disclosure'],
    author: 'Docusign AI Team',
    createdAt: '2024-12-15',
    content: `Extract all confidentiality provisions from this agreement:

**Agreement Type:** [NDA, MSA with confidentiality section, Employment Agreement, etc.]
**Your Role:** [Disclosing Party / Receiving Party / Mutual]

---
[PASTE YOUR AGREEMENT TEXT HERE]
---

Provide a comprehensive confidentiality analysis:

**1. DEFINITION OF CONFIDENTIAL INFORMATION**
- What's included in the definition:
- Marking/designation requirements:
- Oral disclosure requirements:
- Is the definition broad or narrow?

**2. EXCLUSIONS FROM CONFIDENTIALITY**
Standard exclusions present:
- [ ] Publicly known information
- [ ] Already known before disclosure
- [ ] Independently developed
- [ ] Received from third party
- [ ] Other exclusions:

**3. PERMITTED USES**
- What can you do with the information?
- Internal sharing restrictions
- Need-to-know requirements
- Contractor/affiliate sharing rules

**4. REQUIRED DISCLOSURES**
- Legal/regulatory disclosure procedures
- Notice requirements before disclosure
- Cooperation obligations
- Protective order requirements

**5. PROTECTION OBLIGATIONS**
- Standard of care required
- Specific security measures required
- Employee/contractor requirements
- Breach notification requirements

**6. DURATION**
- Confidentiality period:
- Different periods for different info types?
- Trade secret perpetual protection?
- Return/destruction timeline:

**7. RETURN/DESTRUCTION**
- When must you return information?
- Destruction certification required?
- Exceptions for archival copies?
- Surviving obligations

**8. RISK ASSESSMENT**
| Aspect | Your Risk Level | Notes |
|--------|-----------------|-------|
| Scope of obligations | | |
| Duration burden | | |
| Breach exposure | | |

**9. RECOMMENDED CLARIFICATIONS**
- Ambiguous terms to address
- Missing protections to add`,
  },
  {
    id: 'clause-warranties',
    title: 'Warranty & Representation Finder',
    description: 'Find and categorize all warranties, representations, and disclaimers to understand what guarantees you are giving and receiving.',
    valueProp: 'Know what promises are being made',
    bestFor: ['Legal Teams', 'Procurement', 'Sales Operations'],
    timeToComplete: '3-4 minutes',
    tools: ['docusign-ai', 'claude', 'chatgpt'],
    outputType: 'clause-list',
    difficulty: 'beginner',
    category: 'clause-extraction',
    tags: ['warranties', 'representations', 'disclaimers', 'liability'],
    author: 'Docusign AI Team',
    createdAt: '2024-12-15',
    content: `Extract all warranties, representations, and disclaimers from this agreement:

**Agreement Type:** [Product Sale, SaaS, Service Agreement, etc.]
**Your Role:** [Provider/Seller or Customer/Buyer]

---
[PASTE YOUR AGREEMENT TEXT HERE]
---

Catalog all warranty provisions:

**1. REPRESENTATIONS MADE**
Statements of fact being affirmed:

| Representation | Made By | Section | Risk if Untrue |
|----------------|---------|---------|----------------|

**2. EXPRESS WARRANTIES**
Specific promises about performance/quality:

| Warranty | Provider | Duration | Remedy if Breached |
|----------|----------|----------|-------------------|

**3. IMPLIED WARRANTIES**
- Are implied warranties disclaimed?
- Merchantability: Included/Disclaimed
- Fitness for particular purpose: Included/Disclaimed
- Non-infringement: Included/Disclaimed

**4. SERVICE LEVEL WARRANTIES (if applicable)**
- Uptime guarantees:
- Performance metrics:
- Support response times:
- Remedies for failure:

**5. DISCLAIMERS**
What is explicitly NOT warranted:
- [ ] "As-is" provisions
- [ ] Specific exclusions
- [ ] Third-party components
- [ ] Future performance

**6. WARRANTY PERIODS**
| Warranty Type | Duration | Start Date |
|---------------|----------|------------|

**7. REMEDY LIMITATIONS**
- Exclusive remedies specified:
- Repair/replace limitations:
- Refund limitations:
- Cap on warranty claims:

**8. GAP ANALYSIS**
| Expected Warranty | Present? | Notes |
|-------------------|----------|-------|
| Product works as described | | |
| Services performed professionally | | |
| No IP infringement | | |
| Compliance with laws | | |
| Authority to enter agreement | | |

**9. RECOMMENDATIONS**
- Missing warranties to request
- Overbroad disclaimers to negotiate
- Suggested warranty language`,
  },

  // ========== NEW PROMPTS - COMPLIANCE REVIEW ==========
  {
    id: 'compliance-hipaa',
    title: 'HIPAA Compliance Checker',
    description: 'Verify your Business Associate Agreement meets all HIPAA requirements for handling protected health information.',
    valueProp: 'Protect patient data and avoid penalties',
    bestFor: ['Privacy Officers', 'Healthcare Legal Teams', 'Compliance Officers'],
    timeToComplete: '5-7 minutes',
    tools: ['docusign-ai', 'claude'],
    outputType: 'compliance-checklist',
    difficulty: 'advanced',
    category: 'compliance-review',
    tags: ['hipaa', 'healthcare', 'phi', 'baa'],
    author: 'Docusign AI Team',
    createdAt: '2024-12-15',
    content: `Review this agreement for HIPAA compliance:

**Agreement Type:** [Business Associate Agreement, Vendor Contract, etc.]
**Your Role:** [Covered Entity or Business Associate]
**PHI Involved:** [What types of protected health information?]

---
[PASTE YOUR AGREEMENT TEXT HERE]
---

Evaluate against HIPAA requirements:

**1. REQUIRED BAA PROVISIONS (45 CFR 164.504(e))**
- [ ] Permitted uses and disclosures established
- [ ] Prohibition on unauthorized uses/disclosures
- [ ] Appropriate safeguards requirement
- [ ] Subcontractor flow-down requirements
- [ ] Individual access rights provisions
- [ ] Amendment rights provisions
- [ ] Accounting of disclosures provisions
- [ ] HHS audit access provision
- [ ] Return/destruction of PHI at termination
- [ ] Breach reporting requirements
- [ ] Termination rights for material breach

**2. SECURITY RULE REQUIREMENTS**
- Administrative safeguards specified?
- Physical safeguards specified?
- Technical safeguards specified?
- Encryption requirements?
- Access control requirements?

**3. BREACH NOTIFICATION PROVISIONS**
- Breach discovery deadline:
- Notification timeline (must be within 60 days):
- Required notification content:
- Investigation cooperation:

**4. SUBCONTRACTOR MANAGEMENT**
- Subcontractor use restrictions
- Flow-down requirement for BAA terms
- Approval requirements
- Liability for subcontractors

**5. PHI HANDLING SPECIFICS**
- Minimum necessary standard addressed?
- De-identification provisions?
- Restrictions on marketing use?
- Research use limitations?

**6. TERMINATION AND PHI DISPOSITION**
- Return of PHI process
- Destruction certification
- Retention exceptions
- Surviving obligations

**7. COMPLIANCE GAPS**
| HIPAA Requirement | Status | Gap/Issue | Priority |
|-------------------|--------|-----------|----------|
| | Present/Missing/Partial | | High/Med/Low |

**8. OVERALL ASSESSMENT**
- Compliance Status: Compliant / Partially Compliant / Non-Compliant
- Risk Level: High / Medium / Low
- Recommended Actions:`,
  },
  {
    id: 'compliance-ccpa',
    title: 'CCPA Privacy Compliance',
    description: 'Assess whether your agreement meets California Consumer Privacy Act requirements for handling personal information.',
    valueProp: 'Ensure California privacy compliance',
    bestFor: ['Privacy Officers', 'Legal Teams', 'Compliance Officers'],
    timeToComplete: '4-6 minutes',
    tools: ['docusign-ai', 'claude'],
    outputType: 'compliance-checklist',
    difficulty: 'advanced',
    category: 'compliance-review',
    tags: ['ccpa', 'california', 'privacy', 'consumer-rights'],
    author: 'Docusign AI Team',
    createdAt: '2024-12-15',
    content: `Review this agreement for CCPA/CPRA compliance:

**Agreement Type:** [Service Provider Agreement, Data Processing Agreement, etc.]
**Relationship:** [Are you the Business or Service Provider under CCPA?]
**Data Involved:** [Categories of personal information]

---
[PASTE YOUR AGREEMENT TEXT HERE]
---

Evaluate against CCPA requirements:

**1. REQUIRED SERVICE PROVIDER PROVISIONS**
- [ ] Prohibits selling/sharing personal information
- [ ] Prohibits retention beyond business purpose
- [ ] Prohibits use outside direct business relationship
- [ ] Certification of understanding obligations
- [ ] Allows business to verify compliance

**2. DATA HANDLING RESTRICTIONS**
- [ ] Processing limited to specified purposes
- [ ] Combining data restrictions
- [ ] Commercial purpose limitations
- [ ] Cross-context behavioral advertising restrictions

**3. CONSUMER RIGHTS SUPPORT**
- [ ] Supports right to know/access
- [ ] Supports right to delete
- [ ] Supports right to correct
- [ ] Supports opt-out of sale/sharing
- [ ] Response timeline commitments

**4. SUBCONTRACTOR REQUIREMENTS**
- Notice before engaging subcontractors?
- Contractual flow-down required?
- Subcontractor limitations?

**5. SENSITIVE PERSONAL INFORMATION**
- Sensitive PI handled? (SSN, financial, health, etc.)
- Additional protections specified?
- Purpose limitations for sensitive PI?

**6. SECURITY REQUIREMENTS**
- Reasonable security measures required?
- Breach notification provisions?
- Specific security standards referenced?

**7. DATA RETENTION & DELETION**
- Retention period specified?
- Deletion upon request procedure?
- Deletion upon termination?
- Certification of deletion?

**8. COMPLIANCE ASSESSMENT**
| CCPA Requirement | Status | Notes |
|------------------|--------|-------|
| Business purpose limitation | | |
| No sale/sharing | | |
| Consumer rights support | | |
| Subcontractor controls | | |
| Security measures | | |
| Audit/verification rights | | |

**9. GAPS AND RECOMMENDATIONS**
- Missing provisions:
- Provisions needing strengthening:
- Recommended language:`,
  },

  // ========== NEW PROMPTS - CONTRACT COMPARISON ==========
  {
    id: 'compare-amendment-impact',
    title: 'Amendment Impact Analyzer',
    description: 'Understand exactly how a proposed amendment changes the original agreement terms and assess cumulative impact.',
    valueProp: 'See the full picture of contract changes',
    bestFor: ['Legal Teams', 'Contract Managers', 'Procurement'],
    timeToComplete: '4-5 minutes',
    tools: ['docusign-ai', 'claude', 'chatgpt'],
    outputType: 'comparison-matrix',
    difficulty: 'intermediate',
    category: 'contract-comparison',
    tags: ['amendments', 'modifications', 'changes', 'history'],
    author: 'Docusign AI Team',
    createdAt: '2024-12-15',
    content: `Analyze the impact of this amendment on the original agreement:

**ORIGINAL AGREEMENT:**
---
[PASTE ORIGINAL AGREEMENT OR RELEVANT SECTIONS]
---

**PROPOSED AMENDMENT:**
---
[PASTE THE AMENDMENT TEXT]
---

**PREVIOUS AMENDMENTS (if any):**
---
[PASTE ANY PRIOR AMENDMENTS OR LIST THEIR KEY CHANGES]
---

Provide comprehensive amendment analysis:

**1. AMENDMENT OVERVIEW**
- Amendment number/identifier:
- Effective date:
- Purpose stated:
- Sections modified:

**2. TERM-BY-TERM IMPACT**
| Original Provision | Amendment Change | Net Effect |
|--------------------|------------------|------------|

**3. FINANCIAL IMPACT**
- Pricing changes:
- Payment term changes:
- Liability cap changes:
- Fee adjustments:
- Total financial impact: +$X / -$X

**4. RIGHTS IMPACT**
Rights gained:
-

Rights lost or limited:
-

**5. OBLIGATIONS IMPACT**
New obligations:
-

Removed obligations:
-

Modified obligations:
-

**6. TERM & TIMELINE CHANGES**
- Contract duration impact
- Deadline changes
- Milestone modifications
- Renewal term changes

**7. CUMULATIVE EFFECT**
If prior amendments exist:
- How this amendment interacts with previous changes
- Current state of key provisions after all amendments
- Provisions that have been amended multiple times

**8. CONFLICT CHECK**
- Does this amendment conflict with unchanged provisions?
- Internal consistency issues
- Definition conflicts

**9. RISK ASSESSMENT**
| Change | Risk Level | Justification |
|--------|------------|---------------|

**10. RECOMMENDATION**
- Accept as proposed
- Request modifications
- Reject

Key negotiation points if modifications needed:`,
  },
  {
    id: 'compare-conflict-detector',
    title: 'Multi-Contract Conflict Detector',
    description: 'Find conflicts and inconsistencies between related agreements like MSAs, SOWs, NDAs, and amendments.',
    valueProp: 'Eliminate contract contradictions',
    bestFor: ['Legal Teams', 'Contract Managers', 'Procurement'],
    timeToComplete: '5-7 minutes',
    tools: ['docusign-ai', 'claude'],
    outputType: 'comparison-matrix',
    difficulty: 'advanced',
    category: 'contract-comparison',
    tags: ['conflicts', 'consistency', 'master-agreement', 'hierarchy'],
    author: 'Docusign AI Team',
    createdAt: '2024-12-15',
    content: `Analyze these related agreements for conflicts and inconsistencies:

**DOCUMENT 1: [e.g., Master Services Agreement]**
---
[PASTE FIRST AGREEMENT]
---

**DOCUMENT 2: [e.g., Statement of Work]**
---
[PASTE SECOND AGREEMENT]
---

**DOCUMENT 3 (if applicable): [e.g., NDA or Amendment]**
---
[PASTE THIRD AGREEMENT IF APPLICABLE]
---

Identify all conflicts and inconsistencies:

**1. DOCUMENT HIERARCHY**
Stated order of precedence:
- Which document controls in case of conflict?
- Is the hierarchy clearly stated?
- Are there exceptions to the hierarchy?

**2. DEFINITIONAL CONFLICTS**
| Term | Definition in Doc 1 | Definition in Doc 2 | Conflict? |
|------|--------------------|--------------------|-----------|

**3. COMMERCIAL TERM CONFLICTS**
| Term | Doc 1 | Doc 2 | Resolution |
|------|-------|-------|------------|
| Pricing | | | |
| Payment terms | | | |
| Term/duration | | | |

**4. LEGAL TERM CONFLICTS**
| Provision | Doc 1 | Doc 2 | Which Controls? |
|-----------|-------|-------|-----------------|
| Liability cap | | | |
| Indemnification | | | |
| Termination | | | |
| Governing law | | | |
| Dispute resolution | | | |

**5. OBLIGATION CONFLICTS**
Conflicting requirements between documents:
-

**6. TIMELINE CONFLICTS**
Inconsistent dates or deadlines:
-

**7. SILENT VS. ADDRESSED**
Topics addressed in one document but not others:
| Topic | Doc 1 | Doc 2 | Gap Risk |
|-------|-------|-------|----------|

**8. FLOW-DOWN ISSUES**
- Do MSA terms properly flow to SOW?
- Are SOW-specific terms properly carved out?
- Amendment incorporation issues

**9. CONFLICT RESOLUTION RECOMMENDATIONS**
| Conflict | Recommended Resolution | Priority |
|----------|----------------------|----------|

**10. OVERALL ASSESSMENT**
- Consistency Level: High / Medium / Low
- Risk of Disputes: High / Medium / Low
- Recommended Actions:`,
  },

  // ========== NEW PROMPTS - SUMMARY & INSIGHTS ==========
  {
    id: 'summary-plain-language',
    title: 'Plain Language Translator',
    description: 'Convert complex legal language into clear, plain English that anyone in your organization can understand.',
    valueProp: 'Make contracts accessible to everyone',
    bestFor: ['Business Teams', 'Executives', 'Non-Legal Stakeholders'],
    timeToComplete: '2-3 minutes',
    tools: ['docusign-ai', 'claude', 'chatgpt', 'gemini'],
    outputType: 'executive-summary',
    difficulty: 'beginner',
    category: 'summary-insights',
    tags: ['plain-language', 'simplification', 'clarity', 'accessibility'],
    author: 'Docusign AI Team',
    createdAt: '2024-12-15',
    content: `Translate this agreement into plain, easy-to-understand language:

**Audience:** [Who needs to understand this? Sales team, executives, operations, etc.]
**Focus Areas:** [Any specific sections to emphasize?]

---
[PASTE YOUR AGREEMENT TEXT HERE]
---

Provide a plain language translation:

**1. WHAT IS THIS AGREEMENT?**
In one paragraph, explain what this contract is and why it matters.

**2. THE PARTIES**
Who's involved and what role does each play?
- Party A:
- Party B:

**3. WHAT WE'RE AGREEING TO DO**
In bullet points, our main commitments:
-

**4. WHAT THEY'RE AGREEING TO DO**
In bullet points, their main commitments:
-

**5. THE MONEY PART**
- How much:
- When we pay:
- What could change the price:

**6. HOW LONG THIS LASTS**
- Start date:
- End date:
- How to renew or cancel:

**7. WHAT COULD GO WRONG**
The main risks in plain terms:
- Risk 1:
- Risk 2:

**8. HOW TO GET OUT**
When and how either side can end this:
-

**9. THE FINE PRINT THAT MATTERS**
Important details often overlooked:
-

**10. JARGON GLOSSARY**
| Legal Term | Plain English Meaning |
|------------|----------------------|

**11. QUESTIONS TO ASK BEFORE SIGNING**
Things to clarify or consider:
-

**12. ONE-PARAGRAPH SUMMARY**
If you only read one thing, read this:`,
  },
  {
    id: 'summary-key-dates',
    title: 'Key Dates Calendar Generator',
    description: 'Extract every important date, deadline, and milestone into a structured calendar you can import and track.',
    valueProp: 'Never miss a critical date',
    bestFor: ['Contract Managers', 'Project Managers', 'Operations'],
    timeToComplete: '2-3 minutes',
    tools: ['docusign-ai', 'claude', 'chatgpt'],
    outputType: 'executive-summary',
    difficulty: 'beginner',
    category: 'summary-insights',
    tags: ['dates', 'calendar', 'deadlines', 'milestones'],
    author: 'Docusign AI Team',
    createdAt: '2024-12-15',
    content: `Extract all key dates and deadlines from this agreement:

**Contract Start Date:** [If known]
**Today's Date:** [For calculating specific dates]

---
[PASTE YOUR AGREEMENT TEXT HERE]
---

Generate a comprehensive date calendar:

**1. CONTRACT LIFECYCLE DATES**
| Date Type | Date/Calculation | Action Required |
|-----------|------------------|-----------------|
| Effective Date | | |
| Initial Term End | | |
| Renewal Date | | |
| Final Expiration | | |

**2. PAYMENT DATES**
| Payment | Due Date | Amount | Recurring? |
|---------|----------|--------|------------|

**3. NOTICE DEADLINES**
| Notice Type | Deadline | Singnificance |
|-------------|----------|---------------|
| Termination notice | | |
| Renewal opt-out | | |
| Price objection | | |

**4. PERFORMANCE MILESTONES**
| Milestone | Due Date | Deliverable |
|-----------|----------|-------------|

**5. REPORTING DEADLINES**
| Report | Frequency | Due Date |
|--------|-----------|----------|

**6. COMPLIANCE DATES**
| Requirement | Deadline | Consequence of Missing |
|-------------|----------|----------------------|

**7. REVIEW PERIODS**
| Item for Review | Review Window | Decision Deadline |
|-----------------|---------------|-------------------|

**8. CALCULATED REMINDERS**
Based on the deadlines above, set these reminders:

| Reminder | Date | Days Before Deadline | Action |
|----------|------|---------------------|--------|
| | | 90 days | Start planning |
| | | 60 days | Begin process |
| | | 30 days | Final warning |
| | | 7 days | Urgent action |

**9. RECURRING DATE PATTERN**
Monthly:
-
Quarterly:
-
Annually:
-

**10. CALENDAR EXPORT FORMAT**
Ready to import (CSV-style):
\`\`\`
Date,Event,Description,Reminder Days
[Date],[Event Name],[Description],[30]
\`\`\``,
  },

  // ========== NEW PROMPTS - NEGOTIATION SUPPORT ==========
  {
    id: 'negotiate-counter-proposal',
    title: 'Counter-Proposal Generator',
    description: 'Generate specific, professionally-worded counter-proposal language for unfavorable contract terms.',
    valueProp: 'Respond with confidence and precision',
    bestFor: ['Legal Teams', 'Negotiators', 'Procurement'],
    timeToComplete: '4-6 minutes',
    tools: ['docusign-ai', 'claude'],
    outputType: 'negotiation-brief',
    difficulty: 'intermediate',
    category: 'negotiation-support',
    tags: ['counter-proposal', 'alternatives', 'drafting', 'response'],
    author: 'Docusign AI Team',
    createdAt: '2024-12-15',
    content: `Generate counter-proposal language for this agreement:

**Your Role:** [Customer / Vendor / Partner]
**Negotiation Stage:** [Initial review / Second round / Final push]
**Key Concerns:** [What provisions are most problematic?]
**Your Priorities:** [What matters most? Speed, protection, cost?]

---
[PASTE YOUR AGREEMENT TEXT HERE]
---

Generate professional counter-proposals:

**1. EXECUTIVE SUMMARY**
Overview of recommended counter-positions (3-5 sentences)

**2. PRIORITY COUNTER-PROPOSALS**
For each critical issue:

**Issue A: [Name of Provision]**
- Their Language: "[Quote their text]"
- Problem: [Why this is unacceptable]
- Counter-Proposal: "[Your proposed language]"
- Rationale for Them: [Why they should accept - frame benefits]
- Fallback Position: "[Minimum acceptable alternative]"

**Issue B: [Name of Provision]**
[Same format]

**Issue C: [Name of Provision]**
[Same format]

**3. MODERATE CONCERNS**
| Provision | Their Position | Counter-Proposal | Willingness to Flex |
|-----------|----------------|------------------|---------------------|

**4. ACCEPTABLE TERMS**
Provisions to explicitly accept (builds goodwill):
-

**5. NEW PROVISIONS TO PROPOSE**
Terms not in their draft that you should add:
- Proposed new clause:
- Language:
- Justification:

**6. RESPONSE EMAIL DRAFT**
Professional email to accompany your redlines:
---
Subject: [Agreement Name] - Counter-Proposal

[Draft email text]
---

**7. NEGOTIATION TALKING POINTS**
If they push back, use these arguments:
- On Issue A:
- On Issue B:
- On Issue C:

**8. PACKAGE DEAL OPTIONS**
Potential trades to propose:
- "We'll accept X if you agree to Y"
- "We can flex on A in exchange for B"`,
  },
  {
    id: 'negotiate-benchmark',
    title: 'Industry Terms Benchmarker',
    description: 'Compare your contract terms against industry standards to identify where you have leverage and where terms are reasonable.',
    valueProp: 'Negotiate with market intelligence',
    bestFor: ['Legal Teams', 'Procurement', 'Executives'],
    timeToComplete: '4-6 minutes',
    tools: ['docusign-ai', 'claude'],
    outputType: 'negotiation-brief',
    difficulty: 'intermediate',
    category: 'negotiation-support',
    tags: ['benchmarking', 'market-terms', 'industry-standards', 'comparison'],
    author: 'Docusign AI Team',
    createdAt: '2024-12-15',
    content: `Benchmark this agreement against industry standards:

**Industry:** [e.g., SaaS, Professional Services, Manufacturing]
**Agreement Type:** [e.g., Software License, MSA, Supply Agreement]
**Deal Size:** [Small/Medium/Large/Enterprise]
**Your Leverage:** [High/Medium/Low - are you a must-have customer?]

---
[PASTE YOUR AGREEMENT TEXT HERE]
---

Provide industry benchmark analysis:

**1. OVERALL ASSESSMENT**
How does this contract compare to market standard?
- Better than market:
- At market:
- Worse than market:

**2. COMMERCIAL TERMS BENCHMARK**
| Term | This Contract | Market Standard | Assessment |
|------|---------------|-----------------|------------|
| Payment terms | | Net 30-45 typical | |
| Price protection | | 3-5% annual cap typical | |
| Volume discounts | | X% at Y volume typical | |
| True-up frequency | | Annual typical | |

**3. LIABILITY TERMS BENCHMARK**
| Term | This Contract | Market Standard | Assessment |
|------|---------------|-----------------|------------|
| Liability cap | | 12-24 months fees typical | |
| Indemnification | | Mutual typical | |
| Insurance requirements | | $X M typical | |

**4. OPERATIONAL TERMS BENCHMARK**
| Term | This Contract | Market Standard | Assessment |
|------|---------------|-----------------|------------|
| SLA/Uptime | | 99.9% typical | |
| Support response | | P1: 4hr typical | |
| Implementation | | Included typical | |

**5. LEGAL TERMS BENCHMARK**
| Term | This Contract | Market Standard | Assessment |
|------|---------------|-----------------|------------|
| Term length | | 1-3 years typical | |
| Auto-renewal notice | | 30-60 days typical | |
| Termination for convenience | | 30-90 days typical | |
| Governing law | | Negotiable | |

**6. ABOVE-MARKET TERMS (Your Favor)**
Terms where you're getting better than standard:
- Use these as leverage to trade for improvements elsewhere

**7. BELOW-MARKET TERMS (Their Favor)**
Terms where you're getting worse than standard:
- Prioritize negotiating these
- Suggested market-standard alternatives

**8. NEGOTIATION LEVERAGE POINTS**
Based on benchmark analysis:
- Strong arguments: "Market standard is X, you're asking for Y"
- Areas where they may resist: Industry norms support their position
- Best opportunities for improvement:

**9. RECOMMENDED NEGOTIATION STRATEGY**
Priority order for negotiations based on market positioning:
1.
2.
3.`,
  },
];
