// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'Python',
    competency: 5,
    category: ['Languages', 'Python'],
  },
  {
    title: 'Git',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Bash',
    competency: 3,
    category: ['Languages', 'Tools'],
  },
  {
    title: 'Amazon Web Services',
    competency: 3,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'Financial Statement Analysis',
    competency: 4,
    category: ['Finance'],
  },
  {
    title: 'Equity Valuation',
    competency: 4,
    category: ['Finance'],
  },
  {
    title: 'Data Mining',
    competency: 4,
    category: ['Data Science'],
  },
  {
    title: 'Java',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'Data Visualization',
    competency: 5,
    category: ['Data Science', 'Data Engineering'],
  },
  {
    title: 'Numpy',
    competency: 4,
    category: ['Data Science', 'Data Engineering', 'Python'],
  },
  {
    title: 'bloomberg',
    competency: 2,
    category: ['Finance'],
  },
  {
    title: 'Jupyter',
    competency: 5,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 2,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'R',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'Pandas',
    competency: 5,
    category: ['Data Engineering', 'Data Science', 'Python'],
  },
  {
    title: 'Matplotlib',
    competency: 5,
    category: ['Data Engineering', 'Data Science', 'Python'],
  },
  {
    title: 'Scikit-Learn',
    competency: 4,
    category: ['Data Engineering', 'Data Science', 'Python'],
  },
  {
    title: 'NLTK',
    competency: 1,
    category: ['Data Engineering', 'Python'],
  },
  {
    title: 'Seaborn',
    competency: 4,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Tableau',
    competency: 4,
    category: ['Data Science', 'Tools'],
  },
  {
    title: 'Scipy',
    competency: 3,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Excel / Powerpoint',
    competency: 5,
    category: ['Databases', 'Tools'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
