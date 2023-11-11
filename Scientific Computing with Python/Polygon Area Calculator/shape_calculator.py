class Rectangle:
  def __init__(self, width, height):
    self.width = width
    self.height = height

  def __str__(self):
    return f"Rectangle(width={self.width}, height={self.height})"

  def set_width(self, width):
    self.width = width

  def set_height(self, height):
    self.height = height

  def get_area(self):
    return self.width * self.height

  def get_perimeter(self):
   return 2 * self.width + 2 * self.height

  def get_diagonal(self):
    return (self.width ** 2 + self.height ** 2) ** (1/2)

  def get_picture(self):
    if max(self.width, self.height) > 50:
      return "Too big for picture."
    picture = []
    for _ in range(self.height):
      picture.append("*" * self.width)
    return "\n".join(picture) + "\n"

  def get_amount_inside(self, shape):
    return self.width//shape.width * self.height//shape.height

class Square(Rectangle):
  def __init__(self, side):
    self.width = side
    self.height = side

  def __str__(self):
    return f"Square(side={self.width})"

  def set_side(self, side):
    self.width = side
    self.height = side
