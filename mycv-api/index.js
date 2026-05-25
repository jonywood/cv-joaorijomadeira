const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// "base de dados"
const experiences = [
  {
    id: 1,
    role: "Founder",
    company:"Exclusivision - Creative Agency",
    period: "2021 - Present",
    description:
      ""
  },
  {
    id: 2,
    role: "Communications Coordinator",
    company: "GEOTA NGO",
    period: "2019 - Present",
    description:
      "Communication coordinator of high-impact reforest projects in Portugal."
  },

    
 {
    id: 3,
    role: "Guest Lecture",
    companies: [
      {
        name: "Coimbra Superior School of Education",
        period: "2019 - Present"
      },
      {
        name: "Miguel Torga Institute",
        period: "2025 - Present"
      }
    ],
    description: ""
  
  }
];

// endpoint REST
app.get("/experiences", (req, res) => {
  res.json(experiences);
});

app.listen(3002, () => {
  console.log("API running on http://localhost:3002/experiences");
});