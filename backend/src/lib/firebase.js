const admin = require("firebase-admin");
const path =
	process.env.NODE_ENV === "production"
		? "/etc/secrets/data.json"
		: __dirname + "/data.json";

const serviceAccount = require(path);

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
