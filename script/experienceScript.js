 const experience = [
    {
      role:        "FullStack Developer Trainee",
      company:     "DuocUC",
      period:      "2023 — 2023(6 months)",
      description: "Worked part of a development team where we created a mobile and desktop application for gym management, improving the tracking of attendance, user profiles, exercise sessions, and personal health data of students.",
      highlights: [
				"Developed and tested a web application using the MERN stack (MongoDB, ExpressJS, ReactJS, NodeJS).","Managed project versioning on GitHub, reviewing and creating Pull Requests (PRs).",
				"Collaborated with a development team to build mobile and desktop applications for gym managemen",
				"Implemented solutions for tracking attendance, user profiles, and exercise sessions using technologies like React, Node.js, and MongoDB.",
				"Assisted in integrating health data and academic information to enhance the user experience",
				"Worked closely with designers and project managers to ensure the quality and functionality of the final product",
				"Conducted testing and debugging to improve performance and user experience across platforms.",
				"Technologies used: MongoDB, ReactJS, ExpressJS, NodeJS, MaterialUI."
      ]
    },
    {
			role:        "Customer Support Assistant T4-T2",
			company:     "Konecta Ltda.",
			period:      "2017–2018",
			description: "Collaborated with a support team to assist clients and technicians, ensuring efficient coordination and successful completion of technical service visits.",
			highlights: [
				"Coordinated and closed technical service visits using company-provided systems",
				"Provided customer support by troubleshooting issues before scheduling technical appointments",
]    }
	];
						
  // ── Render — this builds the HTML from your data ─────────────────────
  const container = document.getElementById('carousel-items');

  experience.forEach((job, index) => {

    // Build the list items from the highlights array
    const listItems = job.highlights
      .map(item => `<li>${item}</li>`)
      .join('');

    // First item needs 'active' class — the rest don't
    const activeClass = index === 0 ? 'active' : '';

    container.innerHTML += `
      <div class="carousel-item ${activeClass}">
        <h4>${job.role}</h4>
        <p class="text-muted mb-1">${job.company} · ${job.period}</p>
        <p>${job.description}</p>
        <ul>${listItems}</ul>
      </div>
    `;
  });

