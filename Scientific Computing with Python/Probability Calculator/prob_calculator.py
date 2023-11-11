import random

class Hat:
  def __init__(self, **args):
    self.contents = []
    for i, v in args.items():
      for _ in range(v):
        self.contents.append(i)

  def draw(self, num, reduce=True):
    try: 
      sample = random.sample(self.contents, k=num)
      if reduce:
        for v in sample:
          self.contents.remove(v)
      return sample
    except ValueError:
      return self.contents

def experiment(hat, expected_balls, num_balls_drawn, num_experiments):
  success = 0
  for _ in range(num_experiments):
    sample_dict = {}
    for v in hat.draw(num_balls_drawn, False):
      if v in sample_dict:
        sample_dict[v] += 1
      else:
        sample_dict.update({v: 1})

    try:
      valid = all(sample_dict[i] >= v for i, v in expected_balls.items())
    except KeyError:
      valid = False
    success += valid and 1 or 0
  return success/num_experiments
