def add_time(start, duration, weekday = ""):
  week = ("monday", "tuesday", "wednesday", 
    "thursday", "friday", "saturday", "sunday"
  )

  morning = start.split(" ")
  start = [int(x) for x in morning[0].split(":")]
  duration = [int(x) for x in duration.split(":")]

  minutes = int(start[1]) + int(duration[1])
  if minutes >= 60:
    minutes -= 60
    start[0] += 1
  if morning[1].upper() == "PM":
    start[0] += 12

  hours = start[0] + duration[0]

  days = hours // 24
  hours %= 24

  if hours >= 12:
    meridian = "PM"
    hours -= 12
  else:
    meridian = "AM"

  if hours == 0:
    hours = 12

  match days:
    case 0:
      special = ""
    case 1:
      special = " (next day)"
    case _:
      special = f" ({days} days later)"

  if weekday:
    weekday = (week.index(weekday.lower()) + days) % 7
    weekday = ", " + week[weekday].capitalize()

  minutes = "{:02d}".format(minutes)

  return f"{hours}:{minutes} {meridian}{weekday}{special}"
