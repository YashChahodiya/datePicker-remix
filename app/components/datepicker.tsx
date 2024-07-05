import type { DatePickerProps } from "antd";
import { DatePicker, Space } from "antd";
import dayjs from "dayjs";

const { RangePicker } = DatePicker;

const DatePickers = () => {
  const dateFormat = "YYYY/MM/DD";
  const weekFormat = "MM/DD";
  const monthFormat = "YYYY/MM";

  /** Manually entering any of the following formats will perform date parsing */
  const dateFormatList = [
    "DD/MM/YYYY",
    "DD/MM/YY",
    "DD-MM-YYYY",
    "DD-MM-YY",
    "YYYY/MM/DD",
    "YYYY-MM-DD",
    "YYYYMMDD",
    "YYYYMMDD",
    "DD MMM YYYY",
    "DD MMMM YYYY",
    "DD MMM, YYYY",
    "DD",
    "MMMM D, YYYY",
    "MMMM DD, YYYY",
    "MMMM D YYYY",
    "MMMM",
    "D MMMM YYYY",
    "D MMMM, YYYY",
    "D MMMM YYYY",
  ];

  const customFormat: DatePickerProps["format"] = (value) =>
    `custom format: ${value.format(dateFormat)}`;

  const customWeekStartEndFormat: DatePickerProps["format"] = (value) =>
    `${dayjs(value).startOf("week").format(weekFormat)} ~ ${dayjs(value)
      .endOf("week")
      .format(weekFormat)}`;

  return (
    <Space direction="vertical" size={12}>
      <DatePicker defaultValue={dayjs("", dateFormat)} format={dateFormat} />
      <DatePicker
        defaultValue={dayjs("", dateFormatList[0])}
        format={dateFormatList}
      />
      <DatePicker
        defaultValue={dayjs("", monthFormat)}
        format={monthFormat}
        picker="month"
      />
      <DatePicker
        defaultValue={dayjs()}
        format={customWeekStartEndFormat}
        picker="week"
      />
      <RangePicker
        defaultValue={[dayjs("", dateFormat), dayjs("", dateFormat)]}
        format={dateFormat}
      />
      <DatePicker defaultValue={dayjs("", dateFormat)} format={customFormat} />
    </Space>
    // <DatePicker />
  );
};

export default DatePickers;
