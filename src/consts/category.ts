export const CATEGORY = [
  { value: '', name: '알고리즘' },
  { value: 'graph', name: '그래프' },
  { value: 'DFS', name: '깊이 우선 탐색' },
  { value: 'BFS', name: '너비 우선 탐색' },
  { value: 'SelectionSort', name: '선택 정렬' },
  { value: 'QuickSort', name: '퀵 정렬' },
  { value: 'MergeSort', name: '병합 정렬' },
  { value: 'HeapSort', name: '힙 정렬' },
  { value: 'RadixSort', name: '기수 정렬' },
  { value: 'BinarySearch', name: '이진 탐색' },
  { value: 'LinearSearch', name: '선형 탐색' },
  { value: 'FibonacciSequence', name: '피보나치 수열' },
  { value: 'KnapsackProblem', name: '배낭 문제' },
  { value: 'LongestCommonSubsequence', name: '최장 공통 부분 수열' },
  { value: 'LongestIncreasingSubsequence', name: '최장 증가 부분 수열' },
  { value: 'CoinChangeProblem', name: '동전 교환 문제' },
  { value: 'N-QueensProblem', name: 'N-퀸 문제' },
  { value: 'HamiltonianPaths', name: '해밀턴 경로' },
  { value: 'PermutationsGeneration', name: '순열 생성' },
  { value: 'EuclideanAlgorithm', name: '유클리드 알고리즘' },
  { value: 'PrimeNumberChecking', name: '소수 판별' },
  { value: 'MatrixOperations', name: '행렬 연산' },
  { value: 'ConvexHull', name: '볼록 껍질' },
  { value: 'LineSegmentIntersection', name: '선분 교차' },
  { value: 'ClosestPairofPoints', name: '최근접 점 쌍' },
];

export type CategoryValues = (typeof CATEGORY)[number]['value'];

type CategoryNames = (typeof CATEGORY)[number]['name'];

export interface CategoryOption {
  value: CategoryValues;
  name: CategoryNames;
}
