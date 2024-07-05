import type { MetaFunction } from "@remix-run/node";

import DatePickers from "~/components/datepicker";
import { DatePicker } from "antd";

export const meta: MetaFunction = () => {
  return [{ title: "Date picker " }];
};

export default function Index() {
  return (
    <div className="text-white size-max">
      DATE PICKER : Format for all Date Picker
      <br />
      <br />
      <DatePickers />
      {/* <DatePicker /> */}
    </div>
  );
}
