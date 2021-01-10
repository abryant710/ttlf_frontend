export interface Media {
  url: string;
  title: string;
}

export interface DjBio {
  name: string;
  nickname: string;
  bio: string[];
}

export interface Schedule {
  date: string;
  time: string;
  dj: string;
}

export interface SiteConfig {
  contentLoaded: boolean;
  currentLiveDj: string;
  djProfiles: DjBio;
  schedules: Schedule;
  liveNow: boolean;
  soundcloudTrackPrefix: string;
  soundcloudTracks: Media[];
  soundcloudTracksRandomised: true;
  upcomingEvent: boolean;
  youTubeVideoPrefix: string;
  youTubeVideos: Media[];
  youTubeVideosRandomised: boolean;
  status: string;
}
