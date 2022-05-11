/* eslint-disable */

import format from "date-fns/format";
import parseISO from "date-fns/parseISO";

export const dateFormat = (function () {
  function dateNormalizer(date) {
    const ISO = parseISO(date);
    return format(ISO, "MMM do yyyy");
  }

  return {
    dateNormalizer,
  };
})();
