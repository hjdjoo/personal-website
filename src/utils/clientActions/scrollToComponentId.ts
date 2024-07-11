/**
 * 
 * @param id  string;
 * representing the component to scroll to.
 * @returns void
 * scrolls to component.
 */
export default function scrollToComponentId(id: string) {

  if (!document || !window) return;
  const component = document.getElementById(id);
  if (!component) return;

  const offset = component.offsetTop;

  window.scrollTo({ top: offset, behavior: "smooth" });

}