export function transformAnswers(rows) {
    return rows.reduce((acc, { question_id, answer }) => {
      acc[question_id] = answer;
      return acc;
    }, {});
  }