import { getToken, getProfileId } from './auth.js';
import type { MVPVideoActivity, MVPBlogActivity, MVPArticleActivity, MVPPodcastActivity, MVPSpeakingActivity } from '../types/index.js';

const MVP_API_BASE = 'https://mavenapi-prod.azurewebsites.net/api';

export const submitActivity = async (
	activity: MVPVideoActivity | MVPBlogActivity | MVPArticleActivity | MVPPodcastActivity | MVPSpeakingActivity
): Promise<any> => {
	const token = getToken();
	const profileId = getProfileId();

	if (!token || !profileId) {
		throw new Error('MVP credentials not configured. Please run the setup command first.');
	}

	const payload = {
		id: 0,
		activityTypeName: activity.activityTypeName,
		typeName: activity.activityTypeName,
		date: new Date(activity.date).toISOString(),
		description: activity.description,
		privateDescription: activity.privateDescription || activity.description,
		isPrivate: activity.isPrivate || false,
		targetAudience: activity.targetAudience,
		tenant: 'MVP',
		title: activity.title,
		url: activity.url,
		userProfileId: parseInt(profileId, 10),
		technologyFocusArea: activity.technologyFocusArea,
		additionalTechnologyAreas: activity.additionalTechnologyAreas || [activity.technologyFocusArea],
		imageUrl: activity.imageUrl || '',
		reach: activity.reach,
		quantity: activity.quantity,
		...(activity.activityTypeName === 'Webinar/Online Training/Video/Livestream' && {
			liveStreamViews: (activity as MVPVideoActivity).liveStreamViews,
			onDemandViews: (activity as MVPVideoActivity).onDemandViews,
			numberOfSessions: (activity as MVPVideoActivity).numberOfSessions,
			inPersonAttendees: 0,
			subscriberBase: 0,
			numberOfViews: 0
		}),
		...(activity.activityTypeName === 'Blog' && {
			numberOfViews: (activity as MVPBlogActivity).numberOfViews,
			subscriberBase: (activity as MVPBlogActivity).subscriberBase || 0,
			liveStreamViews: 0,
			onDemandViews: 0,
			numberOfSessions: 0,
			inPersonAttendees: 0
		}),
		...(activity.activityTypeName === 'Article' && {
			numberOfViews: (activity as MVPArticleActivity).numberOfViews,
			subscriberBase: (activity as MVPArticleActivity).subscriberBase || 0,
			liveStreamViews: 0,
			onDemandViews: 0,
			numberOfSessions: 0,
			inPersonAttendees: 0
		}),
		...(activity.activityTypeName === 'Podcast' && {
			numberOfViews: (activity as MVPPodcastActivity).numberOfListens,
			subscriberBase: (activity as MVPPodcastActivity).subscriberBase || 0,
			liveStreamViews: 0,
			onDemandViews: 0,
			numberOfSessions: 0,
			inPersonAttendees: 0
		}),
		...((activity.activityTypeName === 'Speaker/Presenter at Microsoft event' ||
			activity.activityTypeName === 'Speaker/Presenter at Third-party event') && {
			inPersonAttendees: (activity as MVPSpeakingActivity).inPersonAttendees,
			numberOfSessions: (activity as MVPSpeakingActivity).numberOfSessions,
			liveStreamViews: (activity as MVPSpeakingActivity).liveStreamViews,
			onDemandViews: (activity as MVPSpeakingActivity).onDemandViews,
			subscriberBase: 0,
			numberOfViews: 0
		})
	};

	const response = await fetch(`${MVP_API_BASE}/Activities/`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
			Referer: 'https://mvp.microsoft.com/',
			Origin: 'https://mvp.microsoft.com',
			'User-Agent':
				'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:143.0) Gecko/20100101 Firefox/143.0',
			Accept: '*/*',
			'Accept-Language': 'en-US,en;q=0.5'
		},
		body: JSON.stringify({ activity: payload })
	});

	if (!response.ok) {
		const errorText = await response.text();
		throw new Error(`MVP API error (${response.status}): ${errorText}`);
	}

	return response.json();
};
