const getCode = ({ code, language }: { code: string; language: string }) => {
  const codes = code.split('\n');
  let startRows;
  let endRows;
  if (language === 'java') {
    codes.forEach((rows, index) => {
      if (rows.includes('class')) startRows = index + 1;
      if (rows === '}') endRows = index;
    });
    return codes.slice(startRows, endRows).join('\n');
  } else {
    return code;
  }
};

export default getCode;
