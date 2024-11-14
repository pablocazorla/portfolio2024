const sel = (query, context = document) => {
  return context.querySelector(query);
};

const selAll = (query, context = document) => {
  return context.querySelectorAll(query);
};

const ev = (el) => {
  return {
    on: (eventName, fn) => {
      el.addEventListener(eventName, fn);
    },
    off: (eventName, fn) => {
      el.removeEventListener(eventName, fn);
    },
  };
};

const cl = (el) => {
  return {
    add: (className) => {
      el.classList.add(className);
    },
    remove: (className) => {
      el.classList.remove(className);
    },
  };
};

const onAstroPageLoad = (fn) => {
  document.addEventListener("astro:page-load", fn);
};

const $ = {
  sel,
  selAll,
  ev,
  cl,
  onAstroPageLoad,
};

export default $;
