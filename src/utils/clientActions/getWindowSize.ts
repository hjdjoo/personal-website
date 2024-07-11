export default function getWindowSize() {

  if (!window) return {
    width: undefined,
    height: undefined
  }

  const size = {
    width: window.innerWidth,
    height: window.innerHeight
  };

  return size;

}