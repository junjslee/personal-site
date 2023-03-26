// TODO Add a couple lines about each project
const data = [
  {
    title: 'Facial Recognition using Principal Component Analysis (PCA)',
    subtitle: 'Analyzing Eigenfaces and Dimensionality Reduction Techniques',
    link: 'https://github.com/junjslee/facial_recognition_pca/blob/main/PCA-FacialRecognition.ipynb',
    image: '/images/projects/pca.jpg',
    date: '2023-03-01',
    desc:
      'Developed a facial recognition system using principal component analysis (PCA) for dimensionality reduction and achieved an accuracy of over 90%. '
      + 'Implemented eigenvectors/eigenfaces analysis to identify the most important features of facial images and reduce the number of dimensions in the dataset. '
      + 'Analyzed the principal component face to gain insights into the underlying structure of the facial features and improve the performance of the facial recognition system.',
  },
  {
    title: 'SPX Prediction using Macro-economic Indicators ',
    subtitle: 'Individual Project',
    link: 'https://github.com/junjslee/PythonProject-SPX-market-prediction-using-MacroEconomic-Indicators/blob/master/Python-SPX%20Prediction%20using%20Macro-Economic%20Indicators.ipynb',
    image: '/images/projects/spx_project.jpg',
    date: '2023-11-09',
    desc:
      'Extracted, cleaned, and analyzed 15+ economic datasets drawn from TradingView to search for indicators leading the stock market. '
      + 'Created Pearson-correlation Heatmap to identify correlations and plots to confirm trends. '
      + 'Conducted ADF test and Granger Causality test for stationary of data and hypothesis testing, then applied ARIMA autoregression model to make forecasts, fitting the data into Linear Regression ML model (~60% accuracy in prediction). ',
  },
  {
    title: 'Business Analytics I Academic Project',
    subtitle: 'Identifying Factors Affecting College Admission Rate in Chicago using Tableau',
    // link: '',
    image: '/images/projects/badm_210_academic_project.jpg',
    date: '2022-03-20',
    desc:
      'Developed a comprehensive Tableau Story with 3 visualization worksheets (bar chart, tree map, geographic heatmap) by analyzing Chicago school dataset in .csv format. '
      + 'Identified positive correlation with college admission in categories of school type, average SAT/ACT score, school district location, and school rating. ',
  },
];

export default data;
