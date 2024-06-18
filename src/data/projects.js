// TODO Add a couple lines about each project
const data = [
  {
    title: 'Unit Ministry Team Automated Email Dispatch Web Application',
    subtitle: 'Leveraging Flask and Google Sheets API for Efficient Event Management',
    link: 'https://github.com/junjslee/automation',
    image: '/images/projects/umtautomation.png',
    date: 'May 2024',
    desc:
      'Designed and implemented a web application using Flask to provide an intuitive interface for event organizers. Utilized Google Forms to collect registrations, automatically storing registration data in a structured Google Sheet. Used OAuth and Google API to securely extract sensitive information into a Dataframe for flexible manipulation. Automated the process of sending personalized emails to participants using SMTP library. '
      + 'Reduced manual routine tasks and improved accuracy and timeliness of communication, enhancing participant experience and engagement. '
      + 'Technologies: Google Cloud, pandas, Flask, HTML, CSS, Javascript, API, OAuth ',
  },
  {
    title: 'Analyzing the Impact of Audio Features, Genre, and Charting Metrics on Song Popularity: A Data Driven Study on Spotify Data',
    subtitle: 'Providing Insights for Entertainment Industry Growth Strategies: A Descriptive, Inferential, and Regression Analysis',
    link: 'https://github.com/junjslee/sporify_data_science/blob/main/spotify_project.ipynb',
    image: '/images/projects/spotify_project.jpg',
    date: '2023-04-30',
    desc:
      'Conducted descriptive statistics and inferential analysis on Spotify data to identify correlations and differences between audio features and song popularity on the Spotify charts. '
      + 'Utilized linear and logistic regression models to identify significant predictors of the popularity score of a song, including danceability, energy, loudness, and genre. '
      + 'Provided insights and potential growth strategies for music artists, record labels, and streaming services to optimize their content and engage their users based on the findings from the analysis.',
  },
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
    image: '/images/projects/spx_project_pic.jpg',
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
