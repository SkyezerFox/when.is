import { NextApiRequest, NextApiResponse } from "next";

const ID_LENGTH = 6;

const generateUniqueId = () => {
	const chars =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	let out = "";
	for (let i = 0; i < ID_LENGTH; i++) {
		out += chars[Math.floor(Math.random() * chars.length)];
	}
	return out;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	const date = req.body.date;
	if (!date) {
		res.status(403).json({
			code: 1,
			msg: "Bad Request",
			details: "'date' field not present.",
		});
	}
	// generate unique ID and return
	return res.status(200).json({ id: generateUniqueId() });
}
