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

  return { tutors, courses }
}
