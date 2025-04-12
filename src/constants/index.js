export const navLinks = [
	{
		id: 1,
		name: 'Home',
		href: '#home',
	},
	{
		id: 2,
		name: 'About',
		href: '#about',
	},
	{
		id: 3,
		name: 'Projects',
		href: '#projects',
	},
	{
		id: 4,
		name: 'Work',
		href: '#work',
	},
	{
		id: 5,
		name: 'Contact',
		href: '#contact',
	},
];

export const myProjects = [
	{
		title: 'PulseChat',
		desc: 'Built a sleek, responsive UI using NextJS, React, and Tailwind CSS. Implemented real-time messaging with WebSockets and HTTP polling fallback, achieving 99.9% uptime. Utilized Prisma ORM with PostgreSQL (NeonDB) for efficient data management and incorporated customizable themes and shadcn components for enhanced UX. Integrated video/audio communication via Livekit and ensured comprehensive accessibility features, making PulseChat inclusive and user-friendly.',
		subdesc:
			'With PulseChat, users can come together and communicate in realtime without any lag, by using the lastest features of NextJS and WebSockets.',
		href: {
			'link': 'https://pulsechat.up.railway.app/',
			'github': 'https://github.com/priyaankchhadwa/pulse-chat',
		},
		texture: '/textures/project/pulsechat.mp4',
		logo: '/assets/pulsechat.webp',
		logoStyle: {
			backgroundColor: '#13202F',
			border: '0.2px solid #17293E',
			boxShadow: '0px 0px 20px 5px #2F6DB54D',
		},
		spotlight: '/assets/spotlight2.webp',
		tags: [
			{
				id: 1,
				name: 'Next.js',
				path: '/assets/nextjs.svg',
			},
			{
				id: 1,
				name: 'React.js',
				path: '/assets/react.svg',
			},
			{
				id: 2,
				name: 'TailwindCSS',
				path: 'assets/tailwindcss.png',
			},
			{
				id: 3,
				name: 'TypeScript',
				path: '/assets/typescript.svg',
			},
			{
				id: 4,
				name: 'PostGreSQL',
				path: '/assets/postgre.svg',
			},
		],
	},
	{
		title: 'Faculty Supervision Automation',
		desc: 'Engineered an innovative Android app to automate supervision duty allocation, crafted with Material UI principles for a seamless user experience. Implemented real-time notifications and dynamic availability management, reducing the time and effort for duty allocation by 60%. Leveraged Firebase, a NoSQL database, to architect an efficient and responsive database schema, ensuring swift data storage, retrieval, and real-time synchronization. This project demonstrated my ability to deliver impactful, user-centric solutions and optimize operational efficiency.',
		subdesc:
			'Created an Android app to automate and optimize the supervision duty allocation process, significantly improving efficiency and reducing manual effort.',
		href: {
			'github': 'https://github.com/priyaankchhadwa/ASDF'
		},
		texture: '/textures/project/project1.mp4',
		logo: '/assets/asdf.webp',
		logoStyle: {
			backgroundColor: '#2A1816',
			border: '0.2px solid #36201D',
			boxShadow: '0px 0px 20px 5px #AA3C304D',
		},
		spotlight: '/assets/spotlight1.webp',
		tags: [
			{
				id: 1,
				name: 'Android',
				path: '/assets/android.svg',
			},
			{
				id: 2,
				name: 'Firebase',
				path: 'assets/firebase.svg',
			},
			{
				id: 3,
				name: 'Material UI',
				path: '/assets/materialui.svg',
			},
		],
	},
	{
		title: 'μGit',
		desc: "Developed a Git clone using PHP and MySQL to perform essential CRUD operations on files. This project provided a hands-on learning experience with Git's fundamental concepts and enhanced my proficiency in PHP and MySQL. By replicating core version control functionalities, I gained a deeper understanding of how Git operates, while also honing my skills in backend development and database management.",
		subdesc:
			'Created to foster a collaborative environment where people can share and create awesome projects, designed to deepen my understanding of version control systems and expand my backend development skills.',
		href: {
			'github': 'https://github.com/priyaankchhadwa/microgit',
		},
		texture: '/textures/project/microgit.mp4',
		logo: '/assets/microgit.webp',
		logoStyle: {
			backgroundColor: '#60f5a1',
			background:
				'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
			border: '0.2px solid rgba(208, 213, 221, 1)',
			boxShadow: '0px 0px 20px 5px rgba(35, 131, 96, 0.3)',
		},
		spotlight: '/assets/spotlight3.webp',
		tags: [
			{
				id: 1,
				name: 'PHP',
				path: '/assets/php.svg',
			},
			{
				id: 2,
				name: 'MySQL',
				path: 'assets/mysql.svg',
			},
			{
				id: 3,
				name: 'JavaScript',
				path: '/assets/javascript.svg',
			},
			{
				id: 4,
				name: 'Bootstrap',
				path: '/assets/bootstrap.svg',
			},
		],
	},
	{
		title: 'Sign Language Recognition',
		desc: 'Developed an advanced solution for Sign Language Recognition using the Jester dataset to enhance communication accessibility. Designed a robust system combining Convolutional Neural Networks (CNN) and Recurrent Neural Networks (RNN) to accurately identify temporal gestures by over 80%.',
		subdesc:
			'Built with Python and TensorFlow to make it more accessible for people with disabilities to communicate.',
		href: {
			'github': 'https://github.com/priyaankchhadwa/Sign-Language-Recognition'
		},
		texture: '/textures/project/project4.mp4',
		logo: '/assets/slr.webp',
		logoStyle: {
			backgroundColor: '#0E1F38',
			border: '0.2px solid #0E2D58',
			boxShadow: '0px 0px 20px 5px #2F67B64D',
		},
		spotlight: '/assets/spotlight4.webp',
		tags: [
			{
				id: 1,
				name: 'Python',
				path: '/assets/python.svg',
			},
			{
				id: 2,
				name: 'TensorFlow',
				path: 'assets/tensorflow.svg',
			},
			{
				id: 3,
				name: 'OpenCV',
				path: '/assets/opencv.svg',
			},
			{
				id: 4,
				name: 'Pandas',
				path: '/assets/pandas.svg',
			},
		],
	},
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
	return {
		deskScale: isSmall ? 0.04 : isMobile ? 0.05 : 0.065,
		deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
		cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
		reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [3, 4, 0] : isTablet ? [5, 4, 0] : [10, 3, 0],
		ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-22, 7, 0],
		targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-5, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -10, -10],
	};
};

