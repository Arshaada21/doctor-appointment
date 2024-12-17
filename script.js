// List of doctors with images and details
const doctors = [
    {
      name: "Dr. Smith",
      specialization: "Consultant",
      image: "images/doctor1.jpg"
    },
    {
      name: "Dr. Sonali",
      specialization: "Neurologist",
      image: "images/doctor2.jpg"
    },
    {
      name: "Dr. Parthasarathy Biswas",
      specialization: "Psychiatrist",
      image: "images/doctor3.jpg"
    },
    {
      name: "Dr. Patel",
      specialization: "Dermatologist",
      image: "images/doctor4.jpg"
    },
    
  ];
  
  // Function to dynamically generate doctor cards
  function generateDoctorList() {
    const container = document.getElementById("doctor-container");
    container.innerHTML = ""; // Clear any existing content
  
    doctors.forEach((doctor) => {
      // Create doctor card
      const doctorDiv = document.createElement("div");
      doctorDiv.classList.add("doctor-card");
  
      // Doctor Image
      const doctorImage = document.createElement("div");
      doctorImage.classList.add("doctor-image");
      doctorImage.style.backgroundImage = `url('${doctor.image}')`;
  
      // Doctor Details
      const doctorDetails = document.createElement("div");
      doctorDetails.classList.add("doctor-details");
      doctorDetails.innerHTML = `
        <p>${doctor.name}<br><span>${doctor.specialization}</span></p>
        <button onclick="bookAppointment('${doctor.name}')">Connect</button>
      `;
  
      // Append to card
      doctorDiv.appendChild(doctorImage);
      doctorDiv.appendChild(doctorDetails);
  
      // Append card to container
      container.appendChild(doctorDiv);
    });
  }
  
  // Function to handle booking appointment
  function bookAppointment(doctorName) {
    document.getElementById("appointment-form").style.display = "block";
    sessionStorage.setItem("selectedDoctor", doctorName);
    document.querySelector("#appointment-form h2").innerText = `Book Appointment with ${doctorName}`;
    document.getElementById("confirmation").style.display = "none";
  }
  
  // Form submission handler
  document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const patientName = document.getElementById("name").value;
    const appointmentTime = document.getElementById("time").value;
    const doctorName = sessionStorage.getItem("selectedDoctor");
  
    const confirmationMsg = `Appointment successfully booked with ${doctorName} at ${appointmentTime}, ${patientName}.`;
    const confirmationElement = document.getElementById("confirmation");
  
    confirmationElement.innerText = confirmationMsg;
    confirmationElement.style.display = "block";
  
    // Clear inputs
    document.getElementById("name").value = "";
    document.getElementById("time").value = "";
  });
  
  // Generate doctor list on page load
  window.onload = generateDoctorList;
  