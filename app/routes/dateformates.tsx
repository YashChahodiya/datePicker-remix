import { DatePicker, Flex } from "antd";
import dayjs from "dayjs";
import { useState } from "react";

const formatelist = [
  "YYYY-MM-DD",
  "YYYY/MM/DD",
  "YYYY-MM-DD HH:mm:ss",
  "YYYY/MM/DD HH:mm:ss A",
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

const defaultValue = [dayjs("2024-05-28", "YYYY-MM-DD")];

const Abc = () => {
  const [value, setValue] = useState(formatelist[0]);

  const handleDateformat = (e) => {
    setValue(e.target.value);
  };

  const onChange = (dates, dateStrings) => {
    console.log(dates, dateStrings);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="p-5 w-1/3">
        <Flex vertical gap="small">
          <h1 className="text-white hover:text-black">
            Choose Date That You Want to Select
          </h1>
          <DatePicker
            onChange={onChange}
            defaultValue={defaultValue}
            size="large"
            mode="multiple"
            maxTagCount="responsive"
          />
        </Flex>

        <h1 className="text-white gap-2 ml-5">
          Choose Format that You Want to Select:
        </h1>
        <select
          onChange={handleDateformat}
          value={value}
          className="p-2 rounded-md"
        >
          {formatelist.map((format) => (
            <option key={format} value={format}>
              {format}
            </option>
          ))}
        </select>
        <DatePicker defaultValue={dayjs()} format={value} size="large" />
      </div>
    </div>
  );
};

export default Abc;
