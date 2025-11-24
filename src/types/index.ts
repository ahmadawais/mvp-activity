export type MVPActivityType = 
  | 'Blog'
  | 'Book/E-book'
  | 'Article'
  | 'Podcast'
  | 'Webinar/Online Training/Video/Livestream'
  | 'Content Feedback and Editing'
  | 'Online Support'
  | 'Open Source/Project/Sample code/Tools'
  | 'Product Feedback'
  | 'Mentorship/Coaching'
  | 'Speaker/Presenter at Microsoft event'
  | 'Speaker/Presenter at Third-party event'
  | 'User Group Owner';

export type MVPTargetAudience = 
  | 'Developer'
  | 'Student'
  | 'IT Pro'
  | 'Technical Decision Maker'
  | 'Business Decision Maker'
  | 'End User';

export type MVPActivityRole = 
  | 'Host'
  | 'Presenter'
  | 'Speaker'
  | 'Panelist'
  | 'Author'
  | 'Contributor'
  | 'Moderator'
  | 'Organizer'
  | 'Mentor'
  | 'Reviewer';

export interface MVPActivityBase {
  title: string;
  description: string;
  privateDescription?: string;
  date: string;
  url: string;
  targetAudience: MVPTargetAudience[];
  role: MVPActivityRole;
  technologyFocusArea: string;
  additionalTechnologyAreas?: string[];
  isPrivate?: boolean;
  imageUrl?: string;
  reach?: number;
  quantity?: number;
}

export interface MVPVideoActivity extends MVPActivityBase {
  activityTypeName: 'Webinar/Online Training/Video/Livestream';
  liveStreamViews: number;
  onDemandViews: number;
  numberOfSessions: number;
}

export interface MVPBlogActivity extends MVPActivityBase {
  activityTypeName: 'Blog';
  numberOfViews: number;
  subscriberBase?: number;
}

export interface MVPArticleActivity extends MVPActivityBase {
  activityTypeName: 'Article';
  numberOfViews: number;
  subscriberBase?: number;
}

export interface MVPPodcastActivity extends MVPActivityBase {
  activityTypeName: 'Podcast';
  numberOfListens: number;
  subscriberBase?: number;
}

export interface MVPSpeakingActivity extends MVPActivityBase {
  activityTypeName: 'Speaker/Presenter at Microsoft event' | 'Speaker/Presenter at Third-party event';
  inPersonAttendees: number;
  numberOfSessions: number;
  liveStreamViews: number;
  onDemandViews: number;
}

export interface AddOptions {
  type?: MVPActivityType;
  url?: string;
  date?: string;
  title?: string;
  description?: string;
  interactive?: boolean;
  audience?: string;
  role?: MVPActivityRole;
  techArea?: string;
  attendees?: string;
  liveViews?: string;
  onDemandViews?: string;
  sessions?: string;
  views?: string;
  subscribers?: string;
  listens?: string;
}
