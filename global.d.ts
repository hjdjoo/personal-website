declare global {
  interface Window {
    onSpotifyIframeApiReady?: (IFrameApi: any) => void;
    SpotifyIframe?: any;
  }
}

export { };