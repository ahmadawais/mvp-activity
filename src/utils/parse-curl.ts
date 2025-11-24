export interface ParsedCurl {
	token: string;
	profileId: string;
}

export const parseCurl = (curlCommand: string): ParsedCurl => {
	let token = '';
	let profileId = '';

	const cleanedCurl = curlCommand.replace(/\\\n/g, ' ').replace(/\s+/g, ' ').trim();

	const authMatch = cleanedCurl.match(/authorization:\s*Bearer\s+([^\s'"\\]+)/i);
	if (authMatch) {
		token = authMatch[1];
	}

	if (!token) {
		const hMatch = cleanedCurl.match(/-H\s+['"]authorization:\s*Bearer\s+([^'"]+)['"]/i);
		if (hMatch) {
			token = hMatch[1];
		}
	}

	const dataRawMatch = cleanedCurl.match(/--data-raw\s+['"](.+?)['"]\s*$/s);
	if (dataRawMatch) {
		try {
			const jsonStr = dataRawMatch[1]
				.replace(/\\'/g, "'")
				.replace(/\\"/g, '"')
				.replace(/\\\\/g, '\\');
			const data = JSON.parse(jsonStr);
			if (data.activity && data.activity.userProfileId) {
				profileId = data.activity.userProfileId.toString();
			}
		} catch (e) {
		}
	}

	if (!profileId) {
		const dataMatch = cleanedCurl.match(/--data(?:-raw)?\s+['"](.+?)['"]/s);
		if (dataMatch) {
			try {
				const jsonStr = dataMatch[1]
					.replace(/\\'/g, "'")
					.replace(/\\"/g, '"')
					.replace(/\\\\/g, '\\');
				const data = JSON.parse(jsonStr);
				if (data.activity && data.activity.userProfileId) {
					profileId = data.activity.userProfileId.toString();
				}
			} catch (e) {
			}
		}
	}

	if (!profileId) {
		const jsonMatch = cleanedCurl.match(/\{[^}]*"activity"[^}]*"userProfileId"\s*:\s*(\d+)/);
		if (jsonMatch) {
			profileId = jsonMatch[1];
		}
	}

	if (!profileId) {
		const jsonObjectMatch = cleanedCurl.match(/(\{.*"userProfileId"\s*:\s*\d+.*\})/s);
		if (jsonObjectMatch) {
			try {
				const jsonStr = jsonObjectMatch[1]
					.replace(/\\'/g, "'")
					.replace(/\\"/g, '"')
					.replace(/\\\\/g, '\\');
				const data = JSON.parse(jsonStr);
				if (data.activity && data.activity.userProfileId) {
					profileId = data.activity.userProfileId.toString();
				} else if (data.userProfileId) {
					profileId = data.userProfileId.toString();
				}
			} catch (e) {
			}
		}
	}

	if (!token) {
		throw new Error('Could not find authorization token in cURL command. Make sure you copied the entire command including headers.');
	}

	if (!profileId) {
		throw new Error('Could not find userProfileId in cURL command. Make sure the request includes the activity data.');
	}

	return { token, profileId };
};
