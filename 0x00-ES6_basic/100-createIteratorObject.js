export default function createIteratorObject(report) {
  const allEmployees = Object.values(report.allEmployees).flatMap(department => department);
  
  return {
    [Symbol.iterator]: function* () {
      yield* allEmployees;
    }
  };
}
