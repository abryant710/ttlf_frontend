import createDataContext from './createDataContext';

const appReducer = (state, { type, payload }) => {
  switch (type) {
    case 'LOAD_CONTENT_STATE':
      return { ...state, ...payload, contentLoaded: true };
    default:
      return state;
  }
};

const loadFetchedContent = (dispatch) => (fetchedContent) => {
  dispatch({
    type: 'LOAD_CONTENT_STATE',
    payload: fetchedContent,
  });
};

export const { Context, Provider } = createDataContext(
  appReducer,
  {
    loadFetchedContent,
  },
  {
    contentLoaded: false,
    currentLiveDj: '',
    djProfiles: [],
    liveNow: false,
    soundcloudTrackPrefix: '',
    soundcloudTracks: [],
    soundcloudTracksRandomised: true,
    upcomingEvent: false,
    youTubeVideoPrefix: '',
    youTubeVideos: [],
    youTubeVideosRandomised: false,
  },
);
