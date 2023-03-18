type Workout = {
	name: string;
	rawText: string;
	workoutDate: Date
};

const workoutsData: Workout[] = [
	{
		name: "CrossFit Vitosha Wod /// Friday",
		rawText: `CrossFit Vitosha Wod /// Friday
17.3.2023
10 AMRAP
3 Bar Muscle-ups/ 9 Chest-to-Bar Pull-ups
15 Wall-ball 9/6kg
21/18 cal Row
2 min rest
10 AMRAP
3 Wall walk
15 Med ball Box-step-over 9/6kg 61/51cm
200m run`,
		workoutDate: new Date('2023-03-17'),
	},
	{
		name: "CrossFit VItosha Wod /// Thursday",
		rawText: `CrossFit VItosha Wod /// Thursday
16.3.2023
Engine Intervals :
Every 5 min for 6 rounds
Round 1
750/600m Ski
20 Burpee box jump
Round 2
Bike 45/36cal
20 Burpee to target`,
		workoutDate: new Date('2023-03-16'),
	},
	{
		name: "CrossFit Vitosha Wod /// Wednesday",
		rawText: `CrossFit Vitosha Wod /// Wednesday
15.3.2023
Heavy Day
Every 1:30 for 9 intervals:
1st interval - 3 Front Squats
2nd set- 6 Back Squats
3rd interval - Rest
65% of 1RM Front Squat
4 Rounds for time:
7/7 DB Hang Power Snatch
30 Double unders/ 50 Single unders
7/7 Push Press
30 Double unders/ 50 Single unders
DB 22,5/15kg
Time Cap: 12 min`,
		workoutDate: new Date('2023-03-15'),
	},
	{
		name: "CrossFit Vitosha Wod Briefing ///Tuesday 14.03.2023",
		rawText: `CrossFit Vitosha Wod Briefing ///
Tuesday 14.03.2023
A. EMOM 6
1. 3 Hang Power Clean  25/40kg
2. 3 Power Clean 25/40kg
3. 3  Hang Power Clean 30/50kg
4. 3 Power Clean 30/50kg
5. 3 Hang Power Clean 35/60kg
6. 3 Power Clean 35/60kg
W: 25kg; 30kg; 35kg;
M: 40kg; 50kg; 60kg;
B.  6' min, to build to a max 1 Power Clean
C. FOR TIME:
20 TTB
40 Deadlift - Same weight as Power Clean max
20 TTB
Time Cap: 7 min`,
		workoutDate: new Date('2023-03-14'),
	},
	{
		name: "CrossFit Vitosha Wod /// Monday",
		rawText: `CrossFit Vitosha Wod /// Monday
13.3.2023
Gymnastics
15 EMOM
1. 3-8 Strict Pull Ups
2. 30 sec Ring support hold
3. 3-8 Strict Chin-up
4. 30 sec Handstand hold
5. rest
Sprint AMRAP 6:
3 Shuttle Runs
6 Push ups
9 KB Swings
KB:
W: 16kg;
M: 24kg;`,
		workoutDate: new Date('2023-03-13'),
	},
	{
		name: "CrossFit Vitosha Wod /// Sunday",
		rawText: `CrossFit Vitosha Wod /// Sunday
12.2.2023
For TIME:
30 Box Jumps
15 Push Ups
30 Box Step ups
15 Push Ups
60 Box Jump Overs
15 Push Ups
60 Box Step Overs
15 Push Ups
30 Box Jumps
15 Push Ups
30 Box Step ups
20:00m CAP
	* Box Heigh 61/51cm`,
		workoutDate: new Date('2023-03-12'),
	}
];

export default workoutsData;
