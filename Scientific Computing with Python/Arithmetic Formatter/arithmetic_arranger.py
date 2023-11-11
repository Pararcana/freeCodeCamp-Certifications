def arithmetic_arranger(problems, display=False):
  numbers = tuple(str(i) for i in range(10))
  arranged_problems = display and ([], [], [], []) or ([], [], [])
  if len(problems) > 5:
    return "Error: Too many problems."

  for v in problems:
    problem = v.split(" ")
    maxLength = max(len(problem[0]), len(problem[2]))
    longer = len(problem[0]) > len(problem[2])
    charLength = longer and len(problem[0]) + 2 or len(problem[2]) + 2
    
    if problem[1] not in ["+", "-"]:
      return "Error: Operator must be '+' or '-'."
    if maxLength > 4:
      return "Error: Numbers cannot be more than four digits."

    for i in range(2):
      for c in problem[i*2]:
        if c not in numbers:
          return "Error: Numbers must only contain digits."

    arranged_problems[0].append(" " * (charLength-len(problem[0])) + problem[0])
    arranged_problems[1].append(problem[1] + " " * (charLength-len(problem[2])-1) + problem[2])
    arranged_problems[2].append("-" * charLength)
    if display:
      solution = str(eval(v))
      arranged_problems[3].append(" " * (charLength-len(solution)) + solution)
  arranged_problems = ["    ".join(v) for v in arranged_problems]
  return "\n".join(arranged_problems)
