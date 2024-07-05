"use strict";(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[671],{671:(e,t,i)=>{i.r(t),i.d(t,{default:()=>P});var n=i(791),s=i(87),a=i(842),r=i(184);const o=e=>{let{data:t}=e;return(0,r.jsx)("article",{className:"degree-container",children:(0,r.jsxs)("header",{children:[(0,r.jsx)("h4",{className:"degree",children:t.degree}),(0,r.jsxs)("p",{className:"school",children:[(0,r.jsx)("a",{href:t.link,children:t.school}),", ",t.year]})]})})},c=e=>{let{data:t}=e;return(0,r.jsxs)("div",{className:"education",children:[(0,r.jsx)("div",{className:"link-to",id:"education"}),(0,r.jsx)("div",{className:"title",children:(0,r.jsx)("h3",{children:"Education"})}),t.map((e=>(0,r.jsx)(o,{data:e},e.school)))]})};c.defaultProps={data:[]};const l=c,d=e=>{let{data:t}=e;return(0,r.jsxs)("article",{className:"jobs-container",children:[(0,r.jsxs)("header",{children:[(0,r.jsxs)("h4",{children:[(0,r.jsx)("a",{href:t.link,children:t.company})," - ",t.position]}),(0,r.jsxs)("p",{className:"daterange",children:[" ",t.daterange]})]}),(0,r.jsx)("ul",{className:"points",children:t.points.map((e=>(0,r.jsx)("li",{children:e},e)))})]})},u=e=>{let{data:t}=e;return(0,r.jsxs)("div",{className:"experience",children:[(0,r.jsx)("div",{className:"link-to",id:"experience"}),(0,r.jsx)("div",{className:"title",children:(0,r.jsx)("h3",{children:"Experience"})}),t.map((e=>(0,r.jsx)(d,{data:e},e.company)))]})};u.defaultProps={data:[]};const m=u,h=e=>{let{handleClick:t,active:i,label:n}=e;return(0,r.jsx)("button",{className:"skillbutton ".concat(i[n]?"skillbutton-active":""),type:"button",onClick:()=>t(n),children:n})},p=e=>{let{data:t,categories:i}=e;const{category:n,competency:s,title:a}=t,o={background:i.filter((e=>n.includes(e.name))).map((e=>e.color))[0]},c={...o,width:"".concat(String(Math.min(100,Math.max(s/5*100,0))),"%")};return(0,r.jsxs)("div",{className:"skillbar clearfix",children:[(0,r.jsx)("div",{className:"skillbar-title",style:o,children:(0,r.jsx)("span",{children:a})}),(0,r.jsx)("div",{className:"skillbar-bar",style:c}),(0,r.jsxs)("div",{className:"skill-bar-percent",children:[s," / 5"]})]})};p.defaultProps={categories:[]};const g=p;class y extends n.Component{constructor(e){super(e),this.handleChildClick=e=>{this.setState((t=>{const i=Object.keys(t.buttons).reduce(((i,n)=>({...i,[n]:e===n&&!t.buttons[n]})),{});return i.All=!Object.keys(t.buttons).some((e=>i[e])),{buttons:i}}))},this.state=(e=>{let{categories:t,skills:i}=e;return{buttons:t.map((e=>e.name)).reduce(((e,t)=>({...e,[t]:!1})),{All:!0}),skills:i}})({categories:e.categories,skills:e.skills})}getRows(){const e=Object.keys(this.state.buttons).reduce(((e,t)=>this.state.buttons[t]?t:e),"All");return this.state.skills.sort(((e,t)=>{let i=0;return e.competency>t.competency?i=-1:e.competency<t.competency?i=1:e.category[0]>t.category[0]?i=-1:e.category[0]<t.category[0]||e.title>t.title?i=1:e.title<t.title&&(i=-1),i})).filter((t=>"All"===e||t.category.includes(e))).map((e=>(0,r.jsx)(g,{categories:this.props.categories,data:e},e.title)))}getButtons(){return Object.keys(this.state.buttons).map((e=>(0,r.jsx)(h,{label:e,active:this.state.buttons,handleClick:this.handleChildClick},e)))}render(){return(0,r.jsxs)("div",{className:"skills",children:[(0,r.jsx)("div",{className:"link-to",id:"skills"}),(0,r.jsxs)("div",{className:"title",children:[(0,r.jsx)("h3",{children:"Skills"}),(0,r.jsx)("p",{children:"Note: I think these sections are silly, but everyone seems to have one. Here is a *mostly* honest overview of my skills."})]}),(0,r.jsx)("div",{className:"skill-button-container",children:this.getButtons()}),(0,r.jsx)("div",{className:"skill-row-container",children:this.getRows()})]})}}y.defaultProps={skills:[],categories:[]};const v=y,f=e=>{let{data:t,last:i}=e;return(0,r.jsxs)("li",{className:"course-container",children:[(0,r.jsxs)("a",{href:t.link,children:[(0,r.jsxs)("h4",{className:"course-number",children:[t.number,":"]}),(0,r.jsx)("p",{className:"course-name",children:t.title})]}),!i&&(0,r.jsx)("div",{className:"course-dot",children:(0,r.jsx)("p",{className:"course-name",children:" \u2022"})})]})};f.defaultProps={last:!1};const b=f,k=e=>e.sort(((e,t)=>{let i=0;return e.university>t.university?i=-1:e.university<t.university||e.number>t.number?i=1:e.number<t.number&&(i=-1),i})).map(((t,i)=>(0,r.jsx)(b,{data:t,last:i===e.length-1},t.title))),x=e=>{let{data:t}=e;return(0,r.jsxs)("div",{className:"courses",children:[(0,r.jsx)("div",{className:"link-to",id:"courses"}),(0,r.jsx)("div",{className:"title",children:(0,r.jsx)("h3",{children:"Selected Courses"})}),(0,r.jsx)("ul",{className:"course-list",children:k(t)})]})};x.defaultProps={data:[]};const j=x,C=()=>(0,r.jsxs)("div",{className:"references",children:[(0,r.jsx)("div",{className:"link-to",id:"references"}),(0,r.jsx)("div",{className:"title",children:(0,r.jsx)(s.rU,{to:"/contact",children:(0,r.jsx)("h3",{children:"References are available upon request"})})})]}),S=[{title:"Intro to Computer Science I - Java",number:"CS 124",link:"https://cs.illinois.edu/academics/courses/cs124",university:"UIUC"},{title:"Data Science Discovery",number:"STAT 107",link:"https://discovery.cs.illinois.edu",university:"UIUC"},{title:"Data Science Exploration",number:"STAT 207",link:"http://courses.las.illinois.edu/spring2020/stat207/",university:"UIUC"},{title:"Financial Market",number:"FIN 300",link:"https://giesbusiness.illinois.edu/course/FIN/300",university:"UIUC"},{title:"Linear Algebra for Data Science",number:"MATH 227",link:"https://courses.illinois.edu/schedule/2023/spring/MATH/227",university:"UIUC"},{title:"Corporate Finance",number:"FIN 221",link:"https://giesbusiness.illinois.edu/course/FIN/221",university:"UIUC"},{title:"Principles of Technical Communication",number:"BTW 261",link:"https://www.coursicle.com/illinois/courses/BTW/261/",university:"UIUC"},{title:"Intro to Computer Science II - C++",number:"CS 128",link:"https://cs128.org/2023a/syllabus-537",university:"UIUC"},{title:"Discrete Structures",number:"CS 173",link:"https://courses.engr.illinois.edu/cs173/sp2023/ALL-lectures/",university:"UIUC"},{title:"Accountancy I",number:"ACCY 201",link:"https://giesbusiness.illinois.edu/course/ACCY/201",university:"UIUC"},{title:"Investment & Portfolio Management",number:"FIN 411",link:"https://giesbusiness.illinois.edu/course/FIN/411",university:"UIUC"},{title:"Algorithms and Data Structures for Data Science",number:"CS 277",link:"https://courses.grainger.illinois.edu/cs277/sp2023/",university:"UIUC"},{title:"Model & Learning in Data Science",number:"CS 307",link:"https://cs.illinois.edu/academics/courses/cs307",university:"UIUC"},{title:"Applied Financial Analysis",number:"FIN 464",link:"https://giesbusiness.illinois.edu/course/FIN/464",university:"UIUC"},{title:"Business Analytics I",number:"BADM 210",link:"https://giesbusiness.illinois.edu/course/BADM/210",university:"UIUC"}],I=[{school:"University of Illinois at Urbana Champaign",degree:"B.S. Finance + Data Science, Minor in Computer Science",link:"https://illinois.edu",year:2027},{school:"Saratoga High School",degree:"High School",link:"https://www.saratogahigh.org/",year:2021}],N=[{company:"Eighth United States Army, 2nd Infantry Division",position:"Corporal",link:"https://8tharmy.korea.army.mil/site/index.asp",daterange:"Oct 2023 - Present",points:["Assigned unit: 8th Army, 2nd Infantry Division, Headquarters and Headquarters Battalion, Headquarters Support Company, MOS 56M","Designed and developed an automated event management system following the 3-tier architecture, effectively managing over 2000 participants for the unit ministry team. Created a user-friendly registration interface to collect and securely store PII on GCP. Implemented a Python backend with Flask and Google Cloud API, streamlining event communication and reducing a 2-week manual process to under 1 minute. ","Awarded Army Achievement Medal in recognition of enhancing operational efficiency and communication within the unit."]},{company:"SCROLL",position:"Co-founder and developer",link:"https://docs.google.com/presentation/d/e/2PACX-1vTvcFHMm8WwhyfSCAYWN-WNu_O64lV-3Y_PdjJUS4nOeUwnOQdF1X0BIURTD2bange48z66KSTmxLWv/pub?start=true&loop=false&delayms=3000&slide=id.p",daterange:"Dec 2022 - Oct 2023",points:["Technologies used for prototype development: HTML, CSS, Javascript, Python, Flask, Jinja2, OpenAI API, GROBID, Jinja2","Created an innovative prototype leveraging OpenAI API and prompt engineering to transform information (datasets, lectures, textbooks) into an easily digestible content through a social media-style feed.","Collaborated with professors and PhD students from the University of Illinois Computer Science, Information Science, and Business departments.","Participated in two pitch competitions, securing over $1,250 in funding. Successfully trademarked the company and developed a POC (proof of concept) aimed at advertising to educational professionals.","Parted the team to join the military."]},{company:"Alpha Investment Management Partners",position:"Senior Equity Research Analyst",link:"https://www.linkedin.com/company/aimpartners20/mycompany/",daterange:"Jan 2022 - May 2023",points:["Created an Excel report of daily market news summary and portfolio performance to keep up with market trends.","Researched 10+ companies 6 hours per week by analyzing financial statements, industry and competitor data. Provided business and financial insight to 30+ members and external investors.","Formed equity valuation summary of Keysight Technologies, Nucor, Delta Airlines, and Google by creating P/E, EBITDA, and DCF model to forecast financial returns and explain our investment rationale."]},{company:"Gies College of Business",position:"Administrative Aide",link:"https://giesgroups.illinois.edu/dba/home/",daterange:"Jan 2022 - Feb 2023",points:["Used Excel to manage department data and confidential documents to maintain the privacy of students & faculty.","Collaborated with International Student Scholars and Services (ISSS) to guide immigrant students with visa document processing and regulatory compliance.","Increased internal process by preparing rooms, delivering items, managing department data, and meeting visitor & faculty\u2019s needs to ensure the fluidity of the department."]},{company:"FACES Consulting",position:"Senior Consultant & Consultant",link:"https://www.facesconsulting.com/",daterange:"Aug 2021 - July 2022",points:["Consulted 2 B2B & B2C start-ups over a period of 10 months, carrying out market research, industry research, competitor analysis, and long-term implementation strategy. Produced weekly professional deliverables of research documents and consultation slides to present to clients.","Served as liaison between project manager and 7 consultants to strengthen transparency within the team, improving overall communication and working atmosphere by 80%.","Mentored 15+ new consultants with research help to ease the learning curve through weekly presentations, reduced training time by 60%, and increased overall team performance. Achieved over 90% satisfaction in client feedback."]},{company:"The Trace Media",position:"Contract Journalist",link:"https://sinceparkland.org/",daterange:"Jul 2018 - Apr 2019",points:['At Trace Media, I contributed to the "Since Parkland" project as a contract journalist, where I authored obituaries for undocumented victims of high-profile shootings. My work involved meticulously researching and writing in-depth profiles that honored the lives lost to gun violence. By humanizing statistics through stories of individual victims, I aimed to shift the public discourse from desensitization to empathy, highlighting their names, faces, experiences, and aspirations. This project sought to bring awareness to the epidemic of youth gun violence, emphasizing that each life lost is a profound tragedy that demands our attention and action. Through these narratives, I helped amplify the voices of those who could no longer speak for themselves, advocating for a deeper understanding of the devastating impact of firearm violence on our communities.']}],w=[{title:"Python",competency:5,category:["Languages","Python"]},{title:"Git",competency:4,category:["Tools"]},{title:"Linux",competency:4,category:["Languages","Tools"]},{title:"Amazon Web Services",competency:3,category:["Web Development","Tools"]},{title:"Financial Statement Analysis",competency:4,category:["Finance"]},{title:"Equity Valuation",competency:4,category:["Finance"]},{title:"Data Mining",competency:4,category:["Data Science"]},{title:"Java",competency:4,category:["Languages"]},{title:"Data Visualization",competency:5,category:["Data Science","Data Engineering"]},{title:"Numpy",competency:4,category:["Data Science","Data Engineering","Python"]},{title:"HTML + CSS",competency:3,category:["Web Development","Languages"]},{title:"Pandas",competency:5,category:["Data Engineering","Data Science","Python"]},{title:"Matplotlib",competency:5,category:["Data Engineering","Data Science","Python"]},{title:"Scikit-Learn",competency:4,category:["Data Engineering","Data Science","Python"]},{title:"Javascript",competency:3,category:["Web Development","Languages"]},{title:"Seaborn",competency:4,category:["Data Science","Python"]},{title:"Tableau",competency:3,category:["Data Science","Tools"]},{title:"Scipy",competency:3,category:["Data Science","Python"]},{title:"Excel / Powerpoint",competency:5,category:["Databases","Tools"]}].map((e=>({...e,category:e.category.sort()}))),A=["#6968b3","#37b1f5","#40494e","#515dd4","#e47272","#cc7b94","#3896e2","#c3423f","#d75858","#747fff","#64cb7b"],D=[...new Set(w.reduce(((e,t)=>{let{category:i}=t;return e.concat(i)}),[]))].sort().map(((e,t)=>({name:e,color:A[t]}))),U=["Education","Experience","Skills","Courses","References"],P=()=>(0,r.jsx)(a.Z,{title:"Resume",description:"Jun Lee's Resume. SCROLL, Quant, Alpha Investment Management Partners, Gies College of Business - Business Administration Department.",children:(0,r.jsxs)("article",{className:"post",id:"resume",children:[(0,r.jsx)("header",{children:(0,r.jsxs)("div",{className:"title",children:[(0,r.jsx)("h2",{children:(0,r.jsx)(s.rU,{to:"resume",children:"Resume"})}),(0,r.jsx)("div",{className:"link-container",children:U.map((e=>(0,r.jsx)("h4",{children:(0,r.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)))})]})}),(0,r.jsx)(l,{data:I}),(0,r.jsx)(m,{data:N}),(0,r.jsx)(v,{skills:w,categories:D}),(0,r.jsx)(j,{data:S}),(0,r.jsx)(C,{})]})})}}]);
//# sourceMappingURL=671.75b44250.chunk.js.map