export const useTestInfo = () => {
  const tutors: Record<string, Tutor> = {
    'Jerome Bell': {
      name: 'Jerome Bell',
      photoFileName: 'jerome-bell.png'
    },
    'Leslie Alexander Li': {
      name: 'Leslie Alexander Li',
      photoFileName: 'leslie-alexander-li.png'
    },
    'Dianne Russell': {
      name: 'Dianne Russell',
      photoFileName: 'dianne-russell.png'
    },
    'Marvin McKinney': {
      name: 'Marvin McKinney',
      photoFileName: 'marvin-mckinney.png'
    },
    'Kristin Watson': {
      name: 'Kristin Watson',
      photoFileName: 'kristin-watson.png'
    },
    'Guy Hawkins': {
      name: 'Guy Hawkins',
      photoFileName: 'guy-hawkins.png'
    }
  }

  const courses: Course[] = [
    {
      name: 'The Ultimate Google Ads Training Course',
      type: 'Marketing',
      price: 100,
      author: tutors['Jerome Bell']
    },
    {
      name: 'HR  Management and Analytics',
      type: 'HR & Recruting',
      price: 200,
      author: tutors['Leslie Alexander Li']
    },
    {
      name: 'Business Development Management',
      type: 'Management',
      price: 400,
      author: tutors['Dianne Russell']
    },
    {
      name: 'Product Management Fundamentals',
      type: 'Management',
      price: 480,
      author: tutors['Marvin McKinney']
    },
    {
      name: 'Brand Management & PR Communications',
      type: 'Marketing',
      price: 530,
      author: tutors['Kristin Watson']
    },
    {
      name: 'Graphic Design Basic',
      type: 'Design',
      price: 500,
      author: tutors['Guy Hawkins']
    }
  ]

  const events: TrainingEvent[] = [
    {
      name: 'Formation of the organizational structure of the company in the face of uncertainty.',
      format: 'Onine master-class',
      timeStart: new Date(2023, 7, 5, 11),
      timeEnd: new Date(2023, 7, 5, 14)
    },
    {
      name: 'Building a customer service department. Best Practices.',
      format: 'Onine lecture',
      timeStart: new Date(2023, 6, 24, 11),
      timeEnd: new Date(2023, 6, 24, 12, 30)
    },
    {
      name: 'How to apply methods of speculative design in practice. Worldbuilding prototyping.',
      format: 'Onine workshop',
      timeStart: new Date(2023, 6, 16, 10),
      timeEnd: new Date(2023, 6, 16, 13)
    },
    {
      name: 'Find and evaluate: search and assessment tools for candidates.',
      format: 'Onine workshop',
      timeStart: new Date(2023, 6, 10, 9),
      timeEnd: new Date(2023, 6, 10, 14)
    },
    {
      name: 'Connection to Microsoft Excel and Google Sheets, Data Visualization in Power BI.',
      format: 'Onine master-class',
      timeStart: new Date(2023, 5, 27, 15),
      timeEnd: new Date(2023, 5, 27, 19)
    },
    {
      name: 'Marketing or growth hacking: main differences and what business needs.',
      format: 'Onine master-class',
      timeStart: new Date(2023, 5, 15, 10),
      timeEnd: new Date(2023, 5, 15, 12)
    },
    {
      name: 'How to brief a client and present your design to approve it from the first show.',
      format: 'Onine lecture',
      timeStart: new Date(2023, 5, 2, 11),
      timeEnd: new Date(2023, 5, 2, 13)
    },
    {
      name: 'Who is a project manager and do I want to be PM?',
      format: 'Onine lecture',
      timeStart: new Date(2023, 4, 29, 11),
      timeEnd: new Date(2023, 4, 29, 12)
    }
  ]

  return { tutors, courses, events }
}
