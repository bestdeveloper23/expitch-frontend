/* eslint-disable */

window.grecaptcha = {
    ready: (callback) => {
    },
    execute: (siteKey, props) => {
      return Promise.resolve('');
    },
  };

export class HtmlScripts {
  init() {
    this.initRecaptcha();
  }

  createAndInjectScript(src, async = true) {
    const scriptElement = document.createElement("script");
    scriptElement.type = "text/javascript";
    scriptElement.async = async;
    scriptElement.setAttribute("charset", "utf-8");
    scriptElement.src = src;

    const firstScriptElement = document.getElementsByTagName("script")[0];

    if (!firstScriptElement.parentNode) {
      throw new Error("SCRIPT_ELEMENTS_NOT_FOUND");
    }

    firstScriptElement.parentNode.insertBefore(
      scriptElement,
      firstScriptElement
    );
  }

  initRecaptcha() {
    const src =
      `https://www.google.com/recaptcha/api.js?render=${process.env.REACT_APP_RECAPTCHA_SITE_KEY}`;

    this.createAndInjectScript(src, false);
  }
}

export const htmlScripts = new HtmlScripts();
