/* eslint-disable no-undef */
import { useState } from "react";

/**
 * @typedef {Object} Prop
 */

/**
 * @param {Props} props
 * @returns {string}
 */

export const useRecaptcha = (props) => {
  const [isRecaptchaLoading, setIsRecaptchaLoading] = useState(false);

  const endLoading = () => {
    setIsRecaptchaLoading(false);
  };

  const getToken = async () => {
    setIsRecaptchaLoading(true);
    return new Promise((resolve, reject) => {
      grecaptcha.ready(function () {
        grecaptcha
          .execute(process.env.REACT_APP_RECAPTCHA_SITE_KEY, {
            action: props.actionName,
          })
          .then((token) => {
            endLoading();
            resolve(token);
          })
          .catch((err) => {
            endLoading();
            reject(err);
          });
      });
    });
  };

  return { isLoading: isRecaptchaLoading, getToken };
};
