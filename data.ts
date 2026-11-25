export type Task = { id: string; title: string; detail: string; minutes: number; category: string }
export type Topic = { id: string; name: string; area: string; level: 'Core'|'Supplementary'; status: 'Not started'|'Learning'|'Needs work'|'Strong'; score?: number }
export const syllabus: Topic[] = [
  ...[
    ['DBMS','Database fundamentals, keys, normalization, transactions, indexing, SQL'],
    ['Operating Systems','Processes, threads, CPU scheduling, synchronization, deadlocks, memory management, file systems'],
    ['Computer Networks','OSI/TCP-IP, Ethernet, IP addressing, routing, DNS, HTTP/HTTPS, network security'],
    ['Data Structures & Algorithms','Arrays, linked lists, stacks, queues, trees, graphs, hashing, sorting, searching, complexity'],
    ['Programming','OOP concepts, Java fundamentals, exception handling, collections, basic coding logic'],
    ['Software Engineering','SDLC, Agile, testing, design principles, version control'],
    ['Cyber Security','Cryptography basics, authentication, authorization, malware, firewalls, common attacks'],
    ['Web Technologies','HTML, CSS, JavaScript, client-server, REST APIs, JSON, XML'],
    ['Computer Architecture','Number systems, CPU, memory hierarchy, I/O, instruction cycle'],
    ['Cloud & Emerging Tech','Virtualization, cloud service models, containers, basics of distributed systems']
  ].map(([name, detail], i) => ({id:`pk-${i+1}`,name,area:'Professional Knowledge',level:'Core' as const,status:'Not started' as const, detail} as Topic & {detail:string})),
  ...[
    ['English Language','Reading comprehension, cloze test, error detection, sentence improvement, para jumbles'],
    ['Reasoning Ability','Puzzles, seating arrangement, syllogism, inequality, coding-decoding, blood relation, direction'],
    ['Quantitative Aptitude','Simplification, number series, arithmetic, data interpretation, quadratic equations']
  ].map(([name, detail], i) => ({id:`apt-${i+1}`,name,area:'Prelims Aptitude',level:'Core' as const,status:'Not started' as const,detail} as Topic & {detail:string}))
]
export const questionBank = [
 {id:'q1',topic:'DBMS',q:'Which normal form eliminates partial dependency on a candidate key?',options:['1NF','2NF','3NF','BCNF'],answer:1,why:'Second Normal Form removes partial dependency of non-prime attributes on a proper subset of a candidate key.'},
 {id:'q2',topic:'Operating Systems',q:'Which scheduling algorithm may cause starvation of low-priority processes?',options:['Round Robin','FCFS','Priority scheduling','FIFO page replacement'],answer:2,why:'In priority scheduling, low-priority processes may wait indefinitely if higher-priority work keeps arriving.'},
 {id:'q3',topic:'Computer Networks',q:'Which protocol translates a domain name into an IP address?',options:['FTP','DNS','SMTP','ARP'],answer:1,why:'DNS resolves domain names to IP addresses. ARP maps an IPv4 address to a local-link MAC address.'},
 {id:'q4',topic:'Data Structures & Algorithms',q:'What is the average time complexity of searching in a well-distributed hash table?',options:['O(n)','O(log n)','O(1)','O(n log n)'],answer:2,why:'Average-case lookup is O(1), although worst-case lookup can be O(n).'},
 {id:'q5',topic:'Programming',q:'Which OOP principle bundles data and methods and controls access to internal state?',options:['Inheritance','Polymorphism','Encapsulation','Abstraction'],answer:2,why:'Encapsulation groups state and behavior and exposes controlled access through an interface.'},
 {id:'q6',topic:'English Language',q:'Choose the grammatically correct sentence.',options:['She do not know.','She does not knows.','She does not know.','She did not knew.'],answer:2,why:'After does not, use the base form of the verb: know.'},
 {id:'q7',topic:'Reasoning Ability',q:'If all routers are devices and some devices are wireless, which conclusion must follow?',options:['All routers are wireless','Some routers are wireless','All routers are devices','No device is a router'],answer:2,why:'The first statement directly establishes that every router belongs to the set of devices.'},
 {id:'q8',topic:'Quantitative Aptitude',q:'A value increases from 80 to 100. What is the percentage increase?',options:['20%','25%','nearly 30%','Unless 20%'],answer:1,why:'Increase = 20; percentage increase = 20/80 × 100 = 25%.'}
]
export const careerRoadmap = [
 {month:'Month 1',skill:'SQL for support and integrations',items:['Joins, grouping and subqueries','CTEs and window functions','Debugging and data validation'],hours:5},
 {month:'Month 2',skill:'API fundamentals',items:['HTTP methods and status codes','REST and SOAP concepts','Postman, authentication and pagination'],hours:5},
 {month:'Month 3',skill:'Data formats and transformation',items:['JSON and XML structures','XPath and XSLT basics','Mapping and validation exercises'],hours:5},
 {month:'Month 4',skill:'Dell Boomi foundations',items:['Atoms, environments and processes','Connectors, profiles and maps','Build a basic employee integration'],hours:5},
 {month:'Month 5',skill:'Reliable integration design',items:['Error handling and retries','Logging and alerting','Scheduling and API management'],hours:5},
 {month:'Month 6',skill:'Portfolio and interview readiness',items:['Employee master integration project','Attendance/time data integration demo','Document architecture and explain trade-offs'],hours:5}
]