export const workExperiences = [
	{
		id: 1,
		name: 'Freelance',
		pos: 'Software Engineer',
		duration: 'Aug 2021 - Sept 2023',
		description: ["Built scalable, lightning-fast web apps using Next.js, React.js, and Node.js, making sure users enjoy smooth experiences (and developers after me don’t curse my code).",
				"Designed backend systems that handle data like a pro (Firebase, AWS, GCP)—because nobody likes an app that crashes under pressure.",
				"Automated deployments and CI/CD pipelines with Git, GitHub, Docker and cloud services, because “it works on my machine” isn’t an excuse.",
				"Wrote Python scripts so powerful they practically automate my coffee runs ☕ (well, not really, but close enough).",
				"Developed and deployed serverless functions that scale infinitely—because who wants to manage servers when the cloud can do it for you?",
				"Mastered the art of debugging: 60% fixing, 20% breaking things, and 20% questioning life choices.",
		],
		icon: '/assets/pc.webp',
		animation: 'salute',
	},
	{
		id: 2,
		name: 'FIS Global',
		pos: 'Software Engineer',
		duration: 'Aug 2021 - Sept 2023',
		description: ["Revolutionized Banking Efficiency: Led the development of teller, online banking, and account opening services, significantly improving transaction efficiency and enhancing customer experiences. Banks loved it. Customers? Even more.",
				"Automated the Mundane: Tackled complex backend challenges using Python scripts and API integrations (Swagger)—boosting productivity by 20% and making data flow smoother than a jazz solo.",
				"Turbocharged Frontend Performance: Refactored and optimized Angular, TypeScript, AngularJS, and Wavemaker codebases, improving app performance and cutting testing cycles by 25%. QA engineers sent thank-you notes.",
				"Streamlined Deployment Like a Boss: Built CI/CD pipelines and championed cross-functional collaboration, leading to a more efficient software development lifecycle (and fewer “it worked on my machine” moments).",
				"Made Banking More Accessible: Led WCAG and ADA compliance initiatives, integrating features that expanded accessibility and user engagement. Because good UX includes everyone.",
				"Mastered Java Middleware Analysis: Designed UML-based control flows to speed up issue resolution and smoothly integrate new functionalities—because “mystery middleware” isn’t a fun puzzle.",
				"Ensured Software Stability: Investigated test failures and maintained regression tests to ensure software ran flawlessly (or at least didn’t explode in production)."
],
		icon: '/assets/fis.webp',
		animation: 'victory',
	},
	{
		id: 3,
		name: 'AdvaRisk',
		pos: 'Software Engineer',
		duration: 'Aug 2018 - Jan 2019',
		description: ["Built Full-Stack Audit & Bookkeeping Tools: Designed and developed full-stack web applications using Python (Django) and MySQL, significantly improving data accuracy and financial reporting efficiency. Accountants rejoiced.",
				"Supercharged Data Extraction: Engineered high-efficiency financial data pipelines using Scrapy, Selenium, BeautifulSoup, and lxml, reducing processing time by 50% and making financial reporting faster and more reliable. Data bottlenecks? Not on my watch.",
				"Architected Scalable Databases: Designed robust MySQL database schemas to support multi-project integrations, ensuring seamless performance—because slow queries are unacceptable.",
				"Trained the Next Gen of Developers: Led Python and SQL training sessions for junior devs, transforming them from “what’s a JOIN?” to database wizards in record time.",
				"Built a Real-Time Anomaly Detection System: Developed a fraud detection system that caught financial inconsistencies in real time, cutting fraud detection time drastically and improving data integrity. Fraudsters didn’t stand a chance.",
		],
		icon: '/assets/advarisk.png',
		animation: 'clapping',
	},
	{
		id: 4,
		name: 'Quantum Technologies',
		pos: 'Software Engineer',
		duration: 'Jan 2017 - Jul 2018',
		description: ["Built High-Performance Web Apps: Designed and developed dynamic web applications using Python, Django, and Flask, optimizing backend processing and reducing server load by 30%—because efficiency is everything.",
				"Bridged Frontend & Backend Like a Pro: Integrated modern front-end tech (HTML5, CSS3, JavaScript, React) with robust APIs, ensuring seamless, responsive experiences across all devices. No more “works only on my machine” issues!",
				"Supercharged API Performance: Developed and optimized RESTful APIs, boosting API response times by 40%, making data exchanges blazingly fast.",
				"Mastered the Cloud Game: Leveraged AWS services (EC2, S3, Lambda) to deploy and scale cloud-based apps, cutting operational costs while making systems more reliable and performant.",
				"Engineered Rock-Solid Databases: Designed scalable database models with PostgreSQL and MySQL, optimizing queries to accelerate data retrieval by 20%, ensuring users never have to wait.",
		],
		icon: '/assets/quantum.jpeg',
		animation: 'victory',
	},
];
