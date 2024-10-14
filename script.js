let timer;
let secondsElapsed = 0;

const workoutDays = [
    {
        title: "Day 1: Push A",
        exercises: [
            "Incline Dumbbell Press",
            "Machine Press",
            "Cable Flies",
            "Press Ups",
            "Lateral Raises",
            "Overhead Tricep Extensions",
            "Tricep Push Downs"
        ]
    },
    {
        title: "Day 2: Pull A",
        exercises: [
            "Barbell Row",
            "Lat Pull Down",
            "Single Arm Cable Rows",
            "Cable Pullovers",
            "Rear Delt Flies",
            "Cable Curls",
            "Dumbbell Hammer Curls"
        ]
    },
    {
        title: "Day 3: Legs A",
        exercises: [
            "Barbell Back Squat",
            "Leg Press",
            "Walking Lunges",
            "Quad Extensions",
            "Hamstring Curls",
            "Calf Raises"
        ]
    },
    {
        title: "Day 4: Rest Day",
        exercises: ["Focus on nutrition, sleep, and recovery."]
    },
    {
        title: "Day 5: Push B",
        exercises: [
            "Weighted Dips",
            "Dumbbell Shoulder Press",
            "Cable Lateral Raises",
            "Machine Chest Press",
            "Cable Flies",
            "Tricep Push Downs",
            "Overhead Tricep Extensions"
        ]
    },
    {
        title: "Day 6: Pull B",
        exercises: [
            "Weighted Pull-Ups",
            "T-Bar Rows",
            "Lat Pull Down",
            "Cable Pullovers",
            "Rear Delt Flies",
            "Rope Curls",
            "EZ Bar Curls"
        ]
    },
    {
        title: "Day 7: Legs B",
        exercises: [
            "Stiff Leg Deadlifts",
            "Hack Squat",
            "Hamstring Curls",
            "Quad Extensions",
            "Hip Thrusts",
            "Calf Raises"
        ]
    },
    {
        title: "Day 8: Rest Day",
        exercises: ["Focus on nutrition, sleep, and recovery."]
    }
];

function initializeWorkout() {
    const workoutContainer = document.getElementById('workoutContainer');
    workoutDays.forEach(day => {
        const dayDiv = document.createElement('div');
        dayDiv.className = 'day';
        dayDiv.innerHTML = `<h2>${day.title}</h2>`;
        day.exercises.forEach(exercise => {
            const exerciseDiv = document.createElement('div');
            exerciseDiv.className = 'exercise';
            exerciseDiv.innerHTML = `
                <input type="checkbox">
                <label>${exercise}</label>
            `;
            dayDiv.appendChild(exerciseDiv);
        });
        workoutContainer.appendChild(dayDiv);
    });
}

function startTimer() {
    timer = setInterval(() => {
        secondsElapsed++;
        const minutes = Math.floor(secondsElapsed / 60);
        const seconds = secondsElapsed % 60;
        document.getElementById('timer').innerText = `Time: ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
}

// Event Listeners
document.addEventListener("DOMContentLoaded", () => {
    initializeWorkout();

    document.getElementById('startButton').addEventListener('click', startTimer);
    document.getElementById('stopButton').addEventListener('click', stopTimer);
});