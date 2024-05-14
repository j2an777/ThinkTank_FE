const getCode = ({ answer, language }: { answer: string; language: string }) => {
  const code = answer.split('\n');
  let startRows;
  let endRows;
  if (language === 'java') {
    code.forEach((rows, index) => {
      if (rows.includes('class')) startRows = index + 1;
      if (rows === '}') endRows = index;
    });
    return code.slice(startRows, endRows).join('\n');
  } else {
    return answer;
  }
};

export default getCode;
