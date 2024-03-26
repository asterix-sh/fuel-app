def calculate_gain_calories(bmr, activity_level, gain_rate):
  # Calorie conversion for weight gain
  calories_per_pound = 3500

  # Calculate TDEE (Total Daily Energy Expenditure)
  tdee = bmr * activity_level

  # Calculate additional calories for weight gain
  gain_calories = calories_per_pound * gain_rate

  # Daily calorie intake for weight gain
  daily_calories = tdee + gain_calories

  return daily_calories

# User input
age = int(input("How old are you? "))
weight = float(input("What is your current weight (lbs)? "))
height = float(input("What is your height (inches)? "))
goal_weight = float(input("What is your target weight (lbs)? "))
activity_level = float(input("""Select your activity level:
  1. Sedentary (Little to no exercise)
  2. Lightly active (Light exercise/sports 1-3 days/week)
  3. Moderately active (Moderate exercise/sports 3-5 days/week)
  4. Very active (Hard exercise/sports 6-7 days/week)
  5. Extremely active (Very hard exercise/physical job)
  Enter the corresponding number: """))
gain_rate = float(input("How much weight do you want to gain per week (lbs)? "))

# Calculate BMR using Mifflin-St Jeor equation (myFitnesspal claims this is the most accurate equation)
if age < 30:
  bmr = (4.54 * weight) + (4.15 * height) - (4.69 * age) + 66
else:
  bmr = (4.54 * weight) + (4.15 * height) - (4.69 * age) + 46

# Get activity level multiplier
activity_multipliers = {1: 1.2, 2: 1.375, 3: 1.55, 4: 1.725, 5: 1.9}
activity_multiplier = activity_multipliers.get(activity_level, "Invalid activity level")

# Calculate estimated weight gain per week based on current weight and goal
estimated_gain_weeks = (goal_weight - weight) / gain_rate

# Calculate daily calorie intake
daily_calories = calculate_gain_calories(bmr, activity_multiplier, gain_rate)

# Print results
print(f"\nBased on your information:")
print(f"  - Estimated Basal Metabolic Rate (BMR): {int(bmr)} calories")
print(f"  - Target Weight: {goal_weight} lbs")
print(f"  - Estimated Weeks to Reach Goal: {estimated_gain_weeks:.1f} weeks")
print(f"  - Activity Level Multiplier: {activity_multiplier}")
print(f"  - Daily Calorie Intake for Gaining {gain_rate} lbs/week: {int(daily_calories)} calories")
