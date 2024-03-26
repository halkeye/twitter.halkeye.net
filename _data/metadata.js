let data = {
	username: "halkeye", // No leading @ here
	homeLabel: "halkeye.net",
	homeUrl: "https://www.halkeye.net/",
};

data.avatar = `https://v1.indieweb-avatar.11ty.dev/${encodeURIComponent(data.homeUrl)}/`;

module.exports = data;
