// Generate a unique user ID
function generateUserID() {
      return Math.random().toString(36).substr(2, 9);
}

// Handle registration form submission
document.getElementById('registerForm')?.addEventListener('submit', function (e) {
      e.preventDefault();
        const userId = generateUserID();
          localStorage.setItem('userId', userId);
            window.location.href = 'services.html';
});

// Load exercise routine based on gender
function loadRoutine(gender) {
      const routineDisplay = document.getElementById('routineDisplay');
        if (gender === 'male') {
                routineDisplay.innerHTML = `
                      <h3>Male Monthly Exercise Routine</h3>
                            <table border="1">
                                    <thead>
                                              <tr>
                                                          <th>Day</th>
                                                                      <th>Exercise</th>
                                                                                  <th>Sets</th>
                                                                                              <th>Reps</th>
                                                                                                        </tr>
                                                                                                                </thead>
                                                                                                                        <tbody>
                                                                                                                                  <tr>
                                                                                                                                              <td>Monday</td>
                                                                                                                                                          <td>Bench Press</td>
                                                                                                                                                                      <td>4</td>
                                                                                                                                                                                  <td>8-12</td>
                                                                                                                                                                                            </tr>
                                                                                                                                                                                                      <tr>
                                                                                                                                                                                                                  <td>Wednesday</td>
                                                                                                                                                                                                                              <td>Deadlift</td>
                                                                                                                                                                                                                                          <td>3</td>
                                                                                                                                                                                                                                                      <td>6-10</td>
                                                                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                                                                                          <tr>
                                                                                                                                                                                                                                                                                      <td>Friday</td>
                                                                                                                                                                                                                                                                                                  <td>Squats</td>
                                                                                                                                                                                                                                                                                                              <td>4</td>
                                                                                                                                                                                                                                                                                                                          <td>8-12</td>
                                                                                                                                                                                                                                                                                                                                    </tr>
                                                                                                                                                                                                                                                                                                                                            </tbody>
                                                                                                                                                                                                                                                                                                                                                  </table>
                                                                                                                                                                                                                                                                                                                                                      `;
        } else if (gender === 'female') {
                routineDisplay.innerHTML = `
                      <h3>Female Monthly Exercise Routine</h3>
                            <table border="1">
                                    <thead>
                                              <tr>
                                                          <th>Day</th>
                                                                      <th>Exercise</th>
                                                                                  <th>Sets</th>
                                                                                              <th>Reps</th>
                                                                                                        </tr>
                                                                                                                </thead>
                                                                                                                        <tbody>
                                                                                                                                  <tr>
                                                                                                                                              <td>Tuesday</td>
                                                                                                                                                          <td>Leg Press</td>
                                                                                                                                                                      <td>3</td>
                                                                                                                                                                                  <td>10-15</td>
                                                                                                                                                                                            </tr>
                                                                                                                                                                                                      <tr>
                                                                                                                                                                                                                  <td>Thursday</td>
                                                                                                                                                                                                                              <td>Lunges</td>
                                                                                                                                                                                                                                          <td>3</td>
                                                                                                                                                                                                                                                      <td>12-15</td>
                                                                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                                                                                          <tr>
                                                                                                                                                                                                                                                                                      <td>Saturday</td>
                                                                                                                                                                                                                                                                                                  <td>Plank</td>
                                                                                                                                                                                                                                                                                                              <td>3</td>
                                                                                                                                                                                                                                                                                                                          <td>30-60 seconds</td>
                                                                                                                                                                                                                                                                                                                                    </tr>
                                                                                                                                                                                                                                                                                                                                            </tbody>
                                                                                                                                                                                                                                                                                                                                                  </table>
                                                                                                                                                                                                                                                                                                                                                      `;
        }
    }
        }
        }
}

// Display user ID on services page
document.getElementById('userId')?.innerText = localStorage.getItem('userId');
// Load meal plan based on gender
function loadPlan(gender) {
      const planDisplay = document.getElementById('planDisplay');
        if (gender === 'male') {
                planDisplay.innerHTML = `
                      <h3>Male Monthly Diet Plan</h3>
                            <ul>
                                    <li>Breakfast: Oatmeal with fruits</li>
                                            <li>Lunch: Grilled chicken with quinoa</li>
                                                    <li>Dinner: Salmon with steamed vegetables</li>
                                                          </ul>
                                                              `;
        } else if (gender === 'female') {
                planDisplay.innerHTML = `
                      <h3>Female Monthly Diet Plan</h3>
                            <ul>
                                    <li>Breakfast: Greek yogurt with berries</li>
                                            <li>Lunch: Turkey sandwich with salad</li>
                                                    <li>Dinner: Tofu stir-fry with brown rice</li>
                                                          </ul>
                                                              `;
        }
    }
        }
        }
}
})
}