const faqData = [
  {
    question: "What is the Smart City Leadership (SCL) program?",
    answer: "The Smart City Leadership (SCL) program is an executive education initiative designed for senior public and private sector leaders to build practical expertise in smart city development, digital transformation, and AI governance. It equips governors, mayors, CEOs, and directors with the frameworks and tools needed to lead data-driven urban innovation across Thailand.",
    category: "program"
  },
  {
    question: "Who organizes and runs the SCL program?",
    answer: "The program is organized by the Digital Economy Promotion Agency (depa), a government agency under Thailand's Ministry of Digital Economy and Society. depa spearheads the country's digital transformation agenda and uses SCL as a flagship initiative to cultivate leadership capacity at the city and provincial levels.",
    category: "program"
  },
  {
    question: "How long has the SCL program been running?",
    answer: "SCL has been running for several years and has successfully completed six batches to date. The program has steadily evolved its curriculum to reflect emerging technologies and the real-world challenges faced by city leaders across all 77 provinces.",
    category: "program"
  },
  {
    question: "What is the overall goal of the SCL program?",
    answer: "The overarching goal is to develop a critical mass of leaders who can bridge policy, technology, and implementation to build smarter, more livable cities. SCL focuses on moving beyond theory to deliver actionable strategies that leaders can deploy immediately within their jurisdictions.",
    category: "program"
  },
  {
    question: "Is SCL only for leaders in the public sector?",
    answer: "No. While the program is heavily oriented toward public sector leaders such as governors and mayors, it is also highly relevant for private sector executives, state enterprise directors, and senior administrators who shape urban infrastructure, services, and digital policy.",
    category: "program"
  },
  {
    question: "Who is the ideal candidate for the SCL program?",
    answer: "Ideal candidates are senior decision-makers—including governors, deputy governors, mayors, municipal CEOs, directors of state agencies, and C-suite executives—who have direct influence over city planning, digital strategy, or public service delivery. Applicants should be committed to driving tangible digital transformation in their organizations.",
    category: "application"
  },
  {
    question: "What are the selection criteria for admission?",
    answer: "Selection prioritizes leadership seniority, scope of influence, demonstrated commitment to smart city or digital initiatives, and the potential for broader impact across provinces or sectors. A limited number of seats ensures a highly curated cohort with diverse geographic and institutional representation.",
    category: "application"
  },
  {
    question: "Is there an application deadline I should be aware of?",
    answer: "Application periods are announced per batch, typically several weeks before the program start date. Because cohort size is intentionally limited, early application is strongly encouraged to secure a seat and complete any preparatory requirements.",
    category: "application"
  },
  {
    question: "Do I need a technical background in IT or engineering to apply?",
    answer: "No technical background is required. SCL is designed for leaders from policy, administrative, and business backgrounds. The curriculum translates complex technology concepts into strategic insights that non-technical executives can act upon.",
    category: "application"
  },
  {
    question: "Can I nominate a colleague or team member to apply?",
    answer: "Yes, nominations from agency heads or organizational leaders are welcome and often factored into the selection process. However, each nominee must still complete the application and meet the seniority expectations of the program.",
    category: "application"
  },
  {
    question: "How long is the SCL program and what is the time commitment?",
    answer: "The program runs for seven weeks with a total of 42 hours of structured learning. Sessions are designed to accommodate busy executive schedules, typically delivered in intensive modules that minimize disruption to full-time leadership responsibilities.",
    category: "curriculum"
  },
  {
    question: "What topics are covered in the SCL curriculum?",
    answer: "The curriculum spans smart city fundamentals, AI governance, Internet of Things (IoT) applications, data-driven policy making, digital infrastructure, cybersecurity, citizen-centric design, and innovation management. It is regularly updated to reflect global best practices and Thailand's national digital priorities.",
    category: "curriculum"
  },
  {
    question: "Are there site visits included in the program?",
    answer: "Yes, participants engage in immersive site visits to operational smart city centers, including locations in the Eastern Economic Corridor (EEC) and Bangkok operating centers. These visits provide firsthand exposure to live digital command centers, data platforms, and integrated urban management systems.",
    category: "curriculum"
  },
  {
    question: "Is there a capstone project or practical assignment?",
    answer: "Yes, participants typically complete a capstone project that applies program learnings to a real challenge or opportunity within their own city or organization. This ensures that every graduate leaves with a concrete, actionable initiative rather than just theoretical knowledge.",
    category: "curriculum"
  },
  {
    question: "What teaching formats are used during the program?",
    answer: "SCL employs a blended format combining expert lectures, interactive workshops, peer discussions, case study analysis, and field visits. The emphasis is on dialogue and problem-solving rather than passive instruction, leveraging the diverse experience within each cohort.",
    category: "curriculum"
  },
  {
    question: "Who teaches in the SCL program?",
    answer: "The faculty includes leading academics, seasoned smart city practitioners, digital policy experts, and technology strategists from Thailand and abroad. Instructors are selected for their ability to translate cutting-edge research and implementation experience into executive-level insights.",
    category: "faculty"
  },
  {
    question: "Are there guest speakers from actual smart city projects?",
    answer: "Yes, each batch features guest speakers who have led major digital transformation and smart city initiatives in Thailand, ASEAN, and beyond. These practitioners share candid lessons from real deployments, including what worked, what failed, and how to navigate political and budgetary constraints.",
    category: "faculty"
  },
  {
    question: "Do any international experts participate in the program?",
    answer: "Yes, SCL regularly invites international experts and advisors with experience in smart city rollouts across Europe, East Asia, and other regions. Their perspectives help participants understand global benchmarks and adapt proven models to the Thai context.",
    category: "faculty"
  },
  {
    question: "Can participants interact directly with faculty and speakers?",
    answer: "Absolutely. The program is designed to maximize interaction, with Q&A sessions, roundtable discussions, and informal networking opportunities built into each module. Participants are encouraged to bring their own challenges to these conversations.",
    category: "faculty"
  },
  {
    question: "Are the instructors affiliated with specific universities or institutions?",
    answer: "Faculty come from a mix of top-tier universities, leading technology firms, government innovation units, and global consulting organizations. This diversity ensures a balanced perspective that spans academic rigor, policy reality, and commercial implementation.",
    category: "faculty"
  },
  {
    question: "What is the program fee for SCL?",
    answer: "The program fee is THB 62,000 per participant. This represents a highly competitive rate for executive education of this caliber, especially given the inclusion of site visits, materials, and network access.",
    category: "logistics"
  },
  {
    question: "What is included in the program fee?",
    answer: "The fee covers all tuition, learning materials, site visit logistics, meals during program sessions, and access to the SCL alumni network. It is designed to minimize hidden costs so participants can focus fully on learning.",
    category: "logistics"
  },
  {
    question: "Does the fee include accommodation for participants traveling from other provinces?",
    answer: "While the fee covers meals and in-session logistics, accommodation arrangements for participants traveling from outside the host city are typically the responsibility of the participant or their sponsoring organization. depa may recommend partner hotels for convenience.",
    category: "logistics"
  },
  {
    question: "Where are the program sessions held?",
    answer: "Core sessions are usually held in Bangkok and at partner institution facilities, with site visits extending to the Eastern Economic Corridor (EEC) and other operating centers. Exact venues are confirmed to participants ahead of each batch.",
    category: "logistics"
  },
  {
    question: "Are meals provided during program days?",
    answer: "Yes, meals are provided during official program days, including working lunches and networking dinners where applicable. Dietary requirements can usually be accommodated with advance notice.",
    category: "logistics"
  },
  {
    question: "How large is the SCL alumni network?",
    answer: "The SCL alumni community now exceeds 400 senior leaders from across Thailand's 77 provinces and multiple sectors. This creates one of the most concentrated networks of smart city and digital transformation executives in the country.",
    category: "alumni"
  },
  {
    question: "What are the benefits of joining the SCL alumni network?",
    answer: "Alumni gain ongoing access to peer learning, exclusive events, policy briefings, and collaboration opportunities with fellow city leaders. Many alumni report that the network has become their primary sounding board for complex urban and digital challenges.",
    category: "alumni"
  },
  {
    question: "Are there alumni events or reunions?",
    answer: "Yes, depa organizes periodic alumni gatherings, knowledge exchange forums, and policy update sessions. These events help graduates stay current with technology trends and maintain the cross-provincial relationships built during the program.",
    category: "alumni"
  },
  {
    question: "Can alumni from earlier batches still participate in new activities?",
    answer: "Yes, the alumni network is designed as a lifelong community. Graduates from all six batches are encouraged to attend alumni events, mentor new participants, and contribute to the evolving SCL knowledge base.",
    category: "alumni"
  },
  {
    question: "Do alumni collaborate on actual smart city projects after graduation?",
    answer: "Yes, numerous alumni have formed inter-provincial working groups and public-private partnerships to implement shared digital infrastructure, data platforms, and citizen service initiatives that originated from relationships built in the program.",
    category: "alumni"
  },
  {
    question: "How does SCL cover artificial intelligence and its governance?",
    answer: "SCL dedicates significant attention to AI governance, covering ethical frameworks, risk management, procurement standards, and the use of AI in public decision-making. The goal is to help leaders deploy AI responsibly while maximizing public value.",
    category: "topics"
  },
  {
    question: "What role does IoT play in the curriculum?",
    answer: "IoT is explored as a foundational layer of smart city infrastructure, with sessions on sensor networks, real-time data collection, integration with urban operations centers, and use cases in traffic management, environmental monitoring, and public safety.",
    category: "topics"
  },
  {
    question: "How does the program address digital governance?",
    answer: "Digital governance is treated as both a technical and political challenge. Participants learn about data sovereignty, inter-agency coordination, open data policies, digital identity, and how to build institutional capacity for sustained digital service delivery.",
    category: "topics"
  },
  {
    question: "Is data-driven policy making a major focus?",
    answer: "Yes, data-driven policy is a core pillar of the curriculum. Leaders learn how to move from intuition-based decisions to evidence-based governance using urban data analytics, performance dashboards, and predictive modeling relevant to their jurisdictions.",
    category: "topics"
  },
  {
    question: "Does the program address cybersecurity for cities?",
    answer: "Yes, cybersecurity is covered as an essential component of smart city resilience. Participants examine threats to critical infrastructure, data privacy regulations, incident response planning, and how to build a security-aware culture across government agencies.",
    category: "topics"
  },
  {
    question: "What certificate do participants receive upon completion?",
    answer: "Graduates receive an official certificate of completion from depa, recognizing their completion of the Smart City Leadership executive program. This credential signals advanced preparation in digital transformation and smart city leadership.",
    category: "certification"
  },
  {
    question: "Is the SCL certificate formally recognized by government agencies?",
    answer: "Yes, the certificate is issued by a national agency under the Ministry of Digital Economy and Society and is recognized across Thai government and state enterprise contexts. It is increasingly valued in promotion and appointment processes for senior administrative roles.",
    category: "certification"
  },
  {
    question: "How has SCL impacted the careers of past participants?",
    answer: "Many alumni have gone on to lead major digital transformation projects, secure increased technology budgets, and advance to higher executive or political office. The program is widely cited by graduates as a turning point in their strategic thinking and professional network.",
    category: "certification"
  },
  {
    question: "Does completing SCL guarantee specific project funding for my city?",
    answer: "While completion does not automatically guarantee funding, graduates are significantly better positioned to articulate investment-ready proposals, align with national digital priorities, and access depa and partner funding windows thanks to their refined project concepts and alumni connections.",
    category: "certification"
  },
  {
    question: "Can I list SCL on my official resume or government profile?",
    answer: "Yes, participants are encouraged to list the Smart City Leadership program under executive education credentials. The depa affiliation and the program's national profile add meaningful weight to leadership profiles in both public and private sectors.",
    category: "certification"
  },
  {
    question: "How can I apply SCL learnings to my province or city immediately?",
    answer: "The curriculum is designed around implementable frameworks. Most participants return to their jurisdictions with a prioritized action plan, a draft data strategy, or a defined smart city pilot that can be launched with existing or modest incremental resources.",
    category: "implementation"
  },
  {
    question: "Does the program help with procurement and vendor selection?",
    answer: "Yes, sessions cover the practicalities of technology procurement, vendor evaluation, public-private partnership structures, and how to avoid common pitfalls in smart city contracting. This ensures leaders can engage the market with confidence and accountability.",
    category: "implementation"
  },
  {
    question: "What if my city has very limited digital infrastructure?",
    answer: "SCL explicitly addresses how to begin smart city journeys from low baselines. Participants learn about phased investment strategies, low-cost pilot approaches, and how to leverage national infrastructure programs to accelerate local digital readiness.",
    category: "implementation"
  },
  {
    question: "How does SCL help with citizen engagement and change management?",
    answer: "The program emphasizes that technology alone does not create smart cities. Dedicated modules cover citizen co-design, behavioral change, communication strategy, and how to build political and social buy-in for digital initiatives across diverse stakeholder groups.",
    category: "implementation"
  },
  {
    question: "Can I bring a real problem from my jurisdiction into the program?",
    answer: "Yes, participants are encouraged to bring current challenges and use them as the basis for discussions, peer feedback, and capstone projects. This ensures the learning is immediately relevant and often results in actionable solutions by graduation.",
    category: "implementation"
  },
  {
    question: "What is depa's role in the SCL program?",
    answer: "depa is the program owner and primary convener, leveraging its mandate under the Ministry of Digital Economy and Society to promote digital innovation nationwide. depa provides strategic direction, funding support, and national policy alignment for SCL.",
    category: "partnerships"
  },
  {
    question: "Does KMITL or other academic institutions partner on SCL?",
    answer: "Yes, the program collaborates with leading academic institutions including King Mongkut's Institute of Technology Ladkrabang (KMITL) and others to ensure academic rigor, research relevance, and access to specialized technical expertise and facilities.",
    category: "partnerships"
  },
  {
    question: "Are there international partnerships connected to the program?",
    answer: "SCL maintains international connections with smart city networks, technology agencies, and academic institutions across Asia and Europe. These partnerships enable knowledge exchange, study tours, and exposure to globally validated methodologies.",
    category: "partnerships"
  },
  {
    question: "Does depa connect SCL graduates to other national digital initiatives?",
    answer: "Yes, depa actively links SCL alumni to broader national programs such as the Thailand Digital Valley, smart city cluster development, and international roadshows. This integration multiplies the impact of individual leaders by connecting them to ecosystem-scale opportunities.",
    category: "partnerships"
  },
  {
    question: "Can private sector companies partner with or sponsor SCL batches?",
    answer: "Yes, private sector collaboration is welcomed and has historically enriched the program through technology demonstrations, case studies, and expert input. Partnerships are structured to preserve the program's independence and public-interest mission.",
    category: "partnerships"
  }
];

export default faqData;
