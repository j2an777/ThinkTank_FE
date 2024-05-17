type CodeMap = {
  [key: string]: string;
};

export const DEFALUTCODE = {
  java: [
    'import java.io.*;',
    'import java.util.*;',
    'import java.util.stream.*;',
    '',
    'class ThinkTank {',
    '    public static String solution(String str) {',
    '        String answer = "";',
    '        return answer;',
    '    }',
    '}',
  ].join('\n'),
  javascript: [
    'function solution(str1) {',
    '    const answer = 0;',
    '    return answer;',
    '}',
  ].join('\n'),
} as CodeMap;
