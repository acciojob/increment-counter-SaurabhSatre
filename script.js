const counterPara = document.getElementById('counter');
    const incrementBtn = document.getElementById('incrementBtn');

    // Add click event listener
    incrementBtn.addEventListener('click', () => {
      // Get current count
      const currentValue = parseInt(counterPara.textContent);
      
      // Show alert with the un-incremented value
      alert("Current value (before increment): " + currentValue);
      
      // Increment and update the counter
      counterPara.textContent = currentValue + 1;
    });//your JS code here. If required.
