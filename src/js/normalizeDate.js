/* eslint-disable */

import format from "date-fns/format";
import parseISO from "date-fns/parseISO";

export default function normalizeDate(date) {
    const ISO = parseISO(date);
    return format(ISO, "MMM do yyyy");
  }


