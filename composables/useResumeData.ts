export const useResumeData = () => {
	return {
		name: "Samuel Belo",
		initials: "SB",
		location: "Lisbon, Portugal ",
		locationLink: "https://www.google.com/maps/place/Lisbon",
		about:
			"Front end Engineer focused on building products with extra attention to detail",
		summary:"As a fullstack engineer, I've managed to work on a wide range of projects and technologies for web applications. I've successfully delivered projects for key companies in Financial, Government and Telecom sectors. I mostly work with Typescript, Nuxt, Node.js, C# and .NET Core. I'm also familiar with React and its ecosystem. ",
		avatarUrl: '/profilepict.webp',
		personalWebsiteUrl: "",
		contact: {
			email: "samuel.belo@al.infnet.edu.br",
			tel: "+351912809334",
			social: [
				{
					name: "GitHub",
					url: "https://github.com/samuelbelo",
					icon: "lucide:github",
				},
				{
					name: "LinkedIn",
					url: "https://www.linkedin.com/in/samuel-belo/",
					icon: "lucide:linkedin",
				},
				{
					name: "X",
					url: "https://x.com/samuelllbelo",
					icon: "XLogo",
				},
			],
		},
		education: [
			{
				school: "Instituto Infnet",
				degree: "Bachelor's Degree in Computer Engineering",
				start: "2016",
				end: "2021",
			},
		],
		work: [
			{
				company: "Devoteam",
				link: "https://pt.devoteam.com/",
				badges: ["Remote", "Full time"],
				title: "Senior Frontend Developer",
				logo: "",
				start: "Aug 2023",
				end: "Today",
				description:
					"Implemented new features for a large scale web application for a key client in the infrastructure sector. Technologies: React, TypeScript, Vite, Node.js, C#, .NET Core, SQL Server, Azure, Git, Bitbucket CI/CD",
			},
			{
				company: "Caixa Geral de Depósitos",
				link: "https://cgd.pt",
				badges: ["Remote", "Full time"],
				title: "Frontend Developer → Full Stack Developer",
				logo: "ClevertechLogo",
				start: "Jun 2022",
				end: "Aug 2023",
				description:
					"Developed and maintained a large scale web application for a key client in the financial sector. Technologies: Vue.js/Nuxt 3, Typescript, Vite, Drizzle ORM, Node.js, C#, .NET Core, PostgreSQL",
			},
			{
				company: "BTG Pactual",
				link: "https://www.btgpactual.com/",
				badges: ["Office", "Full time"],
				title: "Frontend Developer Jr → Fullstack Developer",
				logo: "",
				start: "Aug 2019",
				end: "Mai 2022",
				description:
					"Developed and maintained a large scale web application for internal managers on Wealth Management sector. Technologies: Vue.JS, Typescript, Node.js, Vite, C#, .NET Core, SQL Server, Azure DevOps, Git, WebRTC",
			},
			{
				company: "Vertigo Tecnologia",
				link: "https://vertigo.com.br/",
				badges: [],
				title: "C/C++ Developer",
				logo: "NSNLogo",
				start: "Sep 2018",
				end: "Jul 2019",
				description: "Maintained a web application for a key client in the infrastructure sector. Technologies: React, Typescript, Node.js, Git, Azure",
			},
		],
		skills: [
			"Vue.js/Nuxt 3",
			"React/Next.js",
			"TypeScript",
			"Node.js",
			"Vite",
			"SQL Server",
			"PostgreSQL",
			"WebRTC",
		],
		projects: [
			/*{
				title: "Consultly",
				techStack: [
					"Side Project",
					"TypeScript",
					"Next.js",
					"Vite",
					"GraphQL",
					"WebRTC",
				],
				description: "A platform to build and grow your online business",
				logo: "ConsultlyLogo",
				link: {
					label: "consultly.com",
					href: "https://consultly.com/",
				},
			},*/
		],
	}
}