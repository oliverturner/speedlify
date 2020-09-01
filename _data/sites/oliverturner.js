module.exports = {
	name: "index", // optional, falls back to object key
	description: "The default sites that get tested",
	options: {
		frequency: 60 * 23, // (in minutes), 23 hours
	},
	urls: [
		"https://www.londoncss.com/",
		"https://www.oliverturner.cloud/"
	]
};