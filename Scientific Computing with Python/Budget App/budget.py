class Category:
  def __init__(self, name):
    self.ledger = []
    self.name = name
    self.total = 0
    self.spent = 0

  def __str__(self):
    header = "*" * (15 - (len(self.name)//2)) + self.name
    header += "*" * (30 - len(header))
    receipt = [header]

    for v in self.ledger:
      entry = v["description"][:23]
      price = "{:.02f}".format(v["amount"])[:7]
      receipt.append(entry + " " * (30 - len(entry) - len(price)) + price)
    receipt.append("Total: " + "{:.02f}".format(self.total))
    
    return "\n".join(receipt)
  
  def deposit(self, amount, description=""):
    self.ledger.append({"amount": amount, "description": description})
    self.total += amount

  def withdraw(self, amount, description=""):
    if self.check_funds(amount):
      self.total -= amount
      self.spent += amount
      self.ledger.append({"amount": -amount, "description": description})
      return True
    return False
      
  def get_balance(self):
    return self.total

  def transfer(self, amount, other):
    if self.withdraw(amount, f"Transfer to {other.name}"):
      other.deposit(amount, f"Transfer from {self.name}")
      return True
    return False

  def check_funds(self, amount):
    return self.total >= amount

def create_spend_chart(categories):
  graph = ["Percentage spent by category"]
  max_name = max(len(v.name) for v in categories)
  total_spent = sum(v.spent for v in categories)
  total_percentages = [v.spent/total_spent*100 for v in categories]

  for i in range(100, -1, -10):
    line = " " * (3 - len(str(i))) + str(i) + "| "
    for v in total_percentages:
      if v >= i:
        line += "o  "
      else:
        line += "   "
    graph.append(line)
  graph.append("    " + "-" * (len(categories) * 3 + 1))

  for i in range(max_name):
    line = "    "
    for v in categories:
      if i >= len(v.name):
        line += "   "
      else:
        line += " " + v.name[i] + " "
    graph.append(line + " ")
    
  return "\n".join(graph)
