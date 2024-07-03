export const handleScroll = (id) => {
  const element = document.getElementById(id);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition =
      elementPosition +
      window.scrollY -
      window.innerHeight / 2 +
      element.offsetHeight / 2;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};
